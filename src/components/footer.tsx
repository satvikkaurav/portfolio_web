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
          <div className='flex items-center justify-center text-4xl gap-4'>
            <Link href={'https://www.linkedin.com/in/satvikkaurav'} target='blank'><AiFillLinkedin/></Link>
            <Link href={'https://github.com/satvikkaurav/'} target='blank'><AiFillGithub /></Link>
            <Link href={'https://leetcode.com/satvik-kaurav'} target='blank'><SiLeetcode /></Link>
            <Link href={'https://www.instagram.com/satvik_kaurav/'} target='blank'><AiFillInstagram /></Link>
          </div>
        </div>
    </div>
  )
}