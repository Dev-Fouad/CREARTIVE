import React from 'react'
import Big from "../Assets/Image.png"


export const Hero = () => {
  return (
    <div className=' pt-[65px] h-[800px] bg-[#E6F1FEB2] flex space-x-[80px] max-xl:space-x-[60px] items-center pl-[80px] max-md:pl-[0px] max-lg:flex-col max-lg:space-x-0  max-sm:h-[55rem] max-md:h-[60rem] max-lg:h-[70rem] max-lg:pt-[8rem] max-lg:pl-[0] max-lg:space-y-[35px]'>

      <div className='  max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center'>
        <h3 className='font-Sans font-bold w-[590px] text-[40px] max-lg:w-[80%] leading-[54.7px] max-md:w-[90%] max-md:text-[24px] max-md:leading-[31px] max-lg:text-center'>Join the  <span className=' text-[#0066DE]'>global phenomenon </span>in the recruitment space</h3>
        <h2 className=' font-Sans text-[14px] max-lg:text-[18px]  max-md:text-[14px] w-[562px] font-normal leading-[25.6px] max-md:leading-[20px]  pt-[16px] max-md:pt-[0] max-md:mt-[12px] text-[#474849]  max-md:w-[82%]'>If you believe in the strength and power of creative thinking in recruiting, and if you are a team player and love to thrive in a fast-paced environment then get ready to play a crucial part in our creation of the future.</h2>
        <button className='hover:bg-[#0066DE] hover:shadow-lg font-Sans bg-[#0070F4] py-[14px] max-md:py-[13px] px-[32px]  rounded-[8px] text-[#FFFFFF] font-bold text-[16px] leading-[25px] mt-[32px] max-md:mt-[24px]'>Get started</button>
      </div>

      <div className=' w-[516px] h-[599px] relative max-md:w-[100%]  max-lg:w-[516px] max-md:h-[450px]'>

        <div className=' max-lg:hidden absolute w-[140px] max-md:block bg-[#Fff] rounded-[10px] hover:shadow-lg h-[88px] px-[11px] py-[10px] top-[5rem] left-[6rem] max-md:left-[2rem]'>
          <h2 className=' w-[94px] font-Sans font-semibold leading-[16px] text-[10px] text-[#191A1B]'>229 Web Developer Jobs</h2>
          <button className='w-[76px]  font-semibold h-[24px] text-[#0070F4]  border-2 border-[#0070F4] text-[10px] rounded-[5px] leading-[16px] font-Sans mt-2'>See Listing</button>
        </div>

        <div className=' max-xl:hidden max-lg:hidden max-md:block w-[226px]  max-lg:w-[180px] h-[103px] rounded-[10px] bg-[#FFFFFF] absolute top-[22rem]  right-[-10rem]  max-md:right-[2rem]  max-md:top-[18rem] p-[12px]'>
          <h2 className=' text-[10px] text-[#656666]'>Blog</h2>
          <p className=' w-[175px] text-[12px] leading-[19.2px] ' >How to effectively tailor your resume to job openings</p>
          <p className=' text-left text-[#0070F4] text-[8px] font-semibold font-Sans pt-[8px]'>Read article</p>
        </div>
        <img src={Big} alt=""/>
      </div> 
    </div>
  )
}
