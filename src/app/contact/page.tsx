import Image from "next/image"
import Form from "./form"

export default function Page()
{
    const contactData = [{
        icon : "/icons/telephone.png",
        title: "Whatsapp",
        contact: "+62 123 4567 8910",
        width: 20,
        height: 23
    },
    {
        icon : "/icons/location.png",
        title: "Email",
        contact: "hello@mendunia.education",
        width: 16,
        height: 23
    },
    {
        icon : "/icons/envelope.png",
        title: "Alamat",
        contact: "Bandung, Indonesia",
        width: 25,
        height: 23
    }]

    return <div className="bg-grey py-2 px-10 gap-10  flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-5">
            <div className="flex flex-col justify-center items-center gap-2">
                <h1 className="text-2xl text-merah-inti font-semibold">Mari Terhubung</h1>
                <div className="h-1 bg-merah-inti w-3/4"/>

            </div>
            <p className="text-center text-xs leading-5">
                Punya pertanyaan atau ingin bekerja sama dengan kami?
                Silahkan hubungi kami melalui kontak dibawah ini atau isi form yang tersedia.
            </p>

            <div className="flex flex-col gap-3">
            {contactData.map((data, i) => <div key={data.title} className="flex items-center gap-2">
                <div className="w-8 h-5 flex justify-center items-center">
                    <Image src={data.icon} alt={data.title + " image"} width={data.width} height={data.height} />
                </div>
                <div className="flex flex-col gap-1 justify-between text-xs">
                    <h2 className="  font-semibold text-merah-inti">{data.title}</h2>
                    <h3>{data.contact}</h3>
                </div>
            </div>)}
        </div>
        </div>

        <Form/>
    </div>
}