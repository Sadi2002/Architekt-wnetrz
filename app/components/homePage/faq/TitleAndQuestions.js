"use client";

import Image from "next/image";
import arrow from "../../../../public/arrow.png";
import { useState } from "react";

export default function TitleAndQuestions({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <h2 className="text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)] mb-5 uppercase lg:w-1/2">
        ({data.heading})
      </h2>

      <div className="border-t border-[rgba(0,0,0,0.25)] lg:w-[85%] xl:w-[70%] 2xl:w-[50%]">
        {data.items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 pt-6 pb-5 border-b border-[rgba(0,0,0,0.25)] cursor-pointer"
            onClick={() => toggle(index)}
          >
            <div className="flex items-center gap-1 justify-between md:gap-5">
              <h3 className="text-[clamp(14px,4.5vw,20px)] leading-[clamp(24px,6vw,28px)] lg:text-[clamp(16px,5vw,26px)] lg:leading-[clamp(26px,6vw,36px)] pl-2.5">
                {item.question}
              </h3>

              <Image
                src={arrow}
                width={50}
                height={10}
                alt=""
                className={`w-[30px] h-[30px] ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {openIndex === index && (
              <p className="text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)] pr-5 md:pr-10 lg:pr-12.5 pl-2.5 text-white">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
