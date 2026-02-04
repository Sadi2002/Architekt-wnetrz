import Header from "./header/Header";
import Hero from "./homePage/Hero";
import Intro from "./components/intro/Intro";
import { sanityClient } from "@/lib/sanity/client";
import { HomePage, NavigationDesktop } from "@/lib/sanity/queries";
import About from "./homePage/About";

export default async function Home() {
  const data = await sanityClient.fetch(HomePage);
  const navigationDesktopData = await sanityClient.fetch(NavigationDesktop);

  const navDesktop = navigationDesktopData;
  const hero = data.heroSection;
  const about = data.aboutSection;

  return (
    <>
      <Intro />
      <Header data={navDesktop} />
      <Hero data={hero} />
      <About data={about} />
    </>
  );
}
