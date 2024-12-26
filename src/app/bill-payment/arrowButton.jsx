import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const TATANeuButton = ({ link }) => {
  return (
    <a href={link} target="_blank">
      <button className="w-full sm:w-auto lg:min-w-[361px]  relative flex z-10 mt-[-63px] justify-center sm:mt-[48px] bg-black text-white rounded-[60px] p-[7px] overflow-hidden">
        <span className="text-[16px] pl-[20px] md:pl-[0px] sm-text-[13px] lg:pl-[5px] lg:text-[24px] font-semibold leading-[24px] lg:leading-[32px] my-auto flex-grow text-center">
          Experience on Tata Neu
        </span>
        <div className="bg-white rounded-full p-[10px] lg:p-[17px] ml-[12px]">
          <IoIosArrowRoundForward size={20} className="text-black" />
        </div>
      </button>
    </a>
  );
};

export default TATANeuButton;
