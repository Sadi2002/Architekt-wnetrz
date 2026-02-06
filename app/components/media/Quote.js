import Link from "next/link";

export default function Quote({ data }) {
  return (
    <div className="relative text-center text-[clamp(16px,4vw,20px)] leading-[clamp(24px,4vw,28px)] media-active z-99999 font-cormorant flex flex-col gap-5 lg:text-[clamp(26px,4vw,36px)] lg:leading-[clamp(36px,4vw,48px)] lg:max-w-[900px] lg:gap-10">
      <p className="px-5 media-text transition-colors duration-300">
        {data.quote}
      </p>
      <div className="flex w-full justify-center px-5 md:px-10 lg:px-[62px] ">
        <button className="media-btn transition-colors duration-300 text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)]  font-medium relative after:content-[''] after:absolute after:h-[1px] after:bg-[#000] after:w-full after:bottom-[-1px] after:left-0 cursor-pointer lg:text-[22px] xl:mb-20">
          <Link href="#">{data.button.label}</Link>
        </button>
      </div>
    </div>
  );
}
