"use client";
import Image from "next/image";
import serviceImage from "../../public/about-k.png";
import { useIsLessThan1024 } from "../hook/useIsMobile";
import Link from "next/link";

export default function Services() {
  const isLessThan1024 = useIsLessThan1024(1535);

  return (
    <section className="pt-20 px-5 pb-100 md:px-10 lg:px-12.5 lg:flex lg:justify-between lg:gap-x-[40px] lg:flex-col xl:pt-37.5 2xl:flex-row">
      <div className="mb-10 lg:w-[60%] xl:mb-20 2xl:w-[40%]">
        <h2 className="text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)] font-medium mb-5 lg:mb-2.5">
          (Nasze usługi)
        </h2>
        {!isLessThan1024 && (
          <div className="w-[65%] aspect-4/5 relative mb-2.5 xl:w-[65%] 2xl:w-[40%]">
            <Image
              src={serviceImage}
              alt="test"
              fill
              className="object-cover"
            />
          </div>
        )}
        <p className="text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)] max-w-[600px] 2xl:w-[55%]">
          Pomagamy tworzyć przestrzenie funkcjonalne, ergonomiczne i komfortowe,
          pamiętając, że to właśnie one stanowią codzienne miejsce do życia.
        </p>
      </div>
      <div className="border-t border-[rgba(0,0,0,0.25)] lg:w-[100%] xl:w-[1000px] 2xl:mt-[24px]">
        <div className="flex pt-5 flex-col gap-5 pb-7 border-b border-[rgba(0,0,0,0.25)] lg:flex-row lg:gap-x-[30px] lg:justify-between">
          <div className="flex">
            <h3 className="text-[clamp(22px,6vw,30px)] leading-[clamp(22px,6vw,36px)] font-cormorant font-semibold lg:min-w-[200px] lg:px-2.5 lg:text-[36px]">
              Projekt wnętrza
            </h3>
          </div>
          <div className="flex flex-col gap-4 ">
            <p className="text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)] max-w-[650px] lg:max-w-[550px] xl:max-w-[500px] ">
              Projektowanie wnętrz pozwala nam nie tylko przygotować atrakcyjne
              i stylowe przestrzenie w procesie i na etapie ich powstawania
            </p>
            <div className="flex w-full justify-end pl-[12px] md:justify-start">
              <button className="font-medium text-[14px] relative after:content-[''] after:absolute after:h-[1px] after:bg-black after:w-full after:bottom-[-1px] after:left-0 before:content-[''] before:absolute before:h-[7px] before:bg-[#D28E7F] before:w-[7px] before:top-[7px] before:left-[-12px] before:rounded-2xl cursor-pointer md:text-[16px] md:before:top-[9px]">
                <Link href="#">Czytaj więcej</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex pt-5 flex-col gap-5 pb-7 border-b border-[rgba(0,0,0,0.25)] lg:flex-row lg:gap-x-[30px] lg:justify-between">
          <h3 className="text-[clamp(22px,6vw,30px)] leading-[clamp(22px,6vw,36px)] font-cormorant font-semibold lg:min-w-[200px] lg:px-2.5 lg:text-[36px]">
            Nadzór wykonawczy
          </h3>
          <div className="flex flex-col gap-4">
            <p className="text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)] max-w-[650px] lg:max-w-[550px] xl:max-w-[500px]">
              Nadzór Inwestorski jest dodatkową usługą przygotowaną dla osób
              ceniących sobie swój czas, lubiących wysoką jakość remontową
            </p>
            <div className="flex w-full justify-end pl-[12px] md:justify-start">
              <button className="font-medium text-[14px] relative after:content-[''] after:absolute after:h-[1px] after:bg-black after:w-full after:bottom-[-1px] after:left-0 before:content-[''] before:absolute before:h-[7px] before:bg-[#D28E7F] before:w-[7px] before:top-[7px] before:left-[-12px] before:rounded-2xl cursor-pointer md:text-[16px] md:before:top-[9px]">
                <Link href="#">Czytaj więcej</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex pt-5 flex-col gap-5 pb-7 border-b border-[rgba(0,0,0,0.25)] lg:flex-row lg:gap-x-[30px] lg:justify-between">
          <h3 className="text-[clamp(22px,6vw,30px)] leading-[clamp(22px,6vw,36px)] font-cormorant font-semibold lg:min-w-[200px] lg:px-2.5 lg:text-[36px]">
            Usługa pod klucz
          </h3>
          <div className="flex flex-col gap-4">
            <p className="text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)] max-w-[650px] lg:max-w-[550px] xl:max-w-[500px]">
              Realizację projekt wraz z usługą wykończenia pod klucz na gotowo
              klient odbiera gotową czystą pachnącą nieruchomość
            </p>
            <div className="flex w-full justify-end pl-[12px] md:justify-start">
              <button className="font-medium text-[14px] relative after:content-[''] after:absolute after:h-[1px] after:bg-black after:w-full after:bottom-[-1px] after:left-0 before:content-[''] before:absolute before:h-[7px] before:bg-[#D28E7F] before:w-[7px] before:top-[7px] before:left-[-12px] before:rounded-2xl cursor-pointer md:text-[16px] md:before:top-[9px]">
                <Link href="#">Czytaj więcej</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex pt-5 flex-col gap-5 pb-7 border-b border-[rgba(0,0,0,0.25)] lg:flex-row lg:gap-x-[30px] lg:justify-between">
          <h3 className="text-[clamp(22px,6vw,30px)] leading-[clamp(22px,6vw,36px)] font-cormorant font-semibold lg:min-w-[200px] lg:px-2.5 lg:text-[36px]">
            Projekty online
          </h3>
          <div className="flex flex-col gap-4">
            <p className="text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)] max-w-[650px] lg:max-w-[550px] xl:max-w-[500px]">
              Wychodząc na przeciw odległości naszych klientów w pracowni Tulla
              przygotowujemy projekty online w Polsce i za granicą.
            </p>
            <div className="flex w-full justify-end pl-[12px] md:justify-start">
              <button className="font-medium text-[14px] relative after:content-[''] after:absolute after:h-[1px] after:bg-black after:w-full after:bottom-[-1px] after:left-0 before:content-[''] before:absolute before:h-[7px] before:bg-[#D28E7F] before:w-[7px] before:top-[7px] before:left-[-12px] before:rounded-2xl cursor-pointer md:text-[16px] md:before:top-[9px]">
                <Link href="#">Czytaj więcej</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
