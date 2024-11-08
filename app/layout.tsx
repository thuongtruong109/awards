import Contact from "@/app/_components/section/Contact";
import Footer from "@/app/_components/section/Footer";
import Header from "@/app/_components/section/Header";
import Snow from "@/app/_components/Snow";
import { siteConfig } from "@/shared";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import RetroGrid from "./_components/background/RetroGrid";
import LightBg from "@/app/_components/background/LightBg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  robots: { index: true, follow: true },
  verification: {
    google: siteConfig.googleSiteVerificationId,
  },
  icons: {
    icon: siteConfig.icons.icon,
    shortcut: siteConfig.icons.icon,
    apple: siteConfig.icons.icon,
  },
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: siteConfig.img.opengraph,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: siteConfig.img.twitter,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-black relative container mx-auto`}
      >
        <Snow />
        <LightBg />
        <Header />
        <RetroGrid />
        <main className="animate-slideUpEnter my-2 flex min-h-[calc(100vh-10.3rem)] flex-col items-center">
          {children}
        </main>
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
