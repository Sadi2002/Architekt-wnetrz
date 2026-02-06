import Image from "next/image";
import { urlFor } from "@/lib/sanity/client";

export default function LeftSide({ data }) {
  return (
    <div className="mb-10 lg:w-[60%] xl:mb-20 2xl:w-[40%]">
      <h2 className="text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)] font-medium mb-5 lg:mb-2.5 uppercase">
        ({data.heading})
      </h2>

      <div className="w-[65%] aspect-4/5 relative mb-2.5 xl:w-[65%] 2xl:w-[40%] hidden 2xl:block">
        <Image
          src={urlFor(data.image.asset).url()}
          alt={data.imageAlt}
          fill
          className="object-cover"
        />
      </div>

      <p className="text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)] max-w-[600px] 2xl:w-[55%]">
        {data.description}
      </p>
    </div>
  );
}
