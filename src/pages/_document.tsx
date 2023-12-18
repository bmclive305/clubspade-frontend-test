import { Html, Head, Main, NextScript } from 'next/document'


export const metadata = {
  title: 'ClubSpade',
  description: 'Spades, Solitaire and more with real players',
  generator: 'Next.js',
  applicationName: 'ClubSpade',
  referrer: 'origin-when-cross-origin',
  keywords: ['Spades', 'Solitaire', 'Card Game'],
  authors: [{ name: 'DavianC' }],
  creator: 'DavianC',
  publisher: 'BMC LIVE LLC',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
