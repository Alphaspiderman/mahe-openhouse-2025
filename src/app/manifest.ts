import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MAHE Open House 2025 (MIT Bengaluru)',
    short_name: 'MAHE Open House',
    description: 'The complete Open House schedule for MIT Bengaluru.',
    lang: 'en',
    start_url: '/',
    orientation: 'portrait',
    display: 'standalone',
    background_color: '#85b841',
    theme_color: '#85b841',
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
