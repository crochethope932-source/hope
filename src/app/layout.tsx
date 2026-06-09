import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import ChatAssistant from '@/components/landing/chat-assistant';

const HSC_LOGO = 'https://i.imgur.com/xAIcGXa.jpeg';

export const metadata: Metadata = {
  title: "Hope 'Sphere Crochet — Créations Artisanales & Formations Crochet",
  description:
    "HopeSphere Crochet — Vêtements et accessoires faits main au Bénin. Robes, corsets, bikinis et pièces uniques sur mesure. Formations en présentiel (Module A & B, 45 000 – 75 000 F CFA) et en ligne. Contactez-nous sur WhatsApp !",
  openGraph: {
    title: "Hope 'Sphere Crochet — Mode Artisanale & Formation",
    description:
      "Chaque maille, une touche d'espoir. Créations crochet sur mesure et formations au Bénin. Découvrez notre galerie et inscrivez-vous !",
    url: 'https://hopesphere.web.app',
    siteName: "Hope 'Sphere Crochet",
    images: [
      {
        url: 'https://i.imgur.com/1D2yVnH.jpeg',
        width: 1200,
        height: 630,
        alt: "Hope 'Sphere Crochet — Ensemble Royal Frangé, création artisanale",
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hope 'Sphere Crochet — Mode Artisanale & Formation",
    description:
      "Créations crochet sur mesure et formations au Bénin. Vêtements, bikinis, robes et accessoires fait main.",
    images: ['https://i.imgur.com/1D2yVnH.jpeg'],
  },
  icons: {
    icon: { url: HSC_LOGO, type: 'image/jpeg' },
    shortcut: { url: HSC_LOGO, type: 'image/jpeg' },
    apple: { url: HSC_LOGO, type: 'image/jpeg' },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Belleza&family=Literata:opsz@6..72&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <ChatAssistant />
      </body>
    </html>
  );
}
