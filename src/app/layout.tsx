import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Homeschool App',
  description: 'A modern foundation for building homeschool applications',
  authors: [{ name: 'Matt Drouhard', email: 'matt.drouhard@betterup.co' }],
  keywords: ['homeschool', 'education', 'learning', 'next.js', 'react'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
