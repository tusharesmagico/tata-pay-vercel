import React from "react";
import { MdDone } from "react-icons/md";

const ActiveCardOptions = ({ option, setActive, active }) => {
  return (
    
    <div style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="w-[100%] overflow-x-auto" >
      <div className="flex gap-[16px] min-w-[600px]  " >
      {option?.map((item) => {
        return (
          <div
            className={`text-[12px] md:text-[16px] font-semibold flex  items-center gap-[8px] justify-center  cursor-pointer
             ${active === item ? "border-[#8800EC]" : "border-[#78787D66]"} ${
              active === item ? "text-[#8800EC]" : "text-[#474747]"
            } border-[1px] border-solid px-[12px] py-[9px] rounded-[8px]  sm:rounded-[12px]`}
            onClick={() => setActive(item)}
          >
            {active === item && <MdDone />}
            {item}
          </div>
        );
      })}
      </div>
    
    </div>
  );
};

export default ActiveCardOptions;
