import DashboardNotFound from "@/sections/error/dashboard-not-found";
import type { Metadata } from "next";

export default function DashboardNotFoundPage() {
  return <DashboardNotFound />;
}

export const metadata: Metadata = {
  title: "404 | RiseFinance",
};
