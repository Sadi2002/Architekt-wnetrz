import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="w-full h-[90px] px-5 flex items-center absolute top-0 left-0 z-9999 md:px-10 lg:px-12.5 xl:h-[110px] 2xl:h-[140px]">
      <Navigation />
    </header>
  );
}
