"use client";
import React, { useState } from "react";
import Accordion from "../../common-components/Accordion";
import { Target } from "lucide-react";

// const policyData = [
//   {
//     title: "Policy Statement and Purpose",
//     desc: [
//       {
//         heading: "",
//         points: [
//           "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. ",
//           "Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum",
//           "Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi.",
//         ],
//       },
//       {
//         heading: "Escalations",
//         points: [
//           "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. ",
//           "Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum",
//           "Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi.",
//         ],
//       },
//     ],
  
//     tableData: [
//       {
//         features1: "lorem",
//         features2: "lorem",
//         features3: "lorem",
//       },
//       {
//         features1: "lorem",
//         features2: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
//         colSpan: {
//           features1: 1,
//           features2: 2,
//           features3: 0
//         }
//       },
//       {
//         features1: "lorem",
//         features2: "lorem",
//         features3: "lorem",
//       },
//       {
//         features1: "lorem",
//         features2: "lorem",
//         features3: "lorem",
//       },
//     ],
//   },
//   {
//     title: "Policy Statement and Purpose",
//     desc: [
//       {
//         heading: "",
//         points: [
//           "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. ",
//           "Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum",
//           "Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi.",
//         ],
//       },
//       {
//         heading: "Escalations",
//         points: [
//           "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. ",
//           "Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum",
//           "Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi.",
//         ],
//       },
//     ],
//     tableData: [
//       {
//         features1: "lorem",
//         features2: "lorem",
//         features3: "lorem",
//       },
//       {
//         features1: "lorem",
//         features2: "lorem",
//         features3: "lorem",
//       },
//       {
//         features1: "lorem",
//         features2: "lorem",
//         features3: "lorem",
//       },
//       {
//         features1: "lorem",
//         features2: "lorem",
//         features3: "lorem",
//       },
//     ],
//   },
//   {
//     title: "Policy Statement and Purpose",
//     desc: [
//       {
//         heading: "",
//         points: [
//           "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. ",
//           "Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum",
//           "Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi.",
//         ],
//       },
//       {
//         heading: "Escalations",
//         points: [
//           "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. ",
//           "Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum",
//           "Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi.",
//         ],
//       },
//     ],
//     tableData: [
//       {
//         features1: "lorem",
//         features2: "lorem",
//         features3: "lorem",
//       },
//       {
//         features1: "lorem",
//         features2: "lorem",
//         features3: "lorem",
//       },
//       {
//         features1: "lorem",
//         features2: "lorem",
//         features3: "lorem",
//       },
//       {
//         features1: "lorem",
//         features2: "lorem",
//         features3: "lorem",
//       },
//     ],
//   },
//   {
//     title: "Policy Statement and Purpose",
//     desc: [
//       {
//         heading: "",
//         points: [
//           "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. ",
//           "Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum",
//           "Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi.",
//         ],
//       },
//       {
//         heading: "Escalations",
//         points: [
//           "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. ",
//           "Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum",
//           "Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi.",
//         ],
//       },
//     ],
//     tableData: [
//       {
//         features1: "lorem",
//         features2: "lorem",
//         features3: "lorem",
        
