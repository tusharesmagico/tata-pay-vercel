import React from "react";
import styles from "./index.module.css";
import giftBoxImg from "../assets/img/giftBoxImg1.png";
import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";
const BulkPurchaseCard = () => {
  return (
    <div
      className={`${styles.bulkPurchaseCardGradient} flex gap-[8px] lg:gap-[48px]
         justify-between items-center px-[12px] py-[12px] lg:px-[40px] lg:py-[32px]
          rounded-[16px] lg:rounded-[36px] mx-[20px] lg:mx-[150px]`}
    >
      <Image src={giftBoxImg} className=" w-[64px] lg:w-[250px] " alt="img" />
      <div className="flex gap-[8px] lg:gap-[50px] justify-center items-center">
        <div>
          <div className="text-[#1A1A1A] text-[14px] font-semibold leading-[20px] lg:text-[40px] lg:font-bold lg:leading-[50px]">
            Looking for bulk purchase?
          </div>
          <div className="text-[10px] leading-[12px] lg:text-[24px] lg:leading-[34px] text-[#666666] mt-[12px]">
          Tata Neu Gift Cards are the perfect choice for corporate spends, including Employee Rewards, Sales Incentives, Festival Gifting, Channel Incentives, and Consumer Promotions.
          </div>
        </div>
        <div className="text-[16px] lg:text-[40px]">
          <RiArrowRightSLine />
        </div>
      </div>
    </div>
  );
};

export default BulkPurchaseCard;
