import LeftSideAbout from "../components/homePage/about/LeftSideAbout";
import RightSideAbout from "../components/homePage/about/RightSideAbout";

export default function About({ data }) {
  return (
    <section className="pt-10 lg:flex lg:justify-between xl:pt-37.5">
      <LeftSideAbout data={data} />
      <RightSideAbout data={data} />
    </section>
  );
}
