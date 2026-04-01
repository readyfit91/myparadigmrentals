export default function manifest() {
  return {
    name: 'Paradigm Rentals',
    short_name: 'Paradigm Rentals',
    description: 'Quality rental properties — find your home with Paradigm Rentals.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0369a1',
    icons: [
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
