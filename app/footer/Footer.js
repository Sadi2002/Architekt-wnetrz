import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between pb-5 text-white mt-20 pt-20 px-5 md:px-10 lg:px-12.5 lg:items-end lg:flex-row xl:pt-50 bg-[#181818] xl:mt-37.5 xl:pb-10 lg:gap-5 overflow-hidden">
      <h2 className="order-5 text-[100px] leading-[75px] font-cormorant text-[#F4E5BE] uppercase lg:text-[150px] lg:leading-[100px] lg:order-[0]">
        Tulla
      </h2>
      <div className="w-full mb-10 lg:w-auto lg:mb-0">
        <ul className="flex flex-col gap-2.5">
          <li>
            <Link href="#">Strona główna</Link>
          </li>
          <li>
            <Link href="#">O nas</Link>
          </li>
          <li>
            <Link href="#">Portfolio</Link>
          </li>
          <li>
            <Link href="#">Media o nas</Link>
          </li>
          <li>
            <Link href="#">Realizacje</Link>
          </li>
          <li>
            <Link href="#">Usługi</Link>
          </li>
          <li>
            <Link href="#">Kontakt</Link>
          </li>
        </ul>
      </div>
      <div className="w-full mb-10 lg:w-auto lg:mb-0">
        <ul className="flex flex-col gap-2.5">
          <li>
            <Link href="#">ul. Sobieskiego 2a 85-060 Bydgoszcz </Link>
          </li>
          <li>
            <Link href="tel:+48503816898">+48 503 816 898</Link>
          </li>
          <li>
            <Link href="mailto:dominika@tuto-tulla.com">
              dominika@tuto-tulla.com
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full mb-10 lg:w-auto lg:mb-0">
        <ul className="flex flex-col gap-2.5">
          <li>REGON: 388828215</li>
          <li>NIP: 554 299 34 31 </li>
        </ul>
      </div>
      <div className="w-full mb-20 lg:w-auto lg:mb-0">
        <ul className="flex flex-col gap-2.5">
          <li>Polityka cookies</li>
          <li>Polityka prywatności</li>
        </ul>
      </div>
    </footer>
  );
}
