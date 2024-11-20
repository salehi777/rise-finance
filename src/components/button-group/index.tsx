import { useEffect, useRef, useState } from "react";
import { StyledWrapper } from "./styled";
import { Box, BoxProps } from "@mui/material";

interface ButtonGroupProps {
  items: BoxProps[];
  activeIndex: number;
  setActiveIndex?: (number) => {};
}

export default function ButtonGroup({
  items,
  activeIndex,
  setActiveIndex,
}: ButtonGroupProps) {
  const [width, setWidth] = useState(0);
  const [left, setLeft] = useState(0);

  const boxRef = useRef<any>([]);

  useEffect(() => {
    function setPosition() {
      const current = boxRef.current[activeIndex];
      setLeft(current?.offsetLeft ?? 0);
      setWidth(current?.clientWidth ?? 0);
    }
    setPosition();
    window.addEventListener("resize", setPosition);

    return () => window.removeEventListener("resize", setPosition);
  }, [activeIndex]);

  return (
    <StyledWrapper>
      <span
        style={{
          left,
          width,
        }}
      />
      <div>
        {items.map((item, idx) => (
          <Box
            key={idx}
            ref={(el) => (boxRef.current[idx] = el)}
            sx={{ color: activeIndex === idx ? "#fff" : "inherit" }}
            onClick={(e) => {
              setActiveIndex?.(idx);
              item.onClick?.(e);
            }}
            {...item}
          />
        ))}
      </div>
    </StyledWrapper>
  );
}
