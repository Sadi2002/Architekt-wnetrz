"use client";

import Image from "next/image";
import ona from "../../public/ona.png";
import Link from "next/link";
import { urlFor } from "@/lib/sanity/client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();

    if (mql.addEventListener) mql.addEventListener("change", onChange);
    else mql.addListener(onChange);

    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", onChange);
      else mql.removeListener(onChange);
    };
  }, [query]);

  return matches;
}

export default function Foto({ data }) {
  const sectionRef = useRef(null);
  const isLg = useMediaQuery("(min-width: 1024px)");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // prawe szybciej, lewe wolniej
  const yRight = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const yLeft = useTransform(scrollYProgress, [0, 1], [0, -150]);

  // płynność
  const yRightSmooth = useSpring(yRight, {
    stiffness: 120,
    damping: 25,
    mass: 0.2,
  });
  const yLeftSmooth = useSpring(yLeft, {
    stiffness: 120,
    damping: 25,
    mass: 0.2,
  });

  // PARALLAX "W ŚRODKU" ZDJĘĆ (mniejsze wartości)
  const imgYRight = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const imgYLeft = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const imgYRightSmooth = useSpring(imgYRight, {
    stiffness: 120,
    damping: 25,
    mass: 0.2,
  });

  const imgYLeftSmooth = useSpring(imgYLeft, {
    stiffness: 120,
    damping: 25,
    mass: 0.2,
  });

  return (
    <section
      ref={sectionRef}
      className="pt-20 md:px-10 lg:px-12.5 xl:pt-50 flex flex-col gap-10 lg:flex-row lg:justify-center lg:gap-50"
    >
      <motion.div
        style={{ y: isLg ? yLeftSmooth : 0 }}
        className="flex flex-col gap-5 lg:justify-center lg:w-[35%] xl:w-[30%] 2xl:w-[25%] lg:gap-10"
      >
        {/* LEWE ZDJĘCIE – wolniej */}

        <div className="relative aspect-5/6 w-[65%] lg:w-[100%] lg:aspect-4/6 will-change-transform overflow-hidden">
          <motion.div
            style={{ y: isLg ? imgYLeftSmooth : 0, scale: isLg ? 1.15 : 1 }}
            className="absolute inset-0 will-change-transform"
          >
            <div className="relative w-full h-full">
              <Image
                src={urlFor(data.leftImage.asset).url()}
                alt={data.leftImageAlt}
                className="object-cover"
                fill
              />
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="foto-title text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)] font-medium uppercase px-5 lg:px-0 ">
            ({data.title})
          </h2>
          <p className="foto-text text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)] text-white px-5 lg:max-w-[500px] lg:px-0 lg:text-[20px]">
            {data.description}
          </p>

          <div className="flex w-full justify-end px-5 md:px-10 lg:px-0 lg:justify-start">
            <button className="foto-btn text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)] mb-10 relative after:content-[''] after:absolute after:h-[1px] after:bg-[#F4E5BE] [body.is-dark_&]:text-[#F4E5BE] after:w-full after:bottom-[-2px] after:left-0 cursor-pointer lg:mb-0">
              <Link href={data.button.link}>{data.button.label}</Link>
            </button>
          </div>
        </div>
      </motion.div>

      {/* PRAWE ZDJĘCIE – szybciej */}
      <div className="flex justify-end pr-5 lg:w-[40%] lg:justify-start lg:relative lg:top-[100px]">
        <motion.div
          style={{ y: isLg ? yRightSmooth : 0 }}
          className="relative aspect-4/3 w-[80%] lg:aspect-[4/6] lg:will-change-transform lg:overflow-hidden"
        >
          <motion.div
            style={{ y: isLg ? imgYRightSmooth : 0, scale: isLg ? 1.15 : 1 }}
            className="absolute inset-0 will-change-transform"
          >
            <div className="relative w-full h-full">
              <Image
                src={urlFor(data.rightImage.asset).url()}
                alt={data.rightImageAlt}
                className="object-cover"
                fill
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
