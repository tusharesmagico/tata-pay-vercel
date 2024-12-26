" Use client";
import React from "react";
import styles from "./index.module.css";
import TATANeuButton from "./arrowButton";
import { IoIosArrowRoundForward } from "react-icons/io";
import tataStamp from "../assets/img/tataStamp.png";
import Image from "next/image";
const data = [
  "Get all your monthly bills out of the way in one shot",
  "  Zero convenience fee",
  "Earn NeuCoins as rewards",
];

import girlImg from "../assets/img/billPayGirl.png";
const BillsPaymentHero = () => {
  return (
    <div className="relative ">
      {/* <Image
        src={tataStamp}
        alt="stamp"
        className="h-[65px] w-[65px] lg:h-[120px] lg:w-[120px] absolute bottom-[-35px] lg:bottom-[-45px] left-[50px]  lg:left-[152px]"
      /> */}
      <div
        className={` ${styles.bgImg} w-full flex items-center justify-center`}
      >
        <div className="max-w-[700px]  lg:w-full  sm:max-w-[1440px]  sm:items-center sm:flex  flex-col sm:flex-row  sm:justify-center">
          <div className="pt-[74px] sm:w-[50%]  px-[20px]   sm:pt-[88px]  lg:pl-[149px] ">
            <h1 className="  text-[28px] lg:w-[45vw] text-[#1A1A1A] leading-[30px] sm:text-[36px] sm:leading-[48px]  md:text-[48px]  font-proxima-nova-bold  md:leading-[54px]">
              Recharge, Pay bills,
              <br />
              and do more with{" "}
              <span
                className={`text-[28px] font-proxima-nova-bold leading-[30px] sm:text-[36px] sm:leading-[48px] md:text-[48px] md:leading-[54px] ${styles.textGradient} mt-[8px] `}
              >
                Tata Pay
              </span>
            </h1>

            <div className="md:text-[24px] mt-[12px] text-[#4D4D4D] sm:text-[24px] sm:leading-[24px]  md:leading-[24px]  lg:mt-[24px]">
              {data?.map((item) => {
                return (
                  <div
                    key={item}
                    className="flex gap-[5px] text-[12px]  items-center mt-[12px] lg:text-[20px] leading-[16px] lg:leading-[32px]"
                  >
                    <span className="lg:text-[24px] text-[16px] leading-[16px] lg:leading-[24px]">
                      <IoIosArrowRoundForward color="#BA005B" />
                    </span>{" "}
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="block sm:hidden  w-[100%] max-w-[360px] m-auto">
              <Image src={girlImg} alt="Girl Image" className="w-full h-auto" />
            </div>
            <div className=" hidden sm:block lg:mt-[-20px]">
              <TATANeuButton
                link={"https://www.tatadigital.com/paybill?utm_source=billpay&utm_medium=organic&utm_campaign=tatapaypage"}
              />
            </div>
          </div>

          <div className="pt-[24px] w-[50%]  hidden sm:flex items-center sm:pt-[94px] lg:pt-[0px] lg:mt-[85px]  m-auto sm:h-[540px] lg:mr-[149px] lg:mb-[6px]">
            <Image src={girlImg} className=" w-full" alt="img" />
          </div>

          <div className="px-[20px] block sm:hidden sm:px-[149px]">
            <TATANeuButton
              link={"https://www.tatadigital.com/paybill?utm_source=billpay&utm_medium=organic&utm_campaign=tatapaypage"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillsPaymentHero;
