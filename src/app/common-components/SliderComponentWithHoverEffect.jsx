"use client";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import styles from "./index.module.css";
import { useRouter } from "next/navigation";
import HeaderText from "./HeaderText";
import GradientHeaderText from "./GradientHeaderText";
import rightOpacity from "../assets/img/rightOpacity.png";
import leftOpacity from "../assets/img/leftOpacity.png";

const SliderComponentWithHoverEffect = ({ data }) => {
  const [loading, setLoading] = useState(false);

  const [windowWidth, setWindowWidth] = useState(0);

  const sliderRef = useRef(null);
  const initialCard = windowWidth <= 651 ? 0 : 0;
  const [activeSlide, setActiveSlide] = useState(initialCard);
  const router = useRouter();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "4%",
    arrows: false,
    beforeChange: (current, next) => {
      const num = windowWidth <= 651 ? next : next;
      setActiveSlide(num);
    },
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0%",
        },
      },
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "25%",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "22%",
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "17%",
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "15%",
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "12%",
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10%",
        },
      },
    ],
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handleRouter = (route) => {
    router.push(route);
  };

  useEffect(() => {
    // Check if window is defined (runs only on the client side)
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const width = document.documentElement.clientWidth;
        const newIndex = width <= 651 ? 0 : 0;
        setActiveSlide(newIndex);
        setWindowWidth(width);
      };

      // Set the initial width
      handleResize();

      // Update width on resize
      window.addEventListener("resize", handleResize);

      // Cleanup event listener on unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full mt-[32px] lg:mt-[42px]">
      <div className="px-[16px] lg:px-[149px] flex justify-between">
        <div className="flex flex-col justify-center">
          <GradientHeaderText text={"New launches & Offers"} />

          <div className={`mt-[8px]`}>
            <HeaderText text={"Simplify payments & multiply rewards"} />
          </div>
        </div>

        <div className="hidden lg:flex items-end">
          <div className=" lg:flex lg:justify-between gap-[20px] ">
            <button
              onClick={handlePrev}
              className="bg-[#FDFDFD] text-[#1A1A1A] active:opacity-60 p-[22px] 
              rounded-full border-[1px] border-solid border-[#78787D3D]"
            >
              <IoIosArrowRoundBack size={24} />
            </button>
            <button
              onClick={handleNext}
              className="bg-[#1A1A1A] active:opacity-80 text-[#FDFDFD] p-[22px] 
              rounded-full border-[1px] border-solid border-[#78787D3D]"
            >
              <IoIosArrowRoundForward size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-[20px] lg:mt-[42px] mx-[16px] lg:mx-[149px] relative overflow-hidden  "
      // style={{backgroundColor:"red"}}
      >
        <div
          className="absolute hidden lg:block top-0 left-0 z-10 h-full w-[40px] pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
          }}
        ></div>

        <div
          className="absolute hidden lg:block top-0 right-0 z-10 h-full w-[40px] pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
          }}
        ></div>

        {/* <Image
          src={rightOpacity} // Ensure this is a valid image source
          alt="img"
          layout="fill" // Makes the image fill the div
          objectFit="cover" // Ensures the image fits inside the div properly
          className="absolute bottom-0 right-0 z-10"
        /> */}
        {/* </div> */}

        {/* <Image
          alt="img"
          src={leftOpacity}
          width={30} // Set the width to 30px
          height="100%" // Let the height fill the container
          className="absolute bottom-0 left-0 z-10"
          style={{ height: "100%" }} // This ensures the height is 100%
        /> */}

        <Slider
          ref={sliderRef}
          className={`m-0 flex items-center ${styles.sliderContainer}`}
          {...settings}
        >
          {data?.map((card, index) => (
            <div
              className={`flex items-center justify-center px-[8px] xl:px-[16px] py-[10px] lg:py-[10px] m-auto ${styles.hoverContainer} `}
              key={index}
            >
              {activeSlide % data.length === index ? (
                <div
                  className={`flex max-h-[340px] md:max-h-[512px] flex-col cursor-pointer ${styles.cardGradient}
                     rounded-[40px]
                     justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  text-center
                      text-[#FFFFFF] transition-transform duration-300 px-[16px] md:px-[24px] 
                      ${styles.cardContainer}  lg:max-w-[360px]`}
                  onClick={() => handleRouter(card?.route)}
                >
                  <div
                    className=" w-[60%] h-auto lg:max-w-[262px] object-cover
                   m-auto mt-[16px] lg:mt-[24px]"
                  >
                    <Image src={card.image} alt={card.title} />
                  </div>
                  <h3
                    className="text-[16px] font-bold leading-[24px] lg:text-[20px] 
                  lg:font-bold lg:leading-[28px] mt-[12px] md:mt-[30px] "
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-[14px] opacity-70 lg:text-[16px] leading-[20px] mb-[16px]
                   lg:mb-[32px] mt-[6px] md:mt-[16px] text-center "
                  >
                    {card.content}
                  </p>
                </div>
              ) : (
                <div
                  style={{ border: "2px solid #78787D3D" }}
                  className={`flex flex-col items-center justify-center cursor-pointer 
                    rounded-[32px] m-auto 
                  text-center transition-transform duration-300 px-[24px] max-h-[280px]  lg:min-h-[352px] max-w-[294px]  `}
                  onClick={() => handleRouter(card?.route)}
                >
                  <div className="w-[102px] lg:w-full h-auto max-w-[150px] object-cover m-auto mt-[16px] lg:mt-[24px]">
                    <Image src={card.image} alt={card.title} />
                  </div>
                  <div className=" text-[14px]  md:text-[16px] font-bold leading-[20px] md:leading-[24px] lg:text-[18px] lg:font-bold lg:leading-[24px] ">
                    {card.title}
                  </div>
                  <p className="text-[12px] lg:text-[14px]  leading-[16px] md:leading-[18px] mt-[12px] mb-[16px] text-center ">
                    {card.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponentWithHoverEffect;
