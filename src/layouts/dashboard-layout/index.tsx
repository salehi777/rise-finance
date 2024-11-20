"use client";

import { useRealAuthStore } from "@/store/useAuthStore";
import Header from "./parts/header";
import Sidebar from "./parts/sidebar";
import { StyledLayout } from "./styled";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({ children }) {
  const user = useRealAuthStore((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  return (
    <StyledLayout>
      <Sidebar />
      <div>
        <Header />
        <main>{children}</main>
      </div>
    </StyledLayout>
  );
}
