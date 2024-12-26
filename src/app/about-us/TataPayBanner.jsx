import React from "react";
import tataPayImg from "../assets/img/tatapayimg.png";
import Image from "next/image";
const TataPayBanner = () => {
  return (
    <div className="flex flex-wrap items-center lg:flex-nowrap   rounded-[24px] ">
      {/* <div>
        <Image src={tataPayImg} alt="img" />
      </div> */}
      <div
        className=" max-w-[800px] mx-auto  "
      >
        {/* font-proxima-nova-bold */}
        <div className="text-[#2A2A2A]    text-[16px] lg:text-[24px] leading-[24px]
       lg:leading-[32px] md:text-center">
          Tata Payments, a 100% subsidiary of Tata Digital, is a financial
          services arm under Tata Group, one of India's largest and most
          prestigious conglomerates. It focuses on providing a wide range of
          payment solutions, including digital payments, bill payments, and
          other financial services.
        </div>
        <div className="text-[#2A2A2A]  text-[16px]   lg:text-[20px] leading-[24px]
       lg:leading-[28px] md:text-center mt-[12px] lg:mt-[24px]">
          Tata Payments aims to leverage technology to offer secure, efficient,
          and user-friendly payment solutions to individuals and businesses. The
          company emphasizes innovation, customer satisfaction, and security to
          enhance the financial ecosystem and support the growing digital
          economy in India.
        </div>
      </div>
    </div>
  );
};

export default TataPayBanner;
