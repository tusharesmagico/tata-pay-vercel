import localFont from "next/font/local";
import "./globals.css";
import Header from "./common-components/navbar";
import Footer from "./common-components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 400 700 500 800 600 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 400 500 600 700 800 900",
});

// export const metadata = {
//   title: "Tata Pay",
//   description: "Tata pay",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <head>
        <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`bg-[#FDFDFD] text-[#191825] `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
