import React from "react";
import PaymentAggregatorsHero from "./hero";
import BenefitsSectionPay from "../common-components/benifitSectionPay";

import SliderComponent from "../common-components/SliderComponent";
import SimpleCard from "../common-components/SimpleCard";
import cardImg5 from "../assets/img/cardImg5.png";
import cardImg6 from "../assets/img/cardImg6.jpg";
import cardImg8 from "../assets/img/cardImg8.jpg";
import cardImg7 from "../assets/img/cardImg7.png";
import cardImg2 from "../assets/img/cardImg2.png";
import cardImg3 from "../assets/img/cardImg3.png";
import cardImg4 from "../assets/img/cardImg4.png";
import assurityCard from "../assets/img/assurityCard.png";
import FAQ from "../page-components/home/FAQ";
import Image from "next/image";
import PCICard from "../common-components/PCICard";
import Hotels from "../assets/img/Hotels.png";
import Jewellery from "../assets/img/Jewellery.png";
import Flights from "../assets/img/flight.png";
import Fashion from "../assets/img/fashion.png";
import Luxury from "../assets/img/luxury.png";
import Health from "../assets/img/health.png";
import taj from "../assets/img/taj.png";
import tanishq from "../assets/img/tanishq.png";
import tata1mg from "../assets/img/tata-1mg.png";
import tatacliq from "../assets/img/tata-cliq.png";
import tatacliqluxurylight from "../assets/img/tata-cliq-luxury-light.png";
import airIndia from "../assets/img/air-india.png";
import starbucks from "../assets/img/starbucks.png";
import bigbasket from "../assets/img/bigbasket.png";
import cultfit from "../assets/img/cult-fit-white.png";
import qmin from "../assets/img/qmin.png";
import AutoLogoSlider from "../common-components/AutoLogoSlider";
import AutoLogoSliderMobile from "../common-components/autroLogoSliderMobile";
import GradientHeaderText from "../common-components/GradientHeaderText";
import HeaderText from "../common-components/HeaderText";
import PaymentGatewayLayout from "./PaymentGatewayLayout";
import ScrollToTop from "../common-components/ScrollToTop";
const GiftCardRow = [
  taj,
  tanishq,
  tata1mg,
  tatacliq,
  tatacliqluxurylight,
  airIndia,
  starbucks,
  bigbasket,
  cultfit,
  qmin,
];

const GiftCardRowM1 = [taj, tanishq, tata1mg, tatacliq, tatacliqluxurylight];
const GiftCardRowM2 = [airIndia, starbucks, bigbasket, cultfit, qmin];

