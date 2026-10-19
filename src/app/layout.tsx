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
  metadataBase: new URL("https://www.qodessystems.com"),
  title: "Qodes Systems | Enterprise Core Banking & IT Security Technology",
  description:
    "Qodes Systems delivers Tier-1 Core Banking Systems (SAP Banking, Temenos T24, Qodes CBS, Oracle FLEXCUBE), SAP ERP implementation & support, and cybersecurity assurance across Australia and India.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/qodes-monogram-192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/qodes-monogram-512.png", sizes: "512x512", type: "image/png" },
      { url: "/images/qodes-monogram.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/images/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Qodes Systems",
              url: "https://www.qodessystems.com",
              logo: "https://www.qodessystems.com/images/qodes-monogram-512.png",
              image: "https://www.qodessystems.com/images/qodes-monogram-512.png",
              description:
                "Tier-1 Core Banking Systems, SAP ERP implementation & support, and IT security assurance across Australia and India.",
              sameAs: [
                "https://www.linkedin.com/company/qodes-systems",
                "https://x.com/qodessystems",
              ],
            }),
          }}
        />
        <ContentProvider>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </ContentProvider>
      </body>
    </html>
  );
}
