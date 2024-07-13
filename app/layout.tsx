import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavComponent from "@/components/navbar/nav";
import { NextUIProvider } from "@nextui-org/react";
import Breadcrumb from "@/components/breadcrumbs/Breadcrumb";
import Footer from "@/components/footer/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Find Baby Names | BabyNameNestlings",
  description: "Cherish Every Name, Love Every Choice",
  openGraph: {
    title: "Find Baby Names | BabyNameNestlings",
    description: "Cherish Every Name, Love Every Choice",
    type: "article",
    locale: "en_US",
    url: `http://babynamenestlings.com/`,
    siteName: "BabyNameNestlings",
    images: [
      {
        url: "baby-boy.webp",
        width: 1200,
        height: 630,
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
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
