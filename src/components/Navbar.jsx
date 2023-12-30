import React, {useState, useEffect} from 'react'
import { BsChatSquareDots } from 'react-icons/bs'
import { 
    FaFacebookF, 
    FaTwitter, 
    FaGooglePlusG, 
    FaInstagram,
    FaBars
} from 'react-icons/fa'

const Navbar = () => {
  const [show, setShow] = useState(false)

  const toggle = () => {
    setShow(show => !show)
  }

  return (
    <div className='relative z-10 text-white bg-gray-700/80'>
        <div className='max-w-[1500px] mx-auto flex w-full min-h-[50px] justify-between items-center'>
        <ul className='hidden sm:flex gap-x-4 px-4'>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="#gallery">Gallery</a>
            </li>
            <li>
                <a href="#deals">Deals</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
        <div className='flex justify-between'>
            <FaFacebookF className='mx-4 cursor-pointer'/>
            <FaTwitter className='mx-4 cursor-pointer' />
            <FaGooglePlusG className='mx-4 cursor-pointer'/>
            <FaInstagram className='mx-4 cursor-pointer'/>
        </div>
        {/* Hamburger Icon */}
        <div className='sm:hidden z-10' onClick={toggle}>
            <FaBars size={20} className='mr-4 cursor-pointer'/>
        </div>
        {/* Mobile Menu */}
        <div className={show ? 'overflow-y-hidden sm:hidden h-screen absolute top-0 left-0 bg-black/80 w-full ease-in text-center duration-300' : 'h-screen absolute top-0 left-[-100%] bg-black/80 w-full overflow-y-hidden ease-in text-center duration-300'}>
            <ul className='pt-12'>
                <li className='text-2xl py-8'>
                    <a href="/">Home</a>
                </li >
                <li className='text-2xl py-8'>
                    <a href="#gallery">Gallery</a>
                </li>
                <li className='text-2xl py-8'>
                    <a href="#deals">Deals</a>
                </li>
                <li className='text-2xl py-8'>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Navbar