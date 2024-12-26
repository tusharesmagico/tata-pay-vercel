"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const AutoLogoSliderMobile = ({ 
  data,
  speed = 20,
  imageSize = 48,  // Default size for width and height
  className = "", // Allow additional className props
  margins = {
    base: 30,
    xs: 50,
    sm: 60,
    md: 100
  }
}) => {
  return (
    <div className={`block sm:hidden mt-4 ${className}`}>
      <Marquee
        direction="right"
        speed={speed}
        gradient={false}
        pauseOnHover={false}
      >
        {data.map((item, i) => (
          <div
            key={i}
            className="relative"
            style={{
              width: `${imageSize}px`,
              height: `${imageSize}px`,
              marginRight: `${margins.base}px`, // Dynamic margin-right
            }}
          >
            <Image
              src={item}
              alt="Company logo"
              fill
              className="object-contain"
              priority={i < 5}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default AutoLogoSliderMobile;
