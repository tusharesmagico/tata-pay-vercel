"use client";
import React, { useState } from "react";
import Accordion from "../../common-components/Accordion";

const policyData = [
  {
    title: "1. Introduction",
    desc: [
      {
        heading: "",
        points: [
          'Tata Payments Limited (hereinafter referred to as the “company”), seeks to document the practices and procedures to be followed by the company for acquisition of new merchants. Reserve Bank of India (“RBI”) vide its Guidelines on Regulation of Payment Aggregators and Payment Gateways dated 17 March 2020, as amended or clarified from time to time (“PA Guidelines”) has mandated payment aggregators to have a board approved merchant on-boarding policy. The policy is also expected to govern merchant onboardings for availing PPI related services w.r.t. PPI Master Directions dated 27 August 2021 as amended or clarified from time to time (“PPI Master Direction”) issued by the RBI.',
          "This Merchant Onboarding Policy has been formulated to provide the minimum requirements pertaining to the procedures that the Company shall implement when associating with Merchants and it shall, among others, cover aspects related to Merchant due diligence, reporting and record management in line with the PA Guidelines, PPI Master Directions and RBI Master Directions- Know Your Customer Directions (KYC), 2016.",
        ],
      },
    ],
  },
  {
    title: "2. Objectives of the Policy",
    desc: [
      {
        heading: "The Merchant Onboarding Policy has been prepared to achieve the following objectives:",
        points: [
          "i. To establish a framework for the implementation of adequate onboarding processes, procedures and controls for Merchants.",
          "ii. To regularly review the Policy and procedures herein to ensure its effectiveness",
        ],
      },
    ],
  },
  {
    title: "3. Scope and Applicability",
    desc: [
      {
        heading: "",
        points: [
          "The Merchant Onboarding Policy shall be applicable to all the Merchants onboarded for providing the PA and/ or PPI related services. It is also applicable to all relevant stakeholders in the company who are responsible for the acquisition/ onboarding of merchants and transaction monitoring post onboarding.",
        ],
      },
    ],
  },
  {
    title: "4. Merchant Registration",
    desc: [
      {
        heading: "",
        points: [
          "Tata Payments Limited shall collect and verify identity documents from the Merchants while establishing a business acquirer to meet RBI's KYC requirement.",
          "i. Mandatory documents shall be collected from the Merchants and duly verified as allowed by RBI.",
          "ii. As a part of due diligence procedure, the company shall collect information as required by the applicable guidelines from regulators.",
          "iii. The Company shall setup a process to obtain all required information from the merchant.",
          "iv. The company shall conduct the background screening as required by the regulators, card networks and acquirers, which shall be performed by the Operations team and the same shall be recorded along with onboarding documents.",
          ,"Refer to Appendix I for list of documents and checks conducted by the company as per Entity Type."
        ],
      },
    ],
  },
  {
    title: "5. Assessment and Evaluation",
    desc: [
      {
        heading:"",
        points:[
          "As per the RBI’s PA Guidelines, PPI Master Direction and Master Direction - KYC, 2016, the company shall undertake Merchant assessment to comply with the regulatory requirements.",
"Below given is the process followed by the company for onboarding Merchants:"

        ]
      },
      {
        heading: "Merchant Evaluation and Risk Assessment:",
        points: [
          "i. Merchant onboarding team will ensure that the documents are reviewed and validated during onboarding",
          "ii. It shall be ensured that the Merchants onboarded do not sell fake/ prohibited/ counterfeit products, etc.",
          "iii. The company shall also verify if the Merchant's website is compliant to guidelines by regulators, card networks, and acquirers clearly indicating the terms and conditions of services, timeline for processing returns and refunds, about us, contact details, etc.",
          "iv. Name screening shall be done against applicable negative/sanctions list published or recommended by RBI or other regulators.",
          "v. The company shall be responsible to check Payment Card Industry-Data Security Standard (PCI-DSS) and Payment Application-Data Security Standard (PA-DSS) compliance of the infrastructure of the merchants onboarded. The company shall undertake comprehensive security assessment during Merchant onboarding process to ensure minimal baseline security controls are adhered to by the Merchants. A security audit of the Merchant may be carried out to check compliance.Refer to Section 9: Security Risk Assessment for further details",
        ],
      },
      {
        heading: "Merchant Risk Categorization:",
        points: [
          "Post assessment/ diligence of the merchant, each merchant shall be classified as low, medium or high-risk.",
        ],
      },
      {
        heading: "Commercials and Legal Agreement:",
        points: [
          "The fees and commercials shall be agreed upon with the Merchant and an agreement shall be executed to this effect.",
          "Agreement with Merchant shall have provision for security / privacy of customer data.",
          "PAs agreement with Merchants shall include compliance to PA-DSS and incident reporting obligations.",
        ],
      },
    ],
  },
  {
    title: "6. Activation of Merchant Account",
    desc: [
      {
        heading: "",
        points: [
          "The merchant onboarding team shall maintain segregation of duties with respect to merchant account activation. Post completion of due diligence checks of the Merchant, the Merchant account shall be activated and Merchant shall be communicated of the activation with a welcome email.",
        ],
      },
    ],
  },
  {
    title: "7. Ongoing Monitoring",
    desc: [
      {
        heading: "",
        points: [
          "Onboarding Team shall setup post live monitoring procedures to keep a track of any changes to details submitted by the Merchant at the time of onboarding. The frequency of assessment shall be dependent on the risk category of the Merchant.",
        ],
      },
    ],
  },
  {
    title: "8. Transaction Monitoring",
    desc: [
      {
        heading: "",
        points: [
          "The Company shall ensure that transactions are monitored using data analytics and pre–authorization controls. Transactions of suspicious nature shall be reported to Financial Intelligence Unit - India (FIU-IND).",
        ],
      },
    ],
  },
  {
    title: "9. Security Risk Assessment",
    desc: [
      {
        heading: "",
        points: [
          "Security controls implemented by the Merchants will be identified and assessed. In addition, the Company shall also verify whether the Merchants comply with the requirements under their information security policy, PA Guidelines and PPI Master Direction.",
          "Merchants will also be assessed on their PCI-DSS and PA-DSS compliance requirements. The Merchants will also be expected to comply with applicable law related to security of personal data. A security audit of the Merchants based on the risk categorization may be carried out periodically to check compliance with PA Guidelines/ PPI Master Direction. A review will be conducted on a periodic basis to ensure compliance with regulatory security standard benchmarks.Merchants shall submit annual independent security audit reports to the company (PA/ PPI issuer).",
          "The PAs shall obtain periodic security assessment reports either based on the risk assessment (large or small merchants) and / or at the time of renewal of contracts.",
        ],
      },
    ],
  },
  {
    title: "10. Termination of Merchant accounts",
    desc: [
      {
        heading: "",
        points: [
          "Merchant account may be deactivated or otherwise restricted from accessing or using the company's PA/ PPI Platform or Services in the event of:",
          "i.Violation of Terms of Use as per the agreement between the company and the merchant",
          "ii. Disparagement of the company or any of its affiliates",
          "iii. Termination request from the Merchant",
          "iv. High chargebacks and/or substantial fraud transactions on the gateway",
          "v. Complaints against the Merchant",
          "The Merchant shall be made aware that Tata Payments Limited shall retain the Merchant's registration information, transactional information or any other information that the Company is permitted to store as permitted under various applicable laws after termination of contract.",
        ],
      },
    ],
  },
  {
    title: "11. Policy Review and update",
    desc: [
      {
        heading: "",
        points: [
          "This policy shall be reviewed and updated on a periodic basis.",
        ],
      },
    ],
  },
  {
    title: "12. Record Management and Internal Governance Requirement",
    desc: [
      {
        heading: "",
        points: [
          "In line with Master Direction – KYC Direction, 2016, the Company shall undertake the following steps for maintaining, preserving and reporting of Merchant information:",
          "i. Maintain all necessary records of transactions with Merchants including the Merchant Agreement, Merchant Application, Documentation, Transaction data, etc. as per the regulatory guidelines.",
          "ii. Preserve the records pertaining to the identification of the Customers and their addresses obtained while opening the account and during the course of business relationship, for a period of five years from the date of cessation of the transactions.",
          "iii. Make available the identification records and transaction data to the competent authorities upon request.",
          "iv. Maintain all necessary information in respect of transactions prescribed under PML Rule 3 so as to permit reconstruction of individual Gift PPI Terms and Conditions , including the following:",
          "the nature of the transactions;",
          "the amount of the transaction and the currency in which it was denominated;",
          "the date on which the Gift PPI Terms and Conditions  was conducted; and",
          "the parties to the Gift PPI Terms and Conditions .",
          "v. Evolve a system for proper maintenance and preservation of account information in a manner that allows data to be retrieved easily and quickly whenever required or when requested by the competent authorities.",
          "vi. Maintain records of the identity and address of the Merchants, and records in respect of transactions in hard or soft format for 5 years.",
        ],
      },
    ],
  },
  {
    title: "Appendix I - Entity Wise Document List",
    desc: [
      {
        heading: "Individual",
        points: [
          "PAN Card/ Form 60",
          "Officially Valid Document (OVD) (Any 1): Aadhaar Card, Passport, Driving License, proof of possession of Aadhaar number, Voter's Identity Card, job card issued by NREGA duly signed by an officer of the State Government and letter issued by the National Population Register",
          "Individual Address proofs (In case the OVD does not have updated address): Utility bills, Property/Municipal Tax receipts, Pension orders and Letter of allotment",
          "Proof of Address for foreign nationals (if applicable): Any document issued by the Government departments of foreign jurisdictions and/or letter issued by the Foreign Embassy or Mission in India.",
        ],
      },
      {
        heading: "Legal Entity",
        points: [
          "Company:",
          "Certificate of Incorporation",
          "MoA and AoA",
          "Company PAN Card",
          "Board Resolution",
          "OVD of Authorised signatory",
          "Names of the relevant persons holding senior management position",
          "Registered office and the principal place of its business, if it is different",
          "Partnership/Limited Liability Partnerships (LLP):",
          "Registration Certificate",
          "PAN of Firm/LLP",
          "Partnership Deed/LLP agreement",
          "OVD of Authorised signatory",
          "Names of all the partners",
          "Registered office and the principal place of its business, if it is different",
          "Sole Proprietorship:",
          "PAN/Form 60 and OVD of the proprietor",
          "In addition to the above, any two of the following documents shall also be obtained:",
          "Registration certificate including Udyam Registration Certificate (URC) issued by the Government",
          "Certificate/licence issued by the municipal authorities under Shop and Establishment Act.",
          "Sales and income tax returns.",
          "CST/VAT/ GST certificate (provisional/final).",
          "Certificate/registration document issued by Sales Tax/Service Tax/Professional Tax authorities.",
          "IEC (Importer Exporter Code) issued to the proprietary concern by the office of DGFT or Licence/certificate of practice issued in the name of the proprietary concern by any professional body incorporated under a statute.",
          "Complete Income Tax Return (not just the acknowledgement) in the name of the sole proprietor where the firm's income is reflected, duly authenticated/acknowledged by the Income Tax authorities.",
          "Utility bills such as electricity, water, landline telephone bills, etc.",
          "Trusts:",
          "Registration Certificate",
          "PAN Card of Trust",
          "Trust Deed",
          "OVD of Authorised signatory",
          "Names of the beneficiaries, trustees, settlor and authors of the trust",
          "Address of the registered office of the trust",
          "List of trustees and documents, as specified in Section 16 of KYC MD, for those discharging the role as trustee and authorised to transact on behalf of the trust.",
          "Unincorporated Association or a body of individuals:",
          "PAN Card of the association",
          "Power of Attorney",
          "Resolution of the managing body",
          "OVD of the individuals",
          "Hindu Undivided Family (HUF):",
          "PAN Card of HUF",
          "Resolution of managing body",
          "Power of Attorney",
          "HUF Deed (if applicable)",
          "OVD of Authorised signatory",
        ],
      },
      {
        heading: "Additional Notes",
        points: [
          "Re- KYC requirements will be adhered to as per the regulatory guidelines.",
          "PAN Card and OVD collected shall be verified via methods mentioned under Master Direction - KYC. Additionally, company documents shall be verified via MCA website wherever applicable.",
          "All the above-mentioned documents will be re-validated by operations team on a periodic basis in line with merchant risk criteria and can be included as part of merchant's periodic due diligence.",
          "However, as per the updated Guidelines on Regulation of Payment Aggregators and Payment Gateways dated March 31, 2021 there would not be a requirement to carry-out entire process of KYC (in accordance with the KYC guidelines of RBI), in cases where the merchant already has a bank account which is being used for transaction settlement purpose.",
        ],
      },
    ],
  },
  {
    title: "Appendix II – Prohibited Businesses List",
    desc: [
      {
        heading: "",
        points: [
          "If any merchant is found to be availing the company's services for a business/operation that is categorized as 'Banned Businesses' and/or any product or service, which is not in compliance with all applicable laws and regulations, the Merchant may be subject to high level due diligence and intensified monitoring or the services rendered to the Merchant may be terminated. The company will implement a list of prohibited businesses.",
        ],
      },
    ],
  },
];

const PolicyStatement = () => {
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
    <div className="px-[16px] py-[32px] lg:px-[149px] lg:py-[64px]">
      {policyData?.map((item, index) => {
        return (
          <>
            <Accordion
            key={index}
            question={item.title}
            isOpen={currentIndex === index} // Pass boolean value based on index match
            handleIsOpen={() => handleAccordion(index)} // Pass index directly
          >
            <div>
              {item?.desc?.map((list, listIndex) => {
                return (
                  <div key={listIndex}>
                    {list?.heading && (
                      <div className="text-[16px] lg:text-[18px] leading-[20px] lg:leading-[24px] font-semibold">
                        {list?.heading}
                      </div>
                    )}
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                      {list?.points?.map((point, pointIndex) => {
                        return (
                          <p
                            key={pointIndex}
                            className="text-[14px] lg:text-[14px] leading-[20px] lg:leading-[20px] py-[10px]"
                          >
                            {point}
                          </p>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </Accordion>
           {index < policyData.length - 1&&currentIndex !== index && (
              <hr className="border-t-[1px] border-[#DADADA] " />
            )}
          </>
        
        );
      })}
    </div>
  );
};

export default PolicyStatement;
