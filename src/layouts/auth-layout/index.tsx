"use client";

import ButtonGroup from "@/components/button-group";
import { StyledLayout, StyledButtons } from "./styled";
import { ButtonBase } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthLayout({ children }) {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (pathname.includes("login")) setActiveIndex(0);
    else setActiveIndex(1);
  }, [pathname]);

  return (
    <StyledLayout>
      <StyledButtons>
        <div>
          <ButtonGroup
            activeIndex={activeIndex}
            items={[
              {
                children: (
                  <ButtonBase LinkComponent={Link} href="/auth/login">
                    Login
                  </ButtonBase>
                ),
              },
              {
                children: (
                  <ButtonBase LinkComponent={Link} href="/auth/signup">
                    Sign up
                  </ButtonBase>
                ),
              },
            ]}
          />
        </div>
      </StyledButtons>

      {children}
    </StyledLayout>
  );
}
