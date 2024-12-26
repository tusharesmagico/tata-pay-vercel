"use client";
import React from "react";
import Image from "next/image";
import Hotels from "../assets/img/Hotels.png";
import Jewellery from "../assets/img/Jewellery.png";
import Flights from "../assets/img/flight.png";
import Fashion from "../assets/img/fashion.png";
import Luxury from "../assets/img/luxury.png";
import Health from "../assets/img/health.png";
import taj from "../assets/img/taj.png";
import tanishq from "../assets/img/tanishq.png";
import tata1mg from "../assets/img/tata-1mg.png";
import tatacliq from "../assets/img/tata-cliq.png";
import tatacliqluxurylight from "../assets/img/tata-cliq-luxury-light.png";
import airIndia from "../assets/img/air-india.png";
import starbucks from "../assets/img/starbucks.png";
import bigbasket from "../assets/img/bigbasket.png";
import cultfit from "../assets/img/cult-fit-white.png";
import qmin from "../assets/img/qmin.png";
import AutoLogoSlider from "./AutoLogoSlider";
import { BsThreeDots } from "react-icons/bs";
import AutoLogoSliderMobile from "./autroLogoSliderMobile";
import GradientHeaderText from "./GradientHeaderText";
import HeaderText from "./HeaderText";

const services = [
  { icon: Hotels, name: "Hotels" },
  { icon: Jewellery, name: "Jewellery" },
  { icon: Flights, name: "Flights" },
  { icon: Fashion, name: "Fashion" },
  { icon: Luxury, name: "Luxury" },
  { icon: Health, name: "Health" },
];

const GiftCardRow = [
  taj,
  tanishq,
  tata1mg,
  tatacliq,
  tatacliqluxurylight,
  airIndia,
  starbucks,
  bigbasket,
  cultfit,
  qmin,
];

const GiftCardRowM1 = [taj, tanishq, tata1mg, tatacliq, tatacliqluxurylight];
const GiftCardRowM2 = [airIndia, starbucks, bigbasket, cultfit, qmin];

const GiftCardServices = () => {
  return (
    <div className="max-w-[1440px] mx-auto  pt-[60px] pb-[48px] px-[20px] lg:px-[150px] bg-white">
      <div className="flex flex-col justify-center mb-[24px]">
        <GradientHeaderText text={"SERVICES WE OFFER"} />

        <div className={`"mt-[8px]`}>
          <HeaderText
            text={"Tata Neu Gift Cards available across 10+ Tata brands & 15+ categories"}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-start lg:justify-between gap-[20px] border-b-[1px] pb-[32px] mb-[32px] border-solid border-[#78787D] overflow-x-auto  mx-auto">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col  items-center">
            <div className="w-[60px] h-[60px] lg:w-[90px] lg:h-[90px] bg-gray-100 rounded-[25px] flex items-center justify-center mb-2">
              <Image
                src={service.icon}
                alt={service.name}
                className="object-contain"
              />
            </div>
            <span className="text-[18px]  font-semibold leading-[24px] text-center">
              {service.name}
            </span>
          </div>
        ))}
        <div className="flex flex-col items-center ">
          <div className="w-[60px] lg:w-[90px] border-[#78767A3D] border-[1px] border-solid h-[60px] lg:h-[90px] bg-white rounded-[12px] flex items-center justify-center mb-2">
            <BsThreeDots color="#8800EC" size={44} />
          </div>
          <a href="https://www.tatadigital.com/giftCardCatalogueSearch" target="_blank">
          <span className="text-[18px] font-semibold leading-[24px]">
            View all
          </span>
          </a>
         
        </div>
      </div>
      <AutoLogoSlider data={GiftCardRow} />
      <AutoLogoSliderMobile data={GiftCardRowM1} />
      <AutoLogoSliderMobile data={GiftCardRowM2} />
    </div>
  );
};

export default GiftCardServices;
