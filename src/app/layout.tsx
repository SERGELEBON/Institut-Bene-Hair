import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Sekoba Coiffure | Salon de Coiffure à Abidjan",
  description:
    "Découvrez Sekoba Coiffure, le salon de référence pour vos coiffures à Abidjan. Tressage, défrisage, coloration, coupes modernes et bien plus.",
  authors: [{ name: "Sekoba Coiffure" }],
  keywords: [
    "coiffure abidjan",
    "tressage",
    "défrisage",
    "coloration",
    "salon coiffure côte d'ivoire",
  ],
  icons: {
    icon: "/images/logo-sekoba.png",
    apple: "/images/logo-sekoba.png",
  },
  openGraph: {
    title: "Sekoba Coiffure | Salon de Coiffure à Abidjan",
    description:
      "Le salon de référence pour vos coiffures et soins capillaires à Abidjan",
    url: "https://www.sekoba-coiffure.ci",
    siteName: "Sekoba Coiffure",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sekoba Coiffure",
    description:
      "Découvrez le salon de coiffure de référence à Abidjan, Côte d'Ivoire",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${cormorantGaramond.variable} antialiased bg-cream-100 text-brown-900`}
      >
        {children}
      </body>
    </html>
  );
}
