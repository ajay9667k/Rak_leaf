import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer2 = () => {
  

  return (
    <div className='h-[460px] w-full bg-[#07282C]'>
      <div className='flex flex-col md:gap-8 pt-10 justify-center items-center md:flex-row w-[100%]'>
            <div className='md:gap-8 h-auto   flex flex-row justify-center items-center md:w-[45%] w-full'>
                   <div className='flex flex-col h-[250px] w-full '>
                      <p></p>
                      <ul>
                        <li></li>
                      </ul>
                   </div>
                   <div className='flex flex-col h-[250px] w-full bg-red-700'>

                   </div>
            </div>
            <div className='h-auto md:gap-8 bg-red-40 flex flex-row justify-center items-center md:w-[45%] w-full'>
                  <div className='flex-col  h-[250px] w-full bg-blue-600'>

                   </div>
                   <div className='flex flex-col h-[250px] w-full bg-slate-800'>

                   </div>
            </div>
      </div>
       
    </div>
  );
};

export default Footer2;
