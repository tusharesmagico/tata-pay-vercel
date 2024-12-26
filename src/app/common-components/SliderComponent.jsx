"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import styles from "./index.module.css";
import HeaderText from "./HeaderText";
import GradientHeaderText from "./GradientHeaderText";

const SliderComponent = ({
  children,
  isMargin = false,
  isGradientStyle = false,
  isBlueGradient = false,
  initialCards = 3,
  primaryText = "",
  secondaryText = "",
}) => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: initialCards,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: true,
    centerMode: false, // Centers the active slide
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2, // Show 2.5 slides, where 1 full card will be in the center
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "8%",
          initialSlide: 0,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.037,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1.041,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.045,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1.05,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.06,
          slidesToScroll: 1,
          initialSlide: 1.5,
        },
      },
    ],
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Move slider to the previous slide
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Move slider to the next slide
    }
  };

  return (
    <div
      className={`w-full  py-[32px] lg:py-[60px] ${
        isGradientStyle
          ? isBlueGradient
            ? styles.simpleCardGradientBlue
            : styles.simpleCardGradientPink
          : ""
      }  `}
    >
      <div className="lg:max-w-[1440px] m-auto">
        <div className=" px-[18px] lg:px-[149px] lg:flex justify-between ">
          <div className="flex flex-col justify-center">
            {secondaryText && <GradientHeaderText text={secondaryText} />}

            <div className={`${secondaryText && "mt-[8px]"}`}>
              <HeaderText text={primaryText} />
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
                className="bg-[#1A1A1A] active:opacity-80 text-[#FDFDFD] 
              p-[22px] rounded-full border-[1px] border-solid border-[#78787D3D]"
              >
                <IoIosArrowRoundForward size={24} />
              </button>
            </div>
          </div>
        </div>
        <div className={`mt-[20px] lg:mt-[42px] ml-[16px] sm:mx-[0px] lg:mx-[133px]`}>
          <Slider
            ref={sliderRef}
            className={`m-0 cursor-pointer ${styles.slider} `}
            {...settings}
          >
            {children}
          </Slider>
        </div>
      </div>
      {/* Control Buttons */}
    </div>
  );
};

export default SliderComponent;
