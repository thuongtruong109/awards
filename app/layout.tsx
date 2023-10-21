import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "List all certificates Tran Nguyen Thuong Truong has earned",
  metadataBase: new URL("https://awards.thuongtruong.me"),
  title: {
    default: "Thuong Truong's certificates",
    template: `%s | Thuong Truong's certificates`,
  },
  verification: {
    google:
      "google-site-verification=BLJnCIdxtjZ0bhVaGNHa87sDloQ_x8YLR5OkSeh8DqU",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="my-2 flex min-h-[calc(100vh-10.3rem)] flex-col items-center">
          {children}
        </main>
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
