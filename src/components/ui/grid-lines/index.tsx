import { StyledBox } from './styles'

interface GridLinesProps {
  around?: boolean
  box?: [number, number]
  block?: [number, number]
}

export default function GridLines({
  around = true,
  box,
  block,
}: GridLinesProps) {
  const bheight = block?.[1] || (box?.[1] || 0) / 2
  const bwidth = block?.[0] || (box?.[0] || 0) / 2

  return (
    <StyledBox>
      {around && (
        <>
          <span style={{ width: 1, height: '100%', top: 0, left: 0 }} />
          <span style={{ width: 1, height: '100%', top: 0, right: 0 }} />
          <span style={{ width: '100%', height: 1, top: 0, left: 0 }} />
          <span style={{ width: '100%', height: 1, bottom: 0, left: 0 }} />
        </>
      )}

      {box && (
        <>
          {!!bheight &&
            Array.from({ length: Math.ceil(box[1] / bheight) - 1 }, (_, i) => (
              <span
                key={i}
                style={{
                  width: '100%',
                  height: 1,
                  top: (i + 1) * bheight,
                  left: 0,
                }}
              />
            ))}
          {!!bwidth &&
            Array.from({ length: Math.ceil(box[0] / bwidth) - 1 }, (_, i) => (
              <span
                key={i}
                style={{
                  width: 1,
                  height: '100%',
                  top: 0,
                  left: (i + 1) * bwidth,
                }}
              />
            ))}
        </>
      )}
    </StyledBox>
  )
}
