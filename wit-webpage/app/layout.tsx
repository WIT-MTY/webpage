import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './components/Nav/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wit',
  description: 'Webpage for Wit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav>
          <div className='px-10 pt-2 bg-white'>
            {children}
          </div>
        </Nav>
      </body>
    </html>
  )
}
