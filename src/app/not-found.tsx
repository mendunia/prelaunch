import Button from "@/components/button";
import Link from "next/link";

export default function NotFound() {
    return (
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col text-center">
            <h1 className="text-xl font-bold text-merah-inti">
            Not Found.
            </h1>
            <h2 className="text-merah-inti">Could not find requested resource</h2>
        </div>
        <Link href="/">
            <Button text={"Kembali ke menu utama"}/>
        </Link>

      </div>
    )
  }
  