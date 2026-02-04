"use client";
import Image from "next/image";
import About1 from "../../public/about1.png";
import About2 from "../../public/ona.png";
import { useIsLessThan1024 } from "../hook/useIsMobile";

export default function About() {
  const isLessThan1024 = useIsLessThan1024();

  return (
    <section className="pt-20 lg:flex lg:justify-between xl:pt-37.5 pb-100">
      <div className="lg:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[55%]">
        <div className="flex flex-col gap-4 px-5 mb-10 md:px-10 lg:px-12.5">
          <p className="text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)]">
            W ciekawie urządzonych pomieszczeniach znacznie przyjemniej się
            przebywa. Jako zespół architektów specjalizujący się na co dzień w
            kompleksowym projektowaniu i wykańczaniu wnętrz doskonale wiemy, jak
            odmienić dowolną przestrzeń, aby stała się nowa, piękna i unikalna.
            Łączy nas branżowe wykształcenie oraz ponad 10-letnie doświadczenie,
            którym chętnie dzielimy się z klientami. Założycielką pracowni jest
            Dominika Malczyk, absolwentka Architektury Wnętrz, a Tulla Interiors
            realizuje inwestycje mieszkaniowe (deweloperskie i prywatne) oraz
            komercyjne.
          </p>
          <p className="text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)]">
            Pomagamy tworzyć przestrzenie funkcjonalne, ergonomiczne i
            komfortowe, pamiętając, że to właśnie one stanowią codzienne miejsce
            do życia. Dobrze przygotowany projekt usprawnia cały proces i jest
            gwarancją powodzenia na etapie wykonawczym. Dbamy o oryginalność,
            detal, dobry design i unikalne koncepcje, które zyskały uznanie
            medialne i branżowe.
          </p>
        </div>
        <div className="flex w-full justify-end px-5 md:px-10 lg:px-[62px] lg:justify-start">
          <button className="mb-10 font-medium relative after:content-[''] after:absolute after:h-[1px] after:bg-black after:w-full after:bottom-[-2px] after:left-0  before:content-[''] before:absolute before:h-[7px] before:bg-[#D28E7F] before:w-[7px] before:top-[10px] before:left-[-12px] before:rounded-2xl cursor-pointer xl:mb-20">
            Czytaj więcej
          </button>
        </div>
        <div className="relative aspect-6/4 w-full lg:w-[70%] 2xl:w-[65%] lg:aspect-5/3 2xl:aspect-7/4">
          <Image
            src={About1}
            alt="test"
            className="object-cover lg:pl-12.5"
            fill
          />
        </div>
      </div>
      {!isLessThan1024 && (
        <div className="aspect-4/5 relative w-[30%] h-1/2 2xl:w-[30%] 2xl:aspect-6/7">
          <Image
            src={About2}
            alt="test"
            fill
            className="object-cover pr-12.5"
          />
        </div>
      )}
    </section>
  );
}
