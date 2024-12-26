"use client";
import React, { useState } from "react";
import Accordion from "../../common-components/Accordion";

const policyData = [
  {
    title: "INTRODUCTION",
    desc: [
      {
        heading: "",
        points: [
          "Tata Payments Limited (“Tata Payments” or “We” or “Us” or “Our”) takes the privacy of Your (defined below) information seriously. This Privacy Notice describes the types of Data (defined below) We collect from You (defined below) through Our website (including sub-domains and microsites), and all other mediums through which We offer Our products/ services (together referred to as the “Platform”). This Privacy Notice also describes the purposes for which We collect Your Data, the parties with whom We may share such information and the measures We take to protect the security of Your Data. This Privacy Notice additionally informs You about Your rights and choices with respect to Your Data, and how You can contact Us if You have any questions regarding Our privacy practices." ,
          ,
          " You are advised to carefully read this Privacy Notice before using the Platform and/ or availing any of Our products/ services."
         
        ]
      }
    ]
  }
  ,
  {
    title: "1. DEFINITIONS AND KEY CONCEPTS",
    desc: [
      {
        heading: "",
        points: [
          "In this Privacy Notice, the following definitions are used:",
          "Data: Personal information, including sensitive personal information (as defined under Data Protection Laws) about You, which We collect, receive or otherwise process in connection with Your use of the Platform.",
          "Cookies: A small file placed on Your device by the Platform when You either visit or use certain features of the Platform. A cookie generally allows a website or mobile application to remember Your actions or preference for a certain period of time.",
          "Data Protection Laws: Any applicable law in India for the time being in force relating to the processing of Data.",
          "Partners: Select third parties (including Tata Group Entity & Service Providers) with whom We have arrangements.",
          "Service Providers: Includes entities (including banks & financial institutions) which provide services to Tata Payments and to whom We may disclose Your Data for a specific purpose pursuant to an arrangement to facilitate the provision of products/ services to You.",
          "Tata Payments: Tata Payments Limited, a company incorporated in India whose registered office is at Army & Navy Building, 148 M.G Road, Fort, Mumbai, Maharashtra, Pin - 400001, India.",
          "Tata Group Entity: Tata Payments, its parent company, promoter, subsidiaries, affiliates, group companies and the companies promoted by the foregoing.",
          "User or You or Your: The natural person who accesses the Platform."
        ]
      }
    ]
  },
  {
    title: "2. WHAT DATA DO WE COLLECT ABOUT YOU",
    desc: [
      {
        heading: "",
        







        points: [
          "In the course of You using the Platform and/ or availing the products/ services offered by Us, We may collect Data for various purposes set out in this Privacy Notice. This Data includes, without limitation, the following categories:",
          "(a) Contact Information: First, middle and last name, email address, postal address, country, phone number and other similar contact data.",
          "(b) Feedback Information: Your reviews, feedback, and opinions about the Platform and/ or products/ services.",
          "(c) Financial Information: Payment instrument information (including but not limited to bank account details, card details, UPI ID details etc.) payment instrument preferences, mode and manner of payment, spending pattern or trends, and other similar data.",
          "(d) Know Your Customer (KYC) Information: Permanent Account Number (PAN), Aadhaar, Driving License, Passport, Voter ID, Your business-related information, photographs, videos and other similar proofs of identity, address and/ or income, etc.",
          "(e) Loyalty Programme Information: Your loyalty membership information, account details and profile details.",
          "(f) Other Information: Age, sex, date of birth, marital status, nationality, occupation, vehicle information or any other personal information provided by You.",
          "(g) Technical Information: Platform usage, Internet Protocol (IP) address, access to Your device (such as camera and location), device information and other similar information collected via automated means, such as Cookies, pixels and similar technologies.",
"(h) Transaction Information: Date of the transaction, transaction amount, transaction history and other related details."
        ]
      }
    ]
  },
  {
    title: "3. HOW WE COLLECT DATA",
    desc: [
      {
        heading: "",
        points: [
          "We collect Data in the following ways:",
          "<li>Information You Give Us: We receive and store any information You enter on the Platform or give Us in any other way. Please see the section below, titled “Data Shared by You” for more information.</li>",
          "<li>Automatic Information We Collect: We use Cookies, pixels and similar technologies to receive and store certain types of information whenever You interact with Us. Please see the section below, titled “Data That is Collected Automatically” for more information.</li>",
          "<li>E-mail Communications: We often receive a confirmation (if Your device supports such capabilities) when You open e-mail from Us or click on a link in the e-mail. You can choose not to receive marketing emails from Us by clicking on the unsubscribe link in any marketing email.</li>",
          "<li>Information We Collect from Other Websites and Sources: We receive and store certain types of information when You interact with third-party websites that use Our technology or with whom We have a specific arrangement/ agreement. We may obtain information from other sources. An example of this is when You authorize a third-party website (such as the website of another Tata Group Entity) to interact directly with Our Platform to provide or receive information about You. In that case, We may receive information to identify Your account with that website. Another example is where We receive Your Data from Tata Group Entity in connection with Platform for the purposes of enrolment, offering You products, services, and benefits on the Platform.</li>",
          "<li>Information Previously Provided to Tata Group Entity: Where You have shared any information previously with any of the Tata Group Entity and such Tata Group Entity is permitted to further share such information, it will share such information with Us. Regardless of the terms on which You had originally provided the information to a Tata Group Entity, You acknowledge that: (a) We will collect such information from such Tata Group Entity for the purposes set out in this Privacy Notice; (b) the Tata Group Entity that provides such information to Us is subject to its own compliance obligations under the Data Protection Laws, and (c) We are not responsible for any acts or omissions of such Tata Group Entity in relation to any such compliance obligations under the Data Protection Laws and/ or the applicable law.</li>"
        ]
      }
    ]
  },
  {
    title: "4. DATA SHARED BY YOU",
    desc: [
      {
        heading: "",
        points: [
         " Tata Payments may collect Your Data in several ways from Your use of the Platform. For instance:",
          "(a)	when You register with Us and/ or share any information/ documents to avail/ Our products/ services;",
          "(b)	when You conduct a transaction or attempt a transaction on the Platform;",
          "(c)	when You complete surveys conducted by or for Us;",
          "(d)	when You elect to receive any communications (including promotional offers) from Us;",
         "(e)	any information gathered by Your visit to the Platform;",
          "(f)	when You send correspondence to Us through emails, calls and/ or through any other medium of communication."
          
        ]
      }
    ]
  },
  {
    title: "5. DATA THAT IS COLLECTED AUTOMATICALLY",
    desc: [
      {
        heading: "",
        points: [
           "(a) We automatically collect some information when You visit or use the Platform. This information helps Us to make improvements to Our content and navigation. The information collected automatically includes technical information such as IP address, Platform usage, device information etc.",
"(b) Our web servers or affiliates who provide analytics and performance enhancement services collect technical information such as IP addresses, operating system details, browsing details, device details and language settings. This information is aggregated to measure the number of visits, average time spent on the Platform, pages viewed and similar information. Tata Payments uses this information to measure the Platform usage to improve content and to ensure safety and security, as well enhance performance of the Platform.",
"(c) We may collect Your Data automatically via Cookies, pixels and similar technologies in line with settings on Your browser. Our Platform may place and access certain Cookies on Your device. Cookies are unique identifiers that We transfer to Your device to enable Our systems to recognize Your device. We also use pixels and similar technologies to analyse traffic on the Platform to improve Your experience of using them."
        ]
      }
    ]
  },
 
  ,
  {
    title: "6. OUR USE OF DATA",
    desc: [
      {
        heading: "",
        points: [
          "Data collected by Us may be used by Us for the following reasons:",
          "(a)	carry out Our obligations arising from any contract entered into between You and Us;",
          "(b)	provide products/ services and communicate with You (including through WhatsApp) about products/ services offered by Us including processing any payment transaction(s);",
          "(c)	enable Tata Group Entity and Partners to offer their products and/or services and communicate with You about such products and/or services;",
          "(d)	process, disclose, transmit, and/or share the Data with Tata Group Entity, Partners, Service Providers and other third parties which have business or contractual dealings with Us;",
          "(e)	provide You with offers (including for financial products/ services), personalized services and recommendations and improve Your experience on the Platform, including, where permitted under applicable law, by storing and/or using Your payment information to enable future transactions on Platform to run more smoothly;",
          "(f)	KYC evaluation (identity verification and background check whether online or offline) for availing the products/ services (as applicable) as per master direction on know your customer and the applicable law;",
          "(g)	operate, evaluate and improve Our products/ services offering and the use of Platform;",
          "(h)	generate aggregated data to prepare insights to enable Us to understand User/ customer behaviour, patterns and trends with a view to learning more about Your preferences or other characteristics;",
          "(i)	provide marketing and promotional campaigns to You based on Your profile and/ or use of the Platform;",
          "(j)	in connection with loyalty programs owned and operated by Us or by other Tata Group Entity;",
          "(k)	communicate with You (including to respond to Your requests, questions, feedback, claims or disputes) and to customize and improve Our products/ services;",
          "(l)	enforce the terms of use of the Platform;",
          "(m)	protect against and prevent fraud, illegal activity, harm, financial loss and other legal or information security risks;",
          "(n)	serve other purposes for which We provide specific notice at the time of collection, and as otherwise authorized or required by applicable law; and",
          "(o)	to fulfill any obligations as mandated under Data Protection Laws and/ or the applicable law, which may involve sharing of Data with the regulators, law enforcement agencies, governmental authorities etc. in order to comply with any instructions or notices issued. ",
          
        ]
      }
    ]
  },
  {
    title: "7.	MINORS",
    desc: [
      {
        heading: "",
        points: [
          "Our Platform does not offer products/ services for use by minors, the Platform is intended for Users who are at least 18 years old. If You are under 18, You may use the Platform only with the involvement of a parent or guardian."


        ]
      }
    ]
  },
  {
    title: "8. SHARING OF DATA",
    desc: [
      {
        heading: "",
        points: [
          "We may share Your Data in the following ways:",
          "(a)	Regulators, Regulated Entities, and other Financial Institutions: We may share Your data with the regulators (including Reserve Bank of India), regulated entities including but not limited to National Payments Corporation of India, Bharat BillPay Limited, and other financial institutions for the purpose of (i) facilitating products/ services offered by Us; (ii) ensuring compliance with the applicable laws; and (iii) for any other lawful purpose.",
          "(b)	Partners: We may make available to You products/ services, or applications provided by Partners for use on or through the Platform. If You choose to use such products/ services, or applications, Data related to these uses may be shared with such Partner.",
         "Partners may use Your Data for the purposes of providing their own products/ services to You. Their use of Your Data is subject to their own privacy policies. For further information on how these Partners process Your Data, please refer to their privacy policies." ,
          "(c)	Tata Group Entity: We may share Your Data with Tata Group Entity for them to make their products/ services and /or applications available to You, to assist them in reaching out to You in relation to their programs or campaigns and to process Your queries and requests. We may also share Your Data with the Tata Group Entity as is relevant for the purposes set out in Clause 6 above, and to facilitate the operation of Our business. Their use of Your Data is subject to their own privacy policies. For further information on how these Tata Group Entity process Your Data, please review their privacy policies.",
          "(d)	Service Providers: We may share Your Data with Service Providers who may, in the course of providing their respective services, receive and process Data. Examples include storing and analyzing Data, protecting and securing Our systems, providing search results and links, providing customer service, credit analysis, processing Your Data for profiling, User analysis and payment processing. ",
          "(d)	Service Providers: We may share Your Data with Service Providers who may, in the course of providing their respective services, receive and process Data. Examples include storing and analyzing Data, protecting and securing Our systems, providing search results and links, providing customer service, credit analysis, processing Your Data for profiling, User analysis and payment processing. ",
          "(e)	Protecting Tata Payments: We may release Your Data when We believe that disclosure is reasonably necessary (a) to comply with a law, regulation or compulsory legal request; (b) to protect Tata Payments or a Tata Group Entity's intellectual property rights; (c) to protect Tata Payments against harm or financial loss; (d) when We believe disclosure is necessary to protect individuals’ vital interests, or (e) in connection with an investigation of suspected or actual fraudulent or illegal activity. This may include exchanging Data with other companies and organizations for fraud protection, risk management and dispute resolution. ",
          "(f)	Business Transfers: As We continue to develop Our business, We might sell or buy subsidiaries or business units. Your Data may be transferred as part of such transactions.",
          "(g)	Third Parties: We may also share Your Data with other third parties where:"
          



          ,"(i)	You request or authorize Us to do so;","(ii)	We need to comply with applicable law or respond to valid legal process; or","(iii)	We need to operate and maintain the security of the Platform, including to prevent or stop an attack on Our computer systems or networks.","The sharing of Your Data will be in line with the processes set out in this Privacy Notice."
        ]
      }
    ]
  },
  
  


  {
    title: "9. KEEPING DATA SECURE",
    desc: [
      {
        heading: "",
        points: [
          "We will use technical and organisational measures to safeguard Your Data and We store Your Data on secure servers. Technical and organisational measures include measures to deal with any suspected data breach. If You suspect any misuse or loss or unauthorised access to Your Data, please let Us know immediately by contacting Us by e-mail.",
"The security of Your Platform account depends on You keeping Your Platform credentials and other access information confidential. If You share Your Platform credentials and other access information with any third party, they will have access to Your account and Your Data.",
"It is Your responsibility to control access to Your device and Your account, including keeping Your password(s) and/or PIN confidential and not sharing it with anyone. It is also Your responsibility to alert Us if You believe that the security of Your Data on the Platform has been compromised."


        ]
      }
    ]
  },
  {
    title: "10. RETENTION OF DATA",
    desc: [
      {
        heading: "",
        points: [
          "Tata Payments retains Data for as long as necessary for the use of Our products/ services or to provide access to and use of the Platform, or for other essential purposes such as complying with Our legal obligations, resolving disputes, enforcing Our agreements and as long as processing and retaining Your Data is necessary for Our legitimate interests. Because these needs can vary for different data types and purposes, actual retention periods can vary significantly."
          
        ]
      }
    ]
  },
  {
    title: "11. WHERE WE STORE DATA",
    desc: [
      {
        heading: "",
        points: [
          "We may store Your Data on Our servers where the data centres are located, and/ or the servers of third parties. All payments related data will be stored in the systems located in India, except as provided under the applicable law.","If You are situated in a country other than India, We may disclose Your Data to the appropriate legal authorities and/or regulatory bodies in Your jurisdiction, as required by law and/ or for compliance reasons. Additionally, based on the Services You use, We may share Your Data with international Partners to facilitate the processing and/ or completion of international/ cross-border transactions and payments."

        ]
      }
    ]
  }
  ,{
    title: "12. YOUR RIGHTS AND CHOICES",
    desc: [
      {
        heading: "",
        points: [
          "Subject to applicable law, You may be entitled to the following rights in relation to Your Data:",
          "(a) Right to Confirmation and Access - You may ask Us to confirm what Data We hold about You at any time and request Us to modify or update such Data. You may also request a copy of the Data We hold about You.",
          "(b) Right to Rectification - You have the right to request that We rectify any inaccurate or incomplete Data that We hold about You, including by means of providing a supplementary statement. You agree that We may retain the Data previously provided by You if such retention is required under applicable laws.",
          "(c) Right to Restrict Our Use of Your Data - You have the right to request that We restrict Our processing of Your Data in certain circumstances, for example if You dispute the accuracy of the Data that We hold about You or You object to Our processing of Your Data (including where We process Your Data for Our legitimate interests, where permitted under applicable law).",
          "(d) Right to Withdraw Consent – Where We have obtained Your consent to process Your Data for certain activities, You may withdraw this consent at any time, and We will cease to carry out that particular activity that You previously consented to unless We consider that there is an alternative legal basis to justify Our continued processing of Your Data for this purpose.",
          "To get in touch with Us about these rights, or for more information about managing Your Data and promotional communications, please use the contact details set out in the section below, titled 'How to Contact Us'.",
          "It is important that the Data We hold about You is accurate and current. Please keep Us informed if Your Data changes during the period for which We hold it."
        ]
      }
    ]
  },
  {
    title: "13. SEVERABILITY",
    desc: [
      {
        heading: "",
        points: [
          "If any court or competent authority finds that any provision of this Privacy Notice (or part of any provision) is invalid, illegal, or unenforceable, that provision or part-provision will, to the extent required, be deemed to be deleted, and the validity and enforceability of the other provisions of this Privacy Notice will not be affected."
        ]
      }
    ]
  },
  {
    title: "14. LINKS TO OTHER WEBSITES",
    desc: [
      {
        heading: "",
        points: [
          "Our Platform may, from time to time, provide links to websites and applications of Tata Group Entity and Partners whose privacy practices differ from those of Tata Payments. We have no control over such websites and applications and are not responsible for the content of those websites and applications. If You provide Data to any of those websites or applications, then the use of Your Data is governed by their privacy notices. This Privacy Notice applies to Our Platform only."
        ]
      }
    ]
  },
  {
    title: "15. CHANGES TO THIS PRIVACY NOTICE",
    desc: [
      {
        heading: "",
        points: [
          "Our business changes constantly and Our Privacy Notice will also change. We may e-mail periodic reminders of Our notices and conditions, unless You have instructed Us not to, but You should check the Platform frequently to see recent changes. The updated version will be effective as soon as it is accessible and made available on the Platform. We encourage You to review this Privacy Notice frequently to be informed of how We are protecting Your Data."
        ]
      }
    ]
  },
  {
    title: "16. HOW TO CONTACT US",
    desc: [
      {
        heading: "",
        points: [
          "To request to review or update Your Data or to otherwise reach us, please submit a request by e-mailing Us at <a   style='color:blue' href= 'mailto:customercare@tatapayments.com'>customercare@tatapayments.com</a> .",
          "You may contact Us for information on Service Providers and other persons with whom We may share Your Data in compliance with this Privacy Notice and applicable law. We will respond to Your request within 30 days."
        ]
      }
    ]
  },
  {
    title: "17. GRIEVANCE OFFICER",
    desc: [
      {
        heading: "",
        points: [
          "Please see below the details of Our grievance officer:",
          "Name: Gagandeep Arora",
          "Email: <a   style='color:blue' href= 'mailto:grievances@tatapayments.com'>grievances@tatapayments.com</a>",
          "Registered Address: 1st Floor, Army & Navy Building, 148, M.G Road, Opposite Kala Ghoda, Fort, Mumbai, Maharashtra, Pin – 400001.",
          "Corporate Office: Fort House, Dr. Dadabhai Naoroji Road, Fort, Mumbai, Maharashtra, Pin – 400001"
        ]
      }
    ]
  }
]

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
                            dangerouslySetInnerHTML={{__html:point}}
                          >
                            
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
