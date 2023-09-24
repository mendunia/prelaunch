import Button from '@/components/button'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Image from 'next/image'

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
      
      <body suppressHydrationWarning className={poppins.className + " py-6"}>
        <nav className='flex flex-col items-center gap-6 px-8 py-6'>
        <Image src={"/company/logo.png"} className='w-48' height={25} width={100} alt='Mendunia Logo'/>
          <div className='flex flex-col items-center justify-center text-center gap-3'>
            <h1 className='text-2xl text-dark-grey font-semibold'>Your Gateway to <br/><span className='text-merah-inti font-bold'>Global Education!</span></h1>
            <h2 className='text-xs leading-4 px-2'>Platform yang mempertemukan Pelajar Indonesia dengan Agensi Pendidikan di seluruh Indonesia.</h2>
            <Button text={"Pelajari lebih lanjut"}/>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
