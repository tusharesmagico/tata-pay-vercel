import React from "react";
import styles from "./index.module.css";

const GradientHeaderText = ({ text, textCenter = false }) => {
  return (
    <div
      className={`text-[12px] font-proxima-nova-semibold leading-[16px]  uppercase
    lg:text-[16px] lg:leading-[32px] lg:font-proxima-nova-bold tracking-[2px] lg:tracking-[3px] ${
      textCenter ? "text-center" : "text-left"
    }`}
    >
      <span className={`${styles.gradientHeaderText}`}>{text}</span>
    </div>
  );
};

export default GradientHeaderText;
