import Link from "next/link";

export default function RightSide({ data }) {
  return (
    <div className="border-t border-[rgba(0,0,0,0.25)] lg:w-[100%] xl:w-[1000px] 2xl:mt-[24px]">
      {data.services.map((service, index) => (
        <div
          key={index}
          className="flex pt-5 flex-col gap-5 pb-7 border-b border-[rgba(0,0,0,0.25)] lg:flex-row lg:gap-x-[30px] lg:justify-between  2xl:pt-12"
        >
          <div className="flex">
            <h3 className="text-[clamp(22px,6vw,30px)] leading-[clamp(22px,6vw,36px)] font-cormorant font-medium lg:min-w-[200px] lg:px-2.5 lg:text-[36px] ">
              {service.title}
            </h3>
          </div>
          <div className="flex flex-col gap-4 ">
            <p className="text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)] max-w-[650px] lg:max-w-[550px] xl:max-w-[500px] ">
              {service.description}
            </p>
          </div>

          <div className="flex w-full justify-start px-[12px] lg:px-[62px] lg:justify-start lg:hidden">
            <button className="font-medium relative text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)] after:content-[''] after:absolute after:h-[1px] after:bg-black after:w-full after:bottom-[-2px] after:left-0  before:content-[''] before:absolute before:h-[7px] before:bg-[#D28E7F] before:w-[7px] before:top-[10px] before:left-[-12px] before:rounded-2xl cursor-pointer xl:mb-20">
              <Link href={service.button.link}>{service.button.label}</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
