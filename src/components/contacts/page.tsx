import React from 'react';
import Image from 'next/image';
import Img01 from '@/public/Frame 11 (6).png';
import Img02 from '@/public/image 14.png';
import Img03 from '@/public/Group 90.png';

function page() {
  return (
    <div>

      <div className='flex flex-col md:flex-row gap-20 md:gap-40 justify-center items-center md:items-start p-3 md:p-0'>

        <div className='flex flex-col gap-10'>

          <div className='leading-none'>

            <h2 className='text-[50px] md:text-[64px] text-gray-400 font-light'>Contact</h2>
            <h2 className='text-[50px] md:text-[64px] font-bold'>Information</h2>

          </div>

          <div className='space-y-14'>

            <div>
              <p className='text-[18px] font-bold'>Company Name</p>
              <p className='text-[18px] font-light'>1234 Sample Street Austin Texas 76401</p>
            </div>

            <p className='text-[18px] font-bold'>512.333.2222</p>

            <p>sampleemail@gmail.com</p>

          </div>

          <Image src={Img01} alt='button' className='h-[71px] w-[222px]'/>

        </div>

        <div className='relative'>
        
          <Image src={Img02} alt='map' height={1000} width={1000} className='h-auto md:h-[501px] w-screen lg:w-[700px] border-x-2 border-black md:border-none '/>
          <Image src={Img03} alt='map' height={1000} width={1000} className='h-[55px] w-[55px] top-40 right-52 hidden md:absolute'/>
  
        </div>


      </div>


      <br /> <br /> <br />

       
    </div>
  )
}

export default page