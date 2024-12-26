import React from "react";

const HeaderText = ({ text, textCenter }) => {
  return (
    <h2
      className={`text-[20px] lg:text-[28px] font-proxima-nova-semibold leading-[28px] lg:leading-[39px] ${
        textCenter ? "text-center" : "text-left"
      } text-[#191825]`}
    >
      {text}
    </h2>
  );
};

export default HeaderText;
