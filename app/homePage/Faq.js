import TitleAndQuestions from "../components/homePage/faq/TitleAndQuestions";

export default function Faq({ data }) {
  return (
    <section className="pt-20 px-5 md:px-10 lg:px-12.5 pb-100 xl:pt-37.5">
      <TitleAndQuestions data={data} />
    </section>
  );
}
