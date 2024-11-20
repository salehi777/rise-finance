import AuthLayout from "@/layouts/auth-layout";

export default function AuthLayoutApp({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthLayout>{children}</AuthLayout>;
}
