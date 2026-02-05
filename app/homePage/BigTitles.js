export default function BigTitles({ data }) {
  return (
    <section className="pt-20 lg:flex lg:pt-20 lg:justify-between xl:pt-37.5 font-cormorant font-light text-[120px] md:text-[200px] leading-22 md:leading-35 uppercase relative text-[#333] xl:text-[300px] xl:leading-55 2xl:text-[390px] 2xl:leading-70 overflow-hidden">
      <div className=" translate-x-[-25%] left-[25%]">
        <h2 className="whitespace-nowrap">
          {data.lineOne} {data.lineOne}
        </h2>
        <h2 className="whitespace-nowrap">
          {data.lineTwo} {data.lineTwo}
        </h2>
      </div>
    </section>
  );
}
