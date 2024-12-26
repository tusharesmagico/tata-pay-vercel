"use client";
import React from "react";
import styles from "./index.module.css";
import girlImg from "../assets/img/paymentsGirl.png";
import Image from "next/image";

const PaymentAggregatorsHero = () => {
  return (
    <div className="relative ">
      <div className={` ${styles.bgImg} `}>
        <div className="max-w-[700px] m-auto sm:max-w-[1440px]  sm:flex  flex-col sm:flex-row mt-[40px] ">
          <div className="pt-[74px] sm:pt-[80px] sm:w-[60%]  px-[20px] md:pt-[80px] lg:pt-[80px] xl:pt-[140px]  lg:pl-[149px] ">
            <h1 className="  text-[28px] text-[#1A1A1A] leading-[30px] sm:text-[36px] sm:leading-[48px]  md:text-[48px]  font-proxima-nova-bold  md:leading-[54px]">
              Get the{" "}
              <span className={` ${styles.textGradient} `}>Tata Pay</span>{" "}
              Payment Gateway for fast, secure & seamless payments


            
            </h1>

            <div className="md:text-[20px] mt-[12px] text-[#4D4D4D]  text-[14px] leading-[20px]  sm:text-[20px] sm:leading-[24px]  md:leading-[24px]  lg:mt-[24px] ">
              Elevate your business by making us a part of your journey to
              success.
            </div>

            <div className=" block sm:hidden  w-[100%]  ">
              <Image src={girlImg} alt="Girl Image" className="w-full h-auto" />
            </div>
          </div>

          <div className="  w-[40%] sm:mt-[50px] xl:mt-[0px]  hidden sm:flex justify-center items-center  m-auto lg:mr-[6vw] ">
            <Image src={girlImg} className=" w-full" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentAggregatorsHero;
