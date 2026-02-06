import LeftSide from "../components/homePage/services/LeftSide";
import RightSide from "../components/homePage/services/RightSide";

export default function Services({ data }) {
  return (
    <section
      id="services"
      className="services pt-20 px-5 md:px-10 lg:px-12.5 lg:flex lg:justify-between lg:gap-x-[40px] lg:flex-col xl:pt-37.5 2xl:flex-row"
    >
      <LeftSide data={data} />
      <RightSide data={data} />
    </section>
  );
}
