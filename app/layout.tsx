import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavComponent from "@/components/navbar/nav";
import { NextUIProvider } from "@nextui-org/react";
import Breadcrumb from "@/components/breadcrumbs/Breadcrumb";
import Footer from "@/components/footer/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import YouMayLIkeSection from "@/components/you-may-like/YouMayLIkeSection";
import GoogleAdWithSuspense from "@/components/google-ads/GoogleAd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Find the Perfect Baby Name | BabyNameNestlings",
  description: `Discover thousands of meaningful baby names across cultures, religions, and countries. Find the perfect name that reflects your heritage and values.`,
  other: {
    "google-site-verification": "cm72aHj1hmDL3KsA8DhR_aZDEngjkhWG8tPokxyCK54",
  },
  keywords: [
    "baby names",
    "name finder",
    "cultural names",
    "religious names",
    "baby naming",
    "name meanings",
    "international names",
  ],
  openGraph: {
    title: "Find the Perfect Baby Name | BabyNameNestlings",
    description: `Discover thousands of meaningful baby names across cultures, religions, and countries.`,
    type: "website",
    locale: "en_US",
    url: `https://babynamenestlings.com/`,
    siteName: "BabyNameNestlings",
    images: [
      {
        url: "baby.webp",
        width: 1200,
        height: 630,
        alt: "Diverse babies representing global naming traditions",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9516918341435316"
          crossOrigin="anonymous"
        ></script>
      </head>
      <GoogleAnalytics gaId="G-P2GM4FBYCH" />
      <body className={`${inter.className}  bg-[url('/snowflakes.png')]`}>
        <NextUIProvider>
          <NavComponent />
          <Breadcrumb />
          <div className="flex justify-between">
            <div className="hidden md:block w-1/6 pt-36">
              <GoogleAdWithSuspense>
                <ins
                  className="adsbygoogle"
                  style={{ display: "block" }}
                  data-ad-client="ca-pub-9851111861096184"
                  data-ad-slot="9159383020"
                  data-ad-format="auto"
                  data-full-width-responsive="true"
                ></ins>
              </GoogleAdWithSuspense>
            </div>
            <main className="flex-1 md:mx-0">{children}</main>
            <div className="hidden md:block w-1/6 pt-36">
              <GoogleAdWithSuspense>
                <ins
                  className="adsbygoogle"
                  style={{ display: "block" }}
                  data-ad-client="ca-pub-9851111861096184"
                  data-ad-slot="3739535380"
                  data-ad-format="auto"
                  data-full-width-responsive="true"
                ></ins>
              </GoogleAdWithSuspense>
            </div>
          </div>
          <YouMayLIkeSection />
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
