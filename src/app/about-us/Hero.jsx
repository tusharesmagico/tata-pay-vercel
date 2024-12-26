import React from "react";
import styles from "./index.module.css";
import tataPayImg from "../assets/img/tatapayimg.png";
import Image from "next/image";
const Hero = () => {
  return (
    <div className={`${styles.bgImg}  overflow-hidden`}>
      <div
        className={`pl-[16px] pt-[40px] relative lg:pt-[58px] max-w-[1440px] m-auto lg:pl-[149px] text-[28px] leading-[30px] lg:text-[40px] lg:leading-[62px] font-proxima-nova-bold ${styles.heroTextGradient}`}
      >
        About Tata Pay
        <Image
      src={tataPayImg}
          alt=""
          className=" absolute  right-[16px] lg:right-[150px] 
           bottom-[-320px] sm:bottom-[-190px]  h-[250px] lg:h-[300px]  w-[auto]"
        />
      </div>
     
    </div>
  );
};

export default Hero;
