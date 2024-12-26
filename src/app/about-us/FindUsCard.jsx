import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { BiEnvelope } from "react-icons/bi";
import Image from "next/image";
import styles from "./index.module.css";
import mail from "../assets/img/mails.png";
import location from "../assets/img/location.png";
const FindUsCard = ({ data }) => {
  return (
    <div
      className={`${styles[data.gradient]} ${
        styles.findUsCardCss
      } w-full lg:w-[352px] pb-[32px] lg:pt-[32px]  px-[32px] rounded-[16px]`}
    >
      <div className="h-[80px] flex items-end ">
        <Image src={data?.img} className=" w-[48px]  lg:w-[80px]" alt="img" />
      </div>

      <div
        className="text-[#1A1A1A] text-[20px] leading-[28px] lg:text-[24px]
       lg:leading-[32px] font-proxima-nova-bold mt-[16px]"
      >
        {data?.name}
      </div>
      <div className="text-[14px] lg:text-[16px] text-[#1A1A1A] leading-[20px] lg:leading-[24px] mt-[4px]">
        {data?.desc}
      </div>
      <div className="flex text-[#e9b7b7]  items-center">
        <div>
          {/* <CiLocationOn  color="#4D4D4D" className="text-[#4D4D4D]" size={16} /> */}
          <Image src={location} className="h-[13px] w-[28px]" alt="img" />
        </div>
        <div className="text-[#4D4D4D] text-[14px] leading-[20px] pl-[16px] pr-[12px] py-[12px]">
          {data?.address}
        </div>
      </div>
      <div className="flex  items-center  ">
        <div>
          {/* <BiEnvelope color="#4D4D4D"  className="text-[#4D4D4D]" size={16} />  */}
          {/* <img src="../assets/img/mail.png" alt="mail" className="h-[16px] w-[16px]" /> */}
          <Image src={mail} className="h-[12px] w-[12px]" alt="img" />
        </div>

        <div className="text-[#4D4D4D] text-[14px] leading-[20px] pl-[16px] pr-[12px] py-[12px]">
          <a href={`mailto:${data?.email}`}>{data?.email}</a>
        </div>
      </div>
    </div>
  );
};

export default FindUsCard;
