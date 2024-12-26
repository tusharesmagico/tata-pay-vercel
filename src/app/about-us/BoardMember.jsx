import React from "react";
import BoardMemberCard from "./BoardMemberCard";
import memberImg from "../assets/img/memberImg.png";
import memberImg1 from "../assets/img/memberImg1.png";
import memeberimg2 from "../assets/img/PlaceholderImg.png"
import HeaderText from "../common-components/HeaderText";

const memberDetails = [
  {
    img: memberImg,
    name: "Gaurav Hazrati",
    designation: "CEO, Tata Payments",
    description:"",

    linkden:"https://in.linkedin.com/in/gauravhazrati"
  },
  {
    img: memeberimg2,
    name: "Hardeep Singh Guru",
    designation: "CFO, Tata Digital",
    description:"",
    linkden:"https://in.linkedin.com/in/hardeep-singh-guru-93384114"

  },
  {
    img: memberImg1,
    name: "Janaki Naik",
    designation: "CHRO, Tata Digital",
    description:"",
    linkden:"https://in.linkedin.com/in/janaki-naik-3146513"
  },
];

const BoardMember = () => {
  return (
    <div  className=" px-[16px] lg:px-[149px]  lg:max-w-[1440px]  mx-auto mt-[32px] lg:mt-[40px] pb-[32px] lg:pb-[60px]">
      <HeaderText text={"Our board members"} />
      <div className="flex gap-[20px] lg:gap-[30px] flex-wrap xl:flex-nowrap justify-center sm:justify-start mt-[20px] lg:mt-[24px]">
        {memberDetails.map((item) => {
          return <BoardMemberCard data={item} />;
        })}
      </div>
    </div>
  );
};

export default BoardMember;
