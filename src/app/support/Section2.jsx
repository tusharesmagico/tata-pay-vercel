import React from 'react';
import styles from "./index.module.css";
import { IoIosInformationCircleOutline } from "react-icons/io";

const GrievanceSupport = () => {
  const levels = [
    { level: 1, hyperlink: "mailto: customercare@tatapayments.com", email: ' customercare@tatapayments.com', days: 'For Payment Aggregator 3 business days </br>For Prepaid Instruments 48 hours' },
    { level: 2, hyperlink: "mailto:escalations@tatapayments.com", email: 'escalations@tatapayments.com', days: '5 business days' },
    { level: 3,hyperlink: "mailto:grievances@tatapayments.com",email: 'grievances@tatapayments.com', days: '5 business days' },
    { level: 4, hyperlink: "mailto:crpc@rbi.org.in",email: 'crpc@rbi.org.in', days: 'The Customer and the Merchant can approach the Ombudsman in case appropriate resolution is not received at previous levels within 30 (thirty) days in line with RBI Guidelines - ' },
  ];

  return (
    

<div className= {`${styles.BackgroundColour}`}>
  <div className='pb-[60px] m-auto px-[20px] lg:px-[149px] lg:max-w-[1440px]'>
  <h2 className=" text-[24px] sm:text-[28px] sm:leading-[40px] font-bold mb-4 ">Grievance support</h2>
      <p className="mb-[24px] text-[14px] sm:text-[18px] sm:leading-[24px] text-[#666666]">
      If you're not satisfied with the solution you have received, reach out to Tata Payments grievance support. We'll do our best to resolve it. 
      </p>
<div  style={{ border: "1px solid var(--opacity-outline-12, #78787D1F)" }} className="bg-white p-5  rounded-[16px]  lg: mx-auto">
      
      <div className="space-y-4">
        {levels.map((level,index) => (
          <>
           <div key={level.level} className="flex flex-wrap md:flex-nowrap items-start">
            <div className="w-full sm-w-[50%] pr-4">
              <h3 className="font-semibold text-[14px] sm:text-[18px]">Level {level.level} escalation</h3>
              <a href={`${level.hyperlink}`} target='_blank' className="text-[#8800EC] font-semibold text-[14px] sm:text-[16px] hover:underline break-all">
                {level.email}
              </a>
            {level.level==4?(<p className='text-[12px] text-[#2A2A2A] sm:text-[14px]'> Website- <a href="https://cms.rbi.org.in" className='text-[#004591] underline' target='_blank'  >https://cms.rbi.org.in</a>
            <br/>
              Address – Centralised Receipt and Processing Centre, Reserve Bank of India, 4th Floor, Sector 17, Chandigarh – 160017</p>) 
           :(<></>)}
            </div>
            <div className="w-full text-[12px] text-[#2A2A2A] sm:text-[14px] sm-w-[50%]">
              <span className="text-sm" dangerouslySetInnerHTML={{ __html: level.days }} ></span>

              {level.level==4?( <a styele href="/files/RBIOS2021_121121.pdf" download  className="underline text-[#004591] "> Integrated Ombudsman Scheme, 2021.</a>):(<></>)}
             
            </div>
            
          </div>
         {index < levels.length - 1 && (
                  <hr className="my-4 border-t border-gray-300" />
                )}   
          </>
         
          

        ))}
      </div>
      <div>

      </div>      <div className='mt-6 flex items-start text-[#004591] bg-[#EBF0FF] p-[12px] gap-[8px] rounded-[12px]'>

        <div>
        <IoIosInformationCircleOutline fontSize={16} />
        </div>
     
      <p className=" text-[14px] text-[#004591]  ">
        Resolution will be provided in business days i.e. between 9 am to 6 pm on Monday to Friday, excluding holidays. To complain about a fraudulent transaction processed via Tata Pay Payment Aggregator platform, please contact us at <a href="mailto:reportfraud@tatapayments.com"  className="underline"  target='_blank'>reportfraud@tatapayments.com</a> 
      </p>
      </div>
    
    </div>
  </div>

</div>

    
  );
};

export default GrievanceSupport;