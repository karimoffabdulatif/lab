'use client';
import './globals.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { usePathname } from 'next/navigation'

export default function RootLayout({ children }) {
  const pathname = usePathname()

  const isWelcomePage = pathname === '/'

  return (
    <html lang="uz">
      <body>
        {!isWelcomePage && <Header />}
        <main>{children}</main>
        {!isWelcomePage && <Footer />}
      </body>
    </html>
  )
}