//       },
//       {
//         features1: "lorem",
//         features2: "lorem",
//         features3: "lorem",
//       },
//       {
//         features1: "lorem",
//         features2: "lorem",
//         features3: "lorem",
//       },
//       {
//         features1: "lorem",
//         features2: "lorem",
//         features3: "lorem",
//       },
//     ],
//   },
// ];
const policyData = [
  {
    title: "1. Policy Statement and Purpose",
    desc: [
      {
        heading: "",
        points: [
          "1.1. Tata Payments Limited (\"TPL\", the \"Company\" or \"we\" or \"our\"), having adopted the Tata Code of Conduct, is committed to ensure that a suitable mechanism is put in place for time-bound redressal of all customer complaints. This Customer Grievance Redressal Policy (\"Policy\") outlines the framework for addressing customer grievances.",
        ],
      },
    ],
    tableData1: false,
    
    tableData: [
      {
        features1: "",
        features2: "",
        features3: "",
        colSpan: {
          features1: 1,
          features2: 2,
          features3: 0
        }
      },
      {
        features1: "",
        features2: "",
        features3: "",
      },
    ],
  },
  {
    title: "2. Nodal Officer",
    desc: [
      {
        heading: "",
        points: [
          "2.1. Our Company shall, from time to time, designate an employee of sufficient seniority, competence and independence as the Nodal Officer who will be responsible for the Company's customer grievance mechanism.",
          "2.2. The Nodal Officer shall be responsible for furnishing information to the Ombudsman at the Reserve Bank of India with respect to customer complaints filed against the Company.",
          "2.3. Details of the Nodal Officer for customer grievance shall be prominently displayed on the website.",
        ],
      },
    ],
    tableData1: false,
    tableData: [
      {
        features1: "",
        features2: "",
        features3: "",
      },
      {
        features1: "",
        features2: "",
        features3: "",
      },
    ],
  },
  {
    title: "3. Registration of complaints",
    desc: [
      {
        heading: "",
        points: [
          "3.1. Customers may register complaints through email: <a   style='color:blue' href= 'mailto:customercare@tatapayments.com'>customercare@tatapayments.com</a>",
          "3.2.  Complaints received through the above channel shall be bifurcated into different categories (for example, technical issues, settlement and refund issues, transaction related queries, chargeback issues, etc.).",
        ],
      },
      
    ],
    tableData1: false,
    tableData: [
      {
        features1: "",
        features2: "",
        features3: "",
      },
      {
        features1: "",
        features2: "",
        features3: "",
      },
    ],
  },
  {
    title: "4. Tracking and resolution of complaints",
    desc: [
      {
        heading: "",
        points: [
          "4.1. Each complaint shall be assigned a unique reference number which shall be shared with the customer for future reference and for monitoring purpose.",
          "4.2. Acknowledgement: All complaints received shall be acknowledged within 24 (twenty-four) hours by an immediate system generated response. The Turn Around Time (TAT) or expected time for resolution will also be communicated to the merchant.",
          "4.3. Resolution: The customer service team shall initiate follow up queries (if needed) within 48 (forty-eight) hours of complaint being registered. The customer will be kept informed on the progress / status of the complaint on a periodic basis till such time that the complaint is not resolved.",
          "4.4. Escalation: In case a response is not received within the specified time at any level or if the customer is unsatisfied with the response received from the Company, the complaint may be escalated as per the matrix given below:",
        ],
      },
    ],
    tableData1: true,
    tableData: [[
      {
        
        "Escalation Level": "Level I",
        "Response Time": "3 (three) business Days",
        "Contact Details": "<a   style='color:blue' href='mailto:customercare@tatapayments.com' >customercare@tatapayments.com</a>",
       
      },
      {
        "Escalation Level": "Level II",
        "Response Time": "5 (five) business Days",
        "Contact Details": "<a   style='color:blue' href= 'mailto:escalations@tatapayments.com'>escalations@tatapayments.com</a>",
      },
      {
        "Escalation Level": "Level III",
        "Response Time": "5 (five) business Days",
        "Contact Details": "<a   style='color:blue' href= 'mailto:grievances@tatapayments.com'>grievances@tatapayments.com</a>",
      },
      {
        "Escalation Level": "Level IV",
        "Response Time": "The Customer and the Merchant can approach the Ombudsman in case appropriate resolution is not received at previous levels within 30 (thirty) days in line with RBI Guidelines - Integrated Ombudsman Scheme, 2021. (https://cms.rbi.org.in)",
        colSpan: {
          "Escalation Level": 1,
          "Response Time": 2,
          "Contact Details": 0
        }
      },
    ]],
  },
  {
    title:  "5. Liability of customers in case of unauthorized electronic payment transactions in Prepaid Payment Instruments (PPI)",
    desc: [
      {
        heading: "",
        points: [
         
"TPL will setup processes for determining the Customers’ liability in unauthorized electronic payment transactions resulting in debit against their PPIs including processes and systems to enable a customer for reporting lost cards or corresponding credentials and unauthorized transactions."          
,"(i)	Customers shall be advised to keep their PPI and its credentials secure at all times and not share it with third parties. In case the Customer believes that the credentials have been compromised or resulted into misuse of the instrument, they can reach out to the Customer support with a request to block the card / regenerate the credentials. The Company shall take the request and block the card subject to adequate verification. However, the Company shall only reissue the card on successful submission of ownership of the card by the Customer"          
,"(ii)	The Company shall provide Customers with 24x7 access via website/ SMS/ e-mail/ a dedicated toll-free helpline for reporting unauthorized transactions that have taken place and/or loss or theft of the PPI."        
,"(iii)	In addition, a direct link for reporting unauthorized electronic payment transactions shall be provided by the Company on mobile application / website."          
,"(iv)	The Company shall provide the details of the Customer grievance policy in regard to Customers’ liability to all Customers at the time of issuing the PPI. In accordance and subject to RBI guidelines vide DPSS.CO.PD No 1417/02.14006/2018-19 dated January 04, 2019.  The Customer’s liability arising out of an unauthorized payment transaction will be limited to:"          
        ],
      },
      
    ],
    desc2: [
      {
        heading: "",
        points: ["# The number of days mentioned above shall be counted excluding the date of receiving the communication from the non-bank PPI issuer.",
          "The Company shall ensure that a complaint is resolved and liability of the Customer, if any, established within such time not exceeding 90 days from the date of receipt of complaint, and the Customer is compensated as per provisions above. In case the Company is unable to resolve the complaint or determine the Customer liability, if any, within 90 days, the amount as prescribed above shall be paid to the Customer, irrespective of whether the negligence is on the part of Customer or otherwise."
        ]
      }
    ],
    tableData1: true,
    tableData: [[
      {
        
        "SI.no.": "1",
        "Particulars": "Contributory fraud / negligence / deficiency on part of the company irrespective of whether or not the transaction is reported by the customer",
        "Maximum Liability of Customer": "Zero",
       
      },
      {
        "SI.no.": "2",
        "Particulars": "Third party breach where the deficiency lies neither with the company nor with the Customer but lies elsewhere in the system, and the Customer notifies the company regarding the unauthorized payment transaction. The per transaction Customer liability in such cases will depend on the number of days lapsed between the receipt of transaction communication by the Customer from the company and the reporting of unauthorized transaction by the Customer to the company",
        "Maximum Liability of Customer": "",
      },
      {
        "SI.no.": "",
        "Particulars": "i. Within three days #",
        "Maximum Liability of Customer": "Zero",
      },
      { "SI.no.": "",
        "Particulars": "ii. Within four to seven days #",
        "Maximum Liability of Customer": "Transaction value or ₹ 10,000/- per transaction, whichever is lower"},
        { "SI.no.": "",
          "Particulars": "iii. Beyond seven days #",
          "Maximum Liability of Customer": "As per company’s policy",},
      {
        "SI.no.": "3",
        "Particulars": "In cases where the loss is due to negligence by a Customer, such as where he / she has shared the payment credentials, the Customer will bear the entire loss until he / she reports the unauthorised transaction to the company. Any loss occurring after the reporting of the unauthorized transaction shall be borne by the company.",
       
        colSpan: {
          "SI.no.": 1,
          "Particulars": 2,
          "Maximum Liability of Customer": 0
        }
      },
    ]],
  },
  // {
  //   title: "Liability of customers in case of unauthorized electronic payment transactions in Prepaid Payment Instruments (PPI)",
  //   desc: [
  //     {
  //       heading: "",
  //       points: [
  //         "TPL will setup processes for determining the Customers' liability in unauthorized electronic payment transactions resulting in debit against their PPIs including processes and systems to enable a customer for reporting lost cards or corresponding credentials and unauthorized transactions.",
  //         "(i) Customers shall be advised to keep their PPI and its credentials secure at all times and not share it with third parties. In case the Customer believes that the credentials have been compromised or resulted into misuse of the instrument, they can reach out to the Customer support with a request to block the card / regenerate the credentials. The Company shall take the request and block the card subject to adequate verification. However, the Company shall only reissue the card on successful submission of ownership of the card by the Customer",
  //         "(ii) The Company shall provide Customers with 24x7 access via website/ SMS/ e-mail/ a dedicated toll-free helpline for reporting unauthorized transactions that have taken place and/or loss or theft of the PPI.",
  //         "(iii) In addition, a direct link for reporting unauthorized electronic payment transactions shall be provided by the Company on mobile application / website.",
  //         "(iv) The Company shall provide the details of the Customer grievance policy in regard to Customers' liability to all Customers at the time of issuing the PPI. In accordance and subject to RBI guidelines vide DPSS.CO.PD No 1417/02.14006/2018-19 dated January 04, 2019. The Customer's liability arising out of an unauthorized payment transaction will be limited to:",
  //         "(v) The Company shall ensure that a complaint is resolved and liability of the Customer, if any, established within such time not exceeding 90 days from the date of receipt of complaint, and the Customer is compensated as per provisions above. In case the Company is unable to resolve the complaint or determine the Customer liability, if any, within 90 days, the amount as prescribed above shall be paid to the Customer, irrespective of whether the negligence is on the part of Customer or otherwise.",
  //       ],
  //     },
  //   ],
  //   tableData1: true,
  //   tableData: [[
  //     {
  //       "SI.no.": "1",
  //       "Particulars": "Contributory fraud / negligence / deficiency on part of the company irrespective of whether or not the transaction is reported by the customer",
  //       "Maximum Liability of Customer": "Zero",
  //     },
  //     {
  //       "SI.no.": "2",
  //       "Particulars": "Third party breach where the deficiency lies neither with the company nor with the Customer but lies elsewhere in the system, and the Customer notifies the company regarding the unauthorized payment transaction. The per transaction Customer liability in such cases will depend on the number of days lapsed between the receipt of transaction communication by the Customer from the company and the reporting of unauthorized transaction by the Customer to the company",
  //       "Maximum Liability of Customer": "",
  //     },
  //     {
  //       "SI.no.": "",
  //       "Particulars": "i. Within three days #",
  //       "Maximum Liability of Customer": "Zero",
  //     },
  //     {
  //       "SI.no.": "",
  //       "Particulars": "ii. Within four to seven days #",
  //       "Maximum Liability of Customer": "Transaction value or ₹ 10,000/- per transaction, whichever is lower",
  //     },
  //     {
  //       "SI.no.": "",
  //       "Particulars": "iii. Beyond seven days #",
  //       "Maximum Liability of Customer": "As per company’s policy",
  //     },
  //     {
  //       "SI.no.": "3",
  //       "Particulars": "In cases where the loss is due to negligence by a Customer, such as where he / she has shared the payment credentials, the Customer will bear the entire loss until he / she reports the unauthorised transaction to the company. Any loss occurring after the reporting of the unauthorized transaction shall be borne by the company.",
       
  //       colSpan: {
  //         "SI.no.": 1,
  //        "Particulars": 2,
  //        "Maximum Liability of Customer": 0
  //       }
  //     },
  //   ]],
  // },
  {
    title: "6. Redressal mechanism for failed transactions",
    desc: [
      {
        heading: "",
        points: [
          "6.1. Failed transaction grievances shall be resolved in accordance with the Reserve Bank of India - Turn Around Time (TAT) and customer compensation for failed transactions using authorised Payment Systems dated September 20, 2019 (“TAT Guidelines”):",
        ],
      },
    ],
    tableData1: true,
    tableData: [
      [ {
      "S. No.": "I",
      "Description of the incident": "II",
      "Timeline for auto reversal": "III",
      "Compensation payable":"IV"
    },
    {
      "S. No.": "1",
      "Description of the incident": "Card Transaction",
     
      colSpan: {
        "S. No.": 1,
        "Description of the incident": 3,
        "Timeline for auto reversal": 0,
        "Compensation payable": 0,
      }

    },
    {
      "S. No.": "a",
      "Description of the incident": "Point of Sale (PoS) (Card Present) including Cash at PoS",
      "Timeline for auto reversal": "Auto-reversal within T + 5 days.",
      "Compensation payable":"INR 100 per day of delay beyond T + 5",
      colSpan: {
        "S. No.": 1,
        "Description of the incident": 1,
        "Timeline for auto reversal": 1,
        "Compensation payable":1,
      }
    },
    {
      "S. No.": "",
      "Description of the incident": "Account debited but confirmation not received at merchant location i.e., charge-slip not generated.",
      "Timeline for auto reversal": "",
      "Compensation payable":"",
      colSpan: {
        "S. No.": 1,
        "Description of the incident": 1,
        "Timeline for auto reversal": 1,
        "Compensation payable":1,
      }
    },
    {
      "S. No.": "b",
      "Description of the incident": "Card Not Present (CNP) (e-commerce)",
      
      colSpan: {
        "S. No.": 1,
        "Description of the incident": 3,
        "Timeline for auto reversal": 0,
        "Compensation payable":0,
      }
    },
    {
      "S. No.": "2",
      "Description of the incident": "Immediate Payment System (IMPS)",
    
      colSpan: {
        "S. No.": 1,
        "Description of the incident": 3,
        "Timeline for auto reversal": 0,
        "Compensation payable":0,
      }
    },
    {
      "S. No.": "a",
      "Description of the incident": "Account debited but the beneficiary account is not credited.",
      "Timeline for auto reversal": "If unable to credit to beneficiary account, auto reversal (R) by the Beneficiary bank latest on T + 1 day.",
      "Compensation payable":"INR 100 per day if delay is beyond T + 1 day." ,
      colSpan: {
        "S. No.": 1,
        "Description of the incident": 1,
        "Timeline for auto reversal": 1,
        "Compensation payable":1,
      }
    },
    {
      "S. No.": "3",
      "Description of the incident": "Unified Payments Interface (UPI)",
     
       colSpan: {
        "S. No.": 1,
        "Description of the incident": 3,
        "Timeline for auto reversal": 0,
        "Compensation payable":0,
      }
    },
    {
      "S. No.": "a",
      "Description of the incident": "Account debited but the beneficiary account is not credited (transfer of funds).",
      "Timeline for auto reversal": "If unable to credit the beneficiary account, auto reversal (R) by the Beneficiary bank latest on T + 1 day.",
      "Compensation payable":"INR 100 per day if delay is beyond T + 1 day." ,
       colSpan: {
        "S. No.": 1,
        "Description of the incident": 1,
        "Timeline for auto reversal": 1,
        "Compensation payable":1,
      }
    },
    {
      "S. No.": "b",
      "Description of the incident": "Account debited but transaction confirmation not received at merchant location (payment to merchant).",
      "Timeline for auto reversal": "Auto-reversal within T + 5 days.",
      "Compensation payable":"INR 100 per day if delay is beyond T + 5 days." ,
       colSpan: {
        "S. No.": 1,
        "Description of the incident": 1,
        "Timeline for auto reversal": 1,
        "Compensation payable":1,
      }
    },
    {
      "S. No.": "4",
      "Description of the incident": "Prepaid Payment Instruments (PPIs) – Cards / Wallets",
     
       colSpan: {
        "S. No.": 1,
        "Description of the incident": 3,
        "Timeline for auto reversal": 0,
        "Compensation payable":0,
      }
    },],[
      // {
      //   "S. No.": "",
      //   "Description of the incident": "",
      //   "Timeline for auto reversal": "",
      //   "Compensation payable":"",
      //   colSpan: {
      //     "S. No.": 0,
      //     "Description of the incident": 0,
      //     "Timeline for auto reversal": 0,
      //     "Compensation payable":0,
      //   }

      // },
    
      {
        "S. No.": "a",
        "Description of the incident": "Off-Us transaction, The transaction will ride on UPI, card network, IMPS, etc. as the case may be. The TAT and compensation rule of respective system shall apply.",
        colSpan: {
          "S. No.": 1,
          "Description of the incident": 3,
          "Timeline for auto reversal": 0,
          "Compensation payable":0,
        }

      },
      {
        "S. No.": "b",
        "Description of the incident": "On-Us transaction Beneficiary’s PPI not credited. PPI debited but transaction confirmation not received at merchant location.",
        "Timeline for auto reversal": "Reversal effected in Remitter’s account within T + 1 day.",
        "Compensation payable":"INR 100 per day if delay is beyond T + 1 day.",
        colSpan: {
          "S. No.": 1,
          "Description of the incident": 1,
          "Timeline for auto reversal": 1,
          "Compensation payable":1,
        }

      }
    
      
    ]]
  },
  {
    title: "7. Customer Service and Awareness",
    desc: [
      {
        heading: "",
        points: [
          "The company shall setup adequate processes to create sufficient awareness and educate the Customers about the secure use of the PPIs:",
          "(i) The Company shall provide an option for the Customers to generate / receive account statements",
          "(ii) The Company shall be responsible for addressing all Customer service aspects related to all PPIs (including co-branded PPIs) issued by them as well as their agents.",
          "(iii) The Company shall maintain a log of all transactions undertaken using the PPIs for at least ten years.",
        ],
      },
    ],
    tableData1: false,
    tableData: [
      {
        features1: "",
        features2: "",
        features3: "",
      },
      {
        features1: "",
        features2: "",
        features3: "",
      },
    ],
  },
  {
    title: "8. Reporting",
    desc: [
      {
        heading: "",
        points: [
          "The Company shall provide a report on the complaints received and action taken in the manner prescribed by RBI on a quarterly basis by the 10th of the following month to the Regional Office of DPSS, RBI.",
          "8.1. The following reports shall be submitted to senior management / Board of our Company on a periodic basis:",
          "(i) Statement of all complaints received along with an analysis of the complaints;",
          "(ii) Root cause analysis of the top 5 (five) complaints category;",
          "(iii) Results of annual survey of customer satisfaction;",
          "(iv) Gaps in implementation of code of conduct towards merchants;",
          "(v) Changes required in products/ services/ procedures to improve customer service;",
          "(vi) Position of complaints against the Company with Banking Ombudsman (BO) and consumer courts (if any);",
          "(vii) Any adverse reports in media with respect to customer service of the Company; and",
          "(viii) Any customer service impact due to unplanned downtime of IT systems or failure of business continuity plans.",
        ],
      },
    ],
    tableData1: false,
    tableData: [
      {
        features1: "",
        features2: "",
        features3: "",
      },
      {
        features1: "",
        features2: "",
        features3: "",
      },
    ],
  },
  {
    title: "9. Periodic review and evaluation",
    desc: [
      {
        heading: "",
        points: [
          "9.1. The Board of our Company is committed to supporting this Policy.",
          "9.2. Our Company reserves the right to vary and/or amend the terms of this Policy from time to time.",
        ],
      },
    ],
    tableData1: false,
    tableData: [
      {
        features1: "",
        features2: "",
        features3: "",
      },
      {
        features1: "",
        features2: "",
        features3: "",
      },
    ],
  },
];
function getIndexWithMostKeys(arr) {
  // Use `reduce` to find the index of the object with the most keys.
  return arr.reduce((maxIndex, obj, index, array) => {
    const currentKeyCount = Object.keys(obj).length;
    const maxKeyCount = Object.keys(array[maxIndex]).length;
    return currentKeyCount > maxKeyCount ? index : maxIndex;
  }, 0); // Start with index 0 as the initial maximum
}
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
  const getColSpan = (row, currentIndex) => {
    let span = 1;
    for (let i = currentIndex + 1; i < Object.keys(row).length; i++) {
      if (row[`features${i + 1}`]) break;
      span++;
    }
    return span;
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
                            dangerouslySetInnerHTML={{ __html: point }}
                          >
                            
                          </p>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}

