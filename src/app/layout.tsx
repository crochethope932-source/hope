import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: "Hope 'Sphere Crochet",
  description:
    'Dans chaque maille une touche d’espoir. Mode, Art du fait main & Formation.',
  icons: {
    icon: {
      url: 'https://i.imgur.com/xAIcGXa.jpeg',
      type: 'image/jpeg',
    },
    shortcut: {
      url: 'https://i.imgur.com/xAIcGXa.jpeg',
      type: 'image/jpeg',
    },
    apple: {
      url: 'https://i.imgur.com/xAIcGXa.jpeg',
      type: 'image/jpeg',
    },
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
      </body>
    </html>
  );
}
