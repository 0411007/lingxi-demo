import type { Metadata, Viewport } from "next";
import { Noto_Sans_SC, Inter } from "next/font/google";
import "./globals.css";

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-noto-sans-sc",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "灵犀 - AI购物助手",
  description: "您的智能购物伴侣，为您提供个性化推荐和搭配建议",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#9B7ED9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${notoSansSC.variable} ${inter.variable} font-sans antialiased`}
        style={{ fontFamily: "var(--font-noto-sans-sc), var(--font-inter), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
