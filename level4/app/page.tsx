'use client' 
import React, { ChangeEvent, useRef, useState } from 'react'

const page = () => {
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const input = useRef<HTMLInputElement>(null)
  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault();
    
  }
  const handleClick=(e:React.MouseEvent)=>{
    
  }
  const handleChange=(e:React.ChangeEvent)=>{
    
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" ref={input} onClick={handleChange} />
        <button onClick={handleClick}>Click</button>
      </form>
    </div>
  )

}

export default page