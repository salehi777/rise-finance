import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface SettingsState {
  sidebar: boolean
  toggleSidebar: () => void
}

const useSettingsStore = create<SettingsState>()(
  devtools(
    persist(
      (set) => ({
        sidebar: false,
        toggleSidebar: () => set((s) => ({ sidebar: !s.sidebar })),
      }),
      { name: 'settings-store' },
    ),
    { name: 'settings-store' },
  ),
)

export default useSettingsStore
