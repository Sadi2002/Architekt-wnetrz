import Link from "next/link";
import { urlFor } from "@/lib/sanity/client";
import Image from "next/image";

export default function LeftSideAbout({ data }) {
  return (
    <div className="lg:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[55%]">
      <div className="flex flex-col gap-4 px-5 mb-10 md:px-10 lg:px-12.5">
        <p className="text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)]">
          {data.content1}
        </p>
        <p className="text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)]">
          {data.content2}
        </p>
      </div>
      <div className="flex w-full justify-end px-5 md:px-10 lg:px-[62px] lg:justify-start">
        <button className="mb-10 font-medium relative after:content-[''] after:absolute after:h-[1px] after:bg-black after:w-full after:bottom-[-2px] after:left-0  before:content-[''] before:absolute before:h-[7px] before:bg-[#D28E7F] before:w-[7px] before:top-[10px] before:left-[-12px] before:rounded-2xl cursor-pointer xl:mb-20">
          <Link href={data.button.link}>{data.button.label}</Link>
        </button>
      </div>
      <div className="relative aspect-6/4 w-full lg:w-[70%] 2xl:w-[60%] lg:aspect-5/3 2xl:aspect-7/4">
        <Image
          src={urlFor(data.mainImage.asset).url()}
          alt={data.mainImageAlt}
          className="object-cover lg:pl-12.5"
          fill
        />
      </div>
    </div>
  );
}
