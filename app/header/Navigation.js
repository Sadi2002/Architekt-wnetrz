import Logo from "../components/navigation/Logo";
import MobileNavigation from "../components/navigation/MobileNavigation";
import DesktopNavigation from "../components/navigation/DesktopNavigation";

export default function Navigation({ data }) {
  return (
    <nav className="flex items-center justify-between w-full h-full">
      <Logo data={data} />
      <MobileNavigation />
      <DesktopNavigation data={data} />
    </nav>
  );
}
