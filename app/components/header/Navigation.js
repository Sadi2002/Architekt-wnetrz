import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.png";

function Navigation() {
  return (
    <nav className="flex items-center justify-between w-full h-full">
      <Image src={Logo} alt="logo" />
      <ul className="flex items-center gap-12.5 text-white">
        <li>
          <Link
            href="#o-nas"
            className="hover:text-[#F4E5BE] transition-all duration-300 font-medium"
          >
            O nas
          </Link>
        </li>
        <li>
          <Link
            href="#portfolio"
            className="hover:text-[#F4E5BE]  transition-all duration-300 font-medium"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            href="#media-o-nas"
            className="hover:text-[#F4E5BE]  transition-all duration-300 font-medium"
          >
            Media o Nas
          </Link>
        </li>
        <li>
          <Link
            href="#realizacje"
            className="hover:text-[#F4E5BE]  transition-all duration-300 font-medium"
          >
            Realizacje
          </Link>
        </li>
        <li>
          <Link
            href="#uslugi"
            className="hover:text-[#F4E5BE]  transition-all duration-300 font-medium"
          >
            Usługi
          </Link>
        </li>
        <li>
          <Link
            href="#kontakt"
            className="hover:text-[#F4E5BE]  transition-all duration-300 font-medium"
          >
            Kontakt
          </Link>
        </li>
        <li className="px-7 py-2 border border-[#F4E5BE]">
          <Link href="#" className="text-[#F4E5BE]">
            Tulla sklep
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
