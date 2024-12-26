"use client"
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import PolicyStatement from "./PolicyStatement";
import LanguageToggle from "./toggle"
import Hero from "./Hero"
// export const metadata = {
//   title: "Tata Pay",
//   description: "Tata pay",
// };

const page = () => {
  const [language, setLanguage] = useState('english');
  const [isToggleVisible, setIsToggleVisible] = useState(true);
  return (
    <div>
       


       <div className='h-[72px] max-w-[1080px]'>
     
       </div>
       <div className='max-w-[1080px] m-auto flex justify-end pt-[30px] '>
       <LanguageToggle
        onLanguageChange={setLanguage} 
        visible={isToggleVisible} 
      />
       </div>
        
      
      <Hero />
      <div className="max-w-[1440px] m-auto">
     
        <PolicyStatement lang={language} />

      </div>
    </div>
  );
};

export default page;
