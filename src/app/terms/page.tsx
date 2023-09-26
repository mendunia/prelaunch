import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";

export default function Page()
{
    return <div className="flex flex-col items-center justify-center gap-8 px-8">
        <Image src={"/graphics/maintenance.png"} width={250} height={100} alt="Maintenance Image"/>
        <div className="flex flex-col text-center">
            <h1 className="text-xl font-bold text-merah-inti">
                We are Under Maintenance.
            </h1>
            <h2 className="text-merah-inti">We will be back soon!</h2>
        </div>
        <Link href="/">
            <Button text={"Kembali ke menu utama"}/>
        </Link>

    </div>
}