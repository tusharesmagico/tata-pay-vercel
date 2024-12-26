import React from "react";
import SliderComponent from "../../common-components/SliderComponent";
import SimpleCard from "../../common-components/SimpleCard";
import SliderComponentWithHoverEffect from "../../common-components/SliderComponentWithHoverEffect";
import giftImage from "../../assets/img/paymentGatewaySlide.png";
import upiImage from "../../assets/img/upiImage.png";
import billImage from "../../assets/img/BillImage.png";
import cardImg5 from "../../assets/img/upiSlider1.jpg";
import cardImg2 from "../../assets/img/billsPaySlider1.jpg";
import cardImg6 from "../../assets/img/cardImg6.jpg";
import cardImg8 from "../../assets/img/cardImg8.jpg"
import styles from "../../common-components/index.module.css";
const NewWithTataPay = () => {
  const cards = [
    {
      image: upiImage,
      title: "Transfer money",
      route: "/upi",
      content:
        "Enjoy seamless UPI payments on Tata Neu. Whether you're sending money to friends, paying bills, or shopping, experience effortless digital transactions in just seconds.",
    },
    {
      image: billImage,
      title: "Pay bills",
      route: "/bill-payment",
      content:
        "Recharge, pay bills, and do more with Tata Neu. Get all your monthly bills out of the way in one shot. Zero convenience fees. Reap rewards with NeuCoins and cashback.",
    },
    {
      image: giftImage,
      title: "Payment Gateway",
      route: "/payment-gateway",
      content:
        "Get Tata Payments’ Gateway for faster, secure and seamless payments. Elevate your business by making us a part of your journey to success.",
    },
    {
      image: upiImage,
      title: "Transfer money",
      route: "/upi",
      content:
        "Enjoy seamless UPI payments on Tata Neu. Whether you're sending money to friends, paying bills, or shopping, experience effortless digital transactions in just seconds.",
    },
    {
      image: billImage,
      title: "Pay bills",
      route: "/bill-payment",
      content:
        "Recharge, pay bills, and do more with Tata Neu. Get all your monthly bills out of the way in one shot. Pay zero convenience fees and earn NeuCoins as rewards.",
    },
    {
      image: giftImage,
      title: "Payment Gateway",
      route: "/payment-gateway",
      content:
        "Get Tata Payments’ Gateway for faster, secure and seamless payments. Elevate your business by making us a part of your journey to success.",
    },
  ];

  const firstSliderData = [
    {
      img: cardImg5,
      text: "Scan & Pay on Tata Neu and earn up to 50 NeuCoins",
      link: "https://www.tatadigital.com/payment/vault?utm_source=upi&utm_medium=organic&utm_campaign=tatapaypage",
    },
    {
      img: cardImg2,
      text: "Pay your bills on Tata Neu and earn rewards",
      link: "https://www.tatadigital.com/paybill?utm_source=billpay&utm_medium=organic&utm_campaign=tatapaypage",
    },

    {
      img: cardImg6,
      text: "Enjoy Zero Convenience Fee on all your bill payments",
      link: "https://www.tatadigital.com/paybill?utm_source=billpay&utm_medium=organic&utm_campaign=tatapaypage",
    },
    {
      img: cardImg8,
      text: "One-stop shop for all your gifting needs",
      link: "https://www.tatadigital.com/giftCardCatalogueSearch",
    },

  ];

  return (
    <div className="mt-[-90px] mb-[32px]">
      <SliderComponent primaryText="What's new with Tata Pay" secondaryText="">
        {firstSliderData.map((item, i) => {
          return (
            <div key={i} >
              <SimpleCard img={item.img} text={item.text} link={item.link} />
            </div>
          );
        })}
      </SliderComponent>
      <SliderComponentWithHoverEffect data={cards} />
    </div>
  );
};

export default NewWithTataPay;
