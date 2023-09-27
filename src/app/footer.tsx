import Link from "next/link";
import FooterImage from "./components/footerImage";
import Image from "next/image";

const metalink = [{title: "Tentang Mendunia", url: "/about"}, {title: "Hubungi Kami", url: "/contact"}, {title: "Daftarkan Agensi Anda", url: "/"}, {title: "Syarat dan Ketentuan", url: "/terms"}]

export default function Footer()
{
    return(
        <div className="w-full h-full flex flex-col gap-7 justify-center items-center bg-gradient-to-b from-red-700 via-red-700 to-red-950 py-7">
        <FooterImage/>

        <div className='flex flex-col justify-center items-center gap-5'>
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
        </div>
        
        <div className='flex flex-col md:grid md:grid-rows-3 md:grid-flow-row justify-center items-center gap-3'>
        {metalink.map((link, i) => 
          <Link className='text-white text-xs' key={`Link ${i}`} href={link.url}>
            {link.title}
          </Link>)}
          <p className='md:hidden inline-flex text-xs justify-center items-center text-white underline gap-1'><Image className='mt-1.5' width={20} height={1} src={"/icons/indo.png"} alt='Current Language'/>Bahasa</p>
        </div>

      </div>

    )
}