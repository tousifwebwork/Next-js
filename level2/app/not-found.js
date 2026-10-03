import React from 'react'
import { MdErrorOutline } from "react-icons/md";
const notfound = () => {
  return (
    <div className='bg-red-200 h-screen flex justify-center items-center 
     text-2xl font-[1000] capitalize'>
    This is my not-found
    <span className='text-3xl ml-2'>
       <MdErrorOutline />
    </span>
    </div>
  )
}

export default notfound