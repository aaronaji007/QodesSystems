import type { Metadata } from "next";
import localFont from "next/font/local";
import "lenis/dist/lenis.css";
import "./globals.css";
import { ContentProvider } from "@/context/content-context";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Qodes Systems | Enterprise Core Banking & IT Security Technology",
  description:
    "Qodes Systems delivers Tier-1 Core Banking Systems (SAP Banking, Temenos T24, Qodes CBS, Oracle FLEXCUBE), SAP ERP implementation & support, and cybersecurity assurance across Australia and India.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=3", sizes: "any" },
      { url: "/images/qodes-monogram.svg?v=3", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico?v=3",
    apple: "/images/apple-touch-icon.png?v=3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ContentProvider>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </ContentProvider>
      </body>
    </html>
  );
}
