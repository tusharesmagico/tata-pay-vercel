import React from "react";
import { LiaDownloadSolid } from "react-icons/lia";

const FinancialCard = ({ Header, Description, link }) => {
  const handleDownload = (event) => {
    event.stopPropagation(); // Prevent the click from triggering the parent link
    const a = document.createElement('a');
    a.href = link;
    a.download = ''; // Use an empty string to indicate a download
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block p-[20px] rounded-[16px] w-[310px] sm:w-[360px] border-[#78787D3D] border-[1px] border-solid">
      <div className="text-[16px]  md:text-[18px] leading-[32px] font-semibold text-[#1A1A1A]">
        {Header}
      </div>
      <div className="text-[#696868] text-[14px] md:text-[14px] leading-[20px] mt-[4px]">
        {Description}
      </div>
      <div onClick={handleDownload} className="text-[#8800EC] flex gap-[8px] items-center text-[14px] md:text-[14px] leading-[20px] font-semibold mt-[20px] cursor-pointer">
        Download <LiaDownloadSolid />
      </div>
    </a>
  );
};

export default FinancialCard;
