import Link from "next/link";
import Menu from "../components/footer/Menu";
import Contact from "../components/footer/Contact";
import Company from "../components/footer/Company";
import Legal from "../components/footer/Legal";
import Brand from "../components/footer/Brand";

export default function Footer({ data }) {
  return (
    <footer className="flex flex-col items-center justify-between pb-5 text-white mt-20 pt-20 px-5 md:px-10 lg:px-12.5 lg:items-end lg:flex-row xl:pt-50 bg-[#181818] xl:mt-20 xl:pb-10 lg:gap-5 overflow-hidden border-t border-[rgba(255,255,255,0.25)]">
      <Brand data={data} />
      <Menu data={data} />
      <Contact data={data} />
      <Company data={data} />
      <Legal data={data} />
    </footer>
  );
}
