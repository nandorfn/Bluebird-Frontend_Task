import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import StoreProvider from './StoreProvider'
import { ToastContainer } from 'react-toastify'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bluebird',
  description: 'Bluebird Group merupakan perusahaan transportasi yang menyediakan taksi, transportasi online, travel, hingga bus pariwisata dengan berbagai tipe sesuai kebutuhan Anda.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={inter.className}>
          <ToastContainer
            autoClose={2000}
            hideProgressBar={true}
          />
          <Navbar />
          {children}
          <Footer />
        </body>
      </StoreProvider>
    </html>
  )
}
