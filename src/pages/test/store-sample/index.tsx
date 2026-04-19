import ComponentStoreProvider, { useComponentStore } from './component-store'

function StoreSampleComponent() {
  const a = useComponentStore((s) => s.a)
  const b = useComponentStore((s) => s.b)

  return (
    <div>
      <div>{a}</div>
      <button onClick={b}>b</button>
    </div>
  )
}

export default function StoreSample() {
  return (
    <ComponentStoreProvider>
      <StoreSampleComponent />
    </ComponentStoreProvider>
  )
}