const firstSliderData = [
  {
    img: cardImg5,
    text: "Pay your bills on Tata Neu and earn rewards",
  },
  {
    img: cardImg6,
    text: "Enjoy Zero Convenience Fee on all your bill payments",
  },
  {
    img: cardImg7,
    text: "Stay connected with your loved ones. Recharge now on Tata Neu.",
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
    question:
      "I have submitted the onboarding form, but my account is not activated yet.",
    text: "Please check if you received an email from MOB.TPL@tatapayments.com, after you submitted the activation form and respond on the thread. You may also check your promotions, or SPAM folder. Please note the onboarding completion may take up to 3 business weeks. If you do not see any email, please send an email to customercare@tatapayments.com and our team shall get back to you within 2 days.",
  },
  {
    question: "When will my account get activated?",
    text: "Activation of an account is subject to approval from our internal teams and banking partners. Our team will get back to you on the status of your account once the application processing is complete. Please note the onboarding completion may take up to 3 business weeks.",
  },
  {
    question:
      "My account is not yet activated, and I have not received an update for some time. What do I do?",
    text: "In case you have not received an update for more than 21 days, please raise a query by emailing us at customercare@tatapayments.com from your registered email ID and our team will get back to you at the earliest on the status of your account.",
  },
  {
    question: "What are the payment methods supported?",
    text: "We currently support payments through Credit Card and Debit Card of Visa, Mastercard and Rupay.",
  },
  {
    question: "What are the documents needed for activating the account?",
    text: "Physical Certified copies of various documents are required depending on the type of entity (Individual, Company, Partnership, Sole Proprietorship, Trust, etc.). These may include PAN Card, Officially Valid Documents (OVD) like Driving License or Passport, Certificate of Incorporation, Partnership Deed, and other relevant documents. The specific requirements vary based on the type of entity.",
  },
  {
    question: "What does the transaction section in Tata Pay dashboard cover?",
    text: "This section lets you have an overview of the transactions received against your orders, refunds done (if any).",
  },
  {
    question:
      "A payment is marked as failed on my dashboard, but money is debited from the customer's account. What do I do?",
    text: "A payment is said to be in the failed state when we do not receive a successful call back message on the transaction from the issuing bank. In case of a failed transaction, your customer's account should get auto credited based on the issuing bank's refund policies. If the customer's account is debited and we do not receive a successful call back, the amount should be auto refunded by the customer's issuing bank within 5 to 7 business days.",
  },
  {
    question: "What are settlements?",
    text: "Settlement is the pay-out you receive for the money paid by your customer for a particular product/ service.",
  },
  {
    question: "How to check settlement in my bank account?",
    text: "Each settlement has a Unique Transaction Reference (UTR) number, which is provided by our banking partners. You can see this number in the downloaded transaction report and settlement reports. Both these reports are available in the Reports section of Tata Pay dashboard. This is a unique reference number available across banks, which can be used to track a specific settlement in your bank account.",
  },
  {
    question:
      "The status of my settlement shows as failed on the dashboard. What do I do?",
    text: "If you have received a mail from MOB.TPL@tatapayments.com about your account registered for settlement, please revert to the mail with the necessary details. If not, kindly reach out to us at customercare@tatapayments.com",
  },
  {
    question: "How to reconcile settlements along with the transactions made?",
    text: "Tata Pay dashboard provides different types of reports to help you with reconciliations. You may download the Settlement report from the 'reports' section of your dashboard in the monthly or daily format. The report contains transactions and the corresponding settlement IDs.",
  },
  {
    question: "How do I update my settlement bank account information?",
    text: "Please send us an email at customercare@tatapayments.com from your registered email ID with a copy of cancelled cheque/ passbook of current and new account. A request will be placed, and the bank account details shall be updated within 48 Hours of successful validation of the documents shared.",
  },
  {
    question: "How do I close my Tata Pay account?",
    text: "Please write to us at customercare@tatapayments.com for account closure and we will assist you with the same.",
  },
  {
    question: "What is a chargeback?",
    text: "A chargeback is a provision by banks and card networks such as Rupay, Visa & Mastercard to protect buyers from unauthorized or fraudulent payments. Once the cardholder files a complaint with their Issuing Bank, the bank reports the same to the Acquiring bank through the card issuer network. The Acquiring bank then connects with Tata Pay and an investigative procedure is initiated. The time limit to raise a chargeback for the end-customer is 60-120 days.",
  },
  {
    question: "What documents do I need to submit for chargeback?",
    text: "The documents required depend on the chargeback category. For example, for 'Non-receipt of product / service', you need a signed proof of delivery. For 'Duplicate payment', you need a signed proof of delivery for each order. For 'Incorrect Amount', you need an itemized invoice and screenshot of the product page showing the price. The specific requirements vary based on the chargeback reason.",
  },
  {
    question: "How do I report a fraud transaction?",
    text: "Please get in touch with us at customercare@tatapayments.com, reportfraud@tatapayments.com with the transaction details and we will investigate this further. Also, please guide the customer to report the fraud transaction to the card issuing or account holding bank.",
  },
  {
    question: "How do I check the status of my payment/order?",
    text: "The orders are processed at the Merchant end. Upon a successful transaction, you will receive a notification from Merchant and card issuer. For the status of your order, we suggest that you contact the merchant. If the Merchant is not responsive, you can write to us at customercare@tatapayments.com",
  },
  {
    question: "I need help with a transaction that I do not recognize.",
    text: "Please get in touch with us at customercare@tatapayments.com and we will get back to you at the earliest. Please include details such as Merchant Details, Amount and date of debit, Bank account/credit card statement if available, and Transaction id/Unique Transaction Reference number in your email.",
  },
  {
    question:
      "Why does it take so long for a refund to be credited to my account?",
    text: "There are several factors and processes involved during a refund process due to which we advise waiting for 5-7 business days. It would depend on your issuing bank and Merchant.",
  },
  {
    question: "How do I check the status of my refund?",
    text: "Once the merchant initiates the refund and notifies Tata Pay, we would process it with acquiring bank and based on confirmation will send update to the merchant. This means that the refund is successful from our end. Please contact the merchant to check the status of your refund.",
  },
  {
    question:
      "What should I do if I do not receive a refund confirmation mail from Tata Pay?",
    text: "We suggest that you contact the merchant for further details, as the refunds are initiated from merchant's end.",
  },
  {
    question:
      "I have not received my refund even after 7-10 business days. What should I do now?",
    text: "Refunds are ideally credited to you in 5-7 business days. The refund duration may differ depending on the factors including merchants refund policy, payment mode etc. In case you have not received your refund, kindly get in touch with your bank/Merchant.",
  },
  {
    question:
      "I am trying to contact the merchant, but the merchant has not responded to any of my queries. What should I do?",
    text: "All the orders and corresponding transactions are processed at the Merchant end. If the merchant is not responding to your queries even after subsequent follow ups, write to us at customercare@tatapayments.com. You are requested to share details such as Transaction ID, Transaction date, Amount, Order ID, and Issue description.",
  },
  {
    question: "What is the difference between a chargeback and dispute?",
    text: "A dispute is a claim filed by either a cardholder or the issuing bank. There may be multiple stages involved in a dispute until a resolution is received. A chargeback is one stage in the dispute life cycle. If the dispute resolution is not reached during the inquiry stage, a chargeback is initiated by the merchant where the merchant reverses the transaction, and the customer receives their money back.",
  },
  {
    question:
      "How do I raise a dispute or chargeback with a Merchant when a purchase goes wrong?",
    text: "We recommend that customers initiate direct communication with the merchant to resolve issues pertaining to a specific order. If you do not get a satisfactory response, you can then raise a chargeback with the bank who's issued the card or where you have the account. These chargebacks will be raised with TPL by your issuing bank, and we shall assist to amicably resolve the issue.",
  },
  {
    question: "I have not done the transaction & need a refund.",
    text: "The orders are processed at Merchant' end. We recommend customers to initiate a direct communication with their bank / Merchant to get this issue resolved. If the merchant is not responsive, you can write to us at customercare@tatapayments.com.",
  },
  {
    question:
      "How do I report potential fraud or unauthorized transactions to Tata Pay?",
    text: "When you notice any suspicious/potential fraud transaction kindly write to us at customercare@tatapayments.com, reportfraud@tatapayments.com. You are requested to share Unique Transaction Reference (UTR) number and date of transaction. We would also suggest that you make sure that the suspicious/potential fraud transaction you notice has not been made by a family member using your card without your knowledge, or for a recurring payment such as a monthly subscription.",
  },
  {
    question:
      "When should I file a complaint regarding the non-receipt of an order?",
    text: "We suggest that you wait 5-7 business days for physical goods and 1 business day for digital goods. In case you do not receive the services/ goods even after the said time interval or if the items received are materially different, defective, or damaged, then you should visit the merchant website and refer to the terms & conditions, shipping policy, refund policy and contact the merchant to resolve the issue. If the merchant does not respond within 5 business days, you can contact customercare@tatapayments.com to mediate and resolve the issue.",
  },
  {
    question: "What is the process for Cancellation of Orders/Refunds/Returns?",
    text: "All queries relating to cancellation/ return of orders should be routed to the merchant as we only facilitate online payments for merchant. We do not handle shipping or order dispatch. You should directly contact the merchant for queries regarding returns and follow instructions as specified in the return & cancellation policy on the merchant website. Once a refund is initiated, you should get the credit in your bank account within 5-7 business days, failing which you can check the refund status with the merchant.",
  },
  {
    question:
      "Does Tata Pay intervene to resolve a pending dispute between a customer and a merchant?",
    text: "As a first step, we strongly recommend that customers initiate direct communication with the merchant to resolve issues pertaining to a specific order. If you do not get a satisfactory response, you can then raise a chargeback with your bank. These chargebacks will be raised with Tata Pay by your bank and we shall assist to amicably resolve the issue.",
  },
  {
    question: "What should I provide when filing a dispute on Tata Pay?",
    text: "While raising a support ticket you should briefly describe the issue you have faced and share the response you received from the merchant. You are also required to provide details such as Merchant Name/Website, Transaction date, Bank Account/Transaction Details, Amount, Order ID, Transaction ID, Issue description, Reason for dispute, and Supporting documents as per the reason. Once a complaint is raised, TATA PAY would take 3-5 business days to resolve the issue.",
  },
];

