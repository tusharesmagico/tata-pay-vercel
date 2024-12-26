import Image from 'next/image'
import React from 'react'
import mail from '../../app/assets/img/mail.png'
import styles from "./index.module.css";
export const Section1 = () => {
  return (
    <div className='py-[32px]   lg:py-[64px]   m-auto px-[20px] lg:px-[149px] lg:max-w-[1440px]'>
 <p className='text-[24px] mb-[4px] lg:mb-[16px] lg:text-[28px] font-semibold lg:font-proxima-nova-bold ' >

 How can we help?
 </p>
<p className='text-[14px] mb-[16px] lg:mb-[40px] lg:text-[18px] text-[#666666]'>
For issues with transactions, we recommend reaching out to the merchants directly. 
</p>
<div style={{boxShadow: "0px 0px 12px 1px #F0F0F0",
 border: '1px solid rgba(120, 120, 125, 0.12)'
}} className={` ${styles.BackgroundColourSection1} flex p-[16px]  gap-[15px] lg:gap-[24px] rounded-[16px] max-w-[550px] lg:p-[24px] lg:items-center items-start`}>
    <div>
<Image src={mail} className='h-[48px] w-[48px] lg:h-[80px] lg:w-[80px]'/>
    </div>
    <div className=' '> 
 <p className='text-[16px] lg:text-[18px] font-proxima-nova-bold  mb-[4px]'> General queries</p>
 <p className='text-[12px] lg:text-[14px] mb-[12px] lg:mb-[8px]'>Shoot us a mail for any general query</p>
 <a  href="mailto: customercare@tatapayments.com">
 <p className='text-[14px] lg:text-[16px] font-semibold text-[#8800EC]' > customercare@tatapayments.com</p>
 </a>

    </div>
</div>

    </div>
  )
}
