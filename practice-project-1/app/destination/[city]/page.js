"use client"

import { useParams } from 'next/navigation'
import React from 'react'
import paris_img from '../../../assets/paris.jpg'
import newyork_img from '../../../assets/new_york.png'
import tokyo_img from '../../../assets/tokyo.png'
import Image from 'next/image'

const page = ({params}) => { 
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { city } = useParams()
  return (
    <div className='text-white mt-[100px] w-[50%]'>
        {city} is a buetiful city
        {
          city === 'paris' && <Image src={paris_img} alt="Paris" width={400} height={400}/> 
        } 
        {
          city === 'tokyo' && <Image src={newyork_img} alt="New York" width={400} height={400}/>
        } 
        {
          city === 'new-york' && <Image src={tokyo_img} alt="Tokyo" width={400} height={400}/>
        }
    </div>
  )
}

export default page