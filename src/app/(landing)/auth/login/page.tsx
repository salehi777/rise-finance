import Login from "@/sections/landing/auth/login";
import type { Metadata } from "next";

export default function LoginPage() {
  return <Login />;
}

export const metadata: Metadata = {
  title: "Login | RiseFinance",
};
