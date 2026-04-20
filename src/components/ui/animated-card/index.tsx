import { useSpring, animated } from '@react-spring/web'

export default function AnimatedCard() {
  const [{ scale }, api] = useSpring(() => ({
    scale: 1,
    config: { tension: 300, friction: 15 },
  }))

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}
    >
      <animated.div
        onMouseEnter={() => api.start({ scale: 1.1 })}
        onMouseLeave={() => api.start({ scale: 1 })}
        onMouseDown={() => api.start({ scale: 0.9 })}
        onMouseUp={() => api.start({ scale: 1.1 })}
        style={{
          scale,
          width: '200px',
          height: '250px',
          backgroundColor: '#3498db',
          borderRadius: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '20px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
        }}
      >
        Hover & Click Me!
      </animated.div>
    </div>
  )
}
