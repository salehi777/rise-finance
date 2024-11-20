import { Box, BoxProps } from "@mui/material";
import { forwardRef } from "react";

interface IconProps extends BoxProps {
  src: string;
  alt?: string;
}

export default function Icon({
  src,
  sx,
  component = "span",
  ...props
}: IconProps) {
  return (
    <Box
      component={component}
      className="icon"
      {...(component === "img" ? { src } : {})}
      sx={{
        width: 24,
        height: 24,
        display: "inline-block",
        bgcolor: "currentColor",
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        ...sx,
      }}
      {...props}
    />
  );
}
