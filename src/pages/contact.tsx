import { Footer } from '@/components/footer'
import { FooterBlob } from '@/components/footerblob'
import Header from '@/components/header'
import React from 'react'

type Props = {}

export default function Contact(props : Props) {
  return (
    <>
    <div className='max-w-screen-lg mx-auto'>
      <Header />

      {/*  */}
      <main >
        <div className='flex flex-col items-center'>
          <h2 className='text-xl flex font-semibold mb-4'>Work With Me</h2>
          <div className='flex flex-col w-80'>
          <label className='py-1'>Name</label>
          <input type='text' className='p-1 rounded-lg mb-2'></input>
          <label>Email</label>
          <input type='text' className='p-1 rounded-lg mb-2'></input>
          <label>Message</label>
          <textarea className='p-1 rounded-lg mb-2'></textarea>
          <input type='submit' className='border-2 rounded-lg bg-teal-500 text-white mt-2 py-1'></input>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
    <FooterBlob/>
    </>

  )
}