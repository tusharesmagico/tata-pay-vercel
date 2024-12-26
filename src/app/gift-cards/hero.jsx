import React from "react";
import styles from "./index.module.css";
import TATANeuButton from "../bill-payment/arrowButton";
import girlImg from "../assets/img/giftCardBoy.png";
import Image from "next/image";
const GiftCardHero = () => {
  return (
    <div className="relative ">
      <div className={` ${styles.bgImg} `}>
        <div className="max-w-[700px] m-auto sm:max-w-[1440px] sm:items-center sm:flex lg:pl-[140px]  flex-col sm:flex-row  sm:justify-between ">
          <div
            className="pt-[74px] sm:w-[60%]  px-[20px] sm:pt-[90px] md:pt-[90px] xl:pt-[70px] 
          
          
          "
          >
            <div className="  font-proxima-nova-bold text-[28px] text-[#1A1A1A] leading-[30px] sm:text-[36px] sm:leading-[48px]  md:text-[48px]   md:leading-[54px]">
              Discover the ease of 
              <br />
              gifting with Tata Neu Gift Card
            </div>
            <div className="md:text-[20px] mt-[12px]  text-[#4D4D4D] text-[14px] leading-[20px] sm:text-[20px] sm:leading-[24px]  md:leading-[24px]  lg:mt-[24px]">
              Discover the ease of gifting with Tata Neu Gift Cards. From birthdays to special occasions, send the perfect gift effortlessly in just a few clicks, redeemable across all your favourite Tata brands.
            </div>

            <div className="block sm:hidden  w-[80%] max-w-[360px] m-auto">
              <Image src={girlImg} alt="Girl Image" className="w-full h-auto" />
            </div>
            <div className="hidden sm:block">
              <TATANeuButton  link={" https://www.tatadigital.com/giftCardCatalogueSearch"} />
            </div>
          </div>

          <div  className="pt-[24px] w-[40%] hidden sm:flex items-center sm:mt-[70px] m-auto lg:mr-[120px] lg:mb-[31px] ">
            <Image src={girlImg} className=" w-full" alt="img" />
          </div>

          <div className="px-[20px] block sm:hidden sm:px-[149px]">
            <TATANeuButton  link={" https://www.tatadigital.com/giftCardCatalogueSearch"}  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCardHero;
