import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'MyParadigm Rentals | Find Your Perfect Home',
  description:
    'Discover quality apartments and rental properties with MyParadigm Rentals. Modern living spaces at competitive prices in your area.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
