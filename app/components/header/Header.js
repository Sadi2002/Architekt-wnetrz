import Navigation from "./Navigation";

export default function Header() {
  return (
    <header
      className="w-full h-[140px] px-12.5 flex items-center absolute top-0 left-0 z-30
    "
    >
      <Navigation />
    </header>
  );
}
