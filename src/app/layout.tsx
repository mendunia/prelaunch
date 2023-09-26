import Button from '@/components/button'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import FooterImage from './components/footerImage'
import HeaderText from './components/headerText'
import 'animate.css';

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Mendunia',
  description: 'Platform yang mempertemukan Pelajar Indonesia dengan Agensi Pendidikan di seluruh Indonesia.',
}

const metalink = [{title: "Tentang Mendunia", url: "/about"}, {title: "Hubungi Kami", url: "/contact"}, {title: "Daftarkan Agensi Anda", url: "/"}, {title: "Syarat dan Ketentuan", url: "/terms"}]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body suppressHydrationWarning className={poppins.className + " min-h-screen  justify-between flex flex-col gap-5"}>
        <nav className='flex flex-col items-center gap-6 px-8 py-6'>

        <Link href="/">
        <Image src={"/company/logo.png"} className='w-48' height={25} width={100} alt='Mendunia Logo'/>
          </Link>

        <HeaderText/>
        </nav>

        {children}

        <div className="w-full h-full flex flex-col gap-7 justify-center items-center bg-gradient-to-b from-red-700 via-red-700 to-red-950 py-7">
          <FooterImage/>

          <Link href="/">
            <Image src={"/company/logo-white.png"} width={200} height={50} alt='Company Logo'/>
          </Link>

          <div className='flex gap-5'>
            {["linkedin", "facebook", "instagram"].map((social, i) => <Image 
              key={`social logo ${i}`}
              src={`/icons/${social}.png`}
              alt={`our ${social} account`}
              width={25}
              height={25}
              />)}
          </div>


          <div className='flex flex-col justify-center items-center gap-3'>
          {metalink.map((link, i) => 
            <Link className='text-white text-xs' key={`Link ${i}`} href={link.url}>
              {link.title}
            </Link>)}
            <p className='inline-flex text-xs justify-center items-center text-white underline gap-1'><Image className='mt-1.5' width={20} height={1} src={"/icons/indo.png"} alt='Current Language'/>Bahasa</p>

          </div>

        </div>

      </body>
    </html>
  )
}
