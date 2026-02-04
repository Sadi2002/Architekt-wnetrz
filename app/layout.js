import "./globals.css";

import { Cormorant_Garamond as CormorantGaramond } from "next/font/google";

export const cormorantGaramond = CormorantGaramond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-cormorant",
});

export const metadata = {
  title: "Tulla Home Interior",
  description: "Tulla Home Interior",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body
        className={`antialiased ${cormorantGaramond.variable} bg-[#D2C8BF]`}
      >
        {children}
      </body>
    </html>
  );
}
