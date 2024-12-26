"use client";
import Image from "next/image";
import React from "react";
import styles from "./index.module.css";

const SimpleCard = ({ img, text, subText, link }) => {
  return (
    <a href={link} target="_blank">
      <div className="pl-[20px] lg:px-[16px]">
        <div
          className={`border-[1px] bg-[#FDFDFD] mb-[1px] border-solid flex flex-col border-[#78767A3D]
         rounded-[20px] overflow-hidden
          justify-between`}
        >
          {/* Image Container */}
          <div className={`${styles.imgContainer} `}>
            <Image src={img} className="object-cover w-full" />
          </div>

          <div className={`mb-[16px] h-auto lg:h-[110px] xl:h-auto `}>
            {/* Text Content */}
            <div
              className={`text-[14px]  leading-[20px] lg:text-[18px] min-h-[46px] font-bold lg:leading-[24px] px-[16px]  mt-[16px] lg:px-[24px] lg:mt-[16px]
          `}
            >
              {text}
            </div>
            {/* Optional Subtext */}
            {subText && (
              <div className="px-[16px]  lg:px-[24px]   text-[14px] leading-[20px] text-[#666666] ">
                {subText}
              </div>
            )}
          </div>
        </div>
      </div>
    </a>
  );
};

export default SimpleCard;
