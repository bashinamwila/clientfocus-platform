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
      console.log(`[Auth] Password reset for ${user.email}: ${url}`);
      // TODO: integrate SMTP transport
    },
  },

  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url }) => {
      console.log(`[Auth] Verification email for ${user.email}: ${url}`);
      // TODO: integrate SMTP transport (Nodemailer / Resend / etc.)
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
        // TODO: integrate SMTP transport
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
            : ["viewer"],
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
      defaultRole: "viewer",
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
