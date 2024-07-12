import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavComponent from "@/components/navbar/nav";
import { NextUIProvider } from "@nextui-org/react";
import Breadcrumb from "@/components/breadcrumbs/Breadcrumb";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baby Name Nestlings",
  description:
    "Beautiful baby names, girl names, boy names, meanings, origins, famous peoples",
  openGraph: {
    title: "Baby Name Nestlings",
    description:
      "Beautiful baby names, girl names, boy names, meanings, origins, famous peoples",
    type: "article",
    locale: "en_US",
    url: `http://babynamenestlings.com/`,
    siteName: "BabyNameNestlings",
    images: [
      {
        url: "baby1.jpg",
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
