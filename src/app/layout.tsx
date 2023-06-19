import { Inter } from 'next/font/google'

import Footer from '@/components/organisms/Footer';

import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pascola restaurant',
  description: 'Traditional mexican food restaurant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
