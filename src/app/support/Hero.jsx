import React from "react";
import styles from "./index.module.css";
const HeroSupport = () => {
  return (
    <div className={`${styles.bgImg} overflow-hidden relative mt-[58px] sm:mt-[73px]`}>
      <div
        className={`pl-[16px] pt-[40px] lg:pt-[58px] max-w-[1440px]
           m-auto lg:pl-[149px] text-[28px] leading-[30px] lg:text-[36px] 
           lg:leading-[42px]  font-proxima-nova-bold  ${styles.heroTextGradient}`}
      >
        Support
        <img
          src="/support-hero.png"
          alt=""
          className=" absolute  right-[16px] lg:right-[150px] 
           bottom-[0px] md:bottom-[0px] h-[168px]  w-[auto]"
        />
      </div>
    </div>
  );
};

export default HeroSupport;
