import React from "react";
import styles from "./index.module.css";
import TATANeuButton from "../bill-payment/arrowButton";
import girlImg from "../assets/img/upiBoy.png";
import Image from "next/image";

const UpiPaymentHero = () => {
  return (
    <div className="relative ">
      {/* <Image
        src={tataStamp}
        alt="stamp"
        className="h-[120px] w-[120px] absolute bottom-[-45px] left-[152px]"
      /> */}
      <div className={` ${styles.bgImg}  `}>
        <div className="max-w-[700px]   m-auto sm:max-w-[1440px] sm:items-center sm:flex  flex-col sm:flex-row gap-[49px]  sm:justify-between">
          <div className="pt-[74px] sm:w-[60%]  px-[20px] sm:pt-[70px] md:pt-[90px] xl:pt-[70px]  lg:pl-[149px]  ">
            <h1 className=" font-proxima-nova-bold text-[28px] text-[#1A1A1A] leading-[30px] sm:text-[36px] sm:leading-[48px]  md:text-[48px]   md:leading-[54px]">
              Seamless payments
              <div>
                with{" "}
                <span
                  className={`text-[28px] font-proxima-nova-bold  leading-[30px] sm:text-[36px] sm:leading-[48px]   md:text-[48px] md:leading-[54px] ${styles.textGradient} mt-[8px] `}
                style={{fontWeight:900}}
                >
                  UPI
                </span>
              </div>
            </h1>

            <div className="md:text-[20px] mt-[12px]  text-[#4D4D4D] text-[14px] leading-[20px] sm:text-[20px] sm:leading-[24px]  md:leading-[24px]  lg:mt-[24px]">
            Send money, pay bills, or shop effortlessly with fast, secure digital transactions with Tata Pay
            </div>

            <div className=" block sm:hidden  w-[80%] max-w-[360px] m-auto ">
              <Image src={girlImg} alt="Girl Image" className="w-full h-auto" />
            </div>
            <div className=" hidden sm:block">
              <TATANeuButton
                link={
                  "https://www.tatadigital.com/payment/vault?utm_source=upi&utm_medium=organic&utm_campaign=tatapaypage"
                }
              />
            </div>
          </div>

          <div className="pt-[24px] w-[40%] hidden sm:flex items-center sm:mt-[70px] m-auto lg:mr-[150px] lg:mb-[31px] ">
            <Image src={girlImg} className=" w-full" alt="img" />
          </div>

          <div className="px-[20px] block sm:hidden sm:px-[149px]">
            <TATANeuButton
              link={
                "https://www.tatadigital.com/payment/vault?utm_source=upi&utm_medium=organic&utm_campaign=tatapaypage"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpiPaymentHero;
