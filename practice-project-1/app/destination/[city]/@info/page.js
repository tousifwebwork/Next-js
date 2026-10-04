"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const city = useParams()
  return (
    <div  className='w-[50%] mt-25'>
      {city.city} is a buetiful city
    </div>
  )
}

export default page