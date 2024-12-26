import React from "react";
import qrcode from "../../assets/img/qrcode.png";
import Image from "next/image";
import googleplay from "../../assets/img/googleplay.png";
import appstore from "../../assets/img/appstore.png";

const ScanToDownload = () => {
  return (
    <div className="py-[32px] lg:py-[60px]">
      <div className="bg-[#212121] text-center min-h-[240px]  flex  flex-wrap gap-[16px] justify-center sm:gap-[66px] lg:gap-[35px] lg:justify-center xl:justify-between  items-center px-[30px] lg:px-[80px] py-[24px] lg:py-[18px] rounded-[36px]">
        <div>
          <div className="font-proxima-nova-bold  text-[24px] lg:text-[42px] leading-[32px] lg:leading-[50px] text-[#E5E5E5] ">
            Scan to download{" "}
            <span className="bg-gradient-to-r from-[#CA2BB5] hidden lg:inline via-[#DD30A1] to-[#EC5972] bg-clip-text text-transparent">
              Tata Neu
            </span>
            <div className="block lg:hidden">
              <span className="bg-gradient-to-r    from-[#CA2BB5] via-[#DD30A1] to-[#EC5972] bg-clip-text text-transparent">
                Tata Neu
              </span>
            </div>
          </div>
          <div className="flex gap-[20px] justify-center xl:justify-start items-center mt-[20px]">
            <a
              href="https://play.google.com/store/search?q=tata%20neu&c=apps&hl=en"
              target="_blank"
            >
              <Image
                src={googleplay}
                className="h-[32px] w-[110px] lg:h-[59px] lg:w-[203px]"
              />
            </a>
            <a
              href="https://apps.apple.com/in/app/tata-neu-shop-travel-pay/id1584669293"
              target="_blank"
            >
              <Image
                src={appstore}
                className="h-[32px] w-[110px] lg:h-[59px] lg:w-[203px]"
              />
            </a>
          </div>
        </div>
        <div className=" mt-[16px] xl:mt-[0px]  h-[120px] w-[120px] lg:h-[150px] lg:w-[150px]">
          <Image src={qrcode} />
        </div>
      </div>
    </div>
  );
};

export default ScanToDownload;
