import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header';
import { Project } from '@/components/project';
import { FooterBlob } from '@/components/footerblob';
import { Footer } from '@/components/footer';
import { useState } from 'react';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const data = [
    {
      name : "TaskTribe",
      description : "somekjnaksnd ansddndajsnd,ma skjdnjnjsdsndnaskjndkjnejans",
      image : "/images/projects/tasktribe.png",
      link: "https://task-tribe.vercel.app/splashscreens"
    },
    {
      name : "Alumni Connect",
      description : "somekjnaksnd ansddndajsnd,ma skjdnjnjsdsndnaskjndkjnejans",
      image : "/images/projects/tasktribe.png",
      link: "https://alumniconnect.vercel.app/a"
    },
    {
      name : "TaskTribe",
      description : "somekjnaksnd ansddndajsnd,ma skjdnjnjsdsndnaskjndkjnejans",
      image : "/images/projects/tasktribe.png",
      link: "https://task-tribe.vercel.app/splashscreens"
    }
  ]

  return (
    <main>
      <div className='max-w-screen-lg mx-auto'>
      {/* Header */}
       <Header />

        <div className='flex flex-col sm:flex-row gap-5 pt-4 mt-10 mb-24'>
          <div className='flex gap-5 flex-col justify-center flex-1 px-10'>
            <div className='flex uppercase text-yellow-500 font-medium'>Software Developer</div>
            <div className='flex text-5xl font-medium'>Hello,  my name is Satvik Kaurav</div>
            <div className='flex text-gray-500'>Short text with details about you, what you do or your professional career. You can add more information on the about page.</div>
            <div className='flex gap-2'>
              <Link href={'https://drive.google.com/file/d/1QbeOzCzrGlFU3ooP9CgFZDM-BY99R1yQ/view?usp=drive_link'} target='blank'><button className='px-6 py-1 bg-teal-500 text-white rounded-lg'>Resume</button></Link>
              <Link href={'https://www.linkedin.com/in/satvik-kaurav/'} target='blank'><button className='px-6 py-1 border border-black rounded-lg'>Linkedin</button></Link>
            </div>
          </div>
          <div className='flex flex-column justify-center flex-1 object-cover'>
            <img src='/images/profile_n.svg' className=''></img>
          </div>
        </div>

        {/*  */}
        <div className='flex flex-col mt-10'>
          <h2 className='font-semibold mx-auto text-3xl'>Projects</h2>
          <div className='border rounded-sm border-teal-500 mt-1 w-[4rem] mx-auto mb-6'></div>

          <div className='flex flex-col gap-5'>
            {
              data.map((d, key)=>{
                console.log(key)
                return(
                  <Project flag ={key%2} data={d} key={key}/>
                )
              })
            }
          </div>
        </div>

        {/*  Footer */}
        <Footer />
      </div>
      <FooterBlob/>
      </main>
      
  )
}
