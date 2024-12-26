import React from "react";
export const metadata = {
  title: "UPI Payment Online | Secure UPI ID & Money Transfer - Tata Pay",
  description:
    "Unlock the power of UPI payment with Tata Pay. Manage your UPI ID, transfer money instantly, and enjoy seamless online transactions. Download our UPI app for secure and fast UPI money transfers.",
  keywords:
    "UPI ID, UPI Payment, upi app, upi money transfer, upi payment online",
  openGraph: {
    title: "UPI Payment Online | Tata Pay",
    description:
      "Tata Pay UPI: Secure UPI ID management, instant money transfers, and seamless online transactions. Get our UPI app now!",
  },
  other: {
    "data-msv-upi-id": "49500",
    "data-msv-upi-payment": "14800",
    "data-msv-upi-app": "12100",
    "data-msv-upi-money-transfer": "590",
    "data-msv-upi-payment-online": "390",
  },
};

const UPILayout = ({ children }) => {
  return (
    <div>
      <title>
        UPI Payment Online | Secure UPI ID & Money Transfer - Tata Pay
      </title>
      <meta
        name="description"
        content="Unlock the power of UPI payment with Tata Pay. Manage your UPI ID, transfer money instantly, and enjoy seamless online transactions. Download our UPI app for secure and fast UPI money transfers."
      />
      <meta
        name="keywords"
        content="UPI ID, UPI Payment, upi app, upi money transfer, upi payment online"
      />

      {/* OpenGraph Tags */}
      <meta property="og:title" content="UPI Payment Online | Tata Pay" />
      <meta
        property="og:description"
        content="Tata Pay UPI: Secure UPI ID management, instant money transfers, and seamless online transactions. Get our UPI app now!"
      />

      {/* Custom Data Attributes */}
      <meta name="data-msv-upi-id" content="49500" />
      <meta name="data-msv-upi-payment" content="14800" />
      <meta name="data-msv-upi-app" content="12100" />
      <meta name="data-msv-upi-money-transfer" content="590" />
      <meta name="data-msv-upi-payment-online" content="390" />
      <link rel="canonical" href="https://www.tatapayments.com/upi" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Webpage",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.tatapayments.com/upi",
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
                name: "UPI",
                item: "https://www.tatapayments.com/upi",
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
            name: "Pay multiple bills with Tata Pay UPI",
            step: [
              {
                "@type": "HowToStep",
                text: "Link your RuPay credit card to Tata Pay UPI",
              },
              {
                "@type": "HowToStep",
                text: "Link Rupay Credit Card quickly",
              },
              {
                "@type": "HowToStep",
                text: "Your credit card becomes one of the modes of payment",
              },
              {
                "@type": "HowToStep",
                text: "Assured 1.5% from Tata Pay for every UPI transaction using Credit cards",
              },
            ],
          }),
        }}
      />
      {children}
    </div>
  );
};

export default UPILayout;
