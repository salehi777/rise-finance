import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface AuthState {
  user: any
  login: () => void
  logout: () => void
}

const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: false,
        login: () => set({ user: true }),
        logout: () => set({ user: false }),
      }),
      { name: 'auth-store' },
    ),
    { name: 'auth-store' },
  ),
)

export default useAuthStore
