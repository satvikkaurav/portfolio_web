import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

type Props = {
    key ?: any,
    data ?: any,
    flag : any
}

export const Project = (props: Props) => {
  return (
    <div>
        <div className={'flex bg-white rounded-2xl' + (props.flag===1 ? ' flex-row-reverse':'flex-row')}>
            <div className={'flex flex-col flex-1 p-10 gap-5 justify-center'}>
              <div className='flex font-medium text-2xl'>{props.data.name}</div>
              <div className='flex text-gray-500 flex-col'>
                {
                  props.data.description.map((val:any,key:any)=>{
                    return(
                      <>
                        <li key ={key}>{val}</li>
                      </>
                    )
                  })
                }
              </div>
              <Link href = {props.data.link} target='blank'>
              <button className='border-2 border-black font-medium rounded-3xl px-8 py-2 w-1/2'>
                View Project</button></Link>
            </div>
            <div className='flex flex-col flex-1 justify-center'>
              <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
                <Image src='/images/proj.png' className={props.flag ? 'rounded-l-2xl':'rounded-r-2xl' } alt='project image' width={500} height={500} />
              </div>
             
            </div>
          </div>
    </div>
  )
}