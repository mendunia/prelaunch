import Button from "@/components/button";
import Carousel, { carouselData } from "@/components/carousel";
import Image from "next/image";
import Link from "next/link";

export default function Page()
{
    const keutunganData : carouselData = [
        {
          imageUrl: "/graphics/student.svg",
          title: "Cari agensi terdekat",
          desc: "Temukan agensi diseluruh Indonesia, mulai dari yang terdekat dengan lokasi anda atau masukkan lokasi tertentu sesuai keinginan anda."
        },
        {
          imageUrl: "/graphics/chat.svg",
          title: "Cek universitas",
          desc: "Temukan beragam informasi dari seluruh universitas didunia, mulai dari biaya hidup, biaya kuliah hingga peringkat universitas."
        },
        {
          imageUrl: "/graphics/university.svg",
          title: "Bandingkan Universitas",
          desc: "Sulit memutuskan universitas mana yang cocok untukmu? Coba manfaatkan fitur perbandingan kami! Bandingkan dua pilihan universitasmu dengan mudah."
        }
      ]

    return <div className="animate__animated animate__fadeInLeft  gap-10 lg:gap-14 flex flex-col justify-center items-center">
        
        <div className="bg-grey flex flex-col gap-10 max-sm:py-8 ">
          <div className="max-sm:hidden flex justify-center w-full">
            <Image className="w-full" src="/hero/banner.png" width={1280} height={360} alt="banner"/>
          </div>

          <div className="md:grid md:grid-cols-2 md:gap-10 px-8 md:pb-10">
          <div className="flex flex-col justify-center items-center gap-4 md:gap-5">
              <h1 className=" text-xl md:text-2xl lg:text-5xl md:text-left md:self-start text-merah-inti font-semibold">Apa itu Mendunia?</h1>
              <p className="text-xs lg:text-base text-center md:text-left  leading-5">
                  Temukan peluang pendidikan global melalui Mendunia, platform inovatif yang mendukung pelajar Indonesia mewujudkan impian kuliah di luar negeri. 
                  Dengan jangkauan luas di seluruh Indonesia, Mendunia memudahkan pencarian agensi pendidikan yang sesuai, dari yang dekat hingga lokasi tertentu. 
                  Komunikasi langsung dengan agensi terpilih semakin mudah di Mendunia, dilengkapi dengan informasi lengkap tentang universitas-universitas di dunia memberi 
                  pandangan menyeluruh tentang biaya, program studi, dan detail penting lainnya. Keamanan menjadi fokus utama kami. Semua agensi dalam Mendunia telah melewati 
                  verifikasi ketat untuk memastikan keberlangsungan dan keabsahan. Jelajahi opsi pendidikan dengan percaya diri bersama Mendunia.
              </p>
              <Link href={"https://forms.gle/vfwhYozdwvvGYXmh7"}>
              <Button text={"Daftarkan agensi anda. Gratis!"}/>

              </Link>
          </div>
          <div className="max-sm:hidden py-14  lg:bg-gray-100 rounded-2xl flex justify-center ">
            <Image className="py-14 lg:py-10" src="/hero/banner-logo.png" width={500} height={200} alt="banner"/>
          </div>
          </div>
        </div>
       
        

      <div className="flex flex-col gap-5 lg:gap-20 max-sm:w-3/4 max-sm:pb-14 md md:gap-10 justify-center items-center md:px-8">
        <h1 className="text-xl md:text-2xl lg:text-5xl text-merah-inti font-semibold text-center md:self-start  ">Apa saja yang bisa anda lakukan?</h1>
        <Carousel className="flex overflow-auto md:grid md:grid-cols-3 " data={["s"]} id='Keuntungan'>
                {keutunganData.map((keuntungan, i) => <div className={`min-w-full max-sm:max-w-[50%] text-center flex flex-col gap-3 justify-center md:justify-start items-center min-h-full  `} key={"Keuntungan " + i}>
                    <Image className="md:w-14 md:h-16 lg:w-24 lg:h-32 lg:pb-8" src={keuntungan.imageUrl} width={250} height={50} alt={keuntungan.title}/>
                    <h1 className='font-semibold lg:text-2xl text-dark-grey'>{keuntungan.title}</h1>
                    <p className='text-xs lg:text-base leading-5 px-4'>{keuntungan.desc}</p>
                </div>)}
            </Carousel>
      </div>

      <div className='relative w-full pb-5 max-sm:hidden'>
        <Image className="w-full" src='/hero/banner-qna.png' width={1280} height={360} alt='qna-background'/>
        <div className='absolute left-5 lg:left-10 top-8 lg:top-16 flex flex-col gap-6'>
          <h1 className='text-xl md:text-2xl lg:text-5xl lg:leading-snug font-semibold text-white md:w-3/4'>Masih punya pertanyaan tentang kami?</h1>
          <Link href={"/contact"}>
            <Button type='Secondary' text={"Tanya disini"} />
          </Link>
        </div>
      </div>
      

    </div>
}