import Button from '@/components/button'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import FooterImage from './components/footerImage'

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
      <body suppressHydrationWarning className={poppins.className + " pt-6 flex flex-col gap-5"}>
        <nav className='flex flex-col items-center gap-6 px-8 py-6'>
        <Image src={"/company/logo.png"} className='w-48' height={25} width={100} alt='Mendunia Logo'/>
          <div className='flex flex-col items-center justify-center text-center gap-3'>
            <h1 className='text-2xl text-dark-grey font-semibold'>Your Gateway to <br/><span className='text-merah-inti font-bold'>Global Education!</span></h1>
            <h2 className='text-xs leading-4 px-2'>Platform yang mempertemukan Pelajar Indonesia dengan Agensi Pendidikan di seluruh Indonesia.</h2>
            <Button text={"Pelajari lebih lanjut"}/>
          </div>
        </nav>

        {children}

        <div className="w-full h-full flex flex-col gap-7 justify-center items-center bg-gradient-to-b from-red-700 via-red-700 to-red-950 py-7">
          <FooterImage/>

          <h1 className='text-white font-semibold text-2xl text-center'>Punya Pertanyaan?</h1>
          
          <Button type={"Secondary"} text={"Tanya Disini"} />

          <Image src={"/company/logo-white.png"} width={200} height={50} alt='Company Logo'/>
          <div className='flex gap-5'>
            {["linkedin", "facebook", "instagram"].map((social, i) => <Image 
              key={`social logo ${i}`}
              src={`/icons/${social}.png`}
              alt={`our ${social} account`}
              width={25}
              height={25}
              />)}
          </div>


          {["Tentang Mendunia", "Hubungi Kami", "Daftarkan Agensi Anda", "Syarat dan Ketentuan"].map((link, i) => 
            <Link className='text-white' key="link" href={"/link"}>
              {link}
            </Link>)}

            <p className='inline-flex justify-center items-center text-white underline gap-1'><Image className='mt-1.5' width={20} height={1} src={"/icons/indo.png"} alt='Current Language'/>Bahasa</p>
        </div>

      </body>
    </html>
  )
}
