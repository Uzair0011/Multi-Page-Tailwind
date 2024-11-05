'use client'
import Image from 'next/image';
import logo from '@/public/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from 'react'
import Link from 'next/link'
import { RxCross2 } from "react-icons/rx";

function Navbar() {

  const [isClick, setIsClick] = useState(false)
  const toggleNavbar = ():void => {
    setIsClick (!isClick)
  }

  return (
    <div>

        <nav className='w-screen md:w-[1440px] h-[102px] fixed  flex justify-between md:justify-around items-center'>

            <div>

                <Image  src={logo} height={1000} width={1000} alt='logo' className='w-[70px] h-[43.7px] ml-5 md:ml-0 mr-20'/>

            </div>

            <div>

                <ul className='md:flex justify-between gap-[64px] text-[12px] text-gray-800 mr-56 hidden'>
                    <Link href={'/'}><li className='border-y-2 hover:border-black'>MAIN</li></Link>
                    <Link href={'/gallery'}><li className='border-y-2 hover:border-black'>GALLERY</li></Link>
                    <Link href={'projects'}><li className='border-y-2 hover:border-black'>PROJECTS</li></Link>
                    <Link href={'/certifications'}><li className='border-y-2 hover:border-black'>CERTIFICATION</li></Link>
                    <Link href={'/contacts'}><li className='border-y-2 hover:border-black'>CONTACTS</li></Link>
                </ul>


            </div>

            <div onClick={toggleNavbar} className='md:hidden block items-center mr-3'>

                {isClick?(<div><RxCross2 size={40}  color='black'/></div>):(<div><GiHamburgerMenu size={40} color='black' /></div>)}

            </div>

        </nav>

        {isClick &&  (
            <div className='md:hidden'>
            <ul className='flex flex-col text-right pr-3 gap-3 pt-24 pb-6 ml-36 text-2xl hover:duration-300 hover:delay-300'>
                <Link href={'/'}><li className='hover:text-white hover:rounded-lg hover:bg-black hover:p-2 hover:duration-300 hover:delay-300 ' >MAIN</li></Link>
                <Link href={'/gallery'}><li className='hover:text-white hover:rounded-lg hover:bg-black hover:p-2 hover:duration-300 hover:delay-300 ' >GALLERY</li></Link>
                <Link href={'/projects'}><li className='hover:text-white hover:rounded-lg hover:bg-black hover:p-2  hover:duration-300 hover:delay-300' >PROJECTS</li></Link>
                <Link href={'/certifications'}><li className='hover:text-white hover:rounded-lg hover:bg-black hover:p-2  hover:duration-300 hover:delay-300' >CERTIFICATIONS</li></Link>
                <Link href={'/contacts'}><li className='hover:text-white hover:rounded-lg hover:bg-black hover:p-2  hover:duration-300 hover:delay-300' >CONTACTS</li></Link>
                </ul>
            </div>

            )}


    </div>
  )
}

export default Navbar