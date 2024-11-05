import React from 'react';
import Image from 'next/image';
import Img01 from '@/public/Rectangle 8.png'
import Img02 from '@/public/Rectangle 9.png';
import Img03 from '@/public/Rectangle 10.png';
import Img04 from '@/public/Frame 11.png';

function About() {
  return (
    <div className='p-3 md:p-0 w-screen md:w-[1170px] 
          h-auto md:h-[465px] md:ml-[10%]'>
        <div className='flex flex-col  md:flex-row justify-evenly gap-10 md:gap-0 md:justify-around  bg-gray-200 rounded-lg p-10 md:p-6'>

          <div className='flex flex-col gap-4'>

          <Image src={Img01} alt='arrow' height={1000} width={1000} className='h-[265px] w-[270px] md:ml-8'/>
          <Image src={Img03} alt='arrow' height={1000} width={1000} className='h-[140px] w-[270px] md:ml-8'/>


          </div>

          <div className='h-[80%] mt-[2%]'>

          <Image src={Img02} alt='arrow' height={1000} width={1000} className='h-[345px] w-[270px]'/>

          </div>

          <div className='flex flex-col w-[90%] md:w-[40%]'>
      
            <h1 className='text-[50px] md:text-[64px] text-gray-400 font-light'>About</h1>
              <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys 
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                  essentially unchanged.</p> <br />

              <Image src={Img04} alt='arrow' height={1000} width={1000} className='h-[71px] w-[222px] hover:opacity-75'/>
            
  
          </div>


      </div>


     </div>
  )
}

export default About