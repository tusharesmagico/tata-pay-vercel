import BenefitsSection from "../common-components/info-cards";
import InfoCard from "../common-components/infocard";
import BillPayServices from "../common-components/serviceOffered";
import SimpleCard from "../common-components/SimpleCard";
import SingleCardSlider from "../common-components/SingleCardSlider";
import SingleSliderCard from "../common-components/SingleSliderCard";
import SliderComponent from "../common-components/SliderComponent";
import BillPaymentSteps from "../common-components/stepsSection";
import FAQ from "../page-components/home/FAQ";
import BillsPaymentHero from "./bills-payment-Hero";
import React from "react";
import cardImg5 from "../assets/img/billsPaySlider1.jpg";
import cardImg6 from "../assets/img/upiSlider1.jpg";
import cardImg7 from "../assets/img/cardImg7.png";
import cardImg2 from "../assets/img/cardImg2.png";
import cardImg3 from "../assets/img/cardImg3.png";
import cardImg4 from "../assets/img/cardImg4.png";
import cardImg8 from "../assets/img/cardImg8.jpg";
import BillPaymentLayout from "./BillPaymentLayout";
import ScrollToTop from "../common-components/ScrollToTop";

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

const firstSliderData = [
  {
    img: cardImg5,
    text: "Pay your bills on Tata Neu and earn rewards",
    link: "https://www.tatadigital.com/paybill?utm_source=billpay&utm_medium=organic&utm_campaign=tatapaypage",
  },
  {
    img: cardImg6,
    text: "Scan & Pay on Tata Neu and earn up to 50 NeuCoins",
    link: "https://www.tatadigital.com/payment/vault?utm_source=upi&utm_medium=organic&utm_campaign=tatapaypage",
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

import step1 from "../assets/img/step1.png";
import step2 from "../assets/img/step2.png";
import step3 from "../assets/img/step3.png";
import step4 from "../assets/img/step4.png";

import girlImage1 from "../assets/img/billsPayments-steps1.png";
import girlImage2 from "../assets/img/billsPayments-steps2.png";
import girlImage3 from "../assets/img/billsPayments-steps3.png";
import girlImage4 from "../assets/img/billsPayments-steps4.png";

const steps = [
  {
    image: step1,
    title: "Select multiple bills",
    description: "Select all your due bills and recharges",
    girlImage: girlImage1,
  },
  {
    image: step2,
    title: "View summary and add offers",
    description:
      "Confirm the total amount to be paid and the applicable offers",
    girlImage: girlImage2,
  },
  {
    image: step3,
    title: "Pay using Tata Pay",
    description: "Pay in one go using any of the many payment options",
    girlImage: girlImage3,
  },
  {
    image: step4,
    title: "Enjoy rewards & benefits",
    description: "Redeem your rewards when you shop on Tata Neu",
    girlImage: girlImage4,
  },
];

const accordionData = [
  {
    question: "Which bills can I pay with Tata Neu?",
    text: "Currently, these are the bills you can pay on the Tata Neu app: 1. Electricity, 2. Mobile Prepaid recharge, 3. Mobile Postpaid, 4. Gas Cylinder, 5. Piped Gas, 6. DTH, 7. FASTag, 8. Broadband, 9. Landline, 10. Water, 11. Loan Repayments, 12. Insurance, 13. Municipal Tax, 14. Cable TV, 15. Housing Society, 16. Credit Card, 17. Subscription, 18. Education Fees, 19. Recurring Deposit, 20. Clubs and Associations, 21. Hospital, 22. Hospital and Pathology, 23. Rentals, 24. Donations. You should be able to find most categories on the 'Pay Bills' page. Additionally, for categories like Mobile Prepaid (BSNL / MTNL), Rentals and Donations, you can pay your bills through the banner available on the 'Pay Bills' page.",
  },
  {
    question: "How can I recharge my mobile number?",
    text: "For Prepaid Mobile Recharge: 1. Click on 'Pay bills' on Tata Neu homepage. 2. Scroll down to find 'Mobile Recharge' under the 'Recharges' section. 3. Enter the mobile number or select from contacts. 4. Verify operator and region. 5. Enter amount or select a plan. 6. Click 'Proceed' and complete payment. For Postpaid Mobile Bill Payment: Follow similar steps but select 'Postpaid Mobile' under 'Utilities' section.",
  },
  {
    question: "How can I recharge or pay my broadband bills?",
    text: "1. Click on 'Pay Bills > Broadband' under 'Utilities' section. 2. Select your service provider. 3. Enter required details (Customer ID/Account number/Phone number). 4. Enter or verify the amount. 5. Click 'Proceed'. 6. Choose payment method and complete transaction.",
  },
  {
    question: "How can I recharge my DTH connection?",
    text: "1. Click on 'Pay Bills > DTH' under 'Recharge' or 'Payment categories' section. 2. Select your operator. 3. Enter Customer ID/Mobile number. 4. Enter the amount and click 'Proceed'. 5. Choose payment method and complete transaction.",
  },
  {
    question: "How can I pay my piped gas/electricity/water bill?",
    text: "1. Click on 'Pay bills' on Tata Neu Homepage. 2. Select 'Piped Gas/Electricity/Water' under 'Utilities'. 3. Verify or change state and provider. 4. Enter consumer number. 5. View bill amount and click 'View bill'. 6. Choose payment method and complete transaction.",
  },
  {
    question: "How can I pay my landline bill?",
    text: "1. Click on 'Pay Bills > Landline' under 'Utilities' section. 2. Select your operator. 3. Enter phone number with STD Code. 4. Click 'View bill'. 5. Choose payment method and complete transaction.",
  },
  {
    question:
      "How can I raise a ticket with Tata Neu for my Bill Payment queries?",
    text: "Go to the Tata Neu app home page, click 'Profile>Help', then 'Chat with us'. For issues with Mobile Prepaid (BSNL / MTNL), Rentals and Donations, email customercare@tataneu.com with transaction details.",
  },
  {
    question: "Can I pay my bills using NeuCoins?",
    text: "No, you cannot make bill payments using NeuCoins. However, you can use NeuCoins for shopping across other categories like shopping, travel, grocery, etc.",
  },

  {
    question: "Can I pay multiple bills at once?",
    text: "Yes, you can pay multiple bills at once. Select multiple bills from the 'Your bills and recharges' section, add more bills if needed, and proceed to payment.",
  },
  {
    question: "Where can I find my consumer number?",
    text: "Check a copy of the bill issued by your biller, either physical or e-bill. Your consumer number will be mentioned on it.",
  },

  {
    question: "What if I have an issue/grievance on bill payments?",
    text: "Use the 'Chat with us' option on the Help page or raise a complaint through BBPS, Billdesk, or ICICI customer support links provided. For issues with specific categories, email customercare@tataneu.com with transaction details.",
  },

  {
    question: "Why is my bill status showing as 'Due', when I've already paid?",
    text: "That's odd. A bill is usually shown as 'Due' when a new bill is generated or the old one is yet to be paid. If your new bill has not been generated yet, click on the 'Refresh' button against the bill on your bills & recharge page. If you are sure that you have paid the bill, check the transaction status by clicking on the profile section on the top right corner on the Tata Neu home page. It should reflect one of the following payment statuses: 1. Pending, 2. Success, or 3. Failed. You can also mark your bill as 'Paid on Tata Neu'. This feature allows you to mark the most recent bill displayed on the Tata Neu app as paid, even if you've already paid it through another app or website.",
  },

  {
    question: "How to stop bill payment reminders?",
    text: "If you prefer not to receive bill payment reminders, you can mark the bill as paid on Tata Neu. Follow these steps: 1. Click on 'Pay Bills' on Tata Neu Home page and navigate to the bill payment homepage. 2. In the 'Your Bills and Recharge' section, click on 'View Details' under the respective biller. 3. Click on 'Mark as Paid.' After you click on 'Mark as Paid', a pop up will ask you to confirm the same. After this, you won't receive reminders until the next bill is generated.",
  },
  {
    question: "What is Mark as Paid?",
    text: "'Mark as Paid' is a feature in our Bill Payments system that allows you to mark any overdue or due bill as paid. When you use this feature, the bill will no longer appear in the 'Your Bills and Recharges' section on the bill payments landing page, and you will not receive any notifications or reminders for that bill starting the next day. When a new bill is generated in the following billing cycle, the updated bill will reappear in the 'Your Bills and Recharges' section, and notifications will resume. After marking a bill as paid, you can still view these bills in the 'Manage billers' section under the respective biller, labelled as 'Mark as Paid'.",
  },

  // {
  //   question: "Why is my recurring deposit services provider not available on Tata Neu?",
  //   text: "If you don't see your provider listed, it could be a simple typo or they might not be set up for Recurring Deposits on Tata Neu yet. Stay tuned. We're on it.",
  // }
  // ,{
  //   question: "Why is my bill payment account blocked? / I am Receiving error account blocked while paying bills",
  //   text: "Your bill payments through this account has been blocked because the number of transactions on this account has exceeded the allowed limit on our platform.",
  // }
];

const BillPayment = () => {
  return (
    <>
      <BillPaymentLayout>
        <ScrollToTop />
        <div className="bg-[#FDFDFD]">
          <BillsPaymentHero />
          <BillPayServices />
          <div className="">
            <BenefitsSection />
          </div>

          <div className=" ">
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
                    link={item.link}
                    mainHeading={"Simplify payments & multiple rewards"}
                  />
                );
              })}
            </SliderComponent>

            <BillPaymentSteps
              subHeading={
                "Pay multiple bills together using Tata Pay UPI in 4 easy steps"
              }
              heading={"Easy breezy payments"}
              steps={steps}
            />
            <SliderComponent
              isMargin={true}
              isGradientStyle={true}
              isBlueGradient={true}
              primaryText="There's more in store at Tata Neu"
              secondaryText="More Offers"
            >
              {secondSliderData.map((item) => {
                return (
                  <SimpleCard
                    img={item.img}
                    text={item.text}
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
      </BillPaymentLayout>
    </>
  );
};

export default BillPayment;
