import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navigator from "@/components/Navigator";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thuong Truong's certificates",
  description: "List all certificates Tran Nguyen Thuong Truong has earned",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigator />
        <main className="my-4">{children}</main>
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
