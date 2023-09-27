import Link from "next/link";
import FooterImage from "./components/footerImage";
import Image from "next/image";

const metalink = [{title: "Tentang Mendunia", url: "/about"}, {title: "Hubungi Kami", url: "/contact"}, {title: "Daftarkan Agensi Anda", url: "/"}, {title: "Syarat dan Ketentuan", url: "/terms"}]

export default function Footer()
{
    return(
        <div className="w-full h-full flex flex-col md:flex-row md:justify-between md:px-8 py-7 md:py-10 gap-7  max-sm:justify-center max-sm:items-center bg-gradient-to-b from-red-700 via-red-700 to-red-950  ">
            <FooterImage/>

            <div className='flex flex-col max-w-[50%] justify-start items-start gap-5 md:gap-3'>
                <div className="flex flex-col gap-3">
                <Link href="/" className="md:-mx-3">
                    <Image src={"/company/logo-white.png"} width={200} height={50} alt='Company Logo'/>
                </Link>

                <div className='flex justify-center gap-5 md:w-24'>
                    {["linkedin", "facebook", "instagram"].map((social, i) => <Image 
                    key={`social logo ${i}`}
                    src={`/icons/${social}.png`}
                    alt={`our ${social} account`}
                    width={25}
                    height={25}
                    />)}
                </div>
            </div>
            

            <p className="max-sm:hidden text-light-grey text-xs">Semua hak dilindungi undang-undang 2023. PT. Ruang Digital Nusantara</p>
            </div>
            
            <div className='flex flex-col min-h-full justify-center items-center md:items-start md:justify-center gap-3'>
            {metalink.map((link, i) => 
            <Link className='text-white text-xs' key={`Link ${i}`} href={link.url}>
                {link.title}
            </Link>)}
            <p className='md:hidden inline-flex text-xs justify-center items-center text-white underline gap-1'><Image className='mt-1.5' width={20} height={1} src={"/icons/indo.png"} alt='Current Language'/>Bahasa</p>
            </div>

      </div>

    )
}