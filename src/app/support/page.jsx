import React from 'react'
import { Section1 } from './Section1'
import Section3 from './Section3'
import GrievanceSupport from './Section2'


import HeroSupport from "./Hero"

export const metadata = {
  title: "Tata Pay",
  description: "Tata pay",
};

const Support = () => {
  return (
    <div className='mt-[40px] sm:mt-[60px]' >
  <HeroSupport/>
 <div className=''>
 <Section1 />
 <GrievanceSupport />
 <Section3 />

 </div>

    </div>
  )
}

export default Support