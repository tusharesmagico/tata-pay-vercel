import React from "react";
import Hero from "./Hero";
import Policy from "./Policy";
import Financial from "./Financial";
export const metadata = {
  title: "Tata Pay",
  description: "Tata pay",
};

const Resources = () => {
  return (
    <div>
     
      <Hero />
     
      <Policy />
      <Financial />
    </div>
  );
};

export default Resources;
