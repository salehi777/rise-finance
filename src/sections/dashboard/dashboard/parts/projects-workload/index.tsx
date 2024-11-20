import Icon from "@/components/icon";
import { StyledBox, StyledWorks } from "./styled";
import { useMemo } from "react";

export default function ProjectsWorkload({ data }) {
  const max = useMemo(() => {
    const counts = data?.map(({ count }) => count) || [];
    return Math.max(...counts);
  }, [data]);

  return (
    <StyledBox>
      <div>
        <h3>Projects Workload</h3>
        <div>
          <div>
            <span>Last 3 months</span>
            <span>
              <Icon src="/icon/arrow-down.svg" />
            </span>
          </div>
        </div>
      </div>

      <StyledWorks>
        {data?.map((item) => (
          <div key={item.user}>
            <div>{item.user}</div>
            <div data-max={item.count === max}>
              {[...new Array(item.count)].map((_, i) => (
                <span key={i}>{item.count}</span>
              ))}
            </div>
          </div>
        ))}
      </StyledWorks>
    </StyledBox>
  );
}
