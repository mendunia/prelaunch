import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";

export default function Page()
{
    return <div className="flex flex-col items-center justify-center gap-8 lg:gap-16 px-8 lg:py-32">
        <Image className="md:w-3/4 lg:w-1/2" src={"/graphics/maintenance.svg"} width={250} height={100} alt="Maintenance Image"/>
        <div className="flex flex-col lg:gap-5 text-center">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-merah-inti">
                We are Under Maintenance.
            </h1>
            <h2 className="text-merah-inti md:text-xl lg:text-2xl">We will be back soon!</h2>
        </div>
        <Link href="/">
            <Button text={"Kembali ke menu utama"}/>
        </Link>

    </div>
}