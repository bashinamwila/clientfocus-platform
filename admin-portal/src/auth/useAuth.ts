import { create } from 'zustand'
import { authClient } from './authClient'

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
      set({
        isAuthenticated: true,
        isLoading: false,
        user: data.user as User,
        accessToken: data.token ?? '',
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
    const { data } = await authClient.getSession()
    if (data) {
      const token = (data as any).token ?? ''
      set({ accessToken: token })
      return token
    }
    return ''
  },
}))
