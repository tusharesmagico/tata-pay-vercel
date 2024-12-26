import React from "react";
import styles from "./index.module.css";
import pciImg from "../assets/img/pciImg.png";
import Image from "next/image";
const PCICard = () => {
  return (
    <div
      className={`${styles.pciCardGradient} mx-[16px] lg:mx-[150px] px-[16px] py-[24px] lg:px-[60px] lg:py-[50px] rounded-[36px] lg:flex gap-[17px] justify-between items-center`}
    >
      <div>
        <div
          className={`${styles.pciTextGradient} text-[24px] lg:text-[42px] leading-[32px]
            font-proxima-nova-bold  lg:leading-[50px]`}
        >
          We protect your money and data with best in class security measures
          
        </div>
        {/* <div className="text-[#1A1A1A] text-[16px] mt-[8px] leading-[24px] lg:text-[18px] lg:leading-[24px] lg:mt-[12px]">
          Tata Pay's best in class security system helps minimize frauds
          Tata Pay offers the best-in-class security system
          
        </div> */}
        <div className="text-[#1A1A1A] text-[16px] mt-[8px] leading-[24px] lg:text-[18px] lg:leading-[24px] lg:mt-[12px]">
            Tata Pay is RBI authorized to operate as a payment aggregator - license number 165/2024
              </div>
      </div>
      <div className="mt-[24px] lg:mt-[0px]">
        <Image src={pciImg} className="h-[80px] w-[216px] md:h-[80px] md:w-[296px]" alt="img" />
      </div>
    </div>
  );
};

export default PCICard;
