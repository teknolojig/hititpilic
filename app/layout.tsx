import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Providers } from "@/components/providers";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: "Hitit Piliç - Kaliteli ve Taze Tavuk Ürünleri",
    template: "%s | Hitit Piliç"
  },
  description: "Hitit Piliç, en kaliteli ve taze tavuk ürünlerini sofranıza getiriyor. Helal kesim, hijyenik üretim ve lezzetli tavuk çeşitleri için Hitit Piliç'i tercih edin.",
  keywords: "hitit piliç, tavuk, piliç, helal kesim, taze tavuk, tavuk ürünleri, beyaz et",
  authors: [{ name: "Hitit Piliç" }],
  creator: "Hitit Piliç",
  publisher: "Hitit Piliç",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Hitit Piliç - Kaliteli ve Taze Tavuk Ürünleri",
    description: "Hitit Piliç, en kaliteli ve taze tavuk ürünlerini sofranıza getiriyor.",
    url: "https://hititpilic.com",
    siteName: "Hitit Piliç",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hitit Piliç - Kaliteli ve Taze Tavuk Ürünleri",
    description: "Hitit Piliç, en kaliteli ve taze tavuk ürünlerini sofranıza getiriyor.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/favicon.png',
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#e74210',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}