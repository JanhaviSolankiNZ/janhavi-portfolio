import type { Metadata } from 'next'
import { DM_Serif_Display, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Janhavi Solanki — Frontend & Full-Stack Developer Auckland',
  description:
    'Frontend and full-stack engineer with 4+ years building React, Next.js, and Node.js applications. Based in Auckland, NZ — available now, no sponsorship required.',
  keywords: ['React developer Auckland', 'Next.js developer NZ', 'frontend engineer New Zealand', 'TypeScript developer'],
  openGraph: {
    title: 'Janhavi Solanki — Frontend & Full-Stack Developer',
    description: 'Building fast, accessible web apps. Auckland NZ · Open work visa · Available now.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}