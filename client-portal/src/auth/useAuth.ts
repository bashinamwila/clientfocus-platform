import { create } from 'zustand'
import { authClient } from './authClient'

const AUTH_URL = import.meta.env.VITE_AUTH_URL ?? 'http://localhost:3100'

async function fetchJwt(): Promise<string> {
  try {
    const res = await fetch(`${AUTH_URL}/api/auth/token`, { credentials: 'include' })
    if (!res.ok) return ''
    const data = await res.json()
    return data.token ?? ''
  } catch {
    return ''
  }
}

interface User {
  id: string
  email: string
  name: string
  emailVerified: boolean
  firstName?: string
  lastName?: string
  organisationName?: string
  organisationType?: string
  phone?: string
  image?: string | null
}

interface AuthState {
  isAuthenticated: boolean
  isLoading: boolean
  user: User | null
  tenantId: string
  accessToken: string
  login: (email: string, password: string) => Promise<{ error?: string }>
  loginWithGoogle: () => Promise<void>
  signup: (data: {
    email: string
    password: string
    name: string
    firstName: string
    lastName: string
    organisationName: string
    organisationType: string
    phone?: string
  }) => Promise<{ error?: string }>
  logout: () => Promise<void>
  initAuth: () => Promise<void>
  getAccessToken: () => Promise<string>
}

export const useAuth = create<AuthState>((set, get) => ({
  isAuthenticated: false,
  isLoading: true,
  user: null,
  tenantId: 'Default',
  accessToken: '',

  login: async (email: string, password: string) => {
    const { data, error } = await authClient.signIn.email({ email, password })
    if (error) {
      return { error: error.message ?? 'Login failed' }
    }
    if (data?.user) {
      const jwt = await fetchJwt()
      set({
        isAuthenticated: true,
        isLoading: false,
        user: data.user as User,
        accessToken: jwt,
      })
    }
    return {}
  },

  loginWithGoogle: async () => {
    await authClient.signIn.social({
      provider: 'google',
      callbackURL: window.location.origin + '/login',
    })
  },

  signup: async (data) => {
    const { error } = await authClient.signUp.email({
      email: data.email,
      password: data.password,
      name: data.name,
      firstName: data.firstName,
      lastName: data.lastName,
      organisationName: data.organisationName,
      organisationType: data.organisationType,
      phone: data.phone ?? '',
    })
    if (error) {
      return { error: error.message ?? 'Signup failed' }
    }
    return {}
  },

  logout: async () => {
    await authClient.signOut()
    set({ isAuthenticated: false, user: null, accessToken: '', tenantId: 'Default' })
  },

  initAuth: async () => {
    const { data } = await authClient.getSession()
    if (data?.user) {
      const jwt = await fetchJwt()
      set({
        isAuthenticated: true,
        isLoading: false,
        user: data.user as User,
        accessToken: jwt,
      })
    } else {
      set({ isLoading: false })
    }
  },

  getAccessToken: async () => {
    const { accessToken } = get()
    if (accessToken) return accessToken
    // Fetch JWT from auth service
    const jwt = await fetchJwt()
    if (jwt) {
      set({ accessToken: jwt })
      return jwt
    }
    return ''
  },
}))
