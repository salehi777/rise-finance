import LandingNotFound from "@/sections/error/landing-not-found";
import type { Metadata } from "next";

export default function LandingNotFoundPage() {
  return <LandingNotFound />;
}

export const metadata: Metadata = {
  title: "404 | RiseFinance",
};
