'use client';

import Button from '@/components/button';
import { Modal } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PopUpModal(props : { openModal : boolean | undefined, setOpenModal : (a : boolean) => void }) {

  return (
    <>
      <Modal className='grid place-content-center items-center bg-black bg-opacity-50 transition-all' show={props.openModal} size="md" popup onClose={() => props.setOpenModal(false)}>
        <div className='w-64'>
            <Modal.Body>
            <div className='w-full h-full flex flex-col gap-5 py-5 justify-center items-center'>
                <Image src="/icons/paperplane.svg" width={50} height={50} alt='icon sent' loading='eager'/>
                <p className='text-center text-sm'> Terima kasih!<br/>
                    Pesan kamu telah terkirim, kami akan segera membalas pesanmu melalui email. 
                </p>
                <Link href={"/"}>
                    <Button text={"Kembali ke menu utama"}/>
                </Link>

            </div>
            </Modal.Body>
        </div>
      </Modal>
    </>
  )
}


