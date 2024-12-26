import React from "react";
import Hero from "./Hero";
import PolicyStatement from "./PolicyStatement";

export const metadata = {
  title: "Tata Pay",
  description: "Tata pay",
};

const page = () => {
  return (
    <div>
      <Hero />
      <div className="max-w-[1440px] m-auto">
        <PolicyStatement />
      </div>
    </div>
  );
};

export default page;
