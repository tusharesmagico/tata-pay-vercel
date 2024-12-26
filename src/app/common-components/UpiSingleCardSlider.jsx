import React from "react";
import productFeatureMobile from "../assets/img/productFeatureMobile.png";
import productFeatureCircle from "../assets/img/productFeatureCircle.png";
import productFeatureCard from "../assets/img/productHeatureCard.png";
import Image from "next/image";
import styles from "./index.module.css";
const UpiSingleCardSlider = () => {
  return (
    <div
      className={`h-[520px]  sm:h-[620px] lg:h-[471px] rounded-[24px] md:rounded-[48px] ${styles.productFeatureCardGradient}
        relative  border-[1px] pt-[12px] md:pt-[0px] border-[#DDDDDE] border-solid lg:flex`}
    >
      <div className=" w-[0%]  lg:w-[50%] lg:ml-[20px] xl:ml-[56px] ">
        <div className="absolute bottom-0 lg:left-[62px] xl:left-[92px] z-[100] w-full flex justify-center lg:block">
          <Image
            src={productFeatureMobile}
            alt="img"
            className=" w-[70%] sm:w-[400px] sm:h-[450px] lg:h-[410px] lg:w-[300px] xl:h-[471px] xl:w-[400px] "
          />
        </div>

        <div className="absolute bottom-[0px] w-full  px-[16px] lg:px-[0px] flex lg:block justify-center">
          <Image
            src={productFeatureCircle}
            className="w-full sm:w-[450px] lg:w-[400px] xl:w-[480px]"
            alt="img"
          />
        </div>
      </div>
      <div className="p-[16px]  w-[100%] lg:w-[43%] xl:w-[47%] 2xl:w-[50%] absolute right-[0px]">
        <div className="font-semibold leading-[28px] lg:font-proxima-nova-bold text-[20px] lg:text-[24px] lg:leading-[34px] text-[#005CBD] lg:mt-[150px]">
          The most rewarding UPI experience!
        </div>
        <div className="text-[16px] lg:text-[16px] leading-[24px] text-[#333333] mt-[16px]">
          Use NeuCard for your UPI payments and earn up to 1.5% NeuCoins on
          every transaction. Enjoy the ease of seamless payments and the perks
          of earning rewards.
        </div>
        {/* <div className="h-[86px] w-[260px] mt-[32px]">
          <Image
            src={productFeatureCard}
            alt="img"
            className="h-[86px] w-[258px]"
          />
        </div> */}
      </div>
    </div>
  );
};

export default UpiSingleCardSlider;
