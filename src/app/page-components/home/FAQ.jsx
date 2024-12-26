"use client";
import Accordion from "../../common-components/Accordion";
import React, { useState } from "react";
import GradientHeaderText from "../../common-components/GradientHeaderText";
import HeaderText from "../../common-components/HeaderText";

const accordionData = [
  {
    question: "Can I use a landing page instead of a website?",
    text: "Marketers often use landing pages to help users “land” on specific web pages linked on an email, social media post, or ad. While they may not be an adequate replacement for a website, landing pages are valuable to reach short-term marketing objectives. For example, you can allow users to order pre-sale items or sign-up for limited edition...",
  },
  {
    question: "How do I create a landing page without a domain?",
    text: "Marketers often use landing pages to help users “land” on specific web pages linked on an email, social media post, or ad. While they may not be an adequate replacement for a website, landing pages are valuable to reach short-term marketing objectives. For example, you can allow users to order pre-sale items or sign-up for limited edition...",
  },
  {
    question: "How do I create a landing page without a domain?",
    text: "Marketers often use landing pages to help users “land” on specific web pages linked on an email, social media post, or ad. While they may not be an adequate replacement for a website, landing pages are valuable to reach short-term marketing objectives. For example, you can allow users to order pre-sale items or sign-up for limited edition...",
  },
  {
    question: "How do I create a landing page without a domain?",
    text: "Marketers often use landing pages to help users “land” on specific web pages linked on an email, social media post, or ad. While they may not be an adequate replacement for a website, landing pages are valuable to reach short-term marketing objectives. For example, you can allow users to order pre-sale items or sign-up for limited edition...",
  },
];

const FAQ = ({accordionData}) => {
  const [currentIndex, setCurrentIndex] = useState(null); // Changed to null instead of an empty string

  const handleAccordion = (value) => {
    // Fixed: Make sure value and currentIndex are numbers
    if (value === currentIndex) {
      setCurrentIndex(null);
    } else {
      setCurrentIndex(value);
    }
  };

  return (
    <div className="py-[32px] m-auto p-[16px] lg:px-[149px] lg:max-w-[1440px] lg:py-[60px]">
      <div className="flex flex-col justify-center mb-[24px]">
        <GradientHeaderText text={"FAQs"} />
        <div className={`mt-[8px]`}>
          <HeaderText text={"All your questions, answered"} />
        </div>
      </div>
      <div>
        {accordionData.map((item, index) => {
          return (
          
            <>
              <Accordion
              key={index}
              question={item.question}
              isOpen={currentIndex === index} // Pass boolean value based on index match
              handleIsOpen={() => handleAccordion(index)} // Pass index directly
            >
              <div className="text-[14px] lg:text-[14px] leading-[20px] lg:leading-[20px] mt-[8px]">
                {item.text}
              </div>

            </Accordion>
             {index < accordionData.length - 1&&currentIndex !== index && (
              <hr className="border-t-[1px] border-[#DADADA] " />
            )}
            
            </>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
