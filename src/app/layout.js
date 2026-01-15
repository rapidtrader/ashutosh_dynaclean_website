// src/app/layout.jsx

import { Poppins, Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import WhatsAppChatButton from "@/components/common/WhatsAppChatButton";
import CallNowButton from "@/components/common/CallNowButton";
// import TawkToChatWidget from "@/components/common/TawkToChatWidget";
import ChatbaseWidget from "@/components/common/ChatbaseWidget";
import Script from "next/script";

// Google Fonts
const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-poppins",
});

const notoSans = Noto_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-noto",
});

// Global Metadata
export const metadata = {
  title: "Dynaclean Industries - Sweeper Machine, Vacuum Cleaners & Scrubber Driers",
  description:
    "Dynaclean Industries, India's leading manufacturer and supplier in Scrubber, Sweeper, Sweeper truck, Vacuum cleaner, Jet pressure washer and etc.",
  keywords:
    "Sweeper Machines, Road Sweeper Machine, Sweeper Truck, Ride On Sweeper machine, Scooter Mop, Auto Scrubber Drier, Battery Operated Sweeper Truck, High-Pressure-Jet-Washer Escalator Cleaner, Single Disc Scrubber, Ride On Scrubber Drier",
  openGraph: {
    type: "website",
    title: "Dynaclean Industries - Sweeper Machine, Vacuum Cleaners & Scrubber Driers",
    description:
      "Dynaclean Industries, India's leading manufacturer and supplier in Scrubber, Sweeper, Sweeper truck, Vacuum cleaner, Jet pressure washer and etc.",
    url: "https://dynacleanindustries.com/",
    images: [
      {
        url: "https://dynacleanindustries.com/Home/Banner/2.webp",
        alt: "dynacleanindustries",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TF8DHBC8');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${poppins.variable} ${notoSans.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TF8DHBC8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Google Ads Global Site Tag (gtag.js) - AW-16696445833 */}
       
        {/* End Google Ads Tag */}

        {/* Google Ads Global Site Tag (gtag.js) - AW-17388558075 */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17388558075"
          strategy="afterInteractive"
        />
        <Script
          id="google-ads-17388558075"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17388558075');
            `,
          }}
        />
        {/* End Google Ads Tag */}



    

        <Header />
        {children}
        <CallNowButton />
      <ChatbaseWidget />
        <WhatsAppChatButton />
        <Footer />
      </body>
    </html>
  );
}
