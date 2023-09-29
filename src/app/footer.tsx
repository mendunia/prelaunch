import Link from "next/link";
import FooterImage from "./components/footerImage";
import Image from "next/image";

const metalink = [{title: "Tentang Mendunia", url: "/about"}, {title: "Hubungi Kami", url: "/contact"}, {title: "Daftarkan Agensi Anda", url: "https://forms.gle/vfwhYozdwvvGYXmh7"}, {title: "Syarat dan Ketentuan", url: "/terms"}]

export default function Footer()
{
    return(
        <div className="w-full h-full  md:px-8 py-7 md:py-10 lg:h-80 lg:py-14 gap-7  max-sm:justify-center max-sm:items-center flex justify-center bg-gradient-to-b from-red-700 via-red-700 to-red-950  ">
            <div className="w-full max-w-screen-2xl flex flex-col gap-10 md:gap-0 justify-center items-center md:flex-row md:justify-between md:items-start">
            
            <FooterImage/>

            <div className='flex flex-col max-w-[50%]  lg:justify-between justify-start items-start gap-5 md:gap-3'>
                <div className="flex flex-col gap-3">
                <Link href="/" className="md:-mx-3 lg:-mx-5">
                    <Image src={"/company/logo-white.png"} width={250} height={50} alt='Company Logo'/>
                </Link>

                <div className='flex justify-center lg:justify-start gap-5 md:w-24 lg:w-full '>
                    {["linkedin", "facebook", "instagram"].map((social, i) => <Image 
                    key={`social logo ${i}`}
                    src={`/icons/${social}.png`}
                    alt={`our ${social} account`}
                    width={30}
                    height={25}
                    />)}
                </div>
            </div>


            <p className="max-sm:hidden text-light-grey text-xs lg:w-3/4">Semua hak dilindungi undang-undang 2023. PT. Ruang Digital Nusantara</p>
            </div>

            <div className='flex flex-col min-h-full lg:pt-14  justify-center items-center md:items-start md:justify-center  lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:grid-flow-col gap-3  w-fit'>
            {metalink.map((link, i) => 
            <Link className='text-white text-xs lg:text-base text-start' key={`Link ${i}`} href={link.url}>
                {link.title}
            </Link>)}
            <p className='md:hidden inline-flex text-xs justify-center items-center text-white underline gap-1'><Image className='mt-1.5' width={20} height={1} src={"/icons/indo.png"} alt='Current Language'/>Bahasa</p>
            </div>
            </div>
            

      </div>

    )
}