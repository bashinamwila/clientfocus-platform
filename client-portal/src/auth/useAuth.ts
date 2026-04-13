import { create } from 'zustand'
import { authClient } from './authClient'

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
      set({
        isAuthenticated: true,
        isLoading: false,
        user: data.user as User,
        accessToken: data.token ?? '',
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
      set({
        isAuthenticated: true,
        isLoading: false,
        user: data.user as User,
        accessToken: (data as any).token ?? '',
      })
    } else {
      set({ isLoading: false })
    }
  },

  getAccessToken: async () => {
    const { accessToken } = get()
    if (accessToken) return accessToken
    // Try refreshing session
    const { data } = await authClient.getSession()
    if (data) {
      const token = (data as any).token ?? ''
      set({ accessToken: token })
      return token
    }
    return ''
  },
}))
