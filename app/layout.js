// app/layout.js
import './globals.css'
import Header from './components/header'
import Footer from './components/footer'

export const metadata = {
  title: 'My Physics Lab',
  description: 'Interaktiv maktab fizikasi laboratoriyasi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
