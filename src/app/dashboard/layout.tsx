import DashboardLayout from "@/layouts/dashboard-layout";

export default function DashboardLayoutApp({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
