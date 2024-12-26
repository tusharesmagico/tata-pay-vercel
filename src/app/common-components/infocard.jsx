import React from "react";
import styles from "./index.module.css";

import Image from "next/image";

const InfoCard = ({ imgSrc, title, details, knowMore = false }) => {
  return (
    <div
      className={` ${
        styles.cardGradient1
      } pt-[12px] border-[1px] border-solid border-[#78787D3D] border-opacity-25 rounded-[20px] lg:rounded-[32px] 
         flex flex-col items-start relative px-[16px] lg:px-[24px] ${
           knowMore ? "pb-[55px]" : "pb-[24px]"
         } `}
    >
     
      <Image
        src={imgSrc}
        alt={title}
        className="w-[48px] h-[48px] lg:w-[80px] lg:h-[80px]"
      />
      <h3 className=" mt-[8px] text-[16px] text-[#1A1A1A] lg:leading-[24px] lg:text-[18px] font-semibold lg:font-bold">
        {title}
      </h3>
      <p className="mt-2 text-[12px] lg:text-[14px]  text-[#4D4D4D] lg:leading-[20px]">
        {details}
      </p>
      {knowMore && (
        <p className="absolute bottom-[15px] mt-[40px] text-[#8800EC] text-[12px] lg:text-[18px] lg:leading-[24px]">
          know more
        </p>
      )}
    </div>
  );
};

export default InfoCard;
