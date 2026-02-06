import MediaImage from "../components/media/MediaImage";
import Quote from "../components/media/Quote";

export default function Media({ data }) {
  return (
    <section className="pt-20 px-5 md:px-10 lg:px-12.5 xl:pt-37.5 flex items-center flex-col relative gap-5 lg:gap-10">
      <MediaImage data={data} />
      <Quote data={data} />
    </section>
  );
}
