import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mircasoft | AI Destekli Uygulama ve Oyunlar",
  description:
    "Mircasoft tarafından hazırlanan yapay zeka destekli uygulama ve oyunlar için bilgiler, indirme bağlantıları, yasal şartlar ve gizlilik politikası."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
