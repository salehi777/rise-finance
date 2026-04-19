import SvgBox from '@/components/ui/svg-box'
import { StyledRow } from './styled'

export default function DashboardTasks({ data }) {
  return (
    <StyledRow>
      {data?.map((item) => (
        <div key={item.id}>
          <p>
            <span>
              {item.done ? (
                <SvgBox src="/icons/check-circle.svg" component="img" />
              ) : (
                <SvgBox src="/icons/circle.svg" />
              )}
            </span>
            {item.title}
          </p>
          <div>
            <div data-status={item.status}>
              {item.status?.replace('_', ' ')}
            </div>
          </div>
        </div>
      ))}
    </StyledRow>
  )
}
