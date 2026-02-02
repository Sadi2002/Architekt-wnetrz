import Link from "next/link";

function Navigation() {
  return (
    <nav className="flex items-center justify-between w-full h-full">
      <span className="text-2xl text-white">Sadowski Studio</span>
      <ul className="flex items-center gap-12.5 text-white">
        <li>
          <Link href="#o-nas">O nas</Link>
        </li>
        <li>
          <Link href="#portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="#media-o-nas">Media o Nas</Link>
        </li>
        <li>
          <Link href="#realizacje">Realizacje</Link>
        </li>
        <li>
          <Link href="#uslugi">Usługi</Link>
        </li>
        <li>
          <Link href="#kontakt">Kontakt</Link>
        </li>
        <li className="px-5 py-2 border border-[#F4E5BE]">
          <Link href="#">Tulla sklep</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
