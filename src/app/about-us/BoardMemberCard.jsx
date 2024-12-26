import React from "react";
// import memberImg from "../assets/img/memberImg.png";
import linkedin from "../assets/svg/linkedin.svg";
import x from "../assets/svg/x.svg";
import Image from "next/image";
import styles from "./index.module.css";
const BoardMemberCard = ({ data }) => {
  return (
    <div
      className={`border-[1px] relative min-h-[200px] p-[32px] lg:min-h-[200px]  max-w-[328px] sm:max-w-[359px] lg:max-w-[320px] xl:max-w-[359px] bg-[#FDFDFD] border-[rgba(120,118,122,0.24)] border-solid rounded-[16px] overflow-hidden ${styles.boardMember}`}
     
    >      
      <div className="mb-[16px]" >
      <Image  src={data?.img} className="h-[98px] rounded-[60px] w-[170px]" alt="img" />
      </div>
      
      
      <div className=" flex-1 flex flex-col justify-between">

        <div className="mb-[0px]">
          <div className="text-[16px] lg:text-[18px] font-proxima-nova-semibold leading-[24px] lg:leading-[28px] text-[#1A1A1A]">
            {data?.name}
          </div>
          <div className="text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] text-[#474747] mt-[4px]">
            {data?.designation}
          </div>
          <div className="text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] text-[#000000] mt-[16px]">
            {data?.description}
          </div>
        </div>
       
 {/* <a href={data.linkden} target="_blank">
 <Image src={linkedin} alt="icon" />

 </a> */}
          

          {/* <Image src={x} alt="icon" /> */}
          {/* <div className="flex absolute bottom-[16px] gap-2">
        </div> */}
      </div>
    </div>
  );
};

export default BoardMemberCard;
