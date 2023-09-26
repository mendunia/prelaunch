'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Button from '@/components/button'
export default function FooterImage()
{
    const pathname = usePathname()

    if(pathname === "/")
    return (
        <div className='flex flex-col gap-3'>
            <Image height={250} width={250} src="/hero/questioning.png" alt='questioning people image'/>

            <h1 className='text-white font-semibold text-2xl text-center'>Punya Pertanyaan?</h1>

            <div className='flex justify-center'>
                <Button type={"Secondary"} text={"Tanya Disini"} />

            </div>

        </div>
    )

    return <></>
}