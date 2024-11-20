import { Box } from "@mui/material";
import { StyledCard } from "./styled";
import Icon from "@/components/icon";

export default function StatisticsCard({ icon, color, title, value, percent }) {
  return (
    <StyledCard>
      <Box sx={{ backgroundColor: color }}>
        <Icon src={`/icon/${icon}.svg`} />
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
          <Icon
            src="/icon/arrow-right.svg"
            style={{
              transform: `rotate(${percent > 0 ? "-" : ""}45deg)`,
            }}
          />
        </Box>
        <span>
          {Math.abs(percent) || null}% {percent > 0 ? "increase" : "decrease"}{" "}
          from last month
        </span>
      </p>
    </StyledCard>
  );
}
