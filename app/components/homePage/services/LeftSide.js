"use client";
import { useIsLessThan1024 } from "@/app/hook/useIsMobile";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/client";

export default function LeftSide({ data }) {
  console.log(data);
  const isLessThan1535 = useIsLessThan1024(1535);
  return (
    <div className="mb-10 lg:w-[60%] xl:mb-20 2xl:w-[40%]">
      <h2 className="text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)] font-medium mb-5 lg:mb-2.5 uppercase">
        ({data.heading})
      </h2>
      {!isLessThan1535 && (
        <div className="w-[65%] aspect-4/5 relative mb-2.5 xl:w-[65%] 2xl:w-[40%]">
          <Image
            src={urlFor(data.image.asset).url()}
            alt={data.imageAlt}
            fill
            className="object-cover"
          />
        </div>
      )}
      <p className="text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)] max-w-[600px] 2xl:w-[55%]">
        {data.description}
      </p>
    </div>
  );
}
