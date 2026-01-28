import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#D4A574',
  colorScheme: 'light',
}

export const metadata: Metadata = {
  title: 'Sanasya | Premium Bakery Catalogue',
  description: 'Discover handcrafted biscuits, cakes, and desserts. Browse our artisanal collection and place your custom order.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Sanasya | Premium Bakery Catalogue',
    description: 'Handcrafted treats made with love and premium ingredients.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#D4A574" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 relative overflow-x-hidden`}>
        {/* Blurred Logo Background Layer - Subtle, Behind Content */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5" 
            style={{
              backgroundImage: 'url(/logo.png)',
              filter: 'blur(120px)',
              transform: 'scale(2)',
            }} 
          />
        </div>
        
        {/* Content Layer - On Top */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
