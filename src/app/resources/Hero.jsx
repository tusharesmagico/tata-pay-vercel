import React from "react";
import styles from "./index.module.css";

const Hero = () => {
  return (
    <div className={`${styles.bgImg} mt-[40px]  sm:mt-[70px] relative`}>
      <div className="max-w-[1440px] lg:m-auto ">
        <div className={`px-[16px] pt-[40px] sm:pt-[48px]   md:pl-[149px]  `}>
          <div
            className={`${styles.heroTextGradient} w-[350px] lg:w-[350px] xl:w-[500px] 
           text-[28px] sm:text-[40px] leading-[30px] sm:leading-[48px] font-proxima-nova-bold`}
          >
            Policy, Resources & Press Releases
          </div>
        </div>
        <img
          src="/resources-hero.png"
          alt=""
          className="absolute  
        right-[16px] lg:right-[150px] bottom-[0px]
         h-[202px]  w-[auto]"
        />
      </div>
    </div>
  );
};

export default Hero;
