import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  Mukta,
  Mukta_Vaani,
  Noto_Serif_Devanagari,
} from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_URL, siteGraphJsonLd } from "@/lib/seo";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sankalp Ayurved Clinic · Where Tradition Meets Healing",
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Ayurveda",
    "Panchakarma",
    "Sankalp Ayurved",
    "Ayurvedic clinic Unjha",
    "Ayurvedic doctor Mehsana",
    "Shirodhara",
    "Nasya",
    "Basti",
    "Kati Basti",
    "Janu Basti",
    "Cupping therapy",
    "Agnikarma",
    "Dr. Ashish Prajapati",
  ],
  applicationName: SITE_NAME,
  authors: [{ name: "Sankalp Ayurved Clinic" }],
  creator: "Sankalp Ayurved Clinic",
  publisher: "Sankalp Ayurved Clinic",
  category: "health",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    locale: "en_IN",
    title: "Sankalp Ayurved Clinic · Where Tradition Meets Healing",
    description: "Where tradition meets healing — authentic Ayurvedic care in Unjha, Gujarat.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sankalp Ayurved Clinic · Where Tradition Meets Healing",
    description: "Where tradition meets healing — authentic Ayurvedic care in Unjha, Gujarat.",
    images: [OG_IMAGE.url],
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2e4034",
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
        <JsonLd data={siteGraphJsonLd} />
        {children}
      </body>
    </html>
  );
}
