import { Grid, Skeleton } from '@mui/material'
import StatisticsCard from './statistics-card'
import { StyledHead } from './styled'
import SvgBox from '@/components/ui/svg-box'
import ProjectSummary from './project-summary'
import OverallProgress from './overall-progress'
import TodayTask from './today-task'
import ProjectsWorkload from './projects-workload'
import { fCurrency } from '@/lib/format'

export default function DashboardPage() {
  const data: any = {}

  return (
    <div>
      <StyledHead>
        <h2>Overview</h2>
        <div>
          <span>Last 30 days</span>
          <span>
            <SvgBox src="/icons/arrow-down.svg" />
          </span>
        </div>
      </StyledHead>

      {false ? (
        <Grid container columnSpacing={2} rowSpacing={{ xs: 2, md: 4 }}>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Skeleton height={200} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Skeleton height={200} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Skeleton height={200} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Skeleton height={200} />
          </Grid>
          <Grid size={{ xs: 12, lg: 7 }}>
            <Skeleton height={300} />
          </Grid>
          <Grid size={{ xs: 12, lg: 5 }}>
            <Skeleton height={300} />
          </Grid>
          <Grid size={{ xs: 12, lg: 7 }}>
            <Skeleton height={250} />
          </Grid>
          <Grid size={{ xs: 12, lg: 5 }}>
            <Skeleton height={250} />
          </Grid>
        </Grid>
      ) : (
        <Grid container columnSpacing={2} rowSpacing={{ xs: 2, md: 4 }}>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <StatisticsCard
              icon="chart"
              color="#d398e7"
              title="Total revenue"
              value={fCurrency(data?.total_revenue)}
              percent={data?.total_revenue_diff}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <StatisticsCard
              icon="briefcase"
              color="#e89271"
              title="Projects"
              value={data?.total_projects}
              percent={data?.total_projects_diff}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <StatisticsCard
              icon="clock"
              color="#70a1e5"
              title="Time Spent"
              value={data?.total_time_spent}
              percent={data?.total_time_spent_diff}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <StatisticsCard
              icon="user"
              color="#f0c274"
              title="Resources"
              value={data?.total_rsources}
              percent={data?.total_rsources_diff}
            />
          </Grid>
          <Grid size={{ xs: 12, lg: 7 }}>
            <ProjectSummary data={data?.summary} />
          </Grid>
          <Grid size={{ xs: 12, lg: 5 }}>
            <OverallProgress data={data?.overall_progress} />
          </Grid>
          <Grid size={{ xs: 12, lg: 7 }}>
            <TodayTask data={data?.today_task} />
          </Grid>
          <Grid size={{ xs: 12, lg: 5 }}>
            <ProjectsWorkload data={data?.projects_workload} />
          </Grid>
        </Grid>
      )}
    </div>
  )
}
