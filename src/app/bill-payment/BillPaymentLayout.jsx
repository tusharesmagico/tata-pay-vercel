import React from "react";
export const metadata = {
  title: "Online Bill Payment | Pay Bills Online with Ease - Tata Pay",
  description:
    "Simplify your bill payment process with Tata Pay. Pay bills online easily and securely with our efficient and user-friendly platform. Experience hassle-free online bill payments today!",
  keywords: "online bill payment, pay bills online, bill pay",
  openGraph: {
    title: "Online Bill Payment | Tata Pay",
    description:
      "Tata Pay: Your go-to platform for easy and secure online bill payments. Simplify your life - pay all your bills in one place!",
  },
  other: {
    "data-msv-online-bill-payment": "14800",
    "data-msv-pay-bills-online": "4400",
    "data-msv-bill-pay": "135000",
  },
};

const BillPaymentLayout = ({ children }) => {
  return (
    <div>
      <title>Online Bill Payment | Pay Bills Online with Ease - Tata Pay</title>
      <meta
        name="description"
        content="Simplify your bill payment process with Tata Pay. Pay bills online easily and securely with our efficient and user-friendly platform. Experience hassle-free online bill payments today!"
      />
      <meta
        name="keywords"
        content="online bill payment, pay bills online, bill pay"
      />

      {/* OpenGraph Tags */}
      <meta property="og:title" content="Online Bill Payment | Tata Pay" />
      <meta
        property="og:description"
        content="Tata Pay: Your go-to platform for easy and secure online bill payments. Simplify your life - pay all your bills in one place!"
      />

      {/* Custom Data Attributes */}
      <meta name="data-msv-online-bill-payment" content="14800" />
      <meta name="data-msv-pay-bills-online" content="4400" />
      <meta name="data-msv-bill-pay" content="135000" />

      <link rel="canonical" href="https://www.tatapayments.com/bill-payment" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Webpage",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.tatapayments.com/bill-payment",
            },
            headline: metadata.title,
            description: metadata.description,
            publisher: {
              "@type": "Organization",
              name: "Tata Pay",
              logo: {
                "@type": "ImageObject",
                url: "https://www.tatapayments.com/_next/static/media/tataPayLogo.d4ad05cc.svg",
              },
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.tatapayments.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Bill Payment",
                item: "https://www.tatapayments.com/bill-payment",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "HowTo",
            name: "Pay multiple bills together in 4 easy steps",
            step: [
              {
                "@type": "HowToStep",
                text: "Select multiple bills",
              },
              {
                "@type": "HowToStep",
                text: "View summary and add offers",
              },
              {
                "@type": "HowToStep",
                text: "Pay using Tata Pay",
              },
              {
                "@type": "HowToStep",
                text: "Enjoy rewards & benefits",
              },
            ],
          }),
        }}
      />
      {children}
    </div>
  );
};

export default BillPaymentLayout;
