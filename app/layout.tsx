import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavComponent from "@/components/navbar/nav";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baby Name Nestlings",
  description:
    "Beautiful baby names, girl names, boy names, meanings, origins, famous peoples",
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
          <div>{children}</div>
        </NextUIProvider>
      </body>
    </html>
  );
}
