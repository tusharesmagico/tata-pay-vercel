import React, { useState, useRef } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const Accordion = ({
  question = "",

  isOpen,
  handleIsOpen,
  children,
  index,
}) => {
  const contentRef = useRef(null);

  return (
    <div
      className={`p-[16px] lg:p-[32px] rounded-[16px] ${
        isOpen && "bg-[#F4F4F4]"
      } `}
    >
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => handleIsOpen(index)}
      >
        <div
          className={`text-[16px] lg:text-[18px] leading-[24px] lg:leading-[24px] text-[#212121] ${
            isOpen && "font-semibold lg:font-bold"
          }`}
        >
          {question}
        </div>
        <div>
          {isOpen ? (
            <MdKeyboardArrowUp size={24} color="#212121" />
          ) : (
            <MdKeyboardArrowDown size={24} color="#212121" />
          )}
        </div>
      </div>
      <div
        ref={contentRef}
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
