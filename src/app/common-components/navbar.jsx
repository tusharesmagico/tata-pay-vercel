"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import tataLogo from "../assets/svg/tataPayLogo.svg";
import menu from "../assets/img/menu.png";
import styles from "./index.module.css";
import { useRouter } from "next/navigation";

import { PiChatCircleText } from "react-icons/pi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Header = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const sliderRef = useRef(null);
  const router = useRouter();

  const toggleSlider = () => {
    console.log("click");
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (
      sliderRef.current &&
      !sliderRef.current.contains(event.target) &&
      event.target.id !== "menuBtn"
    ) {
      setIsOpen(false);
    }
  };

  const handleRoute = (path) => {
    router.push(path);
    setIsOpen(false);
    setIsMobileResourcesOpen(false);
    setIsProductOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  
  return (
    <header
      className={`bg-[#FDFDFD] shadow-sm fixed top-0 left-0 right-0 z-50
         border-b-[1px] border-[#D4D4D4] border-solid`}
    >
      <nav
        className="container mx-auto px-[16px] lg:px-[149px] max-w-[1440px] py-[16px] sm:py-[16px]
       flex items-center justify-between "
      >
        <div className="flex items-center gap-[16px] lg:gap-[32px]">
          <Image
            src={menu}
            alt="tata Logo"
            className="block sm:hidden w-[24px] cursor-pointer h-[24px] sm:h-[40px]"
            onClick={toggleSlider}
          />
          <Image
            src={tataLogo}
            alt="tata Logo"
            className="cursor-pointer w-[60px] sm:w-[62px] h-[24px] sm:h-[24px]"
            onClick={() => router.push("/")}
          />
          <div className="hidden sm:block relative">
            <button
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
              className="flex items-center space-x-1 text-[#1A1A1A] text-[16px] leading-[24px] font-semibold"
            >
              <span>Products</span>
            </button>
            {isProductsOpen && (
              <div
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
                className="absolute left-0 mt-[2px] w-48 rounded-md shadow-lg
                 bg-white ring-1 ring-black ring-opacity-5"
              >
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <Link
                    href="/upi"
                    className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                  >
                    UPI
                  </Link>
                  <Link
                    href="/bill-payment"
                    className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                  >
                    Bill Pay
                  </Link>
                  <Link
                    href="/gift-cards"
                    className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                  >
                    Gift Cards
                  </Link>
                  <Link
                    href="/payment-gateway"
                    className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                  >
                    Payment Gateway
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link
            href="/about-us"
            className="hidden sm:block text-[16px] leading-[24px] font-semibold text-[#1A1A1A] "
          >
            About us
          </Link>
          <div className="hidden sm:block relative">
            <button
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
              className="flex items-center space-x-1 text-[#1A1A1A] text-[16px] leading-[24px] font-semibold"
            >
              <span>Resources</span>
            </button>
            {isResourcesOpen && (
              <div
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
                className="absolute left-0 mt-[2px] w-64 rounded-md shadow-lg
                 bg-white ring-1 ring-black ring-opacity-5"
              >
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="resources-menu"
                >
                  <Link
                    href="/resources"
                    className="block px-4 py-2 text-[16px] text-[#1A1A1A] hover:bg-gray-100"
                  >
                    Policy, Resources & Press release
                  </Link>
                  {/* <Link
                    href="/about-us"
                    className="block px-4 py-2 text-[16px] text-[#1A1A1A] hover:bg-gray-100"
                  >
                    About us
                  </Link>
                  <Link
                    href="/customer-grievance"
                    className="block px-4 py-2 text-[16px] text-[#1A1A1A] hover:bg-gray-100"
                  >
                    Customer Grievance
                  </Link>
                  <Link
                    href="/support"
                    className="block px-4 py-2 text-[16px] text-[#1A1A1A] hover:bg-gray-100"
                  >
                    Support
                  </Link>
                  <Link
                    href="/news&bolgs"
                    className="block px-4 py-2 text-[16px] text-[#1A1A1A] hover:bg-gray-100"
                  >
                    News / Blogs
                  </Link> */}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-8">
          <a href="/support">
          <PiChatCircleText
            fontSize={24}
            className="block sm:hidden"
            onClick={toggleSlider}
          />
          <button className="hidden sm:block text-[16px] font-semibold  bg-[#212121] text-[#FFFFFF] px-9 py-2 rounded-md hover:bg-gray-800">
            Support
          </button>
          </a>
          
        </div>
      </nav>
      <div
        ref={sliderRef}
        className={`fixed left-0 w-full bg-[#FDFDFD] text-[#1A1A1A] p-4 text-[16px] leading-[24px] transition-transform duration-500 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-[500px]"
          }`}
      >
        {/* Mobile menu content */}
        <div>
          <div
            onClick={() => setIsProductOpen((pre) => !pre)}
            className="py-[12px] px-[16px] flex justify-between items-center"
          >
            <div>Product</div>
            <div
              className={`${styles.rotate} ${isProductOpen ? styles.rotateUp : styles.rotateDown
                }`}
            >
              <IoIosArrowDown />
            </div>
          </div>
          {isProductOpen && (
            <div
              className={`${styles.slideDown} ${isProductOpen ? styles.slideDownOpen : ""
                }`}
            >
              <div
                onClick={() => handleRoute("/upi")}
                className="px-[16px] py-[8px] text-[14px] text-[#4D4D4D]"
              >
                UPI
              </div>
              <div
                onClick={() => handleRoute("/bill-payment")}
                className="px-[16px] py-[8px] text-[14px] text-[#4D4D4D]"
              >
                Bill payment
              </div>
              <div
                onClick={() => handleRoute("/gift-cards")}
                className="px-[16px] py-[8px] text-[14px] text-[#4D4D4D]"
              >
                Gift cards
              </div>
              <div
                onClick={() => handleRoute("/payment-gateway")}
                className="px-[16px] py-[8px] text-[14px] text-[#4D4D4D]"
              >
                Payment gateway
              </div>
            </div>
          )}

          <div
            className="py-[12px] px-[16px]"
            onClick={() => handleRoute("/about-us")}
          >
            About Us
          </div>
          <div
            onClick={() => setIsMobileResourcesOpen((pre) => !pre)}
            className="py-[12px] px-[16px] flex justify-between items-center"
          >
            <div>Resources</div>
            <div
              className={`${styles.rotate} ${isMobileResourcesOpen ? styles.rotateUp : styles.rotateDown
                }`}
            >
              <IoIosArrowDown />
            </div>
          </div>
          {isMobileResourcesOpen && (
            <div
              className={`${styles.slideDown} ${isMobileResourcesOpen ? styles.slideDownOpen : ""
                }`}
            >
              <div
                onClick={() => handleRoute("/resources")}
                className="px-[16px] py-[8px] text-[14px] text-[#4D4D4D]"
              >
                Policy, Resources & Press release
              </div>
              {/* <div
                onClick={() => handleRoute("/about-us")}
                className="px-[16px] py-[8px] text-[14px] text-[#4D4D4D]"
              >
                About us
              </div> */}
              {/* <div
                onClick={() => handleRoute("/customer-grievance")}
                className="px-[16px] py-[8px] text-[14px] text-[#4D4D4D]"
              >
                Customer Grievance
              </div> */}
              {/* <div
                onClick={() => handleRoute("/support")}
                className="px-[16px] py-[8px] text-[14px] text-[#4D4D4D]"
              >
                Support
              </div> */}
              {/* <div
                onClick={() => handleRoute("/news&bolgs")}
                className="px-[16px] py-[8px] text-[14px] text-[#4D4D4D]"
              >
                News / Blogs
              </div> */}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
