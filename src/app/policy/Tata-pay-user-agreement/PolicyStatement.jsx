"use client";
import React, { useState } from "react";
import Accordion from "../../common-components/Accordion";

const policyData = [
  {
    title: "TATA PAY USER AGREEMENT",
    desc: [
      {
        heading: "Introduction",
        points: [
          `Tata Payments Limited ("TPL", "we", "our" or "us") is offering certain payment services like Bill Payments and UPI ("Tata Pay") through which users ("Users" or "you") of the Tata Pay platform ("Platform") complete transactions with the companies and brands whose products and services are being offered for sale on Tata Neu. By using the services and functionalities of Tata Pay, you agree that:`,
          `<li > you have read and accept this Tata Pay User Agreement ("User Agreement"); </li>`,
          "<li > you have read and accept the Bill Pay Terms which govern your use of the Bill Pay Services (please refer to Annexure I of this User Agreement); </li> " ,
          "<li > you have read and accept the UPI Terms and Conditions which govern your use of the UPI Services (please refer to Annexure II of this User Agreement); </li>",
          
          `<li > you consent to the collection, use, and disclosure of your personal data in accordance with TPL's Privacy Notice. </li>`,
          `We reserve the right, in our discretion, to make changes or modifications to this User Agreement at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of this User Agreement and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review this User Agreement to stay informed of updates. You will be subject to and will be deemed to have been made aware of and to have accepted, the changes in any revised User Agreement by your continued use of Tata Pay after the date such revised terms are posted.`,
        ],
      },
    ],
  },
  {
    title: "1. REGISTRATION AND OUR ROLE",
    desc: [
      {
        heading: "1.1. Eligibility",
        points: [
          "1.1.1 To use Tata Pay, you may need to register for an account with the Tata Consumer Platform (the “Membership Account”) by providing complete and accurate registration information, including your name, age, residential address, phone number, email ID and such other details as set out in the registration form and be at least 18 years old and a resident of India. If you are a minor, i.e., under the age of 18 years, you may use the Tata Pay services only with the involvement of a parent or guardian.",
"1.1.2. If you do not meet our eligibility requirements, you may not be able to maintain a Membership Account with us or your use of Tata Pay will be limited. We treat all activities under a Membership Account to be those of the registered user. User shall only use Tata Pay to transact on their own Membership Account and not on behalf of any other person or entity. You shall update registration information promptly upon any change so that it is at all times complete and accurate."
,
"1.1.3. We reserve the right to refuse to provide or discontinue Tata Pay to any person or entity at any time for any reason."
        ],
      },
      {
        heading: "1.2. Creating Membership Accounts",
        points: [
          "To enable the use of Tata Pay, you must either (a) register using your existing Membership Account, or (b) complete the registration process for new users by entering all of the required information. If you register using your Membership Account, the information in your existing Membership Account will be used to complete your registration. If you do not have an existing Membership Account at the time you register with Tata Pay, a new Membership Account will be automatically and concurrently established in your name with the same e- mail address/phone number and password you provide to us."
        ],
      },
   
      {
        heading: "1.3. VERIFICATION",
        points: [
         "We may require you to provide additional information to verify your identity as a condition of providing Tata Pay to you or before we permit you to make use of Tata Pay through your Membership Account. We may make, directly or through any third party, any inquiries we consider necessary to validate information that you provide to us, including without limitation checking commercial databases or credit reports. You authorize us to obtain one or more of your credit reports, from time to time, to establish, update, or renew your Membership Account with us or in the event of a dispute relating to this User Agreement and activity under your Membership Account."
        ],
      },
    
      {
        heading: "1.4. CREDENTIALS AND SECURITY",
        points: [
          "1.4.1. Your email address/phone number and a password that you select will be used to access the Platform and for communications with you, including as described in Clause 5. You also may be prompted to answer several security questions or select other issued security access keys or credentials that may be used to enable access to Tata Pay and authorize transactions. Your password and access keys are your “Credentials”.",
          "1.4.2. You are responsible for maintaining the secrecy and security of your Credentials and for restricting access to personal devices and systems that may store the Credentials, and you agree to accept responsibility for all activities that occur under your Membership Account or password. You should take all necessary steps to ensure that the Credentials are kept confidential and secure. You should not disclose your Credentials to any third party. If any of your Credentials are compromised, you must notify us immediately at <a   style='color:blue' href= 'mailto:customercare@tatadigital.com'>customercare@tatadigital.com</a> so that we can suspend use of your Membership Account with Tata Pay in order to avoid unauthorized transactions. You must also notify us through the Contact Us form if you wish to request us to unblock your Membership Account.",
        ],
      },
    
      {
        heading: "1.5. OUR ROLE",
        points: [
          "1.5.1. Except for our limited role in providing the services of Tata Pay on the Platform in respect of payments that you authorize or initiate, we are not involved in any underlying sales transaction between you and any merchants. The Tata Pay services and functionalities may be offered through the use of services of one or more third parties, affiliates, processors, and/or financial institutions (the “Processors”). The specific functionalities of the Tata Pay services available to you may vary depending on the merchant with whom you are transacting.",
          "1.5.2. TPL is neither the buyer nor the seller of the products or services that any merchant offers for sale and is not a party to the sales contract between the User and any merchant. We will not mediate disputes between you and any merchant or enforce or execute the performance of any sales contract.",
        ],
      },
    
      {
        heading: "1.6. PRIVACY",
        points: [
          "1.6.1. The personal information and data generated by you in the course of your use of Tata Pay shall be collected by us and treated and processed in accordance with the Privacy Notice and applicable law.",
          "1.6.2. Further, specifically, TPL may share your payments related information, including transaction data, with the Processors, merchants and other service providers as required for the purpose of operations, settlement payment processing, and promoting Tata Pay.",
          "1.6.3. For the purposes of completing payments, you agree and specifically consent that TPL may store your information and details of your payment instruments including bank account number.",
          "1.6.4. You agree and specifically consent that TPL may, through automated means, access your Tata Pay navigational, log, and correspondence information/data. This information/data will help us analyze the merchants, markets, technology, operating systems, browsers, devices, locations from/for which Tata Pay is being used. Such information and its analysis will help us to better understand your needs and provide you with a wider range of services, or developing updates for particular operating systems and mobile application versions, etc. The information collected also helps us offer you other products, programs, or services including offers that may be provided by merchants that we believe may be of interest to you or alert you in case of software compatibility issues.",
          "1.6.5. You agree and specifically consent that TPL or its affiliates may, through automated means, access your messages on your mobile device/mobile number and retrieve/use information from your messages to provide you with enhanced services.",
        ],
      },
    ],
  },
  {
    title: "2. YOUR MEMBERSHIP ACCOUNT",
    desc: [
      {
        heading: " ",
        points: [
          "2.1. Your Membership Account permits you to make purchases where Tata Pay is accepted. Some features of Tata Pay may be limited based on parameters determined by us including your location, provided information or our risk parameters. You agree to provide any information that we or our Processors may require to provide the Tata Pay services or that may be required by law or guidelines of any regulatory authority.",
         
        ],
      },
      {
        heading: "2.2 Membership Account History.",
        points: [
          
          "2.2.1. When a payment is authorized to or from a Membership Account, we will update your account activity on the Platform and issue a transaction confirmation (directly or through our Processors). The confirmation will serve as your receipt for the purchase of any products or services through Tata Pay. You may receive a separate receipt from the merchant. Summaries of your Membership Account activity, including monthly statements, are available in the 'Your Account' area of the Platform.",
          "2.2.2. You are solely responsible for (a) compiling and retaining permanent records of all transactions and other data associated with your Membership Account and your use of Tata Pay, and (b) reconciling all payment activity to and from your Membership Account and all other transactional information that is associated with your Membership Account. Upon the termination of this User Agreement for any reason, we will not have any obligation to you, except as required under applicable law.",
        ],
      },
      {
        heading: "2.3. Unauthorized Membership Account Activity.",
        points: [
          "2.3.1. Subject to the limitations in this User Agreement, you shall inform us immediately in the event that any unauthorized use of your Membership Account has occurred.",
          "2.3.2. TPL is not responsible for any unauthorized transactions undertaken through your Membership Account.",
          "2.3.3. You are responsible for all losses relating to an unauthorized transaction from your Membership Account if you have acted fraudulently or failed, either intentionally or negligently, to use your Membership Account in accordance with this User Agreement or the Terms of Use, to protect your Credentials, or to notify us of any unauthorized transaction in the manner set out in Clause 2.1.",
         
        ],
      },
      {
        heading: "2.4. Acceptable Use.",
        points: [
          "2.4.1. You will at all times adhere to all applicable laws, rules, and regulations applicable to your use of Tata Pay. Without limiting the foregoing, you may not act as a payment service provider, intermediary, aggregator or otherwise resell Tata Pay on behalf of any third party, including without limitation the processing and transmission of funds for any third party. We may inspect your Membership Account for any reason, including without limitation to investigate any alleged violation of this User Agreement or any third-party complaints.",
          "2.4.2. You shall not use Tata Pay in any way that causes, or is likely to cause, Tata Pay or access to it by other users to be interrupted, damaged or impaired in any way.",
          "2.4.3. You understand that you, and not TPL or any of its affiliates, are responsible for all electronic communications and content sent from your computer or other systems to us and to the persons you transact with using Tata Pay. You shall use Tata Pay for lawful purposes only. You shall not use Tata Pay for any of the following:",
          "(a)	For fraudulent purposes, or in connection with a criminal offense or other activity that violates any applicable law;",

        "(b)	For any cause or action that is in violation of the Terms of Use of the Platform; or",
        
      "(c)	To cause annoyance or inconvenience to any other person.",

        ]
      },
      {
        heading: "2.5. Errors",
        points: [
          "In case of a transaction which remains non-executed or defectively executed by us through our Processors, we will rectify the error, subject to the terms of this User Agreement. In this case, your Membership Account will be refunded with the amount of the non-executed or defectively executed transaction and other actions as may be necessary to restore the Membership Account to the state in which it would have been had the defective transaction not taken place shall be undertaken. We will make efforts to trace the transaction and will notify you of the outcome."
        ]
      },
      {
        heading : "2.6. Refunds.",
        points: [
          "In case you request for a refund due to the return of a product or service purchased from a merchant using Tata Pay, refunds shall be issued in accordance with the relevant merchant's return and refund policies. TPL bears no responsibility regarding the same."
        ]
      }
    ],
  },
  
  {
    title: "3. IMPLEMENTATION",
    desc: [
      {
        heading: "3.1. Technical Specifications.",
        points: [
          "You will comply with any technical and operational specifications provided or made available by us with respect to Tata Pay (the 'Specifications'). We reserve the right to update or modify the Specifications at any time.",
        ],
      },
      {
        heading: "3.2. Updates.",
        points: [
          "We may make modifications, updates or upgrades to the Tata Pay services and functionalities or Specifications. The provision of any specific functionalities as of the date of your entering into this User Agreement does not guarantee the continued provision of such functionalities in the Tata Pay services.",
        ],
      },
    ],
  },
  {
    title: "4. TERM AND TERMINATION",
    desc: [
      {
        heading: "4.1. Term",
        points: [
          "This User Agreement commences on the earlier of the date that you use Tata Pay to login on the website of a merchant who accepts Tata Pay, make a purchase using Tata Pay or register for a Membership Account on the Platform. The User Agreement shall continue unless and until terminated in accordance with the provisions of this Clause 4. You may initiate termination of this User agreement by contacting us at <a   style='color:blue' href= 'mailto:customercare@tatadigital.com'>customercare@tatadigital.com</a> . We shall have the right to terminate this User Agreement without any prior notice to you."
        ],
      },
      {
        heading: "4.2. Suspension or Termination by TPL",
        points: [
          "TPL may terminate the provision of the Tata Pay services and this User Agreement, for any reason at any time without written notice.Further, we may suspend your access to Tata Pay and block access to your Membership Account and deactivate it under the following circumstances:",
          "(a) you have violated the terms of this User Agreement;",
          "(b) we determine that you pose an unacceptable credit or fraud risk to us;",
          "(c) you provide or have provided false, incomplete, inaccurate, or misleading information (including without limitation any registration information) or otherwise engage in fraudulent or illegal conduct;",
          "(d) we have security concerns regarding your Membership Account, including your Credentials, or"
          ,"(e) we suspect unauthorized or fraudulent use of your Membership Account or any payment information in your Membership Account.",
          "In such cases we will inform you of the deactivation of your Membership Account and the reasons for it, where possible, before the deactivation and in any event promptly thereafter, unless we determine that giving such information would compromise security concerns or is prohibited by applicable law. We will reactivate your Membership Account or Credentials, or replace it or them, as applicable, once we have resolved the reasons for deactivation to our satisfaction. "
          
        ],
      },
      {
        heading: "4.3. Effect of Termination",
        points: [
          "We will not be liable to you for compensation, reimbursement, or damages of any kind, direct or indirect, including any business loss (including loss of profits, revenue, contracts, anticipated savings, data, goodwill or wasted expenditure) or any other indirect or consequential loss that is not reasonably foreseeable to both you and us in connection with your use of Tata Pay, or in connection with any termination or suspension of Tata Pay Upon termination of this User Agreement for any reason:", "(a) you will remain liable for all fees, charges and other payment obligations that have been incurred through the date of termination with respect to the use of Tata Pay", "(b) all license or other rights granted to either party under this User Agreement will immediately terminate", "(c) your access to the Platform will be terminated and your Membership Account will be deactivated"
        ],
      },
      {
        heading: "4.4. Survival",
        points: [
          "In addition to your payment obligations arising under this User Agreement, Clauses 1.5 (Our Role), 1.6 (Privacy), 4.3 (Effect of Termination), 5 (Communications), 7 (Intellectual Property), 8 (Indemnity and Limitation of Liability), 9 (Tax) and 10 (Miscellaneous) of this User Agreement shall survive and remain in effect in accordance with their terms upon the termination of this User Agreement.",
        ],
      },
    ],
  },
  {
    title: "5. COMMUNICATIONS",
    desc: [
      {
        heading: "",
        points: [
          "When you use Tata Pay or send e-mails to us, you are communicating with us electronically. You will be required to provide a valid phone number to process a transaction using Tata Pay. We may communicate with you by e-mail, SMS, phone call or by posting notices on the Platform or by any other mode of communication. Through your use of Tata Pay, you consent to receive communications including SMS, e-mail or phone calls from us with respect to your use of Tata Pay, including for the following purposes:",
          "(a) providing you with the functionalities of Tata Pay and transactional or account related information;",
          "(b) sending you payment related reminders/updates;",
          "(c) promoting Tata Pay or the Platform or any of TPL’s and its affiliates’ other products and services;",
          "(d) promoting merchants’ services, including any offers or schemes or prizes that may be provided by these entities;",
          "(e) promoting new products and activities;",
          "(f) investigating or resolving any product or Tata Pay-related concerns including complaints; or",
          "(g) obtaining your invaluable feedback.",
          "In order to serve you better, we may also send you surveys to understand:",
          "(i) your experience with Tata Pay, and/or",
          "(ii) your needs and requirements.",
          "You may choose to, or we may invite you to, submit comments or ideas about Tata Pay, including without limitation about how to improve Tata Pay. By submitting any idea, you agree that your disclosure is gratuitous, unsolicited and without restriction and will not place us under any fiduciary or other obligation, and that we are free to use the idea without any additional compensation to you, and/or to disclose the idea on a non-confidential basis or otherwise to anyone."
          ,"Some of the Tata Pay features may display advertisements and promotions. In consideration for TPL granting you access to and use of Tata Pay, you agree that TPL may place such advertising and promotions.",
        ],
      },
    ],
  },
  {
    title: "6. ACCESS TO TATA PAY",
    desc: [
      {
        heading: "",
        points: [
          "TPL undertakes to make best efforts to ensure the uninterrupted availability of Tata Pay and to ensure that transmissions and communications in this regard are error-free. However, due to the nature of the internet, this cannot be guaranteed and TPL shall not be held liable for any interruptions in providing the Tata Pay services. Further, Users’ access to the Platform or Membership Account for the use of Tata Pay may also be occasionally suspended or restricted to allow for repairs, maintenance, or the introduction of new facilities or services at any time without prior notice.",
        ],
      },
    ],
  },
  {
    title: "7. INTELLECTUAL PROPERTY",
    desc: [
      {
        heading: "",
        points: [
          "7.1. TPL, its licensors and their respective affiliates, as the case maybe, are the sole and exclusive owners or licensees of the trademarks, service marks, trade names, logos, and copyrighted or copyrightable materials of Tata Payments Limited and its affiliates. Users shall not, directly or indirectly, interfere with, challenge, file applications for, or claim ownership of these trademarks anywhere in the world.",
          "7.2. You shall not make any public statement related to Tata Pay or use TPL’s or any of our affiliates’ or Processors’ names, trademarks or logos in any way without our prior written permission, or misrepresent or embellish the relationship between us in any way.",
        ],
      },
    ],
  },
  {
    title: "8. INDEMNITY AND LIMITATION OF LIABILITY",
    desc: [
      {
        heading: "8.1. Indemnity",
        points: [
          "You shall indemnify and hold harmless TPL and its affiliates, and their respective officers, directors, agents, employees and representatives, from any claim or demand, or actions including reasonable attorney's fees, made by any third party or penalty imposed due to or arising out of: ",
          "(a) your use of Tata Pay;",
          "(b) breach of your representations, warranties, or obligations set forth in this User Agreement;",
          "(c) any dispute or litigation caused by your actions or omissions;",
          "(d) your negligence or violation or alleged violation of any applicable law, rules or regulations or the rights of any third party.",
        ],
      },
      {
        heading: "8.2. Release",
        points: [
          "You hereby expressly release TPL and its affiliates and/or any of their directors, officers, employees, agents and representatives from any cost, damage, liability or other consequence of any actions or omissions of any merchant and specifically waive any claims or demands that you may have in this regard under any statute or contract, in equity, or otherwise.",
        ],
      },
      {
        heading:  "",
        points: [
        "8.3. We are not responsible for examining or evaluating, and we do not warrant or endorse the offerings of any merchants, or the content of their marketing materials, websites or other sales channels. TPL and its affiliates do not assume any responsibility or liability for the actions or omissions, products, and content of any marketing materials, website or other sales channels of these and any other third- parties."
        ]
      },{
        heading: "",
        points: [
         "8.4. We will not be responsible for any business loss (including loss of profits, revenue, contracts, anticipated savings, data, goodwill or wasted expenditure) or any other indirect or consequential loss that is not reasonably foreseeable to both you and us when you commenced using Tata Pay."
        ],
      },
      {
        heading: "",
        points: [
         "8.5. We will not be held responsible for any delay or failure to comply with our obligations if the delay or failure arises from any cause which is beyond our reasonable control."
        ],
      },
      {
        heading: "",
        points: [
         "8.6. TPL shall not be responsible for: (a) any loss or misdirection of, or delay in receiving, any payments due through Tata Pay; (b) theft or unauthorized utilization of Tata Pay Balance; (c) any acts or omissions of third parties (including, without limitation, merchants); or (d) any errors published in relation to Tata Pay, including, without limitation, any pricing or typographical errors, errors of description, and errors regarding merchants. TPL reserves the right to correct, without notice, any errors."
        ],
      },
    ],
  },
  {
    title: "9. TAXES",
    desc: [
      {
        heading: "",
        points: [
          "9.1. Unless stated otherwise, any and all fees payable by you pursuant to your use of Tata Pay are exclusive of applicable national, state or local sales or use taxes or value added tax or service tax or goods and services tax (“Taxes”) that TPL is legally obligated to charge under applicable law.",
          "9.2. If we are required to deduct any Taxes on any payments to be made to you, we will have the right to deduct the required amounts and pay such amounts to the applicable regulatory authority on your behalf. You will not make any claim against us in respect of any such deduction made pursuant to this User Agreement. Throughout the term of the User Agreement, you will provide us with any forms, documents, or certifications, including Permanent Account Number as may be required by us to satisfy any information reporting or Tax obligations with respect to any payments made using Tata Pay.",
        ],
      },
    ],
  },
  {
    title: "10. MISCELLANEOUS",
    desc: [
      {
        heading:   "10.1. DISCLAIMER OF WARRANTIES AND LIMITATION OF LIABILITY",
        points: [
        

"TATA PAY AND ALL RELATED INFORMATION, CONTENT, MATERIALS, AND SERVICES MADE AVAILABLE TO YOU ARE PROVIDED BY TATA PAYMENTS LIMITED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. TATA PAYMENTS LIMITED MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO TATA PAY INCLUDING WITHOUT LIMITATION: (A) ANY IMPLIED WARRANTIES OF MERCHANTABILITY, SATISFACTORY QUALITY, SUITABILITY, RELAIBILITY, COMPLETENESS, PERFORMANCE, FITNESS FOR A PARTICULAR PURPOSE, TITLE, OR NON-INFRINGEMENT; (B) THAT TATA PAY WILL MEET YOUR REQUIREMENTS, WILL ALWAYS BE AVAILABLE, ACCESSIBLE, UNINTERRUPTED, TIMELY, SECURE, OPERATE WITHOUT ERROR, OR WILL CONTAIN ANY PARTICULAR FEATURES OR FUNCTIONALITY; (C) ANY IMPLIED WARRANTY ARISING FROM COURSE OF DEALING OR TRADE USAGE, UNLESS OTHERWISE SPECIFIED IN WRITING. YOU EXPRESSLY AGREE THAT YOUR USE OF TATA PAY IS AT YOUR SOLE RISK AND THAT YOU ARE USING YOUR BEST AND PRUDENT JUDGMENT BEFORE ENTERING INTO ANY TRANSACTIONS USING TATA PAY; (D) ELECTRONIC COMMUNICATIONS SENT FROM TATA PAYMENTS LIMITED OR ITS AFFILIATES ARE FREE OF VIRUSES OR OTHER MALWARE OR HARMFUL COMPONENTS.","AT NO TIME SHALL ANY RIGHT, TITLE OR INTEREST IN THE PRODUCTS SOLD BY MERCHANTS ON THE PLATFORM VEST WITH TATA PAY LIMITED NOR SHALL TATA PAY LIMITED HAVE ANY OBLIGATIONS OR LIABILITIES IN RESPECT OF ANY TRANSACTIONS BETWEEN USERS AND MERCHANTS. WE SHALL NEITHER BE LIABLE NOR BE RESPONSIBLE FOR ANY ACTIONS OR INACTIONS OR ANY BREACH OF CONDITIONS, REPRESENTATIONS OR WARRANTIES BY MERCHANTS AND HEREBY EXPRESSLY DISCLAIM ANY AND ALL RESPONSIBILITY AND LIABILITY IN THAT REGARD. WE DO NOT IMPLICITLY OR EXPLICITLY SUPPORT OR ENDORSE THE SALE OR PURCHASE OF ANY MERCHANTS’ PRODUCTS.",

"TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, WE AND OUR AFFILIATES (AND OUR AND THEIR RESPECTIVE EMPLOYEES, DIRECTORS, AGENTS AND REPRESENTATIVES) WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN CONNECTION WITH THIS USER AGREEMENT OR TATA PAY (INCLUDING THE INABILITY TO USE TATA PAY), UNLESS OTHERWISE SPECIFIED IN WRITING. IN ADDITION, AND WITHOUT LIMITING THE FOREGOING, TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, WE AND OUR AFFILIATES (AND OUR AND THEIR RESPECTIVE EMPLOYEES, DIRECTORS, AGENTS AND REPRESENTATIVES) WILL NOT BE LIABLE FOR ANY DAMAGES ARISING OUT OF OR IN CONNECTION WITH ANY SERVICES OR PRODUCTS PURCHASED OR TRANSACTIONS ENTERED INTO THROUGH TATA PAY.",
"WITHOUT LIMITING THE FOREGOING, IN NO EVENT WILL WE OR ANY OF OUR AFFILIATES BE LIABLE TO YOU FOR ANY FAILURE OR DELAY BY US (OR OUR EMPLOYEES, AGENTS, OR REPRESENTATIVES) IN PERFORMING OUR OBLIGATIONS UNDER THIS USER AGREEMENT, WHERE SUCH FAILURE OR DELAY IS CAUSED BY UNFORESEEABLE CIRCUMSTANCES OR CIRCUMSTANCES BEYOND OUR CONTROL, OR WHERE WE ARE BOUND BY OTHER LEGAL OBLIGATIONS UNDER APPLICABLE LAW.",




        ],
      },
      {
        heading: "10.2. APPLICABLE LAW",
        points: [
     
     "The laws of India without regard to the principles of conflict of laws will govern this User Agreement and any dispute of any kind that may arise between you and TPL.",
    ],
  },
      
      {
        heading: "10.3. DISPUTES",
        points: [
         
         "To expedite resolution and control the cost of any dispute, controversy, or claim related to this User Agreement (each a &quot;Dispute&quot;) brought by either you or us (individually, a “Party” and collectively, the “Parties”), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least ninety (90) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.",
"If the Parties are unable to resolve a Dispute through informal negotiations, the Dispute (except those Disputes expressly excluded below) will be finally and exclusively resolved by binding arbitration in accordance with the Arbitration and Conciliation Act, 1996, as amended, and judgment upon the award rendered by the arbitrators may be entered in any court having jurisdiction in respect thereof. Each Party shall nominate and appoint a competent arbitrator. The two nominee arbitrators shall jointly appoint the third arbitrator who shall be the chairman of the arbitration panel.",
"You agree that you shall only be entitled to pursue remedies under this Clause 10.3 in case of any Dispute with TPL or in case of a Dispute with any other person, including any merchant, to which TPL is sought to be made a party by you or such other person, and that you shall not seek any other relief or initiate any other proceedings, including under the Consumer Protection Act, 2019.",
"Application of the United Nations Convention on Contracts for the International Sale of Goods and the Uniform Computer Information Transaction Act (UCITA) are excluded from this User Agreement."
        , "EXCEPTIONS TO ARBITRATION",
        "The Parties agree that the following Disputes are not subject to the above provisions concerning binding arbitration:",
"(a) any Dispute seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party;",
"(b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and",
"(c) any claim for injunctive relief.",
"Subject to foregoing provisions of this Clause 10.3, Disputes arising from or relating to Tata Pay shall be subject to the exclusive jurisdiction of courts at Mumbai, India.",
        ],
      }, 
     
      {
        heading: "10.4. MODIFICATION",
        points: [
         "We reserve the right to make changes to Tata Pay, the policies set out in this document (the 'Policies') and this User Agreement at any time, in our sole discretion. You will be subject to the terms of this User Agreement and the Policies in force at the time that you use Tata Pay, unless any change to the Policies or this User Agreement is required to be made under applicable law or by any government authority.",

        ],
      },
      {
        heading: "10.5. SEVERABILITY",
        points: [
          "If any of the terms and conditions of this User Agreement shall be deemed invalid, void, or for any reason unenforceable, such terms and conditions shall be deemed severable and shall not affect the validity and enforceability of any remaining terms and conditions of this User Agreement.",
        ],
      },
      {
        heading: "10.6. ASSIGNMENT",
        points: [
         "You may not assign or transfer any rights, obligations, or privileges that you have under this User Agreement without our prior written consent. Subject to the foregoing, this User Agreement will be binding on each party’s successors and permitted assigns. Any assignment or transfer in violation of this User Agreement will be deemed null and void. TPL shall have the right to assign this User Agreement without your prior written consent or intimation to you.",
        ],
      },
      {
        heading: "10.7. WAIVER",
        points: [
       "TPL’s waiver of any breach of this User Agreement by any User will not constitute a waiver of any other prior or subsequent breach of this User Agreement. TPL’s failure to insist upon strict compliance with the provisions of this User Agreement by any User will not be deemed a waiver of any rights or remedies TPL may have against that or any other User. TPL may waive compliance with this User Agreement in its sole discretion and may provide enhanced functionalities from time to time in respect of Tata Pay to select Users.",
        ],
      },
      {
        heading: "10.8. ENTIRE AGREEMENT",
        points: [
       "This User Agreement, together with any other terms and conditions, rules, or regulations incorporated herein or referred to herein constitute the entire agreement between TPL and the Users relating to the subject matter hereof, and supersede any prior understandings or agreements (whether oral or written) regarding the subject matter, and may not be amended or modified except in writing or by making such amendments or modifications available on the TataNeu mobile or web application and the websites of merchants.",
        ],
      },
      {
        heading: "10.9. LEGAL ACTION",
        points: [
       "Nothing contained in this User Agreement will limit TPL or its affiliates in the exercise of any legal or equitable rights or remedies."
        ],
      },
    ],
  },

  {
    title: "ANNEXURE - ANNEXURE 1",
    desc: [
      {
        heading: "BILL PAYMENT TERMS",
        points: [ 
          "Tata Payments Limited (“TPL”, “we”, “our” or “us”) is offering recharge and bill pay services (“Bill Pay Services”) to facilitate the recharge of your (“User”, “you” or “your”) prepaid mobile, data or other accounts held with any establishment and/or entity who is providing you with utility services and/or payment services and accepts UPI, debit card/ credit card or other payment options for online or offline purchase of utilities and/or payment services and are supported by TPL for Bill Payment Services either through a biller aggregator or a Bharat Bill Pay Operating Unit (“BBPOU”) (“Biller”).",
          "By proceeding to use the Bill Pay Services, you signify your consent to be bound by these terms of use (hereinafter “BillPay Terms”) in addition to the Tata Pay User Agreement (“General Terms”). You hereby agree that in case of any conflict between the General Terms and these BillPay Terms, the BillPay Terms shall prevail in respect of the Bill Pay Services.",
          "We reserve the right, to make changes or modifications to these BillPay Terms at our sole discretion. We will alert you about any changes by updating the “Last updated” date of these BillPay Terms and you hereby waive any right to receive specific notice of each such change. It is your responsibility to periodically review these BillPay Terms to stay informed of updates. You will be subject to and will be deemed to have been made aware of and to have accepted, the changes in any revised BillPay Terms by your continued use of the Bill Pay Services after the date such revised terms are posted.",
          "Wherever the context requires, User shall mean any natural or legal person who is a resident of India, at least 18 (eighteen) years of age who is eligible to contract within the meaning of the Indian Contract Act, 1872, and is not an undischarged insolvent.",
          "By proceeding to use the BillPay Services, you shall be contracting with TPL, and these Bill Pay Terms including all policies referenced herein will constitute your binding obligations, with TPL in connection with this offering.",
          "When you avail the BillPay Services from TPL on Tata Pay platform (“Platform”) or through any agents appointed by TPL the respective Biller’s terms and conditions will be applicable to you in addition to these BillPay Terms."
          ,
          "By impliedly or expressly accepting the BillPay Terms, you also agree and consent to be bound by all relevant policies of TPL including the Privacy Policy as available on the Platform  <a   style='color:blue' href= 'https://www.tatapayments.com'>(https://www.tatapayments.com/)</a> and <a   style='color:blue' href= 'www.tatadigital.com/legal'>www.tatadigital.com/legal</a>.",
          "1. General Terms for Recharge & Pay Bills",
          "1.1. You agree that TPL is only a facilitator of payments and is not a party to the payments. In certain scenarios, we may act as an intermediary and receive funds pertaining to the BillPay Services on behalf of the Billers. In such scenarios, we would operate purely as the relevant Billers’ payment collection agent for the limited purpose of accepting funds from Users.",
          "1.2. TPL facilitates BillPay Services by allowing you to pay for mobile post-paid, prepaid recharge and landline phone bill payment, DTH, other utility payments like electricity, LPG, etc., internet broadband, water tax payment, toll tax recharge (FastTag), and other services provided by TPL from time to time which are available under “Pay Bills” section of the Platform through a) partners with whom TPL has a contract or b) through the BBPS infrastructure where the Biller is registered with NPCI for Bill payments.",
          "1.3. Offers provided to you by Billers on the Platform are between you and the Biller. TPL is not responsible for the content of such offers or for the fulfilment of such offers.",
          "2. Setting up Recharge & Pay Bills",
          "2.1. In order to make the recharge or bill payments you will have to provide the unique customer identity/ subscription identity number or bill number or registered mobile number, registered telephone number or such other identifier(s) which are required to fetch the payment/subscription due or bill value, subscription plan, due date, outstanding amount due and such other information necessary to enable the payment to your account with the Biller (“Bill Payment Information”).",
          "2.2. You hereby authorize TPL to access, fetch, share, use, store the information related to your account with the Biller on an ongoing basis on your behalf for availing the BillPay Services.",
          "2.3. If you use the BillPay Services to provide Bill Payment Information, to fetch bill details, or make payments on behalf of a third party, including for mobile recharges/top ups, it is your responsibility to ensure that you have the consent of such third party. You agree that you have all necessary rights and permissions to allow TPL to use third party Bill Payment Information on an ongoing basis and access the bill details from the respective Biller, on behalf of the third party for the purpose of TPL providing BillPay Services. You agree that as between TPL and you, any claim raised by the third party will solely lie against you.",
          "2.4. We shall endeavour to complete the transaction within 7 business days.",
          "2.5. You understand that correctness of information is of utmost importance for fetching the right bill and subscription value and you accordingly agree that you will ensure and be solely liable for the correctness of all information provided by you to TPL.",
          "2.6. Once you register with a Biller on the Platform, you may be able to view your current and future bill details or eligible recharge plans or statement from that Biller as and when they are available. You agree that it is your responsibility to ensure that you check your bill details carefully prior to making any payments. In case of any discrepancies, please contact your Biller. You understand that the amount to be paid, recharged or subscription value is an agreement between you and the Biller and TPL has no obligation to verify the correctness of the same. You should always verify and confirm your bill payment requests against any statements or payment records provided by the Biller.",
          "2.7. You agree to keep your account information up to date and comply with the BillPay Terms and all laws applicable to you. TPL reserves the right to suspend/deactivate/terminate the BillPay Services in case you violate any law or regulation applicable to you or any term of these BillPay Services.",
          "2.8. You agree that for providing the Bill Pay Services the User identifier data, location/state and/or any other personal information may be required to be shared with the Biller for tax /GST purposes.",
          "2.9. You agree and authorize TPL to communicate with the Biller, BBPOUs, third party service providers, aggregators with your account information for processing the transaction.",
          "2.10. You also agree that TPL may set up reminder facility or auto payment facility which you expressly consent to and understand that payment once made to the Biller for BillPay Services is non-refundable.",
          "2.11. You shall be responsible for any duplicate standing instructions for payment or delayed payments or any penalty/ interest levied by the Biller on the payments made.",
          "3. Charges",
          "3.1. You agree that there may be charges for access, third party payment or such other data fees from TPL or any third-party payment participants and/ or Billers which you expressly agree to pay. You further agree that you shall not hold TPL liable for the any such fees charged by a third-party payment participant.",
          "4. Your Responsibilities",
          "In connection with your use of the BillPay Services, it shall be your responsibility to adhere to the following:",
          "4.1. You shall always be in compliance with applicable law including and not limited to any BBPS guidelines applicable to your use of the BillPay Services.",
          "4.2. You shall verify the status (success/failure) of each bill payment from your transaction history and/or the notifications received from TPL.",
          "4.3. You shall be responsible for keeping a track of your bills, subscription fee and recharge expiries and or due dates of any utilities/ services or recurring charge services that you have availed and TPL shall not be responsible for any technical issue related to periodic retrieval of the bills from the Billers or any errors / discrepancies in the bills.",
          "4.4. You shall be responsible for scheduling your bill payment and you understand that the payment realization time shall differ for every Biller. We will make payments to Billers only on receipt of your instructions. We shall not be responsible for any delays/ reversals or failure of transaction.",
          "5. User Errors",
          "5.1. If you erroneously send a payment to the wrong Biller or double pay or send a payment for the wrong amount (for instance a typographical error at your end) your only recourse will be to contact the Biller to whom you have sent the payment and ask them to refund the amount. TPL will not reimburse you or reverse a payment that you have erroneously made.",
          "6. Grievance Redressal",
          "6.1. Please contact us at <a   style='color:blue' href= 'mailto:customercare@tatadigital.com'>customercare@tatadigital.com</a> for any grievance or issues that you may face from time to time." ,"6.2. If you wish to opt out of the sharing of any data, please contact us at <a   style='color:blue' href= 'mailto:customercare@tatadigital.com'>customercare@tatadigital.com</a>.",
          "7. Disclaimers",
          "7.1. You agree that all risks arising from online transactions will be borne by you.",
          "7.2. TPL and any third-party partners make no warranty, express or implied, regarding the quality of the BillPay Services including but not limited to the following: i) the BillPay Services will meet your requirements; II) the BillPay Services will be uninterrupted, timely or error free; or III) any products, information or material obtained by you in connection with the BillPay Services will meet your requirements.",
          '7.3.	TPL facilitates the recharge of your prepaid mobile, data or other accounts. The actual mobile, data or any other service is provided by the prepaid service providers like telecommunications service provider whose account you hold ("Prepaid Service Providers"), or by their distributors and aggregators and not by TPL. You hereby agree that you will be solely responsible for selecting an appropriate plan as may be offered by the Prepaid Service Providers, and for compliance with its terms. You understand that the plans provided on TPL are for reference purposes only. The plans may not be up-to-date and may have changed. You must check with your Prepaid Service Provider for the latest plans and details prior to making a transaction.',
          "7.4. You may also choose to enter an ad-hoc amount for bill payment or recharging, however acceptance of it will be solely at the discretion of the Biller. You are responsible for the accuracy of the details entered by you to make a payment or recharge your account. You further agree that TPL will not be liable for any failure on the part of any Biller in effecting a recharge or other bill payment or for any issue related to the quality of service provided by the Biller, and any dispute relating to the same shall be resolved directly between you and the Biller.",
          "8. Refunds/ Reversal of Transactions",
          "8.1. You understand that the payments made to the Biller are non-refundable, and any refunds (if applicable) will be subject to Biller terms and conditions.",
          "8.2. In the event the money has been debited from Your source account but the Biller has not received payment confirmation; or if a transaction is rejected/ subsequently reversed by the Biller; or where the Biller has agreed to initiate a refund due to exceptional circumstances, You acknowledge and agree that any refunds or reversals may take up to 3-5 business days to reflect in the source account (the payment instrument) from the date the Biller initiates such refunds/ reversals. The Biller will generally inform You when the refund/ reversal has been initiated.",
          "8.3. If a payment made to the Biller has failed but the money has been debited, it means the Biller has not received the payment. A refund will be initiated to Your source account within 3-5 business days. Kindly check Your bank statement to verify the same.",
        ],
      },
    ],
  },
  {
    title: "ANNEXURE - ANNEXURE 2",
    desc: [
      {
        heading: "UPI TERMS AND CONDITIONS",
        points: [
          "Tata Payments Limited (“TPL”, “we”, “our” or “us”) is offering certain ‘Unified Payments Interface’ (“UPI”) based payment services, inter alia, through Tata Pay Platform (“Platform”) in association with a payments service provider bank (the “PSP Bank”) through which users of the Platform (“Users” or “you”) may use UPI ID and complete various payment transactions (“UPI Services”).",
          "By proceeding to use the UPI Services, you signify your consent to be bound by these terms of use (hereinafter “UPI Terms”) in addition to the Tata Pay User Agreement (“General Terms”). You hereby agree that in case of any conflict between the General Terms and these UPI Terms, the UPI Terms shall prevail in respect of the UPI Services.",
          "We reserve the right, in our discretion, to make changes or modifications to these Terms and Conditions at any time and for any reason. We will alert you about any changes by updating the “Last updated” date of these Terms and Conditions and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Terms and Conditions to stay informed of updates. You will be subject to and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms and Conditions by your continued use of the UPI Services after the date such revised terms are posted.",
          "Part A - UPI",
          "1. Definitions:",
          "1.1. “NPCI” shall mean National Payments Corporation of India. NPCI is an authorized entity by Reserve Bank of India (RBI). NPCI provides and manages UPI platform.",
          "1.2. “UPI” shall mean Unified Payments Interface.",
          "1.3. “PSP Bank” shall mean a payments service provider bank through which users of the Platform may complete UPI transactions.",
          "1.4. “TPAP” shall mean Third Party Application Provider, TPL in this case.",
          "1.5. “UPI ID” shall mean the virtual payment address created by the User while registering for the Facility and used for the purpose of undertaking Payment Services, in accordance with the Procedural Guidelines.",
          "1.6. “UPI PIN” shall mean the 4 (four) or 6 (six) digit numeric pin/code used for authenticating a transaction through the Facility as required under the procedural guidelines issued by NPCI from time to time. Users will be required to set a UPI PIN for bank account(s) linked to the UPI ID on the Facility.",
          "1.7. “Credentials” shall mean UPI ID together with the UPI PIN.",
          "1.8. “UPI Services” shall mean the features and services provided by TPL to its users as part of UPI platform.",
          "2. Registration and Eligibility",
          "2.1. The registration process is a standard process which is defined and governed by NPCI under UPI guidelines and may change from time to time. You understand that the registration process may include access to your mobile network and sending a unique SMS using your phone to verify, validate, register and link your Bank Account on UPI Platform and create your UPI.",
          "2.2. If you do not meet the eligibility requirements, your use of the UPI Services will be limited. We treat all activities under any UPI ID to be those of the registered user. Users shall not use the UPI Services on behalf of any other person or entity. You shall update registration information promptly upon any change so that it is at all times complete and accurate. We reserve the right to refuse to provide or discontinue UPI Services to any person or entity at any time for any reason.",
          "2.3. Your UPI ID can be, inter alia, used to: ", "a. Pay at merchant locations using QR code through your Tata Pay App. ", "b. Online through certain merchant websites.", " c. For making payment for Tata Pay Services as permitted by the regulators and PSP Bank.",
          "2.4. The details provided by you as part of the UPI registration process, which includes your banking information, shall be shared and maintained at PSP Bank’s and NPCI’s secure library and you consent to share and authorize PSP Bank and NPCI to maintain this data.",
          "3. UPI Services",
          "3.1. Linking your Bank Account",
          "You may use the UPI Services by linking your bank account in the manner set forth below: ","(i) Sign-in to TataNeu using your credentials.","(ii) Navigate to the Tata Pay UPI section and select “Register now” or click on any UPI icon or select UPI as a payment method for your transactions on TataNeu.","(iii) Verify your mobile number by clicking on the “Send SMS” tab. Please note that the Membership Account should be linked to the mobile number registered with your bank. You understand that the verification may include access to your mobile number, network provider and sending an SMS to PSP Bank to validate the device binding to your mobile number.","(iv) Once your mobile number is verified, please choose the bank’s name from the list provided, which you wish to link for UPI Services. In making such selection, you agree and acknowledge that the chosen bank account belongs to you and that you have the lawful authority to operate such bank account in order to make transactions.","(v) Subsequently, select a four or six digit number as the personal identification number which can be used for making UPI transactions (“UPI PIN”), if UPI PIN is not already set for the linked bank account.","(vi) To use UPI Services, you will be issued a UPI ID and thereafter your bank account will be linked (UPI ID and, together with the UPI PIN, your “Credentials”). The UPI ID is a virtual address linked to your bank account, that is required for your UPI transactions. Your UPI ID will be saved for your subsequent transactions.",
          "3.2. Use of the UPI Services",
          "The UPI Services may be used as a payment method on the Platform, on compatible sales channels of other entities, and for person-to-person payments with other Users.",
          "3.2.1. UPI Services the Platform",
          "(i) Select ‘UPI’ as a payment method for your transaction through Tata Pay on the Platform.","(ii) Review your order summary and proceed to payment.","(iii) Enter your UPI PIN on the NPCI common library and press enter in order to complete your transaction.",
          "3.2.2. UPI Services on Compatible Sales Channels",
          "(i) Select ‘UPI’ as a payment method for your transaction. ","(ii) Enter your UPI ID; or click on the BHIM UPI button and then on the Tata Neu application icon; or scan the UPI QR code generated by the merchant using the Platform. ","(iii) You will receive a payment request on the Platform. ","(iv) Confirm the payment request by entering your UPI PIN on the NPCI common library and press enter in order to complete your transaction.",
          "3.2.3 UPI Services for Person-to-Person transfers between Users",
          "(i) Upon receipt of a payment request through UPI, you may make payments using the UPI Services by visiting the “Tata Pay” section of the Platform and clicking on the “Approved Requests” notification.","(ii)  You may choose to accept or decline any payment requests you receive on your UPI ID.","(iii)  If you choose to accept a UPI payment request, you will be informed of the amount being requested and asked to confirm deduction of such funds from your UPI-linked bank account. ","(iv) Click “Pay now” and confirm the payment request by entering your UPI PIN on the NPCI common library and press enter in order to complete your transaction. ","(v) Similarly, you may send UPI payment requests to other Users by entering the relevant User’s UPI ID in the “Request money” sub-section of Tata Pay on the Platform."," (vi) You may also make payments to other Users on your own initiative by entering a User’s UPI ID in the “Make Payment” sub-section of the Platform and confirming the payment by entering your UPI PIN.","(vii)  You may also transfer money to your own account or may transfer to other user by entering bank and IFSC details. ","(viii)  If you have linked more than one account to Tata Pay UPI, you may also make payments to your other account in the “Transfer to self” sub-section of the Platform and confirming the payment by entering your UPI PIN.",
          "3.3. UPI ID and UPI PIN",
          "Except for when you are requesting for money transfer, your UPI ID and UPI PIN will be required at all times to use the UPI Services. You are solely responsible for protecting your mobile device, UPI ID and UPI PIN set for availing the UPI Services. You agree to accept responsibility for all activities that occur under your UPI ID and UPI PIN using the UPI Services. You should take all necessary steps to ensure that the UPI PIN or any information related to your use of the UPI Services, is kept confidential and secure.",
          "By using the UPI Services, you acknowledge and agree that TPL shall not be liable or responsible in any manner whatsoever, for any matter in connection with your submission of the UPI PIN to NPCI or the use of your UPI PIN by NPCI. You acknowledge and understand that your UPI PIN is created and stored by your bank and TPL holds no responsibility for the UPI PIN.",
          "3.4. Transaction Limits and Fees",
          "a. Transactions using the UPI Services may be subject to minimum and maximum transaction limits that may be set by NPCI, TPL, PSP Bank, or any other service provider as may be prescribed under the provisions of Applicable Law, from time to time. TPL, PSP Bank or other service providers may also reject/suspend transactions (in whole or in part) based on their respective policies and assessment.",
          "b. TPL reserves the right to charge any fee on UPI Services at its sole discretion. We may introduce fees for any new services or amend/introduce fees for existing services, as the case may be. Changes to the fee(s) shall be displayed accordingly to you via the Platform and such changes shall automatically become effective immediately after they are posted. Unless otherwise stated, all fees shall be quoted in Indian Rupees. Your bank may charge you a fee for any transaction made using the UPI Services. Please check with your bank for further details.",
          "3.5. Transaction Monitoring",
          "3.5.1.	TPL, PSP Bank or NPCI may review your activity and transactions using the UPI ID for identifying high risk transactions. We may also engage third party service providers to assist us in these efforts." ,
"3.5.2.	Your transaction may be rejected by PSP Bank or TPL due to reason not limited to risk management, suspicion of fraudulent / unlawful transactions and/or transactions in violation of applicable laws or the UPI Terms or policies of merchants, selling of prohibited items, use of compromised or blacklisted cards or UPI accounts, chargebacks/complaints or for any other reasons deemed fit by TPL. In such case, you may be issued a refund for such transaction in accordance with Tata Pay’s refund policies or the return and refund policies of the merchant, as applicable.",

"3.6.	Acceptable Use",

"3.6.1.	You will at all times adhere to all applicable laws, rules, and regulations applicable to your use of the UPI Services. Without limiting the foregoing, you may not act as a payment service provider, intermediary, aggregator or otherwise resell the UPI Services on behalf of any third party, including without limitation the processing and transmission of funds for any third party. We may inspect your use of the UPI Services for any reason, including without limitation to investigate any alleged violation of these UPI Terms or any third-party complaints."
,
"3.6.2.	You shall not use the UPI Services in any way that causes, or is likely to cause, the UPI Services or access to it by other Users to be interrupted, damaged or impaired in any way." 
,
"3.6.3.	You understand that you, and not TPL, are responsible for all electronic communications and content sent from your computer or other systems to us and to the persons you transact with using the UPI Services. Users shall use the UPI Services for lawful purposes only. You shall not use the UPI Services for any of the following:"
 ,
"(a)	For fraudulent purposes, or in connection with a criminal offense or other activity that violates any applicable law;"
,
"(b)	For any cause or action that is in violation of the Terms of Use of Tata Pay; or"
,
"(c)	To cause annoyance or inconvenience to any other person."
,
"3.6.4.	PSP Bank or TPL may, at its sole discretion, temporarily or permanently suspend your access to the UPI Services, if it has reason to believe that there is suspicious or unusual activity being carried out through your UPI ID and UPI PIN."
,
"3.7.	Refunds "
,
"3.7.1.	In case you request for a refund due to the return of a product or service purchased from a merchant using UPI Services, refunds shall be issued in accordance with the relevant merchant’s return and refund policies. "
,
"3.8.	Our Role"
,
"For the purposes of providing the UPI Services, TPL is only a facilitator and is not and cannot be a party to or control in any manner any transactions relating to purchase of products or services using the UPI Services on Tata Neu or on any merchant’s sales channels or for transactions with other Users. Tata Pay, in relation to the UPI Services, is a TPAP authorized by the NPCI to facilitate UPI-based payments transactions through PSP Bank and is accordingly bound by the tripartite agreement between TPL, the NPCI and the PSP Bank. For the specific roles and responsibilities of TPL (in its capacity as a TPAP), the PSP Bank and the NPCI in a UPI payment transaction, please refer to Schedule I below." 
,
"3.9.	User Data"
,
"You agree that TPL may use the UPI transaction data for the purposes of cross-selling, promotions, offers, value-added services, increasing transactions, providing better user experience or such other purposes as approved by NPCI from time to time." 
,
"4.	User Responsibility & Obligations"
,
"4.1.	While you use the UPI Services, You are required to ensure the following -",
"a.	You are solely responsible for linking your correct bank account."
,"b.	Since your mobile number is treated as the primary identifier, your mobile number needs to be updated with the bank linked to the Platform in case of any changes.",
"c.	If you change the mobile number registered with the Platform, You will have to re-register your new mobile number with Tata Pay. To re-enable the UPI Service, you need to register your new mobile number with your bank as well.",
"d.	You are solely responsible to keep your OTP, UPI PIN and bank account related details confidential. Sharing such information with others may lead to unauthorized usage, for which TPL shall not be responsible.",
"e.	You shall take full responsibility of the payment request that you make and authorize, including addition of beneficiary, typing and reviewing UPI IDs and validating intended recipients and we do not take correctness of information that you enter during payment processing, including authorization.",
"f.	You agree that if you provide any information that is untrue, inaccurate, not current or incomplete or we have reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete, or not in accordance with the UPI Terms, we shall have the right to indefinitely suspend or terminate or block access to the UPI Services.",
"g.	You agree that TPL, PSP or any other system participant in UPI payment ecosystem shall not be liable for any delay in the completion of the funds transfer or any loss on account of error in the execution of the funds transfer by you.",
"h.	You are required to ensure availability of sufficient funds in the linked bank account(s) in order to avoid transaction declines and charges if any accessed by your issuer bank.",
"i.	You agree and understand that TPL shall onboard you on the NPCI operated centralised mapper(s) such as “Numeric UPI ID Mapper” to enable you to send or receive funds using a defined “UPI Number” (which would be your mobile number by default) and you agree and consent that such onboarding shall be done by TPL on your behalf within the defined and permitted structure of NPCI. This process shall be as per directives of NPCI and shall include but not limited to sharing your UPI details (collected and maintained by TPL to provide UPI services) with NPCI and linking of default bank account / UPI ID to your UPI number. This would enable you to accept payments against your UPI number. TPL shall provide you an option to de-link the default mapping of UPI number processed on the Platform. You further agree to receive funds from other users registered on the Platform and consent that Tata Pay will process such transactions to your linked default bank account without checking with the NPCI Mapper.",
"j.	You acknowledge and agree that you will comply with the terms of service of the PSP Bank. ",

          "5. Intellectual Property Rights",
          "5.1. Intellectual Property Rights for the purpose of these UPI Terms shall always mean and include copyrights whether registered or not, patents including rights of filing patents, trademarks, trade names, trade dresses, house marks, collective marks, associate marks and the right to register them, designs both industrial and layout, geographical indicators, moral rights, broadcasting rights, displaying rights, distribution rights, selling rights, abridged rights, translating rights, reproducing rights, performing rights, communicating rights, adapting rights, circulating rights, protected rights, joint rights, reciprocating rights, infringement rights. All Intellectual Property rights arising as a result of domain names, internet or any other right available under applicable law shall vest in the domain of TPL as the owner of such domain name. The Parties hereto agree and confirm that no part of any Intellectual Property rights mentioned hereinabove is transferred in the name of User and any intellectual property rights arising as a result of these presents shall also be in the absolute ownership, possession and our control or control of its licensors, as the case may be."," 5.2. All material on the Platform, including images, illustrations, audio clips, and video clips, are protected by copyrights, trademarks, and other intellectual property rights of TPL. All material on Tata Pay is solely for your personal, non-commercial use. You must not copy, reproduce, republish, upload, post, transmit or distribute such material in any way, including by email or other electronic means and whether directly or indirectly and you must not assist any other person to do so. Without the prior written consent of the owner, modification of the materials, use of the materials on any other platform or networked computer environment or use of the materials for any purpose other than personal, non-commercial use is a violation of the copyrights, trademarks and other proprietary rights, and is prohibited.","  6. Responsibility for Taxes ","  The reporting and payment of any applicable taxes arising from the use of the UPI Services is your responsibility. You hereby agree to comply with any and all applicable tax laws in connection with your use of the UPI Services, including without limitation, the reporting and payment of any taxes arising in connection with payments made through UPI Services, or funds/income received through the UPI Services. "," 7. Suspension and Termination ","7.1. PSP Bank or TPL may, in its sole and absolute discretion, suspend or terminate your use of the UPI Services, without notice and without liability to you or any third party, for any reason, including without limitation, inactivity or violation of these UPI Terms or other policies, which may be established from time to time. ","7.2. PSP Bank or TPL may suspend your UPI Services and block access to you’re the UPI Services and deactivate it under the following circumstances:","(i) you have violated the terms of these UPI Terms;","(ii) we determine that you pose an unacceptable credit or fraud risk to us;","(iii) you provide or have provided false, incomplete, inaccurate, or misleading information (including without limitation any registration information) or otherwise engage in fraudulent or illegal conduct;","(iv) we have security concerns regarding your use of the UPI Services, including your Credentials, or"," (v) we suspect unauthorized or fraudulent use of your UPI Services, or any payment information provided by you on the Platform.","7.3. In such cases we will inform you of the deactivation of your UPI Services or Credentials and the reasons for it, where possible, before the deactivation and in any event promptly thereafter, unless we determine that giving such information would compromise security concerns or is prohibited by applicable law. We will reactivate your UPI Services or Credentials, or replace it or them, as applicable, once we have resolved the reasons for deactivation. Users are required to notify us via e-mail at customercare@tatadigital.com you wish to request us to reactivate your use of the UPI Services.","7.4. You may note that Tata Pay shall retain your registration information, UPI IDs, transactional information or any other information that we are permitted to store as permitted and for the duration as specified in regulations or notified by NPCI from time to time even after the termination of your UPI Services.","8. Miscellaneous"," 8.1. Disputes","Notwithstanding anything contained elsewhere in these terms and conditions:"," (a) Every User can raise a complaint with respect to a UPI transaction, on the Platform.","(b) Users can select the relevant UPI transaction and raise a complaint in relation thereto."," (c) A complaint shall be first raised with TPL in respect of all UPI Services-related grievances / complaints of the Users on-boarded by TPL (if the UPI transaction is made through the Platform). In case the complaint / grievance remains unresolved, the next level for escalation will be the PSP Bank, followed by the bank (where the User maintains its account) and NPCI, in the same order. After exercising these options, the User can approach the Banking Ombudsman and / or the Ombudsman for Digital Complaints, as the case may be.","(d) The complaint can be raised for both the types of transactions, i.e., funds transfers and merchant transactions.","(e) The User shall be kept informed by the PSP or TPL by means of updating the status of such User’s complaint on the Platform., Entity - PSP Bank Grievance Redressal Link - ICICI Bank <a   style='color:blue' href= 'https://www.icicibank.com/complaints/complaints.page'>https://www.icicibank.com/complaints/complaints.page</a>, Entity - NCPI Grievance Redressal Link -<a   style='color:blue' href= 'https://www.npci.org.in/what-we-'>https://www.npci.org.in/what-we-</a> do/upi/dispute-redressal-mechanism"," 8.2. Legal Action","  Nothing contained in these UPI Terms will limit TPL or its affiliates in the exercise of any legal or equitable rights or remedies.",
          "Part B – UPI Lite",
"1.	Definitions:"
,
"1.1	“Bank Account” shall mean your savings bank account(s) with any bank in India, which supports the UPI Lite Facility.",
"1.2	“UPI Lite” shall mean an 'on-device wallet' by NPCI for small-value payments.",
"1.3	“UPI Lite Balance” shall mean the virtual balance you load from your Bank Account for transactions using UPI Lite on Tata Neu."
,
"2.	UPI Lite "
,
"UPI Lite is a service facilitated by NPCI and enabled on Tata Neu through which you can make low value payment transactions, without entering UPI PIN, up to the limit prescribed in ‘usage and settlement’ section below. UPI Lite is solely offered as a service and not a new account or wallet on Tata Neu."
,
"3.	Activation and loading"
,
"You can register for UPI Lite by clicking on your profile icon and setting up UPI Lite in the payment methods page. As a part of the registration, you will be prompted to add up to INR 2000 to your UPI Lite via your Bank Account. The registration for UPI Lite will be deemed complete when You successfully enter and validate your UPI PIN and the money is added to your UPI Lite. You understand that only one single Bank Account, that supports UPI Lite, can be used to link to UPI Lite on Tata Neu."
,
"4.	Usage and settlement"
,
"4.1	You can make a payment transaction to a peer or merchant for a maximum of Rs. 500 using  UPI Lite. The total daily usage limit of UPI Lite shall be restricted to Rs. 4000 enabling a maximum of Rs 2000 that can be added twice a day. You understand that:",
"4.1.1.	NPCI may revise the aforesaid usage limits in its sole discretion from time to time without any prior intimation to you.",
"4.1.2.	UPI Lite  is only a virtual ‘on device’ balance and a reflection of UPI Lite balance allocated by you. No interest will be paid to you on UPI Lite balance.",
"4.1.3.	Actual money or funds with respect to your UPI Lite  are held and maintained solely by your issuing bank;",
"4.1.4.	UPI Lite  can solely be used for debit transactions and all credit transactions (including refunds, etc.) will be processed in your Bank Account.",
"4.1.5.	UPI Lite cannot be used for peer to peer collect requests, auto pay and international payment transactions.",
"4.1.6.	For any payment transaction up to Rs 500 (subject to the total daily usage limit of Rs 4000), your UPI Lite  will be default used provided your UPI Lite is available with sufficient funds.",

"5.	De-activation of UPI Lite"
,
"5.1	You can disable UPI Lite  at any time from Tata Neu. Once disabled, the unutilised UPI Lite balance will be credited to your Bank Account by your issuing bank. You understand that:",
"5.1.1	If You have a pre-existing balance in UPI Lite  and your Bank Account gets closed, you will be able to spend the pre-existing  UPI Lite Balance.",
"5.1.2	In case of Android to Android or iOS to iOS device change, you understand that If you change your mobile device, you will be able to continue to access your UPI Lite balance from the new device provided you are using the same phone number, and bank account.",
"5.1.3	In case of android to iOS or iOS to android device change, you must disable UPI Lite Facility from old mobile device as per the steps prescribed on the Tata Neu and move your UPI Lite balance funds to your linked Bank Account. In case you lose access to your UPI Lite for any reason whatsoever, you can reach out to your issuer bank for moving your UPI Lite balance to your linked Bank Account. TPL shall not be liable in this regard."
,
"6.	Security of the UPI Lite"
,
"6.1	You are responsible for maintaining the confidentiality of your account and other details associated with UPI Lite transactions and you are solely responsible for all activities that occur under your device on which UPI Lite is enabled.",
"6.2	You shall not hold NPCI/ TPL responsible for any unauthorized transactions made from your Tata Neu account using UPI Lite.",
"6.3	NPCI/ TPL shall not be liable to you or any other person for any loss or damage which may arise due to any failure by you to protect your UPI Lite on Tata Neu or otherwise not complying with the UPI Lite terms."

          , "Schedule I"," Roles and Responsibilities of TPL, PSP Bank and the NPCI"," Roles & Responsibilities of NPCI",
          "<li>NPCI owns and operates the Unified Payments Interface (“UPI”) platform.</li>",
          "<li>NPCI prescribes rules, regulations, guidelines, and the respective roles, responsibilities and liabilities of the participants, with respect to UPI. This also includes transaction processing and settlement, dispute management and clearing cut-offs for settlement.</li>",
          "<li>NPCI approves the participation of Issuer Banks, PSP Banks, TPAP and Prepaid Payment Instrument issuers (“PPIs”) in UPI.</li>",
          "<li>NPCI provides a safe, secure and efficient UPI system and network.</li>",
          "<li>NPCI provides online transaction routing, processing and settlement services to members participating in UPI.","NPCI can, either directly or through a third party, conduct audit on UPI participants and call for data, information and records, in relation to their participation in UPI.</li>",
          "<li>NPCI provides the banks participating in UPI access to system where they can download reports, raise chargebacks, update the status of UPI transactions etc.</li>","Roles & responsibilities of PSP Bank","(a) PSP Bank is a member of UPI and connects to the UPI platform for availing UPI payment facility and providing the same to the TPAP which in turn enables the Users / merchants to make and accept UPI payments.","(b) PSP Bank, either through its own app or TPAP’s app, on-boards and registers the Users on UPI and links their bank accounts to their respective UPI ID.","(c) PSP Bank is responsible for authentication of the User at the time of registration of such customer, either through its own app or TPAP’s app.","(d) PSP Bank engages and on-boards the TPAPs to make the TPAP’s UPI app available to the Users.","(e) PSP Bank has to ensure that TPAP and its systems are adequately secure to function on UPI platform","(f) PSP Bank is responsible for ensuring that UPI app and systems of TPAP are audited to safeguard security and integrity of the data and information of the User including UPI transaction data as well as UPI app security.","(g) PSP Bank has to store all the payments data including UPI Transaction Data collected for the purpose of facilitating UPI transactions, only in India.","(h) PSP Bank is responsible for giving all UPI customers an option to choose any bank account from the list of Banks available on UPI platform for linking with the customer’s UPI ID.","(i) PSP Bank is responsible for putting in place a grievance redressal mechanism for resolving complaints and disputes raised by the User.","Roles & responsibilities of TPAP (i.e., Tata Pay)","(a) TPAP is a service provider and participates in UPI through PSP Bank.","(b) TPAP is responsible for complying with all the requirements prescribed by PSP Bank and NPCI in relation to TPAP’s participation in UPI.","(c) TPAP is responsible for ensuring that its systems are adequately secure to function on the UPI platform.","(d) TPAP is responsible for complying with all applicable laws, rules, regulations and guidelines etc. prescribed by any statutory or regulatory authority in relation to UPI and TPAP’s participation on the UPI platform including all circulars and guidelines issued by NPCI in this regard","(e) TPAP has to store all the payments data including UPI Transaction Data collected by TPAP for the purpose of facilitating UPI transactions, only in India","(f) TPAP is responsible for facilitating access by the RBI, NPCI and other agencies nominated by RBI/ NPCI, to the data, information, systems of TPAP related to UPI and to carry out audits of TPAP, as and when required by RBI and NPCI","TPAP shall provide the User with an option to raise grievances through the TPAP’s grievance redressal facility made available through TPAP’s UPI app or website and such other channels as may be deemed appropriate by the TPAP like email, messaging platform, IVR etc.",
        ],
      },
    ],
  },
  {
    title: "ANNEXURE - ANNEXURE 3",
    desc: [
      {
        heading: "TERMS AND CONDITIONS FOR TOKENISATION OF CARDS",
        points: [
         
          "Tata Payments Limited (“TPL”, “we”, “our” or “us”) is offering, inter alia, Card on File Tokenisation Services (“COFT Services”), through Tata Pay Platform (“Platform”) in association with third party partners through which users of the Platform (“User” or “you”) may tokenise their valid credit cards, debit cards etc. issued by authorised card issuers (“Card(s)”) for the purpose of future payment transactions.",
          "By proceeding to use COFT Services, you signify your consent to avail COFT Services and to be bound by these terms of use (hereinafter “COFT terms”) in addition to the Tata Pay User Agreement (“General Terms”). Capitalized terms used but not defined shall bear the same meaning as ascribed to it in the General Terms.",
          "We reserve the right, in our discretion, to make changes or modifications to COFT Terms at any time for any reason. We will alert you about any changes by updating the ‘Last updated’ date of these COFT Terms and you waive any right to receive specific notice of each such change.",
          "It is your responsibility to periodically review these COFT Terms to stay informed of updates.",
          "You will be subject to and will be deemed to have been made aware of and to have accepted, the changes in any revised COFT Terms by your continued use of COFT Services after the date such revised terms are posted.",
          "Wherever the context requires User shall mean any natural or legal person who is a resident of India, at least 18 (eighteen) years of age who is eligible to contract within the meaning of the Indian Contract Act, 1872, and is not undischarged insolvent.",
          "When you avail COFT Services from TPL, respective Merchant’s Terms and Conditions and applicable laws, regulations in relation thereto including but not limited to any guidelines issued by the RBI will be applicable to you in addition to these COFT Terms.",
          "By impliedly or expressly accepting COFT Terms, you also agree and consent to be bound by all relevant policies of TPL including the Privacy Policy as available on the Platform <a   style='color:blue' href= 'https://www.tatapayments.com'>(https://www.tatapayments.com/)</a> and <a   style='color:blue' href= 'www.tatadigital.com/legal'>www.tatadigital.com/legal</a>.",
          "1. Definitions:" ,"1.1. “Cardmember” shall mean the User to whom the valid Card has been issued by an authorised card issuer.",
          "1.2. “PAN” means the primary card account number that identifies card issuer and particular Cardmember account.",
          "1.3. “Token” means a surrogate value which corresponds to a PAN.",
          "1.4. “Tokenised Card” shall mean the Cardmember’s Card for which unique Token has been assigned on the Platform.",
          "1.5. “Tokenised Card Transaction” shall mean the transaction effected by using the Tokenised Card for making payment to any other person.",
          "1.6. “Token Requestor” shall mean TPL or TPL’s service provider which is acting in the capacity of token requestor with token service provider for providing Tokenisation Service.",
          "1.7. “Tokenisation Service” shall mean the service of replacement of actual Card details of Cardmembers with Token; and other processes involving Tokens which shall include but not be limited to transaction processing or deregistration of Tokens.",
          "2. Tokenisation of Cards" ,"2.1 The Cardmember acknowledges and agrees that:",
          "2.1.1 The Cardmember may initiate a request to Token Requestor for tokenisation of Card after providing explicit consent.",
          "2.1.2 Token Requestor will collect relevant data including Card details and share the same with its third-party partners, card issuers and/or card networks for the purpose of providing the Tokenisation Services.",
          "2.1.3 TPL, card networks, card issuers and TPL’s third party partners will have the right to use, transfer and process the data collected from you by TPL to provide the Tokenisation Services. Such use, transfer and processing will be in accordance with the applicable laws and may be used by card networks for various purposes including internal research, fraud, security, and risk management. TPL, card networks, card issuers or merchants in their sole discretion, shall allow or deny tokenisation of the Card on the Platform and such decision of TPL, card networks, card issuers or merchants shall be final and binding on the Cardmember.",
          "2.1.4 The use of the Tokenised Card may be subject to certain transaction limits (whether in value or number of transaction) imposed, from time to time, by your card issuer or in terms of the applicable law or internal policies and procedure of your card issuer, card network or TPL.",
          "2.1.5 The laws of India without regard to the principles of conflict of laws will govern the Tokenisation Services and any dispute of any kind that may arise between you and TPL. The Cardmember will at all times adhere to all applicable laws, rules, and regulations applicable to use of the Tokenisation Services.",
          "3. Loss/misuse of Tokenised Cards",
          "3.1 The Cardmember must immediately notify respective bank/card issuer if Token/Card is misplaced, damaged, lost or stolen or if the Cardmember suspects that the Token/Card is being used without Cardmember’s permission.",
          "3.2 If the Tokenised Card is hotlisted due to card damage, loss or theft and such Tokenised Card is blocked by card issuer or card network and TPL shall not be liable or responsible for any transaction incurred using the Tokenised Card prior to time the Tokenised Card being blocked and the Cardmember will be wholly liable for the same.",
          "3.3 The Cardmember shall be solely liable for all losses in case of misuse of the Tokenised Card by someone who obtained access to the Tokenised Card with the consent of the Cardmember.",
          "4. Cardmember’s undertakings",
          "4.1 The Cardmember undertakes to take appropriate security measures in relation to Tokenised Card including, without limitation, ensuring that no person has unauthorised access to the Tokenised Card.",
          "4.2 The Cardmember shall strictly comply with the terms of card issuer.",
          "4.3 The Cardmember shall be fully and solely responsible for any disclosure of the details of Cards/Tokenised Card details, password/ security credentials or other security details even if such disclosure is accidental or unauthorised. The Cardmember shall be solely responsible for all risks and consequences of the Tokenised Card being used by unauthorised persons or for unauthorised purposes, if any.",
          "4.4 The Cardmember hereby agrees that the Cardmember is aware of the various risks (including, without limitation, fraudulent usage of Tokenised Card) associated with usage of the Tokenised Card. The Cardmember hereby agrees and undertakes to assume and bear all the risks involved in respect of Tokenised Card and usage of the same and TPL shall not be responsible in any manner for the same and shall also not be liable for any claims, loss, damage, cost or expense and liability arising therefrom or in connection therewith.",
          "5. De-registration of Token ",
          "5.1 The Cardmember shall follow the instructions/terms and conditions agreed with TPL or communicated by the Token Requestor to suspend/stop/delete/terminate/close the Token and not use the features thereof any longer. The Cardmember hereby acknowledges and agrees that the termination of the Token will not terminate, suspend, close or in any other manner affect the underlying PAN or any payment or other obligations arising therefrom.",
          "6. Disclaimer ",
          "6.1. You agree that (i) all risks arising from online transactions using Tokenised Cards will be borne by you; and (ii) Tokenisation Service is provided on ‘as is’ basis.",
          "6.2. TPL and any third-party partners make no warranty, express or implied regarding the quality of the COFT Services including but not limited to the following: i) the COFT Services will meet your requirements; ii) COFT Services will be uninterrupted, timely or error free; or iii) any products, information or material obtained by you in connection with the COFT Services will meet your requirements.",
          "6.3. Except as otherwise expressly set forth in COFT Terms, all provisions of the General Terms, including without limitation, with respect to term and termination, intellectual property, indemnity and limitation of liability, privacy and compliance with applicable laws, shall apply to the COFT Services. Any breach by you of these COFT Terms shall be deemed to be a breach of General Terms. In the case of any conflict between these COFT Terms and General Terms (i) with respect to the COFT Services, these COFT Terms shall prevail; (ii) for all other matters, General Terms shall prevail.",
          // "Terms and termination 1. Term. This User Agreement commences on the earlier of the date that you use Tata Pay to login on the website of a merchant who accepts Tata Pay, make a purchase using Tata Pay or register for a Membership Account on the Platform. The User Agreement shall continue unless and until terminated in accordance with the provisions of this Clause 4. You may initiate termination of this User agreement by contacting us at customercare@tatadigital.com. We shall have the right to terminate this User Agreement without any prior notice to you.",
          // "2. Suspension or Termination by TPL TPL may terminate the provision of the Tata Pay services and this User Agreement, for any reason at any time without written notice. Further, we may suspend your access to Tata Pay and block access to your Membership Account and deactivate it under the following circumstances: (a) you have violated the terms of this User Agreement; (b) we determine that you pose an unacceptable credit or fraud risk to us; (c) you provide or have provided false, incomplete, inaccurate, or misleading information (including without limitation any registration information) or otherwise engage in fraudulent or illegal conduct; (d) we have security concerns regarding your Membership Account, including your Credentials, or (e) we suspect unauthorized or fraudulent use of your Membership Account or any payment information in your Membership Account. In such cases we will inform you of the deactivation of your Membership Account and the reasons for it, where possible, before the deactivation and in any event promptly thereafter, unless we determine that giving such information would compromise security concerns or is prohibited by applicable law. We will reactivate your Membership Account or Credentials, or replace it or them, as applicable, once we have resolved the reasons for deactivation to our satisfaction.",
          // "3. Effect of Termination We will not be liable to you for compensation, reimbursement, or damages of any kind, direct or indirect, including any business loss (including loss of profits, revenue, contracts, anticipated savings, data, goodwill or wasted expenditure) or any other indirect or consequential loss that is not reasonably foreseeable to both you and us in connection with your use of Tata Pay, or in connection with any termination or suspension of Tata Pay. Upon termination of this User Agreement for any reason: (a) you will remain liable for all fees, charges and other payment obligations that have been incurred through the date of termination with respect to the use of Tata Pay; (b) all license or other rights granted to either party under this User Agreement will immediately terminate; (c) your access to the Platform will be terminated and your Membership Account will be deactivated.",
          // "4. Survival In addition to your payment obligations arising under this User Agreement, Clauses 1.5 (Our Role), 1.6 (Privacy), 4.3 (Effect of Termination), 5 (Communications), 7 (Intellectual Property), 8 (Indemnity and Limitation of Liability), 9 (Tax) and 10 (Miscellaneous) of this User Agreement shall survive and remain in effect in accordance with their terms upon the termination of this User Agreement.",
          // "Communications When you use Tata Pay or send e-mails to us, you are communicating with us electronically.",
          // "You will be required to provide a valid phone number to process a transaction using Tata Pay.",
          // "We may communicate with you by e-mail, SMS, phone call or by posting notices on the Platform or by any other mode of communication.",
          // "Through your use of Tata Pay, you consent to receive communications including SMS, e-mail or phone calls from us with respect to your use of Tata Pay, including for the following purposes: a. providing you with the functionalities of Tata Pay and transactional or account related information; b. sending you payment related reminders/updates; c. promoting Tata Pay or the Platform or any of TPL’s and its affiliates’ other products and services; d. promoting merchants’ services, including any offers or schemes or prizes that may be provided by these entities; e. promoting new products and activities; f. investigating or resolving any product or Tata Pay-related concerns including complaints; or g. obtaining your invaluable feedback.",
          // "In order to serve you better, we may also send you surveys to understand: (i) your experience with Tata Pay, and/or (ii) your needs and requirements.",
          // "You may choose to, or we may invite you to, submit comments or ideas about Tata Pay, including without limitation about how to improve Tata Pay.",
          // "By submitting any idea, you agree that your disclosure is gratuitous, unsolicited and without restriction and will not place us under any fiduciary or other obligation, and that we are free to use the idea without any additional compensation to you, and/or to disclose the idea on a non-confidential basis or otherwise to anyone.",
          // "Some of the Tata Pay features may display advertisements and promotions.",
          // "In consideration for TPL granting you access to and use of Tata Pay, you agree that TPL may place such advertising and promotions.",
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
                    <ul className="pl-[10px] lg:pl-[20px]" style={{ listStyleType: "disc" }}>
                      {list?.points?.map((point, pointIndex) => {
                        return (
                          <p
                            key={pointIndex}
                            className="text-[14px] lg:text-[14px] leading-[20px] lg:leading-[20px] py-[10px]"
                            dangerouslySetInnerHTML={{ __html : point }}
                          >
                            
                          </p>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}

              {/* <div className="mx-[0px] lg:mx-[62px] rounded-[16px] overflow-hidden">
                <table
                  style={{
                    borderCollapse: "collapse",
                    width: "100%",
                    marginTop: "20px",
                    borderRadius: "16px",
                  }}
                >
                  <thead>
                    <tr className="text-[10px] lg:text-[14px] font-semibold leading-[20px] bg-[#EBF0FF]">
                      <th
                        style={{
                          border: "1px solid #78787D1F",
                          textAlign: "left",
                          padding: "16px 12px",
                        }}
                      >
                        Features 1
                      </th>
                      <th
                        style={{
                          border: "1px solid #78787D1F",
                          textAlign: "left",
                          padding: "16px 12px",
                        }}
                      >
                        Features 2
                      </th>
                      <th
                        style={{
                          border: "1px solid #78787D1F",
                          textAlign: "left",
                          padding: "16px 12px",
                        }}
                      >
                        Features 3
                      </th>
                    </tr>
                  </thead>
                  <tbody style={{ backgroundColor: "#FDFDFD" }}>
                    {item?.tableData?.map((row, tableIndex) => (
                      <tr
                        key={tableIndex}
                        className="text-[12px] leading-[16px]"
                      >
                        <td
                          style={{
                            border: "1px solid #78787D1F",
                            padding: "14px 16px",
                          }}
                        >
                          {row.features1}
                        </td>
                        <td
                          style={{
                            border: "1px solid #78787D1F",
                            padding: "14px 16px",
                          }}
                        >
                          {row.features2}
                        </td>
                        <td
                          style={{
                            border: "1px solid #78787D1F",
                            padding: "14px 16px",
                          }}
                        >
                          {row.features3}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div> */}
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
