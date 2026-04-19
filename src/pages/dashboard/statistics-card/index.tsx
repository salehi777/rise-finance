import { Box } from '@mui/material'
import { StyledCard } from './styled'
import SvgBox from '@/components/ui/svg-box'

export default function StatisticsCard({ icon, color, title, value, percent }) {
  return (
    <StyledCard>
      <Box sx={{ backgroundColor: color }}>
        <SvgBox src={`/icons/${icon}.svg`} />
      </Box>

      <span>{title}</span>

      <div>{value}</div>

      <p>
        <Box
          component="span"
          sx={{
            color: ({ palette }) =>
              percent > 0 ? palette.success.main : palette.error.main,
          }}
        >
          <SvgBox
            src="/icons/arrow-right.svg"
            style={{
              transform: `rotate(${percent > 0 ? '-' : ''}45deg)`,
            }}
          />
        </Box>
        <span>
          {Math.abs(percent) || null}% {percent > 0 ? 'increase' : 'decrease'}{' '}
          from last month
        </span>
      </p>
    </StyledCard>
  )
}
