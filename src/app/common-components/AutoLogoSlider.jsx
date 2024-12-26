"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const AutoLogoSlider = ({ 
  data,
  speed = 50,
  imageHeight = 72,
  gradientWidth = 200,
  logoSpacing = 20, // Spacing between logos
}) => {
  return (
    <div className="hidden sm:block relative">
      {/* Left gradient overlay */}
      <div
        className="absolute hidden lg:block top-0 left-0 z-10 h-full pointer-events-none"
        style={{
          width: `${gradientWidth}px`,
          background:
            "linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
        }}
      />

      {/* Right gradient overlay */}
      <div
        className="absolute hidden lg:block top-0 right-0 z-10 h-full pointer-events-none"
        style={{
          width: `${gradientWidth}px`,
          background:
            "linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
        }}
      />

      {/* Marquee container with padding to account for gradients */}
      <div className={`px-[${gradientWidth/2}px]`}>
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
                width: 'auto',
                height: `${imageHeight}px`,
                marginRight: `${logoSpacing}px`,
                minWidth: `${imageHeight * 1.5}px`, // Maintain aspect ratio
              }}
            >
              <Image
                src={item}
                alt="Company logo"
                fill
                className="object-contain"
                priority={i < 10}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default AutoLogoSlider;