import React from "react";
export const metadata = {
  title:
    "Best Payment Gateway Solutions | Instant & Secure Payments - Tata Pay",
  description:
    "Discover Tata Pay's best payment gateway for instant and secure online transactions. Our payment solutions ensure seamless processing with maximum security. Experience fast, reliable, and secure online payments.",
  keywords:
    "Payment Gateway, Best payment Gateway, Instant Payments, online payment gateway, Secure payment Gateway, Securepay",
  openGraph: {
    title: "Best Payment Gateway Solutions | Tata Pay",
    description:
      "Tata Pay: The best payment gateway for your business. Instant, secure, and reliable online payment processing. Boost your e-commerce with our cutting-edge payment solutions.",
  },
  other: {
    "data-msv-payment-gateway": "33100",
    "data-msv-best-payment-gateway": "1300",
    "data-msv-instant-payments": "1000",
    "data-msv-online-payment-gateway": "880",
    "data-msv-secure-payment-gateway": "210",
    "data-msv-securepay": "210",
  },
};

const PaymentGatewayLayout = ({ children }) => {
  return (
    <div>
      <title>
        Best Payment Gateway Solutions | Instant & Secure Payments - Tata Pay
      </title>
      <meta
        name="description"
        content="Discover Tata Pay's best payment gateway for instant and secure online transactions. Our payment solutions ensure seamless processing with maximum security. Experience fast, reliable, and secure online payments."
      />
      <meta
        name="keywords"
        content="Payment Gateway, Best payment Gateway, Instant Payments, online payment gateway, Secure payment Gateway, Securepay"
      />

      {/* OpenGraph Tags */}
      <meta
        property="og:title"
        content="Best Payment Gateway Solutions | Tata Pay"
      />
      <meta
        property="og:description"
        content="Tata Pay: The best payment gateway for your business. Instant, secure, and reliable online payment processing. Boost your e-commerce with our cutting-edge payment solutions."
      />

      {/* Custom Data Attributes */}
      <meta name="data-msv-payment-gateway" content="33100" />
      <meta name="data-msv-best-payment-gateway" content="1300" />
      <meta name="data-msv-instant-payments" content="1000" />
      <meta name="data-msv-online-payment-gateway" content="880" />
      <meta name="data-msv-secure-payment-gateway" content="210" />
      <meta name="data-msv-securepay" content="210" />

      <link
        rel="canonical"
        href="https://www.tatapayments.com/payment-gateway"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Webpage",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.tatapayments.com/payment-gateway",
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
                name: "Payment Gateway",
                item: "https://www.tatapayments.com/payment-gateway",
              },
            ],
          }),
        }}
      />
      {children}
    </div>
  );
};

export default PaymentGatewayLayout;
