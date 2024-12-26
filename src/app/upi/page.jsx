import React from "react";
import UpiPaymentHero from "./upi-hero";
import BenefitsSectionUpi from "../common-components/infoDataUpi";

import SingleCardSlider from "../common-components/SingleCardSlider";
import SingleSliderCard from "../common-components/SingleSliderCard";
import SliderComponent from "../common-components/SliderComponent";
import SimpleCard from "../common-components/SimpleCard";
import FAQ from "../page-components/home/FAQ";
import cardImg5 from "../assets/img/upiSlider1.jpg";
import cardImg6 from "../assets/img/billsPaySlider1.jpg";
import cardImg7 from "../assets/img/cardImg7.png";
import cardImg2 from "../assets/img/cardImg2.png";
import cardImg8 from "../assets/img/cardImg8.jpg";
import cardImg3 from "../assets/img/cardImg3.png";
import cardImg4 from "../assets/img/cardImg4.png";
import BottomButtonSlider from "../common-components/BottomButtonSlider";
import UpiSingleCardSlider from "../common-components/UpiSingleCardSlider";
import BillPaymentSteps from "../common-components/stepsSection";
import step1 from "../assets/img/step1.png";
import step2 from "../assets/img/step2.png";
import step3 from "../assets/img/step3.png";
import step4 from "../assets/img/step4.png";
import girlImage1 from "../assets/img/upi-steps1.png";
import girlImage2 from "../assets/img/upi-steps2.png";
import girlImage3 from "../assets/img/upi-steps3.png";
import girlImage4 from "../assets/img/upi-steps4.png";
import ScrollToTop from "../common-components/ScrollToTop";
import UPILayout from "./UPILayout";
const upiSlider = [{}];

const cards = [
  {
    userName: "Ady@money",
    voc: "Tata Neu is my everyday app for all my needs. Right from the UPI payments to groceries to clothes and toys. It’s one of the super apps that anybody can use with ease.",
  },
  // {
  //   userName: "yeaufskgzkgz",
  //   voc: "Easy to use the app. Shopping experience is awesome. Bill payments too quick & easy.",
  // },
  {
    userName: "Hakeem Jease",
    voc: "Bill Payments convents fees no I am very happy 👍",
  },
  {
    userName: "Parag VH",
    voc: "The bill payments option is pretty smooth compared to the competition. It’s just 2 step process when you get your notifications automatically. Very well executed.",
  },
  {
    userName: "Sai Sarvesh",
    voc: "Good to use for UPI payments.",
  },
  {
    userName: "Subramanyam Kshatriya",
    voc: "One of the best for all in one bill payments and I really like your services and most important your understanding each customer's issues. Thank you but small suggestion for you, you should improve your services to attract customers. Thank you.",
  },
  {
    userName: "Shubham Shirke",
    voc: "Simple, Easy and Quick way for bills, Payments & Shopping's. Really enjoying it.",
  },
  {
    userName: "Durgesh Nadkarni",
    voc: "Fantastic experience using this.. Smooth payments plus good rewards on payments.",
  },
  {
    userName: "Vaibhav Wankhade",
    voc: "Good for online bill payments.",
  },
];

const steps = [
  {
    image: step1,
    title: "Open the payments homepage on the Tata Neu app",
    girlImage: girlImage1,
  },
  {
    image: step2,
    title: "Easily link your Tata Neu HDFC Bank RuPay credit card",
    girlImage: girlImage2,
  },
  {
    image: step3,
    title: "Choose this card for all UPI payments",
    girlImage: girlImage3,
  },
  {
    image: step4,
    title:
      "Earn an assured 1.5% NeuCoins for every UPI transaction with the NeuCard on Tata Pay",
    girlImage: girlImage4,
  },
];

const firstSliderData = [
  {
    img: cardImg5,
    text: "Scan & Pay on Tata Neu and earn up to 50 NeuCoins",
    link: "https://www.tatadigital.com/payment/vault?utm_source=upi&utm_medium=organic&utm_campaign=tatapaypage",
  },

  {
    img: cardImg6,
    text: "Pay your bills on Tata Neu and earn rewards",
    link: "https://www.tatadigital.com/paybill?utm_source=billpay&utm_medium=organic&utm_campaign=tatapaypage",
  },
  {
    img: cardImg7,
    text: "Stay connected with your loved ones. Recharge now on Tata Neu.",
    link: "https://www.tatadigital.com/paybill?utm_source=billpay&utm_medium=organic&utm_campaign=tatapaypage",
  },
  {
    img: cardImg8,
    text: "One-stop shop for all your gifting needs",
    link: "https://www.tatadigital.com/giftCardCatalogueSearch",
  },
];

