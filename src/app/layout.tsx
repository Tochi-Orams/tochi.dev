import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import Providers from "./Context/Providers";
import MusicPlayer from "./Components/MusicPlayer";
import Nav from "./Components/Nav";
import MobileNav from "./Components/MobileNav";
import Script from "next/script";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = (await headers()).get("x-nonce") || "";

  return (
    <html lang="en" className="relative">
      <Script
        id="Google Tag"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','G-09GLEN08ZQ')`,
        }}
      />
      <Providers>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Script
            async
            src="https://www.googletagmanager.com/ns.html?id=G-09GLEN08ZQ"
            id="google-tag"
          ></Script>
          <Script id="tag-code">
            {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-09GLEN08ZQ');`}
          </Script>
          <Nav />
          <MobileNav />
          <MusicPlayer />
          {children}
        </body>
      </Providers>
    </html>
  );
}
