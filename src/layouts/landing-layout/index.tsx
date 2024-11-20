"use client";

import dynamic from "next/dynamic";
import Header from "./parts/header";
import { StyledLayout } from "./styled";
import { usePathname } from "next/navigation";

const Footer = dynamic(() => import("./parts/footer"));

export default function LandingLayout({ children }) {
  const pathname = usePathname();

  return (
    <StyledLayout>
      <Header />
      <main>{children}</main>
      {!pathname.includes("auth") && <Footer />}
    </StyledLayout>
  );
}
