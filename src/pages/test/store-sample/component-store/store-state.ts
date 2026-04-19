import type { StateCreator } from 'zustand'

type Initializer = StateCreator<ComponentState, [], [], ComponentState>

export interface ComponentState {
  a: number
  b: () => void
}

export const initializer: Initializer = (set, get) => ({
  a: 1,
  b: () => {
    set({ a: get().a + 1 })
  },
})
