import {
  animated,
  useIsomorphicLayoutEffect,
  useSpringValue,
} from "@react-spring/web";
import useMousePosition from "@/hooks/useMousePosition";
import useWindowResize from "@/hooks/useWindowResize";
import { useRef, useState } from "react";

export const INITIAL_HEIGHT = 45;

export default function NavItem({ dockHovered, dockWidth, children }) {
  const cardRef = useRef<HTMLDivElement>(null!);
  const [elem, setElem] = useState({ centerX: 0, width: 0 });
  // initial min width of smallest item
  const minWidth = useSpringValue(85, {
    config: { mass: 0.1, tension: 320 },
  });
  const minHeight = useSpringValue(INITIAL_HEIGHT, {
    config: { mass: 0.1, tension: 320 },
  });
  const y = useSpringValue(0, {
    config: { friction: 29, tension: 238 },
  });

  useMousePosition(
    {
      onChange: ({ value }) => {
        if (!dockHovered) return;

        const mouseX = value.x;

        if (dockWidth > 0) {
          const transformedValue =
            20 *
            Math.cos((((mouseX - elem.centerX) / dockWidth) * Math.PI) / 2) **
              12;

          minWidth.start(transformedValue + elem.width);
          minHeight.start(transformedValue + INITIAL_HEIGHT);
        }
      },
    },
    [elem, dockHovered, dockWidth]
  );

  useIsomorphicLayoutEffect(() => {
    if (!dockHovered) {
      minWidth.start(elem.width);
      minHeight.start(INITIAL_HEIGHT);
    }
  }, [dockHovered]);

  useWindowResize(() => {
    const { x, width } = cardRef.current.getBoundingClientRect();
    setElem({
      centerX: x + width / 2,
      width,
    });
  });

  const handleClick = () => {
    y.start(20);
    setTimeout(() => {
      y.start(0);
    }, 300);
  };

  return (
    <animated.div
      ref={cardRef}
      onClick={handleClick}
      style={{
        minWidth,
        height: minHeight,
        y,
      }}
    >
      {children}
    </animated.div>
  );
}
