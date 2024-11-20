import Icon from "@/components/icon";
import { StyledBox, StyledGrid } from "./styled";
import React from "react";
import { Circle } from "rc-progress";

export default function ProjectSummary({ data }) {
  return (
    <StyledBox>
      <div>
        <h3>Project Summary</h3>

        <div>
          <div>
            <span>Status</span>
            <span>
              <Icon src="/icon/arrow-down.svg" />
            </span>
          </div>
        </div>
      </div>

      <StyledGrid>
        <strong>Name</strong>
        <strong>Project Manager</strong>
        <strong>Due Date</strong>
        <strong>Status</strong>
        <strong>Progress</strong>

        {data?.map((item) => (
          <React.Fragment key={item.id}>
            <div>{item.name}</div>
            <div>{item.project_manager}</div>
            <div>{item.due_date}</div>
            <div>
              <span data-status={item.status}>
                {item.status?.replace("_", " ")}
              </span>
            </div>
            <div data-status={item.status}>
              <Circle
                percent={item.progress}
                strokeWidth={16}
                trailWidth={16}
              />
              <span>{item.progress}%</span>
            </div>
          </React.Fragment>
        ))}
      </StyledGrid>
    </StyledBox>
  );
}
