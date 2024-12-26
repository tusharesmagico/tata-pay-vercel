import React from "react";
import styles from "./index.module.css";
const HeroStatus = () => {
  return (
    <div
      className="max-w-[700px] sm:max-w-[1440px] absolute left-0 right-0
      bottom-[0px] lg:bottom-[65px]  m-auto"
    >
      <div
        className="flex-col md:flex-row flex justify-between mx-[16px] 
         lg:mx-[149px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] px-[48px]
       sm:py-[32px] lg:px-[60px] bg-[#FDFDFD] rounded-[24px] md:rounded-[32px]"
      >
        <div className="pt-[24px] min-w-[130px] xl:min-w-[264px] lg:pt-[0px]">
          <div
            className={` text-[24px] leading-[32px] xl:text-[40px]
               font-proxima-nova-bold xl:leading-[48px] text-center`}
          >
            <span className={`${styles.statusTextGradient}`}>22K+</span>
          </div>
          <div
            className="text-[14px] xl:text-[18px] leading-[24px]
           text-[#4D4D4D] mt-[4px] text-center"
          >
            Billers trust us
          </div>
        </div>
        <div className="pt-[24px] lg:min-w-[264px] lg:pt-[0px]">
          <div
            className={` text-[24px] leading-[32px] xl:text-[40px]
               font-proxima-nova-bold xl:leading-[48px] text-center`}
          >
            <span className={`${styles.statusTextGradient}`}>7.5 Million+</span>
          </div>
          <div
            className="text-[14px] xl:text-[18px] leading-[24px]
           text-[#4D4D4D] mt-[4px] text-center"
          >
            Transactions processed
          </div>
        </div>
        <div className="py-[24px] lg:min-w-[264px] lg:py-[0px]">
          <div
            className={` text-[24px] leading-[32px] xl:text-[40px]
               font-proxima-nova-bold xl:leading-[48px] text-center`}
          >
            <span className={`${styles.statusTextGradient}`}> 20+</span>
          </div>
          <div
            className="text-[14px] xl:text-[18px] leading-[24px]
           text-[#4D4D4D] mt-[4px] text-center"
          >
            Brands supported
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroStatus;

// background: linear-gradient(139.79deg, #5E77E7 19.65%, #8E61DD 76.91%);
