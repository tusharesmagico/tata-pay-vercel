// SingleCardSlider.js
"use client";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import styles from "./index.module.css";
import HeaderText from "./HeaderText";

const BottomButtonSlider = ({
  children,
  show = 1,
  text = "",
  width = "100%",
  variableWidth= true
}) => {
  const sliderRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: show,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: false,
    variableWidth: variableWidth,
    appendDots: (dots) => <CustomDots dots={dots} />, // Use the custom dots component
    responsive: [
      {
        breakpoint: 840,
        settings: {
          slidesToShow: show == 1 ? 1 : 3,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1.5 ,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  useEffect(() => {
    // Check if window is defined (runs only on the client side)
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const width = document.documentElement.clientWidth;
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

  return (
    <div
      className="  "
      // className="slider-container"
      style={{
        width: width,
        position: "relative", // Ensure container positioning
        margin: "auto",
      }}
    >
      {text && (
        <div className="mb-[24px] md:mb-[48px]">
          <HeaderText text={text} />
        </div>
      )}
      {/* Slider Component with Ref */}
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>

      {/* Button Wrapper */}
      {/* {show > 1 ? (
        <div className="hidden lg:flex lg:justify-center absolute bottom-[-40px] left-0 right-0">
         
          <button
            onClick={handlePrevClick}
            style={{
              background: "#FDFDFD",
              border: "none",
              borderRadius: "50%",
              cursor: "pointer",
              padding: "27px",
              marginRight: "10px",
              border: "1px solid #78787D3D",
            }}
          >
            <IoIosArrowRoundBack size={15} />
          </button>
        
          <button
            onClick={handleNextClick}
            style={{
              background: "#1A1A1A",
              border: "none",
              borderRadius: "50%",
              cursor: "pointer",
              padding: "27px",
            }}
          >
            <IoIosArrowRoundForward size={15} color="#FDFDFD" />
          </button>
        </div>
      ) : (
        <></>
      )} */}
    </div>
  );
};

export default BottomButtonSlider;
