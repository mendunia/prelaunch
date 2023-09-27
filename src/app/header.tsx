import Image from "next/image";
import Link from "next/link";
import HeaderText from "./components/headerText";

export default function Header()
{
    return (
        <nav className='flex flex-col items-center md:items-start gap-6 px-8 py-6'>

        <div className='flex w-full justify-between'>
          <Link href="/">
            <Image src={"/company/logo.png"} className='w-48' height={25} width={100} alt='Mendunia Logo'/>
          </Link>

        </div>
        
        <HeaderText/>

        </nav>
    )
}