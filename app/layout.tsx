import React from "react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const _inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: {
    default:
      "МАКСФЛОК — Универсальное дезинфицирующее и дезодорирующее средство",
    template: "%s | МАКСФЛОК — ООО НПО Принцепс",
  },
  description:
    "Профессиональное дезинфицирующее и дезодорирующее средство для ЖКХ, здравоохранения, птицеводства, пищевой промышленности. Одобрено МЧС и Роспотребнадзором.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
