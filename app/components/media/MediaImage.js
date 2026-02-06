import Image from "next/image";
import { urlFor } from "@/lib/sanity/client";

export default function MediaImage({ data }) {
  return (
    <div className="relative aspect-4/6 w-[65%] lg:w-[30%]">
      <Image
        src={urlFor(data.image.asset).url()}
        fill
        alt={data.imageAlt}
        className="object-cover"
      />
      <div className="bg-[rgba(0,0,0,0.37)] absolute top-0 left-0 z-99 w-full h-full"></div>
    </div>
  );
}
