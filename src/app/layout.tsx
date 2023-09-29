import Button from '@/components/button'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import FooterImage from './components/footerImage'
import HeaderText from './components/headerText'
import 'animate.css';
import Header from './header'
import Footer from './footer'

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Mendunia',
  description: 'Platform yang mempertemukan Pelajar Indonesia dengan Agensi Pendidikan di seluruh Indonesia.',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body suppressHydrationWarning className={poppins.className + " min-h-screen flex flex-col"}>
        <main className='h-full lg:px-10 xl:px-18 2xl:px-36 grow'>
          <Header/>

          {children}
        </main>
        <Footer/>       
      </body>
    </html>
  )
}
