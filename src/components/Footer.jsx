import React from 'react'
import { BsChatSquareDots } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='max-w-[1500px] mx-auto p-4 border-t-4'>
        <div className='flex justify-center items-center gap-x-2'>
            <BsChatSquareDots size={30} className='text-[var(--primary-dark)]'/>
            <h1 className='text-xl text-gray-700 font-bold'>WEEKAWAY</h1>
        </div>
    </div>
  )
}

export default Footer