import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ContentProvider } from "@/context/content-context";

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
    "Qodes Systems delivers Tier-1 AI-orchestrated Core Banking Systems (CBS), SAP Banking modernization, Temenos T24 migrations, and APRA CPS 234 cybersecurity assessments across Australia and globally.",
  icons: {
    icon: [
      { url: "/images/qodes-monogram.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/images/qodes-monogram.svg",
    apple: "/images/apple-touch-icon.png",
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
          {children}
        </ContentProvider>
      </body>
    </html>
  );
}
