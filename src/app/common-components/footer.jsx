import React from "react";
import Image from "next/image";
import Link from "next/link";
import intertek from "../assets/img/intertek.png";
import sisa from "../assets/img/sisa.png";
import tataLogo from "../assets/svg/tataPayLogo.svg";
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-[24px]">
          <Image
            src={tataLogo}
            alt="Tata Pay Logo"
            width={81}
            height={32}
            className="mb-[16px]"
          />
          <p className="text-[18px] text-[#1A1A1A] font-proxima-nova-bold  mt-2">
          Tata Payments Limited
          </p>
          <p className="text-[14px] text-[#333333]  mt-2">
            Army & Navy Building, 148, M G Road, Opposite Kala Ghoda, Fort,
            Mumbai - 400001
            <br />
            {/* Corporate Agent (Composite) Registration no - CA0901. Valid till
            June 26, 2025.  */}
            CIN-U65100MH2019PLC329365
          </p>
        </div>
        <div className="flex mb-[56px]  items-center gap-[35px] sm:gap-[60px]">
          <Image src={sisa} alt="SISA Logo" className="h-[37px] sm:h-[62px] w-auto"   />
          <Image src={intertek} alt="PCI Logo" className="h-[40px] sm:h-[65px] w-auto  " />
        </div>

        <div className="flex flex-wrap justify-between mb-[56px]">
          <div className="w-1/2 lg:w-1/4 mb-4">
            <h3 className="font-semibold mb-2 text-black">General</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/"
                  className="text-sm text-[#4D4D4D] hover:underline"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-sm text-[#4D4D4D]  hover:underline"
                >
                  About us
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/contact-us"
                  className="text-sm text-[#4D4D4D] hover:underline"
                >
                  Contact us
                </Link>
              </li> */}
              <li>
                <Link
                  href="/support"
                  className="text-sm text-[#4D4D4D]  hover:underline"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-1/2 sm:w-1/2 lg:w-1/4 mb-4">
            <h3 className="font-semibold mb-2 text-black">Products</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/upi"
                  className="text-sm text-[#4D4D4D]  hover:underline"
                >
                  UPI
                </Link>
              </li>
              <li>
                <Link
                  href="/bill-payment"
                  className="text-sm text-[#4D4D4D]  hover:underline"
                >
                  Bill Pay & Recharges
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/gift-cards"
                  className="text-sm text-black hover:underline"
                >
                  Gift cards
                </Link>
              </li> */}
              <li>
                <Link
                  href="/payment-gateway"
                  className="text-sm text-[#4D4D4D]  hover:underline"
                >
                  Payment gateway
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-1/2 lg:w-1/4 mb-4">
            <h3 className="font-semibold mb-2 text-black">Resources</h3>
            <ul className="space-y-1">
              {/* <li>
                <Link
                  href="/press"
                  className="text-sm text-[#4D4D4D]  hover:underline"
                >
                  Press
                </Link>
              </li> */}
              <li>
                <Link
                  href="/resources"
                  className="text-sm text-[#4D4D4D]  hover:underline"
                >
                  Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-sm text-[#4D4D4D]  hover:underline"
                >
                  Reports
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/resources"
                  className="text-sm text-[#4D4D4D]  hover:underline"
                >
                  News & Blogs
                </Link>
              </li> */}
            </ul>
          </div>

          {/* <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
            <h3 className="font-semibold mb-2 text-black">Socials</h3>
            <div className="flex space-x-2">
              <Link
                href="https://www.linkedin.com"
                className="text-black hover:text-blue-800"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link
                href="https://www.x.com"
                className="text-black hover:text-gray-800"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
            </div>
          </div> */}
        </div>

        <div className="flex flex-wrap justify-between items-center pt-4 border-t border-gray-200">
          <div className="flex space-x-4">
            <Link
              href="/policy/Terms-and-Conditions-for-usage-of-website"
              className="text-xs text-[#1A1A1A]  hover:underline"
            >
              Terms of use
            </Link>
            <Link
              href="policy/Privacy-Notice"
              className="text-xs text-[#1A1A1A]  hover:underline"
            >
              Privacy policy
            </Link>
            {/* <Link href="/cookie" className="text-xs text-[#1A1A1A]  hover:underline">
              Cookie policy
            </Link> */}
          </div>

          <p className="text-xs text-[#1A1A1A]">© 2024 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
