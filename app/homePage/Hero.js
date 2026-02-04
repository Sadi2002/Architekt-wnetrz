import HeroImage from "../components/hero/HeroImage";
import HeroTitle from "../components/hero/HeroTitle";
import ScrollDown from "../components/hero/ScrollDown";

export default function Hero({ data }) {
  return (
    <section className="px-5 md:px-10 lg:px-12.5 lg:relative">
      <HeroImage data={data} />
      <HeroTitle data={data} />
      <ScrollDown data={data} />
    </section>
  );
}
