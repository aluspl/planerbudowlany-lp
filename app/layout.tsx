import 'react';
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['300', '400', '500', '700'] 
});

export const metadata: Metadata = {
  metadataBase: new URL('https://planbudowlany.online'),
  title: "PlanBudowlany - Zarządzaj budową, a nie chaosem.",
  description: "PlanBudowlany to proste narzędzie, które gromadzi wszystkie zadania, plany, kosztorysy i komunikację w jednym, uporządkowanym miejscu. Koniec z setkami maili i nieporozumień.",
  openGraph: {
    title: "Zarządzaj budową, a nie chaosem.",
    description: "PlanBudowlany to proste narzędzie, które gromadzi wszystkie zadania, plany, kosztorysy i komunikację w jednym, uporządkowanym miejscu. Koniec z setkami maili i nieporozumień.",
    images: [
      {
        url: '/Cover.png',
        width: 1200,
        height: 630,
        alt: 'PlanBudowlany - Zarządzaj budową, a nie chaosem.',
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Zarządzaj budową, a nie chaosem.",
    description: "PlanBudowlany to proste narzędzie, które gromadzi wszystkie zadania, plany, kosztorysy i komunikację w jednym, uporządkowanym miejscu. Koniec z setkami maili i nieporozumień.",
    images: ['/Cover.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
