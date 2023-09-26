'use client';

import Button from '@/components/button';
import { Modal } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PopUpModal(props : { openModal : boolean | undefined, setOpenModal : (a : boolean) => void }) {

  return (
    <>
      <Modal theme={{content: {inner: "rounded-3xl bg-white"}}} className='grid place-content-center items-center bg-black bg-opacity-50 transition-all' show={props.openModal} size="md" popup onClose={() => props.setOpenModal(false)}>
            <Modal.Body className='w-64 '>
            <div className='px-5 w-full h-full flex flex-col gap-5 py-5 justify-center items-center'>
                <Image src="/icons/paperplane.svg" width={50} height={50} alt='icon sent' loading='eager'/>
                <p className='text-center text-sm'> Terima kasih!<br/>
                    Pesan kamu telah terkirim, kami akan segera membalas pesanmu melalui email. 
                </p>
                <Link href={"/"}>
                    <Button text={"Kembali ke menu utama"}/>
                </Link>

            </div>
            </Modal.Body>
            <Modal.Footer className='flex flex-col gap-1 rounded-b-full'>
            <div className='h-1 w-full bg-red-800'/>
            <div className='rounded-b-3xl h-4 w-full bg-red-800'/>

            </Modal.Footer>

      </Modal>
    </>
  )
}


