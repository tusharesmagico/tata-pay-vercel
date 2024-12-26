import React from "react";
import InfoCard from "./infocard";
import styles from "./index.module.css";
import moneyUpi from "../assets/img/moneyUpi.png";
import calenderUpi from "../assets/img/calenderUpi.png";
import infoImg3 from "../assets/img/infoImg3.png";
import scanUpi from "../assets/img/scanUpi.png";
import GradientHeaderText from "./GradientHeaderText";
import HeaderText from "./HeaderText";

const infoData = [
  {
    img: infoImg3,
    title: "Earn up to 1.5% NeuCoins",
    details: "Select multiple bills, pay them in one shot with NeuCard & earn rewards",
    knowMore: false,
  },
  {
    img: scanUpi,
    title: "Scan & Pay",
    details:
      "Zero convenience fees for any bill payments or recharges",
    knowMore: false,
  },
  {
    img: calenderUpi,
    title: "Set up autopay",
    details: " Earn up to 5% NeuCoins by setting up autopay with NeuCard",
    knowMore: false,
  },
  {
    img: moneyUpi,
    title: "Transfer money easily",
    details:
      "Enjoy secure transfers with Tata Pay",
    knowMore: false,
  },
];

const BenefitsSectionUpi = () => {
  return (
    <div className=" mx-auto lg:max-w-[1440px] px-[20px] lg:px-[150px] py-[32px]  lg:py-[60px]">
      <div className=" mb-[24px]">
        <div className="mb-[8px]">
        <GradientHeaderText text={"BEST IN CLASS"} />
        </div>
       
        <HeaderText text="Tata Pay UPI Features" />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[16px] lg:gap-[28px]">
        {infoData?.map((item, i) => {
          return (
            <InfoCard
              key={i}
              imgSrc={item?.img}
              title={item?.title}
              details={item?.details}
              knowMore={item?.knowMore}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BenefitsSectionUpi;
