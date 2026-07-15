import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Mukta,
  Mukta_Vaani,
  Noto_Serif_Devanagari,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const mukta = Mukta({
  subsets: ["latin", "devanagari"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-mukta",
  display: "swap",
});

const muktaVaani = Mukta_Vaani({
  subsets: ["latin", "gujarati"],
  weight: ["400", "500", "600"],
  variable: "--font-mukta-vaani",
  display: "swap",
});

const notoSerifDevanagari = Noto_Serif_Devanagari({
  subsets: ["latin", "devanagari"],
  weight: ["400", "500", "600"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sankalp Ayurved Clinic · Where Tradition Meets Healing",
  description:
    "Authentic Panchakarma therapies in a pure, natural setting — rooted in 5,000 years of Ayurvedic wisdom, at Sankalp Ayurved Clinic, Unjha. Consult Dr. Ashish J. Prajapati (B.A.M.S).",
  keywords: [
    "Ayurveda",
    "Panchakarma",
    "Sankalp Ayurved",
    "Unjha",
    "Mehsana",
    "Shirodhara",
    "Nasya",
    "Basti",
  ],
  openGraph: {
    title: "Sankalp Ayurved Clinic",
    description: "Where tradition meets healing — authentic Ayurvedic care in Unjha, Gujarat.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${mukta.variable} ${muktaVaani.variable} ${notoSerifDevanagari.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
