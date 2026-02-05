import HeroImage from "../components/homePage/hero/HeroImage";
import HeroTitle from "../components/homePage/hero/HeroTitle";
import ScrollDown from "../components/homePage/hero/ScrollDown";

export default function Hero({ data }) {
  return (
    <section className="h-[100dvh] relative">
      <HeroImage data={data} />
      <HeroTitle data={data} />
      <ScrollDown data={data} />
    </section>
  );
}
