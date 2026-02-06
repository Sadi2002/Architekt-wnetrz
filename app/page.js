import Hero from "./homePage/Hero";
import Intro from "./components/intro/Intro";
import { sanityClient } from "@/lib/sanity/client";
import { HomePage } from "@/lib/sanity/queries";
import About from "./homePage/About";
import Services from "./homePage/Services";
import Projects from "./homePage/Projects";
import BigTitles from "./homePage/BigTitles";
import Partners from "./homePage/Partners";
import Faq from "./homePage/Faq";

export default async function Home() {
  const data = await sanityClient.fetch(HomePage);

  const hero = data.heroSection;
  const about = data.aboutSection;
  const services = data.servicesSection;
  const projects = data.projectsSection;
  const bigTitles = data.bigTitlesSection;
  const partners = data.partnersSection;
  const faq = data.faqSection;

  return (
    <>
      {/* <Intro /> */}
      <Hero data={hero} />
      <About data={about} />
      <Services data={services} />
      <Projects data={projects} />
      <BigTitles data={bigTitles} />
      <Partners data={partners} />
      <Faq data={faq} />
    </>
  );
}
