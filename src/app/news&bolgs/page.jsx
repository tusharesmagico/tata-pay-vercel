"use client"
import React, { useState } from "react";
import NewsSection from "./newsSection";
import HeroNews from "./Hero"
import GradientHeaderText from "../common-components/GradientHeaderText";
import HeaderText from "../common-components/HeaderText";
import ActiveCardOptions from "../common-components/ActiveCardOptions";
import YearFilter from"./filter"
const NewsAndBlogs = () => {

  const policyOption = ["All", "News articles", "Blogs"];
  const [activePolicy, setActivePolicy] = useState("");
  return (<div className="mt-[40px] sm:mt-[60px]">
   
<HeroNews/>
   
    <div className="  max-w-[1440px] mx-auto px-[16px] lg:px-[149px] pb-[64px]">
      <div className="mb-[24px] mt-[100px] ">
      <GradientHeaderText text="Latest" />

<HeaderText text="News articles & blogs" />
      </div>
      <div className="flex justify-between">
      <ActiveCardOptions
        option={policyOption}
        setActive={setActivePolicy}
        active={activePolicy}
      />
      <YearFilter/>
      </div>
     
    <NewsSection />
    </div>
    
  </div>)
};

export default NewsAndBlogs;
