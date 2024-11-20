import { useRef } from "react";
import { useSpring } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import { StyledCard } from "./styled";

export default function AnimatedRect({ children, ratio = 20, ...props }) {
  const target = useRef(null);
  const [{ rotateX, rotateY }, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  useGesture(
    {
      onMove: ({ event: { offsetX, offsetY, target } }) => {
        const t = target as HTMLDivElement;
        const width = t.clientWidth;
        const height = t.clientHeight;

        const rotateY = (offsetX / width - 0.5) * -ratio;
        const rotateX = (offsetY / height - 0.5) * ratio;

        api({ rotateY, rotateX });
      },
      onHover: ({ hovering }) => !hovering && api({ rotateX: 0, rotateY: 0 }),
    },
    { target, eventOptions: { passive: false } }
  );

  return (
    <StyledCard
      ref={target}
      style={{ transform: "perspective(600px)", rotateX, rotateY }}
      {...props}
    >
      {children}
    </StyledCard>
  );
}
