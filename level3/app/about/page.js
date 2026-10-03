import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>

      <p>This is testing about Pagge</p>


      <Image 
        src="/window.svg"
        alt="Next.js Logo"
        width={200}
        height={41}
      />
      <Image 
        src={"https://wanderwithsasha.com/wp-content/uploads/2025/01/IMG_7555-scaled.jpg"}
        alt="Sasha's Photo"
        width={200}
        height={200}
      />
      <Image
        src="https://plus.unsplash.com/premium_photo-1710965560034-778eedc929ff?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsfGVufDB8fDB8fHww"
        alt="Beautiful Landscape"
        width={200}
        height={200}
      />
    </div>
  )
}

export default page