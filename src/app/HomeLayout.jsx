import React from "react";
export const metadata = {
  title:
    "Best Online Payment Solutions | Pay, Send & Save Money Securely with Tata Pay",
  description:
    "Experience seamless online payment with Tata Pay. Access digital payment solutions, simplify bill pay, and use our secure payment gateway for all your transactions. Tata Pay: Your one-stop for online payments.",
  keywords:
    "online payment, bill pay, payment gateway, digital payment, payment solutions",
  openGraph: {
    title: "Best Online Payment Solutions | Tata Pay",
    description:
      "Tata Pay: Your ultimate digital payment solution. Seamless online payments, bill pay, and secure payment gateway for all your needs.",
  },
  other: {
    "data-msv-online-payment": "33100",
    "data-msv-bill-pay": "135000",
    "data-msv-payment-gateway": "33100",
    "data-msv-digital-payment": "6600",
    "data-msv-payment-solutions": "480",
  },
};
const HomeLayout = ({ children }) => {
  return (
    <div>
      <title>
        Best Online Payment Solutions | Pay, Send & Save Money Securely with
        Tata Pay
      </title>
      <meta
        name="description"
        content="Experience seamless online payment with Tata Pay. Access digital payment solutions, simplify bill pay, and use our secure payment gateway for all your transactions. Tata Pay: Your one-stop for online payments."
      />
      <meta
        name="keywords"
        content="online payment, bill pay, payment gateway, digital payment, payment solutions"
      />

      {/* OpenGraph Tags */}
      <meta
        property="og:title"
        content="Best Online Payment Solutions | Tata Pay"
      />
      <meta
        property="og:description"
        content="Tata Pay: Your ultimate digital payment solution. Seamless online payments, bill pay, and secure payment gateway for all your needs."
      />

      {/* Custom Data Attributes */}
      <meta name="data-msv-online-payment" content="33100" />
      <meta name="data-msv-bill-pay" content="135000" />
      <meta name="data-msv-payment-gateway" content="33100" />
      <meta name="data-msv-digital-payment" content="6600" />
      <meta name="data-msv-payment-solutions" content="480" />
      <link rel="canonical" href="https://www.tatapayments.com/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Webpage",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.tatapayments.com/",
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
      {children}
    </div>
  );
};

export default HomeLayout;
