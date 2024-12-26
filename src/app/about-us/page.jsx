import React from "react";
import Hero from "./Hero";
import styles from "./index.module.css";
import TataPayBanner from "./TataPayBanner";
import BoardMember from "./BoardMember";
import SliderComponent from "../common-components/SliderComponent";
import BoardMemberCard from "./BoardMemberCard";
import FindUsCard from "./FindUsCard";
import mumbai from "../assets/img/mumbai.png";
import banglore from "../assets/img/banglore.png";
import leaderShipImg1 from "../assets/img/leaderShipImg1.png";
import leaderShipImg2 from "../assets/img/leaderShipImg2.png";
import leaderShipImg3 from "../assets/img/leaderShipImg3.png";
import leaderShipImg4 from "../assets/img/leaderShipImg4.png";
import leaderShipImg5 from "../assets/img/leaderShipImg5.png";
import leaderShipImg6 from "../assets/img/leaderShipImg6.png";
import leaderShipImg7 from "../assets/img/leaderShipImg7.png";

import delhi from "../assets/img/delhi.png";
import HeaderText from "../common-components/HeaderText";

const findUsDetails = [
  {
    name: "Global HQ, Mumbai",
    img: mumbai,
    desc: "Tata Payments Limited, Fort house",
    address:
      "221, Dr Dadabhai Naoroji Rd, Borabazar Precinct, Ballard Estate, Fort, Mumbai, Maharashtra 400001",
    email: "contactus@tatapayments.com",
    gradient: "findUsCardMumbai",
  },
  {
    name: "Bangalore",
    img: banglore,
    desc: "Tata Payments Limited, Indiqube Orion",
    address:
      "24th Main Rd, Agara Village, Ist Sector, HSR Layout, Bengaluru, Karnataka 560102",
    email: "contactus@tatapayments.com",
    gradient: "findUsCardBanglore",
  },
  {
    name: "Gurgaon",
    img: delhi,
    desc: "Tata Payments Limited",
    address:
      "Guerrilla Infra Solutions Pvt. Ltd 3rd Floor, Orchid Centre IILM Institute, Sector 53, Gurugram, Haryana, 122022",
    email: "contactus@tatapayments.com",
    gradient: "findUsCardDelhi",
  },
];

const leaderShipDetails = [
  {
    img: leaderShipImg1,
    name: "Gagandeep Singh Arora",
    designation: "Head, PA Business",
  },
  {
    img: leaderShipImg2,
    name: "Anant Jagadeesan",
    designation: "Chief Information Security officer",
  },
  {
    img: leaderShipImg3,
    name: "Yash Bhatt",
    designation: "Head, PPI Business",
  },
  {
    img: leaderShipImg4,
    name: "Ramakrishna Kodati",
    designation: "Head, Business Operations",
  },
  {
    img: leaderShipImg5,
    name: "Rahul Sharma",
    designation: "Principal officer",
  },
  {
    img: leaderShipImg6,
    name: "Sreekanth GS",
    designation: "Head, Technology",
  },
  {
    img: leaderShipImg7,
    name: "Ankit Shreemal",
    designation: "Biz",
  },
];

const AboutUs = () => {
  return (
    <div className="mt-[50px] sm:mt-[60px]">
      <Hero />
      <div className="">
        <div className={`${styles.aboutBg}`}>
          <div className="max-w-[1440px] px-[16px] lg:px-[150px] py-[32px] lg:py-[60px] m-auto">
            <TataPayBanner />
          </div>

          <BoardMember />
        </div>
        {/* <SliderComponent
          initialCards={4}
          isMargin={true}
          isGradientStyle={true}
          primaryText={"Leadership"}
        >
          {leaderShipDetails.map((item, i) => {
            return (
              <div className=" p-[12px] lg:p-[20px]">
                <BoardMemberCard key={i} data={item} />
              </div>
            );
          })}
        </SliderComponent> */}
        <div className="max-w-[1440px] px-[16px] lg:px-[150px] py-[32px] lg:py-[60px] m-auto">
          <HeaderText text={"Find us"} />
          <div className="flex  gap-[24px] lg:gap-[20px] xl:gap-[42px] mt-[24px] flex-wrap justify-start">
            {findUsDetails.map((item) => {
              return <FindUsCard data={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
