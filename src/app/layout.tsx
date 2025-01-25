import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Providers from "./Context/Providers";
import MusicPlayer from "./Components/MusicPlayer";
import Nav from "./Components/Nav";
import MobileNav from "./Components/MobileNav";

// config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tochi Oramasionwu",
  description: "A collection of Tochi's web and mobile development work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <Providers>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Nav />
          <MobileNav />
          <MusicPlayer />
          {children}
        </body>
      </Providers>
    </html>
  );
}
