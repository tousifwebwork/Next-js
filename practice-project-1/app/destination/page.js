"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const destinations = ['paris', 'tokyo', 'new-york'];
  
  return (
    <div className='flex flex-col justify-center items-center h-screen text-4xl gap-3 capitalize'>
      
      <div> Choose Your Destination </div>

      <div className='flex flex-col gap-4'>
        {
          destinations.map((i)=>(
            <div key={i} className='text-black flex items-center justify-center rounded-xl font-bold text-2xl w-50 h-25 bg-white'
            onClick={()=>router.push(`/destination/${i}`)}>
            <span>{i}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default page