import Button from '@/components/button'
import Carousel, { carouselData } from '@/components/carousel'
import Image from 'next/image'
import Link  from 'next/link'
const keutunganData : carouselData = [
  {
    imageUrl: "/graphics/student.svg",
    title: "Jangkau Lebih Banyak siswa",
    desc: "Perluas jangkauan bisnis anda hingga keseluruh Indonesia, sehingga peminat kuliah di luar negeri akan dengan mudah menemukan jejak Anda."
  },
  {
    imageUrl: "/graphics/chat.svg",
    title: "Fitur Percakapan Langsung",
    desc: "Menghubungkan anda secara pribadi dengan para calon siswa."
  },
  {
    imageUrl: "/graphics/university.svg",
    title: "Profile Universitas Terupdate",
    desc: "Di Mendunia kami menyediakan informasi universitas dari seluruh dunia, sebagai informasi tambahan."
  }
]

const howToData : carouselData = [
  {
    imageUrl: "/hero/register.png",
    title: "Registrasi",
    desc: "Bergabunglah dengan jaringan global agensi pendidikan melalui Mendunia dengan langkah pertama: registrasi. Daftarkan agensi pendidikan Anda dengan mudah melalui menu registrasi di idnmendunia.id untuk memperluas cakupan bisnis Anda."
  }, 
  {
    imageUrl: "/hero/tablet.png",
    title: "Isi detail",
    desc: "Lengkapi profil agensi pendidikan Anda dengan informasi mendalam. Isi detail ini memberikan kesempatan bagi tim Mendunia untuk menilai status dan kredibilitas agensi Anda, memastikan bahwa informasi yang tersedia akurat dan dapat dipercaya."
  },
  {
    imageUrl: "/hero/handshake.png",
    title: "Verifikasi",
    desc: "Setelah Anda mengisi detail, agensi Anda akan melalui proses verifikasi. Dalam waktu maksimum 3x24 jam, tim Mendunia akan memeriksa dan mengonfirmasi informasi yang Anda berikan, menjaga kualitas dan integritas platform."
  },
  {
    imageUrl: "/hero/talking.png",
    title: "Temui klien anda",
    desc: "Setelah lulus proses verifikasi, agensi pendidikan Anda siap untuk ditemukan oleh calon siswa yang bersemangat meraih pendidikan luar negeri. Melalui platform Mendunia, Anda dapat menjembatani mereka dengan peluang pendidikan yang sesuai dengan aspirasi mereka."
  }
]

export default function Home() {
  return (
    <div className="flex flex-col gap-5 md:px-5">

      <div className='max-sm:hidden animate__animated animate__fadeIn animate__slow relative w-full flex'>
        <Image className='w-full' src={"/hero/banner.png"} width={1280} height={360} alt='Banner'/>
        <div className='text-white absolute bottom-4 right-10 flex flex-col gap-1'>
          <p className='text-xs text-center'>Apa itu Mendunia?</p>
          <Link href="/about">
            <Button type='Secondary' text={"Pelajari lebih lanjut"}/>

          </Link>
        </div>
      </div>

      <div className=' w-full flex flex-col bg-grey p-5 md:gap-5 px-8 '>
        <h1 className='animate__animated animate__slideInUp w-full text-center font-bold text-merah-inti text-xl md:text-2xl'>Keuntungan bergabung dengan Mendunia</h1>
          <Carousel data={["s"]} id='Keuntungan'>
              {keutunganData.map((keuntungan, i) => <div className={`max-sm:min-w-fit max-sm:[animate__animated] animate__fadeInUp md:w-1/3 py-5 px-5 text-center flex flex-col gap-3 md:gap-4 justify-center md:justify-start items-center `} key={"Keuntungan " + i}>
                <div className='flex flex-col justify-center items-center gap-3'>
                  <div className='w-24 h-16 flex justify-center'>
                  <Image src={keuntungan.imageUrl} width={50} height={50} alt={keuntungan.title} loading='eager'/>

                  </div>
                <h1 className='font-semibold text-dark-grey'>{keuntungan.title}</h1>
                </div>

                <p className='text-xs leading-5'>{keuntungan.desc}</p>
              </div>)}

          </Carousel>
      </div>

      <div className=' w-full flex flex-col px-8'>
        <h1 className='animate__animated animate__slideInUp w-full text-center font-bold text-merah-inti text-xl md:text-2xl'>Bagaimana cara mendaftarkan agensi Anda?</h1>
        <Carousel className=' flex overflow-auto gap-10' data={["s"]} id='Keuntungan'>
          {howToData.map((keuntungan, i) => 
            <li className={` max-sm:min-w-fit md:min-w-[33.3%] px-8 md:px-0 py-5`} key={"Keuntungan " + i}>
              <div className=' pb-4 min-h-full rounded-2xl shadow flex flex-col gap-3'>
                <Image src={keuntungan.imageUrl} width={500} height={50} alt={keuntungan.title}/>
                <div className='px-4 flex flex-col gap-3 justify-center items-center'>
                  <h1 className='font-semibold text-dark-grey'>{keuntungan.title}</h1>
                  <p className='text-xs leading-5'>{keuntungan.desc}</p>
                </div>
              </div>
          </li>)}
        </Carousel>
      </div>

      <div className='w-full flex justify-center px-8 py-5'>
        <div className="flex justify-center transition-all animate-pulse w-full">
            <Button text={"Daftarkan agensi anda. Gratis!"}/>
        </div>
      </div>

      <div className='relative w-full max-sm:hidden md:pb-5'>
        <Image className='w-full' src='/hero/banner-qna.png' width={1280} height={360} alt='qna-background'/>
        <div className='absolute left-5 top-8 flex flex-col gap-6'>
          <h1 className='text-3xl font-semibold text-white'>Punya Pertanyaan?</h1>
          <Link href={"/contact"}>
            <Button type='Secondary' text={"Tanya disini"} />
          </Link>
        </div>
      </div>
        
    </div>
  )
}
