import React from "react";
import styles from "./index.module.css";
const HeroNews = () => {
  return (
    <div className={`${styles.bgImg}`}>
      <div
        className={`pl-[16px] pt-[40px] lg:pt-[58px] max-w-[1440px] m-auto lg:pl-[149px] text-[36px] leading-[42px] font-proxima-nova-bold ${styles.heroTextGradient}`}
      >
        News & Blogs
      </div>
    </div>
  );
};

export default HeroNews;
