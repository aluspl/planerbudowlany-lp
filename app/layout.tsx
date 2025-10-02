import 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PlanBudowlany - Zarządzaj budową jak profesjonalista",
  description: "Proste narzędzie, które gromadzi wszystkie zadania, plany, kosztorysy i komunikację w jednym, uporządkowanym miejscu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
