import 'react';
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['300', '400', '500', '700'] 
});

export const metadata: Metadata = {
  title: "PlanBudowlany - Zarządzaj budową, a nie chaosem",
  description: "Proste narzędzie do zarządzania zadaniami, planami i komunikacją na budowie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
