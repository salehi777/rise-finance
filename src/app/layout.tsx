import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import ThemeRegistry from "@/components/theme-registry";
import ProgressBar from "@/components/progress-bar";

import "react-toastify/dist/ReactToastify.min.css";
import "nprogress/nprogress.css";
import "@/styles/global.css";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <meta name="theme-color" content="#121139" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <title>RiseFinance</title>
        <meta name="description" content="RiseFinance landing page" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <ThemeRegistry options={{ key: "mui" }}>
          <ToastContainer theme="colored" />
          <ProgressBar />
          {children}
        </ThemeRegistry>

        {process.env.NODE_ENV !== 'development' && (
          <Script
            defer
            src="https://umami-omega-eight.vercel.app/script.js"
            data-website-id="85cc6356-7240-4e3f-b1a4-e1eefe473195"
          />
        )}
      </body>
    </html>
  );
}
