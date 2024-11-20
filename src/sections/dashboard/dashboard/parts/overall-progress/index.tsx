import Icon from "@/components/icon";
import { StyledBox, StyledCounts, StyledGauge } from "./styled";
import { Circle } from "rc-progress";
import { Box, useTheme } from "@mui/material";
import { fPercent } from "@/utils/format";

export default function OverallProgress({ data }) {
  const { palette } = useTheme();

  return (
    <StyledBox>
      <div>
        <h3>Overall Progress</h3>
        <div>
          <div>
            <span>All</span>
            <span>
              <Icon src="/icon/arrow-down.svg" />
            </span>
          </div>
        </div>
      </div>

      <Box sx={{ margin: "auto 0" }}>
        <StyledGauge>
          <div>
            <Circle
              percent={[26, 37, 37]}
              strokeWidth={5}
              trailWidth={5}
              gapDegree={180}
              strokeColor={[
                palette.success.main,
                palette.warning.main,
                palette.orange.main,
              ]}
            />
            <Circle
              percent={0}
              strokeWidth={5}
              gapDegree={180}
              steps={{
                count: 60,
                space: 2,
              }}
            />
            <div>
              <span>
                <span>0</span>
              </span>
              <span>
                <span>25</span>
              </span>
              <span>
                <span>50</span>
              </span>
              <span>
                <span>75</span>
              </span>
              <span>
                <span>100</span>
              </span>
            </div>
            <div>
              <div>
                {fPercent((data?.completed * 100) / data?.total_projects)}
              </div>
              <span>Completed</span>
            </div>
          </div>
        </StyledGauge>

        <StyledCounts>
          <div>
            <div>{data?.total_projects}</div>
            <span>Total Projects</span>
          </div>
          <div>
            <div>{data?.completed}</div>
            <span>Completed</span>
          </div>
          <div>
            <div>{data?.delayed}</div>
            <span>Delayed</span>
          </div>
          <div>
            <div>{data?.on_going}</div>
            <span>On going</span>
          </div>
        </StyledCounts>
      </Box>
    </StyledBox>
  );
}
