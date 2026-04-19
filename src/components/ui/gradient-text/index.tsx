export default function GradientText({
  style,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      style={{
        background: 'linear-gradient(263deg, #9130F4 21.05%, #4646F9 77.63%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        ...style,
      }}
      {...props}
    />
  )
}
