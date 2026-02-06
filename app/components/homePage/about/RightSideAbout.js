import Image from "next/image";
import { urlFor } from "@/lib/sanity/client";

function RightSideAbout({ data }) {
  return (
    <>
      <div className="aspect-4/5 relative w-[30%] h-1/2 xl:w-[28%] 2xl:w-[30%] 2xl:aspect-6/7 hidden lg:block">
        <Image
          src={urlFor(data.sideImage.asset).url()}
          alt={data.sideImageAlt}
          fill
          className="object-cover pr-12.5"
        />
      </div>
    </>
  );
}

export default RightSideAbout;
