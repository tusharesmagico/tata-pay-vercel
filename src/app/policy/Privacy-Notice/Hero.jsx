import React from "react";
import styles from "./index.module.css";
const Hero = () => {
  return (
    <div className={`${styles.bgImg} mt-[40px] sm:mt-[70px] relative`}>
      <div className="max-w-[1440px]  lg:m-auto">
        <div className={`px-[16px] pt-[60px] lg:pt-[58px]   lg:pl-[149px]  `}>
          <div
            className={`${styles.heroTextGradient} lg:w-[750px] xl:w-[800px] 
           text-[28px] md:text-[36px] leading-[30px] md:leading-[42px] font-proxima-nova-bold`}
          >
            Privacy Notice
          </div>
        </div>
        <img
          src="/policy-hero.png"
          alt=""
          className="absolute  right-[16px] lg:right-[150px] bottom-[0px] h-[138px]  w-[auto]"
        />
      </div>
    </div>
  );
};

export default Hero;
