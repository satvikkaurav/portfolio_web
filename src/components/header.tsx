import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FooterBlob } from './footerblob'
type Props = {}

export default function Header({}: Props) {
  const router = useRouter()
  return (
    <main>
         <div className='flex flex-row justify-around content-center text-lg my-5 z-10'>
          <div className='font-semibold text-xl underline'>Satvik Kaurav</div>
          <div className='flex flex-row gap-5'>
            <Link href ="/" ><div className={['cursor-pointer',router.pathname=="/" ? "border-b-4 border-teal-500":""].join(" ")}>Home</div></Link>
            <Link href = "/#projects" ><div className={['cursor-pointer' , router.pathname=="/#projects" ? "border-b-4 border-teal-500":""].join(" ")}>Projects</div></Link>
            <Link href = "/contact"><div className={['cursor-pointer' , router.pathname=="/contact" ? "border-b-4 border-teal-500":""].join(" ")}>Contacts</div></Link>
          </div>
        </div>
    </main>
  )
}