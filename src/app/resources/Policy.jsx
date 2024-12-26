"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import styles from "./index.module.css";
import HeaderText from "../common-components/HeaderText";
import ActiveCardOptions from "../common-components/ActiveCardOptions";

// Import logos
import customerGrievanceLogo from "../assets/img/customerGrievanceLogo.png";
import termAndConditionLogo from "../assets/img/termsAndConditionLogo.png";
import privacyNoticeLogo from "../assets/img/privacyNoticeLogo.png";
import userAgreementLogo from "../assets/img/userAgreementLogo.png";

const policyData = [
  {
    logo: customerGrievanceLogo,
    text: "Customer Grievance Redressal Policy",
    desc: "Descriptive text is a text which says what a person or a thing.",
    categories: ["All", "General"],  // This item appears in All and General tabs
    link: "/policy/customer-grievance",
  },
  {
    logo: customerGrievanceLogo,
    text: "Terms & Conditions for Gift PPI",
    desc: "Descriptive text is a text which says what a person or a thing.",
    categories: ["All", "Gift Card"],  // This item appears in All and General tabs
    link: "/policy/Gift-PPI-Terms-and-Conditions",
  },
  {
    logo: termAndConditionLogo,
    text: "Terms and Conditions for usage of website",
    desc: "Descriptive text is a text which says what a person or a thing.",
    categories: ["All","Legal"],  // This item appears in All and Legal tabs
    link: "/policy/Terms-and-Conditions-for-usage-of-website",
  },
  {
    logo: privacyNoticeLogo,
    text: "Privacy Notice",
    desc: "Descriptive text is a text which says what a person or a thing.",
    categories: ["All","Legal"],  // This item appears only in Legal tab
    link: "/policy/Privacy-Notice",
  },
  {
    logo: userAgreementLogo,
    text: "Tata Pay User Agreement",
    desc: "Descriptive text is a text which says what a person or a thing.",
    categories: ["All", "Legal"],  // This item appears in All and Legal tabs
    link: "/policy/Tata-pay-user-agreement",
  },
  {
    logo: userAgreementLogo,
    text: "Merchant Onboarding Policy",
    desc: "Descriptive text is a text which says what a person or a thing.",
    categories: ["All","General"],  // This item appears only in General tab
    link: "/policy/TPL-merchant-onboarding-policy",
  },
  // whistle-blower--policy
  {
    logo: userAgreementLogo,
    text: "Whistle Blower Policy",
    desc: "Descriptive text is a text which says what a person or a thing.",
    categories: ["All"],  // This item appears only in General tab
    link: "/policy/whistle-blower--policy",
  },
];

const Policy = () => {
  const policyOptions = ["All","Gift Card", "Legal"];
  const [activePolicy, setActivePolicy] = useState("All");

  const filteredPolicyData = useMemo(() => 
    policyData.filter((item) => item.categories.includes(activePolicy))
  , [activePolicy]);

  const handleCardClick = (link) => {
    const isExternalLink = link.startsWith("http");

    if (isExternalLink) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      const linkElement = document.createElement("a");
      linkElement.href = link;
      linkElement.setAttribute("download", "");
      document.body.appendChild(linkElement);
      linkElement.click();
      document.body.removeChild(linkElement);
    }
  };

  return (
    <div className={`${styles.policyCardsBgGradient}`}>
      <div className="lg:max-w-[1440px] px-[16px] lg:px-[149px] m-auto">
        <div className="mb-[24px] mt-[32px] md:mt-[64px]">
          <HeaderText text="Policy" />
        </div>
        <ActiveCardOptions
          option={policyOptions}
          setActive={setActivePolicy}
          active={activePolicy}
        />
        <div className="grid mt-[16px] lg:mt-[24px] sm:grid-cols-2 xl:grid-cols-3 gap-[24px] pb-[32px] sm:pb-[64px]">
          {filteredPolicyData.map((item, index) => (
            <a href={item.link} key={index}>
              <div className="bg-[#F2F6FF] flex gap-[16px] items-center py-[20px] px-[19px] rounded-[32px] border-[#FFFFFF] border-[4px] border-solid cursor-pointer shadow-lg h-full">
                <div className="h-[64px] w-[64px]">
                  <Image
                    src={item.logo}
                    className="h-[64px] w-[64px]"
                    alt="logo"
                  />
                </div>
                <div className="text-[16px] w-[calc(100%-88px)] font-semibold text-[#2A2A2A] md:font-proxima-nova-bold md:text-[18px]">
                  {item.text}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Policy;