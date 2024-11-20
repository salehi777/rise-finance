import LandingLayout from "@/layouts/landing-layout";

export default function LandingLayoutApp({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LandingLayout>{children}</LandingLayout>;
}
