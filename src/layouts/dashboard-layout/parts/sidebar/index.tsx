import Icon from "@/components/icon";
import { Backdrop, ButtonBase, Theme, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { StyledArrow, StyledBox, StyledSidebar } from "./styled";
import Image from "next/image";
import useGlobalStore from "@/store/useGlobalStore";
import { useEffect } from "react";
import data from "./data";

export default function Sidebar() {
  const pathname = usePathname();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const drawer = useGlobalStore((state) => state.drawer);
  const toggleDrawer = useGlobalStore((state) => state.toggleDrawer);

  useEffect(() => {
    if (isMobile) toggleDrawer("close");
    else toggleDrawer("open");
  }, [isMobile]);

  return (
    <>
      <StyledBox drawer={drawer}>
        <StyledSidebar drawer={drawer}>
          <Link href="/">
            <div>
              <Image src="/image/logo.png" fill alt="RiseFinance" />
            </div>
            <span>RiseFinance</span>
          </Link>

          <ButtonBase component={Link} href="/dashboard/add-project">
            <div>
              <Icon src="/icon/plus.svg" />
            </div>
            <span>Create new project</span>
          </ButtonBase>

          <ul>
            {data.map(({ label, path, icon }) => (
              <li key={path}>
                <Link
                  href={`/dashboard${path}`}
                  data-active={`/dashboard${path}` === pathname}
                >
                  <span>
                    <Icon src={`/icon/${icon}.svg`} />
                  </span>
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <StyledArrow drawer={drawer} onClick={() => toggleDrawer()}>
            <Icon src="/icon/arrow-down.svg" />
          </StyledArrow>
        </StyledSidebar>
      </StyledBox>
      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.drawer - 1 }}
        open={isMobile && drawer === "open"}
        onClick={() => toggleDrawer()}
      />
    </>
  );
}
