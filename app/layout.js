import "./globals.css";

import { Cormorant_Garamond as CormorantGaramond } from "next/font/google";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { FooterData, NavigationDesktop } from "@/lib/sanity/queries";
import { sanityClient } from "@/lib/sanity/client";

export const cormorantGaramond = CormorantGaramond({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-cormorant",
  display: "swap",
});

// export const metadata = {
//   title: "Tulla Home Interior",
//   description: "Tulla Home Interior",
// };

export default async function RootLayout({ children }) {
  const navigationDesktopData = await sanityClient.fetch(
    NavigationDesktop,
    {},
    { next: { revalidate: 3600 } }
  );
  const footerData = await sanityClient.fetch(
    FooterData,
    {},
    { next: { revalidate: 3600 } }
  );
  const navDesktop = navigationDesktopData;
  const footer = footerData;
  console.log(navDesktop);
  return (
    <html lang="pl" className="bg-[#D2C8BF]">
      <body className={`${cormorantGaramond.variable} `}>
        <Header data={navDesktop} />
        {children}
        <Footer data={footer} />
      </body>
    </html>
  );
}
