import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "赤羽さん勉強会資料",
  description: "赤羽雄二さんのオンラインサロン・勉強会資料アーカイブ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
