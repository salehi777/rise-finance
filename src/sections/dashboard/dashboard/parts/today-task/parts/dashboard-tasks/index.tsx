import Icon from "@/components/icon";
import { StyledRow } from "./styled";

export default function DashboardTasks({ data }) {
  return (
    <StyledRow>
      {data?.map((item) => (
        <div key={item.id}>
          <p>
            <span>
              {item.done ? (
                <Icon src="/icon/check-circle.svg" component="img" />
              ) : (
                <Icon src="/icon/circle.svg" />
              )}
            </span>
            {item.title}
          </p>
          <div>
            <div data-status={item.status}>
              {item.status?.replace("_", " ")}
            </div>
          </div>
        </div>
      ))}
    </StyledRow>
  );
}
