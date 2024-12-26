import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Section3 = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap   m-auto px-[20px] lg:px-[149px] lg:max-w-[1440px]  gap-[40px] py-[64px]">
      <div style={{boxShadow: '0px 0px 12px 1px #F0F0F0'}} className=" p-[16px] lg:w-[50%] sm:p-[32px] border-[1px]  border-[#78787D3D] rounded-[16px]">
        <p className="font-proxima-nova-bold  text-[18px] mb-[24px]">
          Nodal officer details{" "}
        </p>
        <div className="flex  flex-col gap-[12px] lg:gap:[16px] ">
          <div className="flex flex-wrap gap-[12px] sm:gap-auto">
            <div className="w-[239px] ">
              <p className="text-[#4D4D4D] text-[16px] mb-[4px] ">For Payment Aggregator</p>
              <p className="font-semibold text-[16px] ">Name: Mr. Gagandeep Arora</p>
            </div>
            <div className="w-[239px] ">
              <p className="text-[#4D4D4D] text-[16px] mb-[4px] ">For Prepaid Instruments</p>
              <p className="font-semibold text-[16px] ">Name: Mr. Jayant Ojha</p>
            </div>
            



 




            <div className="w-[239px]">
              <p className="text-[#4D4D4D] text-[16px] mb-[4px]">Email</p>
              <a  href="mailto:pno@tatapayments.com">
              <p className="text-[#8800EC] font-semibold text-[16px]">pno@tatapayments.com</p>
              </a>
             
            </div>
          </div>
          <div style={{}} className="">
            <p className="text-[#4D4D4D] text-[16px] mb-[4px] ">
              Office address
            </p>
            <p className=" text-[16px] mb-[12px]">
              Tata Payments Ltd, Ground Floor, Army & Navy Building, 148, M G
              Road, Opposite Kala Ghoda, Fort, Mumbai, Maharashtra- 400001
            </p>
           
            <div className='  mb-[16px] flex items-start text-[#004591] bg-[#EBF0FF] p-[12px] pb-[0px] gap-[8px] rounded-[12px]'>

        <div>
        <IoIosInformationCircleOutline fontSize={16} />
        </div>
       
      <p className=" text-[14px] text-[#004591] mb-[12px] ">
      The Nodal Officer shall send his/her final response to the customer within 30 business days of lodging the complaint. The response may contain the resolution or seek information/time to examine or resolve the complaint, along with the reason for seeking such extension."
      </p>
      </div>
          </div>
        </div>
      </div>
      <div style={{boxShadow: '0px 0px 12px 1px #F0F0F0'}} className="p-[16px] lg:w-[50%] sm:p-[32px] border-[1px] border-[#78787D3D] rounded-[16px]">
        <p className="font-proxima-nova-bold  text-[18px] mb-[8px] sm:mb-[24px]">Report fraud </p>
        <p className="text-[#4D4D4D] text-[16px]  mb-[16px] ">
          To complain about a fraudulent transaction processed via Tata Payments, please contact us at:{" "}
        </p>
        <a  href="mailto:reportfraud@tatapayments.com">
        <p className="text-[#8800EC] font-semibold  text-[16px]">
          
          reportfraud@tatapayments.com
        </p>
        </a>
       
      </div>
    </div>
  );
};

export default Section3;
