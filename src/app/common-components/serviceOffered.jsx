
import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Electricity from "../assets/img/Electricity.png";
import creditcard from "../assets/img/creditcard.png";
import FASTag from "../assets/img/FASTag.png";
import insurance from "../assets/img/insurance.png";
import postpaid from "../assets/img/postpaid.png";
import prepaid from "../assets/img/prepaid.png";
import lpg from "../assets/img/lpg.png";
import responsiveMedia0 from "../assets/img/responsive-media0.png";
import responsiveMedia1 from "../assets/img/responsive-media1.png";
import responsiveMedia2 from "../assets/img/responsive-media2.png";
import responsiveMedia3 from "../assets/img/responsive-media3.png";
import responsiveMedia4 from "../assets/img/responsive-media4.png";
import responsiveMedia5 from "../assets/img/responsive-media5.png";
import responsiveMedia6 from "../assets/img/responsive-media6.png";
import responsiveMedia7 from "../assets/img/responsive-media7.png";
import responsiveMedia8 from "../assets/img/responsive-media8.png";
import responsiveMedia9 from "../assets/img/responsive-media9.png";

import styles from "./index.module.css";
import AutoLogoSlider from "./AutoLogoSlider";
import AutoLogoSliderMobile from "./autroLogoSliderMobile";
import GradientHeaderText from "./GradientHeaderText";
import HeaderText from "./HeaderText";
// CC, elec, mobile recharge,postpaid, insurance, loan, DTH
const services = [
  { icon: creditcard, name: "Credit Card" },
  { icon: Electricity, name: "Electricity" },
  { icon: prepaid, name: "Mobile Recharge" },
  { icon: postpaid, name: "Postpaid Mobile" },
  { icon: insurance, name: "Insurance" },
 

];

const billPaymentLogos = [
  responsiveMedia0,
  responsiveMedia1,
  responsiveMedia2,
  responsiveMedia3,
  responsiveMedia4,
  responsiveMedia5,
  responsiveMedia6,
  responsiveMedia7,
  responsiveMedia8,
  responsiveMedia9,
];
const billPaymentLogos1 = [
  responsiveMedia0,
  responsiveMedia1,
  responsiveMedia2,
  responsiveMedia3,
  responsiveMedia4,
];
const billPaymentLogos2 = [
  responsiveMedia5,
  responsiveMedia6,
  responsiveMedia7,
  responsiveMedia8,
  responsiveMedia9,
];

const BillPayServices = () => {
  return (
    <div className="mx-auto max-w-[1440px] lg:px-[150px]  py-[32px] md:py-[60px] xl-px-[150px] bg-white">
      <div className="flex flex-col justify-center  mx-[20px] mb-[24px] lg:mx-auto">
        <GradientHeaderText text={" SERVICES WE OFFER"} />

        <div className={`mt-[8px]`}>
          <HeaderText
            text={"Manage all bills & recharges"}
          />
        </div>
      </div>
      <div  className=" px-[20px] lg:px-[0px] grid grid-cols-4  sm:flex flex-wrap  gap-[16px] sm:justify-between lg:justify-start xl:justify-between mb-[32px] pb-[32px] border-opacity-[24%]  overflow-x-auto  mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col w-[64px] lg:w-auto items-center"
          >
            <div className="w-[60px] h-[60px] lg:w-[90px] lg:h-[90px] bg-gray-100 rounded-[16px] lg:rounded-[25px] flex items-center justify-center mb-2">
              <Image
                src={service.icon}
                alt={service.name}
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <span className="text-[12px] lg:text-[18px] font-semibold loading-[24px] text-center">
              {service.name}
            </span>
          </div>
        ))}
          <div
            
            className="flex md:hidden flex-col w-[64px] lg:w-auto items-center"
          >
            <div className="w-[60px] h-[60px]  lg:w-[90px] lg:h-[90px] bg-gray-100 rounded-[16px] lg:rounded-[25px] flex items-center justify-center mb-2">
              <Image
                src={lpg}
                alt={"lpg"}
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <span className="text-[12px] lg:text-[18px] font-semibold loading-[24px] text-center">
             DTH
            </span>
          </div>
          {/* { icon: FASTag, name: "FASTag" }, */}
          <div
            
            className="flex  flex-col w-[64px] lg:w-auto items-center"
          >
            <div className="w-[60px] h-[60px]  lg:w-[90px] lg:h-[90px] bg-gray-100 rounded-[16px] lg:rounded-[25px] flex items-center justify-center mb-2">
              <Image
                src={FASTag}
                alt={"FASTag"}
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <span className="text-[12px] lg:text-[18px] font-semibold loading-[24px] text-center">
            Loan Repayment
            </span>
          </div>
        <div className="flex flex-col w-[64px]  lg:w-auto items-center">
        <a href=" https://www.tatadigital.com/billpayment/landing-pwa" target="_blank">
          <div
            className="w-[60px] h-[60px] lg:w-[90px] lg:h-[90px] bg-black rounded-[16px] lg:rounded-[25px] flex items-center
           justify-center mb-2"
          >
            <ChevronRight className="text-white" size={24} />
          </div>
          </a>
          
            <span className="text-[12px] lg:text-[18px] font-semibold loading-[24px]">
              View all
            </span>
       
        </div>
      </div>

      <AutoLogoSlider data={billPaymentLogos} />
      <AutoLogoSliderMobile data={[...billPaymentLogos1,...billPaymentLogos1]} />
      <AutoLogoSliderMobile data={[...billPaymentLogos2,...billPaymentLogos2]} />
    </div>
  );
};

export default BillPayServices;
