"use client";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/client";
import { useIsLessThan1024 } from "@/app/hook/useIsMobile";

function RightSideAbout({ data }) {
  const isLessThan1024 = useIsLessThan1024();

  return (
    <>
      {!isLessThan1024 && (
        <div className="aspect-4/5 relative w-[30%] h-1/2 2xl:w-[30%] 2xl:aspect-6/7">
          <Image
            src={urlFor(data.sideImage.asset).url()}
            alt={data.sideImageAlt}
            fill
            className="object-cover pr-12.5"
          />
        </div>
      )}
    </>
  );
}

export default RightSideAbout;
