import Image from 'next/image'
import React from 'react'

type Props = {}

export const FooterBlob = (props: Props) => {
  return (
    <div>
         <div className='sticky z-0'>
        <Image alt="" src = '/images/blob.svg' height={20} width={20} className='w-full'></Image>
      </div>
    </div>
  )
}