const secondSliderData = [
  {
    img: cardImg2,
    text: "Explore the whole world with a Personal Loan of up to ₹10 Lakhs",
    link: "https://www.tatadigital.com/v2/personal-loan?utm_source=Facebook&utm_medium=CPM&utm_campaign=%7B%7Badset.name%7D%7D&utm_content=%7B%7Bad.name%7D%7D&fbclid=IwY2xjawFxtEdleHRuA2FlbQIxMQABHSRnu4qgupZahC8AZrWzQlWTV3tLLDHOU--sKIXiJs2gdSLaaN16fu1zdg_aem_wTcVCG11aVJn9ml4RVoaSQ",
  },
  {
    img: cardImg3,
    text: "Unlock simplified market insights daily with Market Brew",
    link: "https://www.marketbrew.in/",
  },
  {
    img: cardImg4,
    text: "Insure against digital theft of funds with Cybershield Insurance",
    link: "https://www.tatadigital.com/auth/login?next=/finance/insurance/cyber-insurance",
  },
];
const accordionData = [
  {
    question: "How do I create a UPI ID?",
    text: 'Creating a UPI ID or VPA is easy. Here\'s how you can do it:  \n\n1. Go to "Categories" located at the bottom of Tata Neu homepage and tap on the "UPI & Cards" \n\n2. Click "Register Now" \n\n3. Verify your mobile number  \n\n4. Your UPI ID gets created\n\n5. Select your bank   \n\n6. Choose the bank account you to which you want to link your UPI ID \n\n7. Set your PIN, in case you have not done that already \n\nAnd you\'re done! You can manage your Tata Pay UPI by going to UPI settings on Tata Pay.',
  },
  {
    question: "How can I check my account balance?",
    text: 'Here\'s how you can check your account balance:  \n\n1. Go to "Categories" located at the bottom of Tata Neu homepage and tap on the "UPI & Cards" \n\n2. Click "Check balance" under "UPI services"\n\n3. Select which bank account\'s balance you would like to check\n\n4. Click "Check balance" \n\n5. Enter your UPI PIN   \n\n6. Your account balance should be on the screen under "Check balance"',
  },
  {
    question: "Where can I find my UPI ID/VPA?",
    text: 'Here\'s how you can find your VPA or UPI Address:  \n\n1. Go to "Categories" located at the bottom of Tata Neu homepage and tap on the "UPI & Cards" \n\n2. Your UPI ID should be visible on the Tata Pay page with all linked account details',
  },
  {
    question: "How can I see all my UPI transactions?",
    text: 'Head to the Tata Neu app homepage. Next, click on "Profile -> Transactions" on the top right corner of the page. Using the filter button on the top right, filter the UPI category to view all your bill payment transactions.',
  },
  {
    question:
      "If I have multiple accounts linked to my UPI ID, how do I ensure that payment gets credited to a particular account?",
    text: 'Any amount sent to you gets credited to your default account. Which is why, before you ask anyone to transfer money to you, you should ideally set your default account to the one where you\'d like the money to be credited.\n\nHere\'s how you can set/change your primary bank account:\n-Go to "Categories" located at the bottom of Tata Neu homepage and tap on the "UPI & Cards" \n- Go to "UPI settings"\n- Click "Change primary account"\n- Select the account that you\'d like to set as default for credit transactions \n- Confirm the change\n\nDone! Your primary account for credit is set. You can see it under "My bank account" for easy access.',
  },
  {
    question: "What is UPI AutoPay?",
    text: "UPI is one of the most popular payment modes in India. UPI AutoPay is a feature through which you can set up automatic payments as required - one-time, daily, weekly, bimonthly, monthly, every six months, annually or as needed. The amount you set will be deducted from the bank account you choose on the date of your choice. You can use UPI AutoPay to pay bills, for content subscriptions, for utilities and more. This service helps make recurring payments smoother. It helps you avoid late fees by clearing payments on time and enjoy services without any disruption, and helps merchants because they get paid on time too.",
  },
  {
    question: "How does automatic payment work in UPI AutoPay?",
    text: "Once you approve an AutoPay request, the merchants can get paid automatically if the transaction amount is less than INR 15,000. In case the AutoPay amount is higher than INR 15,000, you will be asked to authorise the payment every time the merchant requests a payment.",
  },
  {
    question: "What is AutoPay authorisation?",
    text: "After setting up AutoPay, you will be asked to authorise a transaction every time the amount is higher than INR 15,000. The request for approval of this payment is called an authorisation request.",
  },
  {
    question: "What is a mandate?",
    text: "With this feature you can pre-authorise (mandate) a transaction for debit from your bank account later. A UPI mandate is to be used in scenarios where money is to be transferred later, however the commitment towards that is to be made now. It is possible that the sender may forget to send money later, so a mandate is created for a service/merchant payment. The customer's account shall get debited when the mandate is executed, i.e. on the later date.",
  },
  {
    question: "How do I create a UPI number on Tata Pay UPI?",
    text: 'Creating a UPI Number is easy. Here\'s how you can do it:  \n\n1. Go to "Categories" located at the bottom of Tata Neu homepage and tap on the "UPI & Cards" \n2. Click "UPI Settings" \n\n3. Click "Manage UPI Numbers" and you will see your linked UPI Numbers here, if any\n\n4. Click "Link Mobile Number", if you wish to add your mobile number as your UPI Number\nOR\nClick "Add new UPI Number", if you want to create a unique 8 or 9 character number as your UPI number. Enter your desired 8- or 9-character number.\n\n5. Click "Proceed" \n\nAnd you\'re done! You can manage your UPI Number by visiting this section again.',
  },
  {
    question: "How do I delete a UPI number on Tata Pay UPI?",
    text: 'Here\'s how you can delete your UPI Number:  \n\n1. Go to "Categories" located at the bottom of Tata Neu homepage and tap on the "UPI & Cards" \n\n2. Click "UPI Settings" \n\n3. Click "Manage UPI Numbers" and you will see your linked UPI Numbers here, if any\n\n4. Click on your mobile number tile, if you wish to delink your mobile number as your UPI Number\n\n5. Choose the "De-link mobile number" option and give your confirmation by clicking "Proceed"\n\n6. If you want to delete your UPI number instead, skip steps 4 and 5 mentioned above, and click on your UPI number tile\n\n7. Choose the "Delete UPI number" option and give your confirmation by clicking "Proceed"',
  },
  {
    question: "Can I add multiple credit cards to my UPI ID?",
    text: "Yes, you can add multiple credit cards to your UPI ID",
  },
  {
    question:
      "Why are my payments always failing at some shops when using my credit card on UPI?",
    text: "Some of your payments might be failing because the shops/online stores might not be accepting credit card payments on UPI. Please try again by paying with your bank account instead of credit card.",
  },
  {
    question:
      "Do I need to re-register my credit card again if I change my mobile phone?",
    text: "You may need to complete SMS verification to resume using UPI services in such a scenario. However, you will not need to re-register your card again as it will be automatically synced and shown to you along with the other bank accounts you added in your app.",
  },
];

