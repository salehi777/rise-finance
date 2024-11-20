import Container from "@/components/container";
import { StyledContent, StyledHeader } from "./styled";
import Link from "next/link";
import { useState } from "react";
import {
  Button,
  Drawer,
  IconButton,
  Theme,
  useMediaQuery,
} from "@mui/material";
import Icon from "@/components/icon";
import useAuthStore from "@/store/useAuthStore";
import Navbar from "./navbar";
import Image from "next/image";

export default function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const user = useAuthStore((state) => state.user);

  return (
    <>
      <StyledHeader>
        <Container>
          <StyledContent>
            {isMobile && (
              <IconButton
                onClick={() => setOpenDrawer(true)}
                aria-label="Open Drawer"
              >
                <Icon src="/icon/menu.svg" />
              </IconButton>
            )}

            <Link href="/" aria-label="Bakc to Homepage">
              <Image
                src="/image/logo-text.svg"
                width={196}
                height={40}
                alt="Rise Finance"
              />
            </Link>

            {!isMobile && <Navbar />}

            <div>
              {user ? (
                <Link href="/dashboard">
                  <Button variant="contained">Dashboard</Button>
                </Link>
              ) : (
                <>
                  <Link href="/auth/signup">
                    <Button variant="outlined">Signup</Button>
                  </Link>
                  <Link href="/auth/login">
                    <Button variant="contained">Login</Button>
                  </Link>
                </>
              )}
            </div>
          </StyledContent>
        </Container>
      </StyledHeader>

      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{ sx: { minWidth: 200 } }}
      >
        <div>drawer</div>
      </Drawer>
    </>
  );
}
