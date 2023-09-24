import Button from '@/components/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-6 px-8 py-6">
      <Image src={"/company/logo.png"} className='w-48' height={25} width={100} alt='Mendunia Logo'/>

      <div className='flex flex-col items-center justify-center text-center gap-2'>
        <h1 className='text-2xl text-dark-grey font-semibold'>Your Gateway to <br/><span className='text-merah-inti font-bold'>Global Education!</span></h1>
        <h2 className='text-xs leading-4 px-2'>Platform yang mempertemukan Pelajar Indonesia dengan Agensi Pendidikan di seluruh Indonesia.</h2>
        <Button/>
      </div>
    </main>
  )
}
