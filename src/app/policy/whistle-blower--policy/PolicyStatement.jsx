"use client";
import React, { useState } from "react";
import Accordion from "../../common-components/Accordion";

const policyData = [
  {
    title: "APPLICABILITY",
    desc: [
      {
        heading: "",
        points: [
          "This Whistle Blower Policy ('Policy') is applicable to all Employees and Directors of Tata Payments Limited ('TPL' or 'Company')."
        ]
      }
    ]
  },
  {
    title: "INTRODUCTION",
    desc: [
      {
        heading: "",
        points: [
          "The Company believes in the conduct of its affairs in a fair and transparent manner by adopting the highest standards of professionalism, honesty, integrity, and ethical behavior. Towards this, the Company has adopted the Tata Code of Conduct (“Code”), which lays down the principles and standards that govern the actions of the Company, its Directors, and Employees. A copy of the aforesaid Code is available on the HRMS of the Company.",
"Any actual or potential violation of the Code or violation of the applicable laws would be a matter of serious concern for the Company. This Policy has been formulated to provide a vigil mechanism to empower Directors and Employees to report any actual or potential illegal and unethical practices in violation of the law of the land (“Violation”) without fear of retaliation."
        ]
      }
    ]
  },
  {
    title: "PURPOSE",
    desc: [
      {
        heading: "",
        points: [
          "This Policy:",
          "a. Provides a platform and mechanism for the Employees and Directors to voice genuine concerns or grievances about unprofessional conduct without fear of reprisal.",
          "b. It provides an environment that promotes responsible and protected whistle blowing. It reminds Employees and Directors about their duty to report any suspected violation of any law that applies to the Company and any suspected violation of the Code."
        ]
      }
    ]
  },
  {
    title: "DEFINITIONS",
    desc: [
      {
        heading: "",
        points: [
          "The definitions of some of the key terms used in this policy are given below. Capitalized terms not defined herein shall have the meaning assigned to them under the Code.",
          "a. 'Director' means a director on the Board of TPL.",
          "b. 'Employee' includes every person in employment of TPL, regardless of geographic location, and includes consultants, associates, interns and trainees of the Company.",
          "c. 'Protected Disclosure' is the communication of Violation, made in good faith by the Whistle Blower and sent over email or as a hard copy in terms of this Policy, disclosing verifiable information and evidence of the Violation.",
          "d. 'Subject(s)' is the Employee(s) or Director(s) against or in relation to whom a Violation has been reported, or evidence gathered during an investigation.",
          "e. 'Whistle Blower' is any Employee or Director reporting a Violation under the Policy."
        ]
      }
    ]
  },
  {
    title: "SCOPE",
    desc: [
      {
        heading: "",
        points: [
          "a. Anybody with knowledge of and having verifiable information or material about violation or indulging in any illegal or unethical acts by any Employee or Director of the Company, is entitled to make a Protected Disclosure in terms of this Policy.",
          "b. The Whistle Blower's role is that of a reporting party with reliable and verifiable information about illegal or unethical acts committed by Subject(s). A Whistle Blower should not act on their own in conducting any investigative activities, nor prescribe any corrective or remedial action. The Whistle Blower shall have no automatic right to participate in any investigative activities, other than when requested to do so during the investigation process."
        ]
      }
    ]
  },
  {
    title: "PROTECTED DISCLOSURE",
    desc: [
      {
        heading: "",
        points: [
          "The process is designed to offer protection to the Whistle Blower provided that the disclosure made / concern raised / allegations made by a Whistle Blower is in good faith and the alleged action or non-action, constitutes a breach of what is laid down in the Company or the Code."
        ]
      }
    ]
  },
  {
    title: "REPORTING A PROTECTED DISCLOSURE",
    desc: [
      {
        heading: "",
        points: [
          "a. It is recommended that any individual who wishes to report, do so after gathering adequate facts/data to substantiate the complaint and not complain merely based on hearsay or rumor. This also means that no action should be taken against the Whistle Blower, if the complaint was made in good faith, but no misconduct was confirmed on subsequent investigation. A Whistle Blower is encouraged to report any violation at <a   style='color:blue' href= 'mailto:whistle.blower@tatadigital.com'>whistle.blower@tatadigital.com</a>.",
          "b. Hard copies of the Protected Disclosure may also be sent to: whistle.blower@tatadigital.com.",
          "c. The Protected Disclosure may be in English, Hindi or the official language of the place of employment/business of the Whistle Blower. It should be factual and should contain as much specific information as possible to allow for proper assessment of the nature and extent of the Violation.",
          
          "d. To facilitate an effective and expeditious investigation and for availing the protection under this Policy, the Whistle Blower (s) must identify themselves in the Protected Disclosure. The identity of the Whistle Blower will be kept confidential to the extent possible given the legitimate needs of law and the investigation.",
          "e. A Whistle Blower who provides their communication details will receive an acknowledgment of receipt of the Protected Disclosure."
        ]
      }
    ]
  },
  {
    title: "INVESTIGATION",
    desc: [
      {
        heading: "",
        points: [
          "a. All Protected Disclosures reported under this Policy will be sent for investigation to a committee comprising of the Chief Executive Officer, Chief Financial Officer, Company Secretary, Chief Legal Officer and a Director nominated by the board of Directors of the Company ('Whistle Blower Committee'). Any 3 (three) such members shall constitute the quorum for meetings of the Whistle Blower Committee.",
          "b. In exceptional cases, the Company may refer the Protected Disclosure to an external investigator.",
          "c. The investigation shall be normally completed within 45 days of the receipt of the Protected Disclosure.",
          "d. The decision to conduct an investigation is not an acceptance of the accusation and is to be treated as part of the neutral fact-finding process.",
          "e. Decisions taken by the Whistle Blower Committee, including interpretation of any of the clauses of this Policy, shall be final and binding on all concerned."
        ]
      }
    ]
  },
  {
    title: "DEALING WITH ANONYMITY",
    desc: [
      {
        heading: "",
        points: [
          "A Whistle Blower may choose to keep his/her identity anonymous. In such cases, the complaint should be accompanied with strong evidence and data."
        ]
      }
    ]
  },
  {
    title: "RIGHT AND OBLIGATION OF THE SUBJECT",
    desc: [
      {
        heading: "",
        points: [
          "a. The Subject(s) shall:",
          "i).  be normally informed of the allegations at the outset of a formal investigation and have opportunity for providing their inputs during the investigation.",
          "ii). co-operate during the investigation process to the extent that such co-operation will not compromise the protections available under the applicable laws.",
          "iii). not interfere with the investigation, nor withhold, destroy or tamper with any evidence or influence, coach, threaten or intimidate the witness.",
          "iv). have the right to consult with a person or persons of their choice, other than with the investigation team and/or the Whistle Blower.",
          "v). be given the opportunity to respond to material findings contained in an investigation report unless there are compelling reasons not to do so.",
          "b. The identity of the Subject(s) will be kept confidential to the extent possible given the legitimate needs of law and the investigation."
        ]
      }
    ]
  },
  {
    title: "PROTECTION TO WHISTLE BLOWER",
    desc: [
      {
        heading: "",
        points: [
          "a. The Company condemns any kind of discrimination, harassment, victimization, or any other unfair practice against Whistle Blowers. No unfair treatment will be meted out to a Whistle Blower for making a Protected Disclosure under this Policy. To the extent applicable, complete protection will, be given to Whistle Blower against any unfair practice such as retaliation, threat or intimidation or termination/suspension of service/contract, disciplinary action, transfer, demotion, refusal of promotion, or the like including any direct or indirect use of authority to obstruct the Whistle Blower’s right to continue to perform his/her duties/functions including making further Protected Disclosure.",
          "b. Any other employee or director assisting in the said investigation shall also be protected to the same extent as the Whistle Blower.",
          "c. Any violation of the above clauses (a) and (b) may be reported to the Whistle Blower Committee, who shall have it investigated and based on the report of the investigation, recommend suitable action to the management or the Board, as appropriate.",
          "d. The Company will take steps to minimize difficulties which the Whistle Blower may experience as a result of making the Protected Disclosure. Thus, if the Whistle Blower is required to give evidence in the criminal or disciplinary proceedings, the Company will arrange for the Whistle Blower to receive advice about the procedure, etc."
        ]
      }
    ]
  },
  {
    title: "OUTCOME OF INVESTIGATION",
    desc: [
      {
        heading: "",
        points: [
          "a. If the investigation leads to the conclusion that an illegal, improper or unethical act has been committed, appropriate disciplinary or corrective action may be initiated against the Subject(s). The disciplinary action may include wage freeze, suspension, recovery, claw back, termination of employment/contract or any other punitive legal action.",
          "b. It is clarified that any disciplinary or corrective action initiated against the Subject(s) as a result of the findings of an investigation pursuant to this Policy shall adhere to the applicable personnel or staff conduct and disciplinary procedures.",
          "c. The progress, the outcome of the investigation and the actions taken may be communicated to the Whistle Blower in such manner as may be determined by the Whistle Blower Committee."
        ]
      }
    ]
  },
  {
    title: "DISQUALIFICATIONS",
    desc: [
      {
        heading: "",
        points: [
          "Protection under this Policy does not mean protection from any action arising out of false or bogus allegations made by a Whistle Blower in the Protected Disclosure knowing it to be false or bogus or with a bad faith intention, or such actions related to or arising from any event/incident or matter totally unconnected with the Protected Disclosure. If a complaint is, after an investigation, proven to be frivolous, malicious, or made with an ulterior intent, the Company shall take appropriate disciplinary or legal action against the concerned Whistle Blower."
        ]
      }
    ]
  },
  {
    title: "AMENDMENT",
    desc: [
      {
        heading: "",
        points: [
          "TPL reserves its right to amend or modify this Policy in whole or in part, at any time without assigning any reason whatsoever. The revised Policy shall be uploaded on TPL’s website as and when amended."
        ]
      }
    ]
  }
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
                            dangerouslySetInnerHTML={{ __html: point }}
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
