"use client"
import React from "react";
import InfoCard from "./infocard";
import styles from "./index.module.css";
import infoImg1 from "../assets/svg/infoImg1.svg";
import infoImg2 from "../assets/svg/infoImg2.svg";
import infoImg3 from "../assets/img/infoImg3.png";
import infoImg4 from "../assets/img/infoImg4.png";
import GradientHeaderText from "./GradientHeaderText";
import HeaderText from "./HeaderText";

const infoData = [
  {
    img: infoImg1,
    title: "Pay all bills at once",
    details: "Add all your bills to the cart & clear them in one shot",
  },
  {
    img: infoImg2,
    title: "Zero Convenience Fees",
    details:
      "No platform fees charged for any bill payments or recharges",
  },
  {
    img: infoImg3,
    title: "Earn NeuCoins",
    details: "Earn up to 5% NeuCoins with the Tata Neu HDFC Bank credit card",
  },
  {
    img: infoImg4,
    title: "Pay your way",
    details:
      "Pick any of our many secure payment options",
  },
];

const BenefitsSection = () => {
  return (
    <div className="max-w-[1440px] m-auto px-[20px] lg:px-[150px] py-[32px]  lg:py-[60px]">
      <div className="flex flex-col justify-center mb-[24px] mx-auto">
        <GradientHeaderText text={"BEST IN CLASS"} />

        <div className={`mt-[8px]`}>
          <HeaderText text={"Benefits of paying bills online on Tata Neu"} />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[28px]">
        {infoData?.map((item, i) => {
          return (
            <InfoCard
              key={i}
              imgSrc={item?.img}
              title={item?.title}
              details={item?.details}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BenefitsSection;
