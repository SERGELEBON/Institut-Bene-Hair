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
  title: "Institut Bene Hair | Salon de Coiffure & Beauté à Abidjan",
  description:
    "Découvrez Institut Bene Hair, l'institut de référence pour vos coiffures et votre beauté à Abidjan. Tresses, tissages, extensions, coloration, soins, onglerie et bien plus.",
  authors: [{ name: "Institut Bene Hair" }],
  keywords: [
    "institut bene hair",
    "bene hair abidjan",
    "coiffure abidjan",
    "tresses",
    "tissages",
    "extensions",
    "onglerie",
    "salon coiffure côte d'ivoire",
  ],
  icons: {
    icon: "/images/logo-bene-hair.png",
    apple: "/images/logo-bene-hair.png",
  },
  openGraph: {
    title: "Institut Bene Hair | Salon de Coiffure & Beauté à Abidjan",
    description:
      "L'institut de référence pour vos coiffures, tresses et soins de beauté à Abidjan",
    siteName: "Institut Bene Hair",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Institut Bene Hair",
    description:
      "Découvrez l'institut de coiffure et de beauté de référence à Abidjan, Côte d'Ivoire",
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
