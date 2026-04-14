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
  role?: string
  image?: string | null
}

interface AuthState {
  isAuthenticated: boolean
  isLoading: boolean
  user: User | null
  accessToken: string
  login: (email: string, password: string) => Promise<{ error?: string }>
  logout: () => Promise<void>
  initAuth: () => Promise<void>
  getAccessToken: () => Promise<string>
}

export const useAuth = create<AuthState>((set, get) => ({
  isAuthenticated: false,
  isLoading: true,
  user: null,
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

  logout: async () => {
    await authClient.signOut()
    set({ isAuthenticated: false, user: null, accessToken: '' })
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
    const jwt = await fetchJwt()
    if (jwt) {
      set({ accessToken: jwt })
      return jwt
    }
    return ''
  },
}))