const UPI = () => {
  return (
    <UPILayout>
      <ScrollToTop />
      <div className="bg-[#FDFDFD]">
        <UpiPaymentHero />
        <div className="  pt-[32px] md:pt-[60px]">
          <div className="m-auto px-[16px] lg:px-[149px]  lg:max-w-[1440px]">
            <BottomButtonSlider variableWidth={false} text="Tata Pay UPI Features">
              {/* {cards.map((card, index) => (
            <div key={index} className="">
              
            </div>
          ))} */}
              <UpiSingleCardSlider />
            </BottomButtonSlider>
          </div>

          <BenefitsSectionUpi />
          <SliderComponent
            isGradientStyle={true}
            primaryText="Simplify payments & multiply rewards"
            secondaryText="New launches & Offers"
          >
            {firstSliderData.map((item, i) => {
              return (
                <SimpleCard
                  key={i}
                  img={item.img}
                  text={item.text}
                  offerHeading={"New launches & Offers"}
                  mainHeading={"Simplify payments & multiple rewards"}
                  link={item.link}
                />
              );
            })}
          </SliderComponent>
          <BillPaymentSteps
            steps={steps}
            heading={"Easy breezy payments"}
            subHeading={"Link your RuPay credit card to pay in 4 easy steps"}
          />
          <SliderComponent
            isMargin={true}
            primaryText="There's more in store at Tata Neu"
            secondaryText="More Offers"
          >
            {secondSliderData.map((item, i) => {
              return (
                <SimpleCard
                  key={i}
                  img={item.img}
                  text={item.text}
                  subText={item.subText}
                  link={item.link}
                />
              );
            })}
          </SliderComponent>
          <SingleCardSlider
            primaryText="Testimonials"
            secondaryText="What our customers say"
            textCenter={true}
          >
            {cards.map((card, index) => (
              <div key={index} className="p-[16px] lg:px-[12px] lg:py-[32px]">
                <SingleSliderCard
                  userName={card.userName}
                  voc={card.voc}
                  key={index}
                  index={index}
                />
              </div>
            ))}
          </SingleCardSlider>
          <div className="">
            <FAQ accordionData={accordionData} />
          </div>
        </div>
      </div>
    </UPILayout>
  );
};

export default UPI;
