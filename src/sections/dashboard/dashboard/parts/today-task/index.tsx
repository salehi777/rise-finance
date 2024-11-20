import { StyledBox } from "./styled";
import { useMemo, useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";
import DashboardTasks from "./parts/dashboard-tasks";
import { groupBy } from "@/utils/helpers";

export default function TodayTask({ data }) {
  const [value, setValue] = useState("all");

  const handleChange = (event, newValue: string) => setValue(newValue);

  const grouped = useMemo(() => {
    return groupBy(data, "type");
  }, [data]);

  return (
    <StyledBox>
      <div>
        <h3>Today Task</h3>
      </div>

      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          sx={{ borderBottom: "1px solid #9695a9" }}
          variant="scrollable"
        >
          <Tab
            label={
              <div data-label>
                All <span>{data?.length}</span>
              </div>
            }
            value="all"
          />
          <Tab
            label={
              <div data-label>
                Important{" "}
                {grouped?.important?.length && (
                  <span>{grouped?.important?.length}</span>
                )}
              </div>
            }
            value="important"
          />
          <Tab
            label={
              <div data-label>
                Notes{" "}
                {grouped?.notes?.length && (
                  <span>{grouped?.notes?.length}</span>
                )}
              </div>
            }
            value="notes"
          />
          <Tab
            label={
              <div data-label>
                Links{" "}
                {grouped?.links?.length && (
                  <span>{grouped?.links?.length}</span>
                )}
              </div>
            }
            value="links"
          />
        </TabList>

        <TabPanel value="all">
          <DashboardTasks data={data} />
        </TabPanel>
        <TabPanel value="important">
          <DashboardTasks data={grouped?.important} />
        </TabPanel>
        <TabPanel value="notes">
          <DashboardTasks data={grouped?.notes} />
        </TabPanel>
        <TabPanel value="links">
          <DashboardTasks data={grouped?.links} />
        </TabPanel>
      </TabContext>
    </StyledBox>
  );
}
