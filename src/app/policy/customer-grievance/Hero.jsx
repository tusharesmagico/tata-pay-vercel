import React from "react";
import styles from "./index.module.css";
const Hero = () => {
  return (
    <div className={`${styles.bgImg} mt-[40px] sm:mt-[70px] relative`}>
      <div className="max-w-[1440px] lg:m-auto">
        <div className={`px-[16px] pt-[60px] lg:pt-[28px]   xl:pl-[149px]  `}>
          <div
            className={`${styles.heroTextGradient} lg:w-[750px] xl:w-[800px] 
           text-[28px]  md:text-[36px] leading-[30px] md:leading-[42px] font-proxima-nova-bold`}
          >
            Customer Grievance Redressal Policy
          </div>
          <div className="text-[12px] italic md:text-[22px] mt-[12px] md:mt-[15px] leading-[20px] md:leading-[34px] md:w-[670px]">
          Our dealings with our customers shall be professional, fair and transparent
          </div>
          <div className="text-[12px] italic md:text-[22px] mt-[12px] md:mt-[2px] leading-[20px] md:leading-[34px] md:w-[670px]">
          Section-E; Clause 8 of the Tata Code of Conduct
          </div>
          <img
            src="/policy-hero.png"
            alt=""
            className=" absolute  right-[16px] lg:right-[150px]  bottom-[0px] h-[138px]  w-[auto]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
