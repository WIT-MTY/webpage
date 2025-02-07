import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head';
import Nav from './components/Nav/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wit',
  description: 'Webpage for Wit',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className} >
        <Nav>
          <div className='h-full'>
            {children}
          </div>
        </Nav>
      </body>
    </html>
  )
}
