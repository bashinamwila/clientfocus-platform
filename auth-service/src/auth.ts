import { betterAuth } from "better-auth";
import {
  organization,
  jwt,
  bearer,
  admin,
} from "better-auth/plugins";
import { oauthProvider } from "@better-auth/oauth-provider";
import { createAccessControl, role } from "better-auth/plugins/access";
import Database from "better-sqlite3";
import nodemailer from "nodemailer";

// ---------------------------------------------------------------------------
// SMTP transport — PaperCut SMTP on localhost:25 (no auth, no TLS)
// ---------------------------------------------------------------------------
const smtpTransport = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "127.0.0.1",
  port: parseInt(process.env.SMTP_PORT || "25", 10),
  secure: false,
  tls: { rejectUnauthorized: false },
});

async function sendEmail(to: string, subject: string, html: string) {
  const from = process.env.SMTP_FROM || "noreply@clientfocus.co";
  console.log(`[Auth] Sending email to ${to}: ${subject}`);
  await smtpTransport.sendMail({ from, to, subject, html });
  console.log(`[Auth] Email sent to ${to}`);
}

// ---------------------------------------------------------------------------
// Access Control — permission statements for the application
// ---------------------------------------------------------------------------
const statement = {
  user: ["create", "read", "update", "delete"],
  financials: ["read", "generate", "approve", "delete"],
  settings: ["read", "update"],
  documents: ["upload", "read", "delete"],
} as const;

const ac = createAccessControl(statement);

const adminRole = ac.newRole({
  user: ["create", "read", "update", "delete"],
  financials: ["read", "generate", "approve", "delete"],
  settings: ["read", "update"],
  documents: ["upload", "read", "delete"],
});

const accountantRole = ac.newRole({
  user: ["read"],
  financials: ["read", "generate"],
  settings: ["read"],
  documents: ["upload", "read"],
});

const viewerRole = ac.newRole({
  user: ["read"],
  financials: ["read"],
  settings: ["read"],
  documents: ["read"],
});

// ---------------------------------------------------------------------------
// Better-Auth instance
// ---------------------------------------------------------------------------
export const auth = betterAuth({
  database: new Database("auth.db"),
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3100",
  secret: process.env.BETTER_AUTH_SECRET,

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url }) => {
      // Extract token from the better-auth URL
      console.log(`[Auth] Raw reset URL: ${url}`);
      const parsed = new URL(url);
      // better-auth may put the token in query param or path segment
      const token = parsed.searchParams.get("token")
        ?? parsed.pathname.split("/").pop()
        ?? "";
      const portalBase = process.env.CLIENT_PORTAL_URL || "http://localhost:5173";
      const acceptUrl = `${portalBase}/accept-invite?token=${token}`;
      console.log(`[Auth] Password reset for ${user.email}: ${acceptUrl}`);

      // Store the URL so the custom endpoint can return it (workflow sends branded email)
      (globalThis as any).__lastResetUrl = acceptUrl;

      // Only send the plain email for user-initiated password resets (not workflow invites)
      if (!(globalThis as any).__suppressResetEmail) {
        await sendEmail(
          user.email,
          "Reset your password — FinStatement Studio",
          `<p>Hi ${user.name},</p>
           <p>Click the link below to set your password:</p>
           <p><a href="${acceptUrl}">${acceptUrl}</a></p>
           <p>This link expires in 1 hour.</p>
           <p>— FinStatement Studio</p>`
        );
      }
    },
  },

  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url }) => {
      // Rewrite callbackURL so post-verification redirects to the client portal
      const portalCallback = process.env.CLIENT_PORTAL_URL
        ? `${process.env.CLIENT_PORTAL_URL}/email-confirmed`
        : "http://localhost:5173/email-confirmed";
      const fixedUrl = url.replace(
        /callbackURL=[^&]*/,
        `callbackURL=${encodeURIComponent(portalCallback)}`
      );
      console.log(`[Auth] Verification email for ${user.email}: ${fixedUrl}`);
      await sendEmail(
        user.email,
        "Verify your email — FinStatement Studio",
        `<p>Hi ${user.name},</p>
         <p>Please verify your email address by clicking the link below:</p>
         <p><a href="${fixedUrl}">${fixedUrl}</a></p>
         <p>— FinStatement Studio</p>`
      );
    },
    callbackURL: process.env.CLIENT_PORTAL_URL
      ? `${process.env.CLIENT_PORTAL_URL}/email-confirmed`
      : "http://localhost:5173/email-confirmed",
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
  },

  user: {
    additionalFields: {
      firstName: {
        type: "string",
        required: true,
        input: true,
      },
      lastName: {
        type: "string",
        required: true,
        input: true,
      },
      organisationName: {
        type: "string",
        required: true,
        input: true,
      },
      organisationType: {
        type: "string",
        required: true,
        input: true,
      },
      phone: {
        type: "string",
        required: false,
        input: true,
      },
    },
  },

  plugins: [
    organization({
      ac,
      roles: {
        admin: adminRole,
        accountant: accountantRole,
        viewer: viewerRole,
      },
      allowUserToCreateOrganization: true,
      creatorRole: "admin",
      membershipLimit: 100,
      invitationExpiresIn: 172800, // 48 hours
      async sendInvitationEmail(data) {
        console.log(
          `[Auth] Invitation to ${data.email} for org ${data.organization.name}: ${data.id}`
        );
        await sendEmail(
          data.email,
          `You've been invited to ${data.organization.name} — FinStatement Studio`,
          `<p>Hi,</p>
           <p>You've been invited to join <strong>${data.organization.name}</strong> on FinStatement Studio.</p>
           <p>Accept your invitation: <a href="${data.invitationURL}">${data.invitationURL}</a></p>
           <p>— FinStatement Studio</p>`
        );
      },
    }),

    jwt({
      jwt: {
        issuer: process.env.BETTER_AUTH_URL || "http://localhost:3100",
        audience: "https://financialstudio-api",
        expirationTime: "1h",
        definePayload: ({ user, session }) => ({
          sub: user.id,
          email: user.email,
          name: user.name,
          // Custom claims for .NET API compatibility
          "https://finstatement.io/roles": (session as any)
            .activeOrganizationRole
            ? [(session as any).activeOrganizationRole]
            : ["admin"],
          tenant_id:
            (session as any).activeOrganizationId || "default",
        }),
      },
    }),

    bearer(),

    oauthProvider({
      loginPage: "/login",
    }),

    admin({
      defaultRole: "admin",
    }),
  ],

  trustedOrigins: [
    "http://localhost:5173", // client-portal dev
    "http://localhost:5174", // admin-portal dev
    "http://localhost:3000", // electron dev
    "http://localhost:5050", // .NET API
  ],
});

export type Auth = typeof auth;
