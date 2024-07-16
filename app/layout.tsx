import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavComponent from "@/components/navbar/nav";
import { NextUIProvider } from "@nextui-org/react";
import Breadcrumb from "@/components/breadcrumbs/Breadcrumb";
import Footer from "@/components/footer/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import YouMayLIkeSection from "@/components/you-may-like/YouMayLIkeSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Find the Perfect Baby Name | BabyNameNestlings",
  description:
    "Discover thousands of baby names and find the perfect one for your little one at BabyNameNestlings.",
  other: {
    "google-site-verification": "cm72aHj1hmDL3KsA8DhR_aZDEngjkhWG8tPokxyCK54",
  },
  openGraph: {
    title: "Find the Perfect Baby Name | BabyNameNestlings",
    description:
      "Discover thousands of baby names and find the perfect one for your little one at BabyNameNestlings.",
    type: "article",
    locale: "en_US",
    url: `http://babynamenestlings.com/`,
    siteName: "BabyNameNestlings",
    images: [
      {
        url: "baby-boy.webp",
        width: 1200,
        height: 630,
        alt: "Smiling baby",
      },
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
      <GoogleAnalytics gaId="G-P2GM4FBYCH" />
      <body className={inter.className}>
        <NextUIProvider>
          <NavComponent />
          <Breadcrumb />
          <div>{children}</div>
          <YouMayLIkeSection />
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
