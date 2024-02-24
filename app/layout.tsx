import BgGradient from "@/components/BgGradient";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "../styles/globals.css";

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
  const numbers = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-black dark:bg-none`}>
        <div className="snowflakes" aria-hidden="true">
          {numbers.map((i) => (
            <div className="snowflake" key={i}>
              <Image
                src="/apricot_blossom.png"
                alt="apricot blossom img"
                width={20}
                height={20}
              />
            </div>
          ))}
        </div>

        <Header />
        <main className="my-2 flex min-h-[calc(100vh-10.3rem)] flex-col items-center">
          {children}
        </main>
        <Contact />
        <Footer />

        <BgGradient />
      </body>
    </html>
  );
}
