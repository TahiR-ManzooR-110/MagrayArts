import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/header'
import CartSidebar from '@/components/layout/cart-sidebar'
import ClientProvider from '@/components/providers/client-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MagrayArts - Authentic Kashmiri Handicrafts',
  description: 'Discover exquisite Kashmiri handicrafts including Pashmina shawls, carpets, wood carvings, and traditional artifacts.',
  keywords: 'Kashmir, handicrafts, Pashmina, carpets, wood carving, traditional art',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <CartSidebar />
        </ClientProvider>
      </body>
    </html>
  )
}
