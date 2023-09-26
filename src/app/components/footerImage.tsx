'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
export default function FooterImage()
{
    const pathname = usePathname()

    if(pathname === "/")
    return (
        <Image height={250} width={250} src="/hero/questioning.png" alt='questioning people image'/>
    )

    return <></>
}