import Header from "./header/Header";
import Hero from "./homePage/Hero";
import Intro from "./components/intro/Intro";
import { sanityClient } from "@/lib/sanity/client";
import { HomePage, NavigationDesktop } from "@/lib/sanity/queries";
import About from "./homePage/About";
import Services from "./homePage/Services";
import Projects from "./homePage/Projects";

export default async function Home() {
  const data = await sanityClient.fetch(HomePage);
  const navigationDesktopData = await sanityClient.fetch(NavigationDesktop);

  const navDesktop = navigationDesktopData;
  const hero = data.heroSection;
  const about = data.aboutSection;
  const projects = data.projectsSection;

  return (
    <>
      <Intro />
      <Header data={navDesktop} />
      <Hero data={hero} />
      <About data={about} />
      <Services />
      <Projects data={projects} />
    </>
  );
}
