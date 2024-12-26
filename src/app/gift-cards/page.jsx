import React from "react";
import GiftCardHero from "./hero";
import GiftCardServices from "../common-components/cardServices";
import BenefitsSectionGiftCard from "../common-components/infoCardGiftCard";
import GiftCardDIv from "../assets/img/GiftCardDIv.png";
import Image from "next/image";
import SliderComponent from "../common-components/SliderComponent";
import SimpleCard from "../common-components/SimpleCard";
import FAQ from "../page-components/home/FAQ";
import cardImg8 from "../assets/img/cardImg8.jpg";
import cardImg9 from "../assets/img/cardimg9.png";
import cardImg10 from "../assets/img/cardimg10.jpg";


import cardImg2 from "../assets/img/cardImg2.png";
import cardImg3 from "../assets/img/cardImg3.png";
import cardImg4 from "../assets/img/cardImg4.png";

import BulkPurchaseCard from "../common-components/BulkPurchaseCard";

const firstSliderData = [
  {
    img: cardImg8,
    text: "Choose Gift Cards from 100+ brands, only on Tata Neu!",
    link: "https://www.tatadigital.com/giftCardCatalogueSearch",
  },
  {
    img: cardImg9,
    text: "Enjoy extra savings with NeuCard!",
    link: "https://www.tatadigital.com/giftCardCatalogueSearch",
  },
  {
    img: cardImg10,
    text: "Unlock exclusive rewards!",
    link: "https://www.tatadigital.com/giftCardCatalogueSearch",
  },
 
];

const secondSliderData = [
  {
    img: cardImg2,
    text: "Explore the whole world with a Personal Loan of up to ₹10 Lakhs",
    link: "https://www.tatadigital.com/v2/personal-loan?utm_source=Facebook&utm_medium=CPM&utm_campaign=%7B%7Badset.name%7D%7D&utm_content=%7B%7Bad.name%7D%7D&fbclid=IwY2xjawFxtEdleHRuA2FlbQIxMQABHSRnu4qgupZahC8AZrWzQlWTV3tLLDHOU--sKIXiJs2gdSLaaN16fu1zdg_aem_wTcVCG11aVJn9ml4RVoaSQ",
  },
  {
    img: cardImg3,
    text: "Unlock simplified market insights daily with Market Brew",
    link: "https://www.marketbrew.in/",
  },
  {
    img: cardImg4,
    text: "Insure against digital theft of funds with Cybershield Insurance",
    link: "https://www.tatadigital.com/auth/login?next=/finance/insurance/cyber-insurance",
  },
];

const GiftCards = () => {
  return (
    <div className="bg-[#FDFDFD]">
      <GiftCardHero />

      <div className=" max-w-[700px] m-auto lg:max-w-[1440px]">
      <div>
      <GiftCardServices />
      <BenefitsSectionGiftCard />

      </div>
       </div>
       <div className="">
       <SliderComponent
          isGradientStyle={true}
          secondaryText="New launches & Offers"
          primaryText="Simplify payments & multiply rewards"
        >
          {firstSliderData?.map((item, i) => {
            return (
              <SimpleCard
                key={i}
                img={item?.img}
                text={item?.text}
                link={item?.link}
                offerHeading={"New launches & Offers"}
                mainHeading={"Simplify payments & multiple rewards"}
              />
            );
          })}
        </SliderComponent>
       </div>
        
        <div className=" max-w-[700px] m-auto lg:max-w-[1440px]">
        <div className="py-[32px] lg:py-[60px]">
          <BulkPurchaseCard />
        </div>
        {/* <UpiPaymentSteps /> */}
        <SliderComponent
          secondaryText="Other offers"
          primaryText="Other exciting products offered on Tata Neu"
          isMargin={true}
        >
          {secondSliderData?.map((item, i) => {
            return (
              <SimpleCard
                key={i}
                img={item?.img}
                text={item?.text}
                link={item?.link}
              />
            );
          })}
        </SliderComponent>

        <div className="px-[16px] lg:px-[149px]">{/* <FAQ /> */}</div>
      </div>
    </div>
  );
};

export default GiftCards;
