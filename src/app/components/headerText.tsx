'use client'
import Button from "@/components/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderText()
{
    const path = usePathname();
    if(path === "/about" || path === "/" || path === "/contact") {
        return <div 
            className='animate__animated animate__fadeInUp animate__fast flex flex-col items-center justify-center text-center gap-3'>
            <h1 className='text-2xl text-dark-grey font-semibold'>Your Gateway to <br/><span className='text-merah-inti font-bold'>Global Education!</span></h1>
            <h2 className='text-xs leading-5 px-2 '>Platform yang mempertemukan Pelajar Indonesia dengan Agensi Pendidikan di seluruh Indonesia.</h2>
            
            {path !== "/about" && <Link href={"/about"}><Button text={"Pelajari lebih lanjut"}/></Link>}
          </div>
    }
    return <></>
}