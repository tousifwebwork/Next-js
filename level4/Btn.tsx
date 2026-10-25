
import React from 'react'

type btnProps={
  data:string,
  action:()=>void
}
//const Btn = ({data,action}:btnProps) => {
const Btn =({data,action}:btnProps) => {
  return (
    <div className='bg-blue-500 text-white p-2 rounded w-fit px-6 py-3'>
      Btn
      <span className='ml-2'>{data}</span>
    </div>
  )
}

export default Btn