"use client";
import { useEffect, useRef } from "react";

export default function BigTitles({ data }) {
  const sectionRef = useRef(null);
  const lineOneRef = useRef(null);
  const lineTwoRef = useRef(null);
  const maxMoveRef = useRef(100); // default mobile

  useEffect(() => {
    const updateMove = () => {
      maxMoveRef.current = window.innerWidth < 1024 ? 100 : 300;
    };

    updateMove();
    window.addEventListener("resize", updateMove);

    let rafId;

    const animate = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0),
        1
      );

      const move = progress * maxMoveRef.current;

      if (lineOneRef.current) {
        lineOneRef.current.style.transform = `translateX(${-move}px)`;
      }

      if (lineTwoRef.current) {
        lineTwoRef.current.style.transform = `translateX(${move}px)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", updateMove);
    };
  }, []);
  return (
    <section
      ref={sectionRef}
      className="pt-20 lg:flex lg:pt-20 lg:justify-between xl:pt-37.5 font-cormorant font-light text-[120px] md:text-[200px] leading-22 md:leading-35 uppercase relative text-[#333] transition-colors duration-300
        [body.is-dark_&]:text-[#F4E5BE]
    [.is-gold_&]:text-[#d4af37] xl:text-[300px] xl:leading-55 2xl:text-[390px] 2xl:leading-70 overflow-hidden"
    >
      <div className="relative translate-x-[-100%] left-[0%] lg:translate-x-[0%] lg:left-[100%]">
        <h2 ref={lineOneRef} className="whitespace-nowrap translate-x-[-50%]">
          {data.lineOne} {data.lineOne} {data.lineOne}
        </h2>
        <h2 ref={lineTwoRef} className="whitespace-nowrap translate-x-[-100%]">
          {data.lineTwo} {data.lineTwo} {data.lineTwo}
        </h2>
      </div>
    </section>
  );
}
