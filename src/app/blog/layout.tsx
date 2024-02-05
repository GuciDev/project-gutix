import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../global.css";
import { Providers } from "@/globalRedux/provider";
import Navbar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tegal ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="mytheme">
      <Providers>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </Providers>
    </html>
  );
}