const PaymentAggregators = () => {
  return (
    <>
      <PaymentGatewayLayout>
        <ScrollToTop />
        <div className="bg-[#FDFDFD]">
          <PaymentAggregatorsHero />
          <div className=" ">
            <div className=" lg:max-w-[1440px] lg:px-[149px] mx-auto mt-[60px] mb-[49px]">
              <div className="mb-[24px] px-[16px]">
                <div className="mb-[12px]">
                  <GradientHeaderText text="brands we serve" />
                </div>
                <HeaderText text="Powering 10+ Tata brands across 15+ categories" />
              </div>
              <AutoLogoSlider data={GiftCardRow} />
              <AutoLogoSliderMobile data={GiftCardRowM1} />
              <AutoLogoSliderMobile data={GiftCardRowM2} />
            </div>
            <BenefitsSectionPay />

            <div className="py-[32px]  lg:max-w-[1440px]  mx-auto lg:py-[60px]">
              <PCICard />
            </div>
            <SliderComponent
              isMargin={true}
              isGradientStyle={true}
              secondaryText="More Offers"
              primaryText="There's more in store at Tata Neu"
            >
              {secondSliderData.map((item, i) => {
                return (
                  <SimpleCard
                    key={i}
                    img={item.img}
                    text={item.text}
                    link={item.link}
                  />
                );
              })}
            </SliderComponent>
            <div className="">
              <FAQ accordionData={accordionData} />
            </div>
          </div>
        </div>
      </PaymentGatewayLayout>
    </>
  );
};

export default PaymentAggregators;
