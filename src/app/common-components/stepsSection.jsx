"use client"
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import GradientHeaderText from "./GradientHeaderText";
import HeaderText from "./HeaderText";

const BillPaymentSteps = ({ steps, heading, subHeading }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoChanging, setIsAutoChanging] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isAutoChanging) {
      intervalRef.current = setInterval(() => {
        setActiveStep((prevStep) => (prevStep + 1) % steps.length);
      }, 3000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isAutoChanging]);

  const handleStepClick = (index) => {
    setActiveStep(index);
    setIsAutoChanging(false);
    clearInterval(intervalRef.current);
  };

  return (
    <div className="px-[20px] my-[32px] md:my-[60px] relative  lg:px-[150px] max-w-[700px] mx-auto  sm:max-w-[1440px] ">
      <div className="mb-[0px] sm:w-[50%]  sm:mb-[28px]">
        <GradientHeaderText text={heading} />
        <div className={`mt-[8px]`}>
          <HeaderText text={subHeading} />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row   items-center justify-between   ">
        <div className="w-full sm:w-[50%] space-y-6 ">
          {/* <h1 className="text-3xl font-bold text-blue-600"> {heading} </h1>
        <h2 className="text-4xl font-bold text-gray-800">{subHeading}</h2> */}
          <div className=" sm:space-y-6  lg:space-y-8 hidden sm:block">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`
                  sm:w-[100%] py-[8px] md:py-6  px-0
                 border-gray-200
                rounded-[32px] 
                transition-all duration-300 ease-in-out
                ${
                  index === activeStep
                    ? "border-t border-l border-r transform translate-x-5 scale-105 shadow-lg"
                    : ""
                }
                hover:transform hover:scale-105 hover:shadow-lg
                cursor-pointer
              `}
                onClick={() => handleStepClick(index)}
              >
                <div className="flex items-center pr-[15px] space-x-4">
                  <div className="flex-shrink-0 ml-6">
                    <Image
                      src={step.image}
                      alt={`Step ${index + 1}`}
                      className= " w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]"
                    />
                  </div>
                  <div>
                    <h3 className="md:text-[24px] md:leading-[32px] sm::text-[14px] font-semibold text-gray-800">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full sm:w-[48%] lg:w-[50%] right-[-3%] lg:right-[20px] mt-8 sm:mt-0 lg:absolute xl:top-[-30px]">
        <Image
              src={steps[activeStep].girlImage}
              alt="Woman with smartphone"
              
              className="mx-auto w-[90%] transition-opacity duration-300 hidden sm:block"
            />
          <div style={{ boxShadow: '0px 1px 2px 0px #A6A6A64D' }}  className="sm:hidden w-full  rounded-xl p-[20px]">
            <Image
              src={steps[activeStep].girlImage}
              alt="Woman with smartphone"
             
              className="mx-auto transition-opacity duration-300 sm:hidden"
            />
            <p className="text-center text-[#1A1A1A] block sm:hidden text-[16px] font-bold ">
              {" "}
              {steps[activeStep].title}
            </p>
            <p className="text-center block sm:hidden text-[14px] text-[#666666]">
              {" "}
              {steps[activeStep].description}
            </p>
          </div>
          <div>
            <div className="  flex justify-around items-center  sm:hidden mt-[16px]">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`
        
        transition-all duration-300 ease-in-out
        ${index === activeStep ? "w-[100px] h-[100px]" : ""}
        cursor-pointer
      `}
                  onClick={() => handleStepClick(index)}
                >
                  <div className="flex items-center justify-end">
                    <div className="flex-shrink-0">
                      <div
                        className={`${
                          index === activeStep
                            ? "w-[100px] h-[100px]"
                            : "w-[48px] h-[48px]"
                        }`}
                      >
                        <Image src={step.image} alt={`Step ${index}`} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillPaymentSteps;