{item?.tableData1 && (<div className="mx-[0px] lg:mx-[62px] rounded-[16px] overflow-hidden">
   {item?.tableData.map((table,i)=>{
    return(
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
          {Object.keys(table[getIndexWithMostKeys(table)] || {}).filter(key => key !== 'colSpan').map((key, index) => (
            <th
              key={key}
              style={{
                border: "1px solid #78787D1F",
                textAlign: "left",
                padding: "16px 12px",
              }}
            >
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody style={{ backgroundColor: "#FDFDFD" }}>
        {table.map((row, rowIndex) => (
          <tr key={rowIndex} className="text-[12px] leading-[16px]">
            {Object.entries(row).filter(([key]) => key !== 'colSpan').map(([key, value], colIndex) => (
              <td
                key={key}
                style={{
                  border: "1px solid #78787D1F",
                  padding: "14px 16px",
                }}
                colSpan={row.colSpan?.[key] || 1}
                dangerouslySetInnerHTML={{__html:value}}
              >
                
              </td>
            ))}
          </tr>
        ))}
      </tbody>
     </table>
    )


   })}
             
            
            
            </div>)} 
            {item?.desc2?.map((list, listIndex) => (
  <div key={listIndex}>
    {list?.heading && (
      <div className="text-[16px] lg:text-[18px] leading-[20px] lg:leading-[24px] font-semibold">
        {list?.heading}
      </div>
    )}
    <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
      {list?.points?.map((point, pointIndex) => (
        <p
          key={pointIndex}
          className="text-[14px] lg:text-[14px] leading-[20px] lg:leading-[20px] py-[10px]"
          dangerouslySetInnerHTML={{ __html: point }}
        >
        </p>
      ))}
    </ul>
  </div>
))}

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
