import React from 'react';
import Image from 'next/image';
import Img01 from '@/public/Group 11 1.png';

import Img02 from '@/public/Vector.png';
import Img03 from '@/public/Group (1).png';
import Img04 from '@/public/Group (2).png';

import Img05 from '@/public/Shape.png';
import Img06 from '@/public/Shape (1).png';
import Img07 from '@/public/Linked In (1).png';
import Img08 from '@/public/Shape (2).png';


function Footer() {
  return (
    <div>

        <footer className='h-[800px] md:h-[417px] w-screen md:w-[1440px] bg-ftcolor flex flex-col md:items-center p-10 md:p-0 justify-between md:justify-around text-white  md:pt-[2%]'>

            <div className='flex flex-col md:flex-row justify-evenly md:justify-around items-center md:items-start gap-20 md:gap-28'>

            <div>

                <Image src={Img01} alt='logo' width={1000} height={1000} className='h-[94px] w-[145px]'/>

            </div>

            <div className='h-auto md:h-[229px] w-[605px] flex flex-col md:flex-row items-center gap-16 md:gap-40'>

                <div>

                   <h3 className='text-[16px] font-bold text-center md:text-start'>Information</h3>
                   <ul className='flex flex-row md:flex-col items-center text-[14px] md:text-[16px] gap-2 md:gap-4 mt-4'>
                      <li>Main</li>
                      <li>Gallery</li>
                      <li>Projects</li>
                      <li>Certifications</li>
                      <li>Contacts</li>
                   </ul>

                </div>


                <div>

                    <h3 className='text-[16px] font-bold text-center md:text-start'>Contacts</h3>
                    <ul className='flex flex-col gap-8 mt-4'>
                        <li className='flex gap-4'>
                            <Image src={Img02} alt='location' width={1000} height={1000} className='h-[16px] w-[11px]'/>
                            <div>
                                <p>1234 Sample Street</p>
                                <p>Austin Texas 78704</p>
                            </div>
                        </li>
                        <li className='flex gap-4 mt-4'>
                            <Image src={Img03} alt='contact' width={1000} height={1000} className='h-[16px] w-[16px]'/>
                            <p>512.333.2222</p>
                        </li>
                        <li className='flex gap-4'>
                            <Image src={Img04} alt='email' width={1000} height={1000} className='h-[11px] w-[16px] mt-2'/>
                            <p>sampleemail@gmail.com</p>
                        </li>
                    </ul>

                </div>

            </div>

            <div className='md:mr-24'>

                <h3 className='text-[16px] font-bold text-center md:text-start'>Social Media</h3>

                <ul className='flex flex-row gap-10 md:gap-10 mt-7'>
                    <li>
                        <Image src={Img05} alt='facebook' width={1000} height={1000} className='h-[19px] w-[10px]'/>
                    </li>
                    <li>
                        <Image src={Img06} alt='twitter' width={1000} height={1000} className='h-[16px] w-[21px]'/>
                    </li>
                    <li>
                        <Image src={Img07} alt='linkedIn' width={1000} height={1000} className='h-[20px] w-[20px]'/>
                    </li>
                    <li>
                        <Image src={Img08} alt='pixel' width={1000} height={1000} className='h-[19px] w-[14px]'/>
                    </li>
                </ul>

            </div>

            </div>

            <div className='w-screen h-[50px] mt-10  pt-[3%] flex justify-center items-center border-t-2 border-opacity-40 border-ftSep
             md:w-[1440px] md:mt-0'>
                <p className='text-[12px] text-ftText'>© 2021 All Rights Reserved</p>
            </div>

        </footer>


    </div>
  )
}

export default Footer