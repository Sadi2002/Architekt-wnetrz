import Header from "./header/Header";
import Hero from "./homePage/Hero";
import Intro from "./components/Intro";
import { sanityClient } from "@/lib/sanity/client";
import { HomePage } from "@/lib/sanity/queries";

export default async function Home() {
  const data = await sanityClient.fetch(HomePage);
  const hero = data.heroSection;

  return (
    <>
      <Intro />
      <Header />
      <Hero data={hero} />
    </>
  );
}
