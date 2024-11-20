import { styled } from "@mui/material";
import { animated } from "@react-spring/web";

export const StyledCard = styled(animated.div)(({ theme }) => ({
  willChange: "transform",
  touchAction: "none",
  width: "fit-content",
  height: "fit-content",
}));
