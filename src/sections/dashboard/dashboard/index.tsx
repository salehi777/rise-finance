"use client";

import { Grid, Skeleton } from "@mui/material";
import StatisticsCard from "./parts/statistics-card";
import { StyledHead } from "./styled";
import Icon from "@/components/icon";
import ProjectSummary from "./parts/project-summary";
import OverallProgress from "./parts/overall-progress";
import TodayTask from "./parts/today-task";
import ProjectsWorkload from "./parts/projects-workload";
import { clientDashboardApi } from "@/services/client";
import { fCurrency } from "@/utils/format";
import { useEffect } from "react";
import useApi from "@/hooks/useApi";

export default function Dashboard() {
  const { isLoading, data, mutate } = useApi(clientDashboardApi);

  useEffect(() => {
    mutate();
  }, []);

  return (
    <div>
      <StyledHead>
        <h2>Overview</h2>
        <div>
          <span>Last 30 days</span>
          <span>
            <Icon src="/icon/arrow-down.svg" />
          </span>
        </div>
      </StyledHead>

      {isLoading ? (
        <Grid container columnSpacing={2} rowSpacing={{ xs: 2, md: 4 }}>
          <Grid item xs={12} sm={6} lg={3}>
            <Skeleton height={200} />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Skeleton height={200} />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Skeleton height={200} />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Skeleton height={200} />
          </Grid>
          <Grid item xs={12} lg={7}>
            <Skeleton height={300} />
          </Grid>
          <Grid item xs={12} lg={5}>
            <Skeleton height={300} />
          </Grid>
          <Grid item xs={12} lg={7}>
            <Skeleton height={250} />
          </Grid>
          <Grid item xs={12} lg={5}>
            <Skeleton height={250} />
          </Grid>
        </Grid>
      ) : (
        <Grid container columnSpacing={2} rowSpacing={{ xs: 2, md: 4 }}>
          <Grid item xs={12} sm={6} lg={3}>
            <StatisticsCard
              icon="chart"
              color="#d398e7"
              title="Total revenue"
              value={fCurrency(data?.total_revenue)}
              percent={data?.total_revenue_diff}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <StatisticsCard
              icon="briefcase"
              color="#e89271"
              title="Projects"
              value={data?.total_projects}
              percent={data?.total_projects_diff}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <StatisticsCard
              icon="clock"
              color="#70a1e5"
              title="Time Spent"
              value={data?.total_time_spent}
              percent={data?.total_time_spent_diff}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <StatisticsCard
              icon="user"
              color="#f0c274"
              title="Resources"
              value={data?.total_rsources}
              percent={data?.total_rsources_diff}
            />
          </Grid>
          <Grid item xs={12} lg={7}>
            <ProjectSummary data={data?.summary} />
          </Grid>
          <Grid item xs={12} lg={5}>
            <OverallProgress data={data?.overall_progress} />
          </Grid>
          <Grid item xs={12} lg={7}>
            <TodayTask data={data?.today_task} />
          </Grid>
          <Grid item xs={12} lg={5}>
            <ProjectsWorkload data={data?.projects_workload} />
          </Grid>
        </Grid>
      )}
    </div>
  );
}
