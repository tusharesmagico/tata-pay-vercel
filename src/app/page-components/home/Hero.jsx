import React from "react";
import styles from "./index.module.css";
import HeroStatus from "./HeroStatus";
import girlImg from "../../assets/img/homeHeroGirlImg.png";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="relative pb-[129px] mb-[100px] md:mb-[100px] lg:mb-[0px]">
      <div className={` ${styles.bgImg}`}>
        <div className="max-w-[700px] m-auto sm:max-w-[1440px] sm:flex sm:items-start items-center ">
          <div
            className="pt-[74px] sm:pt-[24px] px-[20px]  xl:pt-[0px] sm:mt-[154px] xl:mt-[182px] lg:pl-[149px] w-full lg:w-[100%] break-words 
            whitespace-normal m-auto"
          >
            <h1
              className="text-[24px] font-proxima-nova-medium leading-[32px] sm:text-[32px] sm:font-medium
             sm:leading-[36px]"
            >
              Digital Payments{" "}
            </h1>
            <div
              className={`text-[28px] font-proxima-nova-bold leading-[30px]  lg:text-[48px]
                 lg:leading-[54px] mb-[16px] md:mb-[0px] mt-[8px] hidden md:block`}
            >
              <div>
                {" "}
                <span className={`${styles.textGradient}`}>Anytime,</span>{" "}
              </div>
              <div>
                {" "}
                <span className={`${styles.textGradient}`}>
                  {" "}
                  Anywhere!
                </span>{" "}
              </div>
            </div>
            <div
              className={`text-[28px] font-proxima-nova-bold leading-[30px]  lg:text-[48px]
                 lg:leading-[54px] mb-[16px] md:mb-[0px] mt-[8px] block md:hidden`}
            >
              <div>
                {" "}
                <span
                  style={{ fontWeight: "700" }}
                  className={`${styles.textGradient}`}
                >
                  Anytime, Anywhere!
                </span>{" "}
              </div>
            </div>
            <div className=" text-[14px] leading-[20px] lg:text-[20px] lg:leading-[24px]  lg:mt-[16px] text-[#2A2A2A] ">
              Whether you're shopping online, paying bills, or transferring
              money, Tata Pay makes it simple. It's secure, fast, and
              available at your fingertips.
            </div>
          </div>
          <div className="pt-[24px] mt-[0px]  sm:mt-[95px] w-[100%] max-w-[360px] sm:max-w-full m-auto sm:w-[100%]   ">
            <Image src={girlImg} className=" w-full" alt="img" />
          </div>
        </div>
      </div>
      <HeroStatus />
    </div>
  );
};

export default Hero;
