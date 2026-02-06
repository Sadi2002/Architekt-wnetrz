import Link from "next/link";
export default function DesktopNavigation({ data }) {
  return (
    <>
      <ul className="items-center gap-8 text-white xl:gap-10 hidden lg:flex">
        {data.menu.map((link, i) => (
          <li key={i}>
            <Link
              href={link.link}
              className="hover:text-[#F4E5BE] transition-all duration-300 font-regular"
            >
              {link.label}
            </Link>
          </li>
        ))}

        <li className="group relative px-7 py-2 border border-[#F4E5BE] cursor-pointer transition-all duration-300 after:bg-[#F4E5BE] after:h-full after:w-[0px] after:ease-[cubic-bezier(0.75,0.10,0.22,1)] after:duration-300 after:absolute after:content-[''] after:left-0 after:top-0 hover:after:w-full">
          <Link
            href={data.ctaButton.link}
            className=" flex w-full h-full text-[#F4E5BE] group-hover:text-black group-hover:delay-75 transition-all duration-300 relative z-99"
          >
            {data.ctaButton.label}
          </Link>
        </li>
      </ul>
    </>
  );
}
