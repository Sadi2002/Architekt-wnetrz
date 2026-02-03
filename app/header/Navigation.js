"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.png";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isLessThan1024, setIsLessThan1024] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLessThan1024(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="flex items-center justify-between w-full h-full">
      <Image src={Logo} alt="logo" className="w-12" />

      {/* MOBILE */}
      {isLessThan1024 && (
        <div className="flex flex-col gap-2">
          <span className="h-[1px] bg-[#F4E5BE] w-[25px]"></span>
          <span className="h-[1px] bg-[#F4E5BE] w-[25px]"></span>
        </div>
      )}

      {/* DESKTOP */}
      {!isLessThan1024 && (
        <ul className="flex items-center gap-8 text-white xl:gap-10">
          <li>
            <Link
              href="#o-nas"
              className="hover:text-[#F4E5BE] transition-all duration-300 font-regular"
            >
              O nas
            </Link>
          </li>
          <li>
            <Link
              href="#portfolio"
              className="hover:text-[#F4E5BE]  transition-all duration-300 font-regular"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="#media-o-nas"
              className="hover:text-[#F4E5BE]  transition-all duration-300 font-regular"
            >
              Media o Nas
            </Link>
          </li>
          <li>
            <Link
              href="#realizacje"
              className="hover:text-[#F4E5BE]  transition-all duration-300 font-regular"
            >
              Realizacje
            </Link>
          </li>
          <li>
            <Link
              href="#uslugi"
              className="hover:text-[#F4E5BE]  transition-all duration-300 font-regular"
            >
              Usługi
            </Link>
          </li>
          <li>
            <Link
              href="#kontakt"
              className="hover:text-[#F4E5BE]  transition-all duration-300 font-regular"
            >
              Kontakt
            </Link>
          </li>
          <li className="group relative px-7 py-2 border border-[#F4E5BE] cursor-pointer transition-all duration-300 after:bg-[#F4E5BE] after:h-full after:w-[0px] after:ease-[cubic-bezier(0.75,0.10,0.22,1)] after:duration-300 after:absolute after:content-[''] after:left-0 after:top-0 hover:after:w-full">
            <Link
              href="#"
              className=" flex w-full h-full text-[#F4E5BE] group-hover:text-black group-hover:delay-75 transition-all duration-300 relative z-99"
            >
              Tulla sklep
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
