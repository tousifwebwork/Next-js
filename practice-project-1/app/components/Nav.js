"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { MdOutlineCardTravel } from "react-icons/md";


const Nav = () => {
  
  const pathname = usePathname();

  return (
    <div className='p-2 w-full h-80px bg-white text-black flex flex-row justify-between items-center fixed top-0'>
       
        <div className='flex flex-row gap-3 px-4 py-2 justify-center items-center text-3xl font-bold'>
            <MdOutlineCardTravel />
            <span>Teavel App</span>
        </div>

        <div className='px-4 py-2 mr-10 text-xl '>
            <ul className='flex flex-row justify-center items-center gap-5'>
                <Link href="/" className={pathname === '/' ? 'text-blue-500' : 'text-gray-500' }><li>Home</li></Link>
                <Link href="/destination" className={pathname === '/destination' ? 'text-blue-500' : 'text-gray-500' }><li>Destination</li></Link>
                <Link href="/contact" className={pathname === '/contact' ? 'text-blue-500' : 'text-gray-500' }><li>Contact</li></Link>
            </ul>
        </div>
        
    </div>
  )
}

export default Nav