import React from "react";

import styles from "./index.module.css";
import payCard1 from "../assets/svg/payCard1.svg";
import payCard2 from "../assets/svg/payCard2.svg";
import payCard3 from "../assets/svg/payCard3.svg";
import payCard4 from "../assets/svg/payCard4.svg";
import InfoCardPay from "./infoCardsPay";
import GradientHeaderText from "./GradientHeaderText";
import HeaderText from "./HeaderText";

const infoData = [
  {
    img: payCard1,
    title: "Fast & secure transactions",
  },
  {
    img: payCard2,
    title: "Industry-leading Success Rate",
  },
  {
    img: payCard3,
    title: "Easy integration and onboarding",
  },
  {
    img: payCard4,
    title: "Multiple payment instruments",
  },
];

const BenefitsSectionPay = () => {
  return (
    <div className="lg:py-[60px] max-w-[1440px] m-auto px-[20px] lg:px-[150px]">
      <div className=" mb-[24px]">
        <GradientHeaderText text="BEST IN CLASS" />

        <div className="mt-[12px]">
          <HeaderText text="Why Tata Pay Payment Gateway?" />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[16px] lg:gap-[28px]">
        {infoData?.map((item, i) => {
          return <InfoCardPay key={i} imgSrc={item?.img} title={item?.title} />;
        })}
      </div>
    </div>
  );
};

export default BenefitsSectionPay;
