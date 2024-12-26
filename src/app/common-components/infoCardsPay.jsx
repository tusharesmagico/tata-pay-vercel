import React from "react";
import styles from "./index.module.css";

import Image from "next/image";

const InfoCardPay = ({ imgSrc, title }) => {
  return (
    <div
      className={` ${styles.cardGradient1} pt-[16px] md:pt-[32px] border-[1px] border-solid border-[#78787D3D] border-opacity-25  rounded-[20px] lg:rounded-[32px] 
         flex flex-col items-center px-[16px] lg:px-[24px]  pb-[16px] md:pb-[24px] `}
    >
      <Image
        src={imgSrc}
        alt={title}
        className="h-[48px] w-[48px] sm:h-[120px] sm:w-[120px]"
      />
      <h3 className=" mt-[8px] text-center text-[16px] lg:leading-[24px] lg:text-[18px] font-semibold lg:font-proxima-nova-bold">
        {title}
      </h3>
    </div>
  );
};

export default InfoCardPay;
