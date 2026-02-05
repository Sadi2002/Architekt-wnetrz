import Link from "next/link";

export default function ProjectSectionTitles({ data }) {
  return (
    <div className="mb-10 lg:flex lg:w-full lg:justify-between">
      <h2 className="text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)] font-medium mb-5 lg:mb-2.5 uppercase lg:w-1/2">
        ({data.heading})
      </h2>
      <div className="lg:flex lg:flex-col lg:gap-y-10 lg:w-1/2 lg:pl-2.5">
        <p className="text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)] mb-10 w-full lg:font-cormorant lg:text-[26px] lg:leading-[42px] lg:max-w-[560px] lg:font-medium lg:mb-0">
          {data.description}
        </p>
        <div className="flex w-full justify-end pl-[12px] md:justify-start">
          <button className="font-medium text-[14px] relative after:content-[''] after:absolute after:h-[1px] after:bg-black after:w-full after:bottom-[-1px] after:left-0 before:content-[''] before:absolute before:h-[7px] before:bg-[#D28E7F] before:w-[7px] before:top-[7px] before:left-[-12px] before:rounded-2xl cursor-pointer md:text-[16px] md:before:top-[9px]">
            <Link href={data.button.link}>{data.button.label}</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
