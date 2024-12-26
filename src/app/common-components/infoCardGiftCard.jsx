import React from "react";
import InfoCard from "./infocard";
import styles from "./index.module.css";
import purse from "../assets/img/purse.png";
import voucher from "../assets/img/voucher.png";
import bills from "../assets/img/bills.png";
import bucket from "../assets/img/bucket.png";
import HeaderText from "./HeaderText";
import GradientHeaderText from "./GradientHeaderText";

const infoData = [
  {
    img: bucket,
    title: "Shop across 10+ Tata brands",
    details: "Choose from BigBasket, Croma, Taj, Tata Cliq and many more",
  },
  
  {
    img: voucher,
    title: "Convert into brand vouchers",
    details:
      "Convert it into vouchers of your favourite brands on the Tata Neu Gift Card Store",
  },
  {
    img: purse,
    title: "Personalised gifting",
    details:
      "Personalise the gift card to send to your loved ones or for corporate spends",
  },
];

const BenefitsSectionGiftCard = () => {
  return (
    <div className="max-w-[700px]  m-auto lg:max-w-[1440px] px-[20px] lg:px-[150px] py-[32px]  lg:py-[60px]">
      <div className="flex flex-col justify-center mb-[24px]">
        <GradientHeaderText text={"BEST IN CLASS"} />

        <div className={`mt-[8px]`}>
          <HeaderText text={"One-stop shop for all your gifting needs"} />
        </div>
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

export default BenefitsSectionGiftCard;
