"use client";
import Image from "next/image";
import serviceImage from "../../public/about-k.png";
import { useIsLessThan1024 } from "../hook/useIsMobile";
import Link from "next/link";

export default function Services() {
  const isLessThan1024 = useIsLessThan1024();
  return (
    <section className="pt-20 px-5 pb-100">
      <div className="mb-10">
        <h2 className="uppercase font-medium mb-5">(Nasze usługi)</h2>
        {!isLessThan1024 && (
          <div className="w-full aspect-4/3 relative">
            <Image
              src={serviceImage}
              alt="test"
              fill
              className="object-cover"
            />
          </div>
        )}
        <p className="text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)]">
          Pomagamy tworzyć przestrzenie funkcjonalne, ergonomiczne i komfortowe,
          pamiętając, że to właśnie one stanowią codzienne miejsce do życia.
        </p>
      </div>
      <div className="border-t border-[rgba(0,0,0,0.25)] pt-8">
        <div className="flex flex-col gap-5 pb-8 border-b border-[rgba(0,0,0,0.25)]">
          <h3 className="text-[clamp(18px,4vw,20px)] leading-[clamp(22px,4vw,24px)] font-medium">
            Projektowanie wnętrz
          </h3>
          <div className="flex flex-col gap-5">
            <p className="text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)]">
              Projektowanie wnętrz pozwala nam nie tylko przygotować atrakcyjne
              i stylowe przestrzenie w procesie i na etapie ich powstawania
            </p>
            <div className="flex w-full justify-start pl-[12px] lg:justify-start">
              <button className="font-medium text-[12px] relative after:content-[''] after:absolute after:h-[1px] after:bg-black after:w-full after:bottom-[-2px] after:left-0  before:content-[''] before:absolute before:h-[7px] before:bg-[#D28E7F] before:w-[7px] before:top-[6px] before:left-[-12px] before:rounded-2xl cursor-pointer">
                <Link href="#">Czytaj więcej</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
