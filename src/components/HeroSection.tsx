import React from 'react';
import Image from 'next/image';
import Img01 from '@/public/Rectangle 6.png';
import Imag02 from '@/public/Frame 8.png';
import Img03  from '@/public/Frame 9.png';
import Img04 from '@/public/slide-numbers.png';
import Img05 from '@/public/Frame 10.png';

function HeroSection() {
  return (
    <div className='flex flex-col md:flex-row  justify-center gap-10 md:gap-36 w-screen md:w-[1170px] p-3 md:p-0 md:ml-[10%]'>

        <div className='flex flex-col mt-10 md:mt-[180px] items-center md:items-start space-y-8 md:space-y-12'>

            <div className='flex flex-col  mt-20 md:mt-[220px] text-center md:text-left leading-none'>

              <p className='text-[64px] text-gray-400 font-light'>PROJECT</p>
              <p className='font-bold text-[64px]'>LORUM</p>

            </div>

            <div className='flex'>

                <Image src={Img03} alt='arrow' height={1000} width={1000} className='h-[53px] w-[53px]'/>
                <Image src={Imag02} alt='arrow' height={1000} width={1000} className='h-[53px] w-[53px]'/>

            </div>

            <div>

              <Image src={Img04} alt='number-line' height={1000} width={1000} className='h-[52px] w-[142px]'/>

            </div>

        </div>

        <div className='relative'>

            <Image src={Img01} height={1000} width={1000} alt='mainImg' className='w-screen md:w-[770px] h-[390px] md:h-[829px]'/>
            <Image src={Img05} alt='button' height={1000} width={1000} className='h-[36px] md:h-[71px] w-[111px] md:w-[222px] md:absolute md:right-[580px] md:top-[785px]'/>
            
         </div>


    </div>
  )
}

export default HeroSection