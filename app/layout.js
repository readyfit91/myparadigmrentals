import './globals.css';

export const metadata = {
  title: 'MyParadigm Rentals | Find Your Perfect Home',
  description:
    'Discover quality apartments and rental properties with MyParadigm Rentals. Modern living spaces at competitive prices in your area.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
