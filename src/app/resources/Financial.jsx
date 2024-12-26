"use client";
import React, { useState } from "react";
import GradientHeaderText from "../common-components/GradientHeaderText";
import HeaderText from "../common-components/HeaderText";
import ActiveCardOptions from "../common-components/ActiveCardOptions";
import BottomButtonSlider from "../common-components/BottomButtonSlider";
import FinancialCard from "./FinancialCard";

const Financial = () => {
  const financialData = {
    // "AGM Notice 2024": [
    //   {
    //     Header: "AGM Notice 2024",
    //     Description: "Details about the AGM for 2024.",
    //     link: "/files/TPL_AGM_notice.pdf",
    //   },
    // ],
    "Annual Return 2023-24": [
      {
        Header: "Annual Return 2023-24",
        Description: "Summary of annual return for 2023-24.",
        link: "/files/Form_MGT_7_TPL_FY23-24Signed.pdf",
      },
    ],
    "Financial Statement 2023-24": [
      {
        Header: "Financial Statement 2023-24",
        Description: "Complete financial statement for 2023-24.",
        link: "/files/TPL FS_March_24_Signed.pdf",
      },
    ],
  };

  // Add "All" option to financialOptions
  const financialOptions = ["All", ...Object.keys(financialData)];
  const [activeFinancial, setActiveFinancial] = useState(financialOptions[0]);

  // Determine filteredCards based on the active option
  const filteredCards = activeFinancial === "All"
    ? Object.values(financialData).flat() // Flatten all cards if "All" is selected
    : financialData[activeFinancial] || [];

  console.log(filteredCards, "filteredCards");

  return (
    <div>
      <div className={` lg:px-[149px] lg:max-w-[1440px] m-auto`}>
        <div className="mb-[24px] px-[16px] lg:px-[0px] mt-[32px] md:mt-[64px]">
          <GradientHeaderText text="This year" />
          <HeaderText text="Financial" />
        </div>
        <div className="pl-[16px] lg:px-[0px] ">
        <ActiveCardOptions
          option={financialOptions}
          setActive={setActiveFinancial}
          active={activeFinancial}
        />
        </div>
      
        <div className="mt-[24px] hidden sm:block px-[16px] lg:px-[0px] lg:max-w-[1440px] mx-auto mb-[0px] lg:mb-[0px]">
          <BottomButtonSlider show={filteredCards.length} width="100%">
            {filteredCards.length > 0 && // Use length > 0 to ensure cards are present
              filteredCards.map((card, index) => (
                <div key={index} className="pb-[32px] pr-[30px] lg:pb-[97px]">
                  <FinancialCard
                    Header={card.Header}
                    Description={card.Description}
                    link={card.link}
                  />
                </div>
              ))}
          </BottomButtonSlider>
        </div>
        <div className="mt-[24px] px-[16px] block sm:hidden lg:max-w-[1440px] mx-auto mb-[0px] lg:mb-[0px]">
          <div className="flex flex-wrap gap-[20px] pb-[32px] justify-center">
          {filteredCards.length > 0 && // Use length > 0 to ensure cards are present
              filteredCards.map((card, index) => (
                <div key={index} className="">
                  <FinancialCard
                    Header={card.Header}
                    Description={card.Description}
                    link={card.link}
                  />
                </div>
              ))}
          </div>
          
        
        </div>
      </div>
    </div>
  );
};

export default Financial;
