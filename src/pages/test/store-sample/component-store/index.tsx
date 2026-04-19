// Zustand store + React context
// 1- only accessible in children of provider
// 2- get removed if provider get unmounted
// 3- more performant than context alone
import { create } from 'zustand'
import { createContext, useContext, useMemo } from 'react'
import { devtools } from 'zustand/middleware'
import { initializer, type ComponentState } from './store-state'

// provider, store, hook
export default function ComponentStoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const store = useMemo(() => createComponentStore(), [])
  return (
    <ComponentStoreContext.Provider value={store}>
      {children}
    </ComponentStoreContext.Provider>
  )
}

const createComponentStore = () =>
  create<ComponentState>()(devtools(initializer, { name: 'Component' }))

const ComponentStoreContext = createContext<ReturnType<
  typeof createComponentStore
> | null>(null)

export function useComponentStore<T>(
  selector: (state: ComponentState) => T,
): T {
  const store = useContext(ComponentStoreContext)
  if (!store) {
    throw new Error(
      'useComponentStore must be used within ComponentStoreProvider',
    )
  }
  return store(selector)
}
