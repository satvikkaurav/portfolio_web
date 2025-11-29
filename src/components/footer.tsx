import Link from 'next/link'
import React from 'react'
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import {SiLeetcode} from 'react-icons/si'
import { FooterBlob } from './footerblob'

type Props = {}

export const Footer = (props: Props) => {
  return (
    <div>
        <div className='flex flex-col mt-10 items-center'>
          <div className='flex items-center justify-center text-4xl gap-4 text-white dark:text-gray-900'>
            <Link href={'https://www.linkedin.com/in/satvik-kaurav'} target='blank' className='hover:opacity-80 transition-opacity'><AiFillLinkedin/></Link>
            <Link href={'https://github.com/satvikkaurav/'} target='blank' className='hover:opacity-80 transition-opacity'><AiFillGithub /></Link>
            <Link href={'https://leetcode.com/satvik-kaurav'} target='blank' className='hover:opacity-80 transition-opacity'><SiLeetcode /></Link>
            <Link href={'https://www.instagram.com/satvik_kaurav/'} target='blank' className='hover:opacity-80 transition-opacity'><AiFillInstagram /></Link>
          </div>
        </div>
    </div>
  )
}