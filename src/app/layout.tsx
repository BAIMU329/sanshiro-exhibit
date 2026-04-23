import type { Metadata } from "next";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "迷途东京 | 三四郎结题展示",
  description:
    "一个以《三四郎》为中心、围绕明治青年成长困境与精神冲突展开的数字展览型结题展示网站。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
