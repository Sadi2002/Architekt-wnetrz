"use client";
import Image from "next/image";
import HeroBg from "../../public/hero-bg.jpg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HeroBackgroundImage from "./HeroBacgrkoundImage";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    filter: "blur(15px)",
    y: 26,
  },
  show: (i) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Hero() {
  const [start, setStart] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setTimeout(() => {
        setStart(true);
      }, 50);
    };

    window.addEventListener("app-content-start", handleStart);

    return () => {
      window.removeEventListener("app-content-start", handleStart);
    };
  }, []);

  return (
    <section className="h-[100dvh] sticky top-0 w-full overflow-hidden">
      <div className="absolute inset-0">
        <HeroBackgroundImage src={HeroBg} alt="hero zdjecie" />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.37)] z-10 pointer-events-none" />
      </div>

      <div className="mx-margin-mobile flex flex-col h-full relative md:mx-tablet lg:mx-small-laptop 2xl:mx-desktop">
        <div className="flex flex-col md:items-start absolute bottom-[120px] w-full xl:bottom-[120px] z-20 2xl:bottom-1/2 2xl:translate-y-1/2 max-w-[1560px] items-center mx-auto self-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate={start ? "show" : "hidden"}
            className="text-[#F4E5BE] text-[clamp(1.5rem,8vw,3rem)] leading-[clamp(2.2rem,10vw,3.5rem)] font-medium  lg:text-[70px]  lg:leading-[70px] xl:text-[100px] xl:font-normal-font-weight xl:leading-[100px] uppercase 2xl:leading-[110px] 2xl:text-[160px] max-w-[530px] lg:max-w-[800px] xl:max-w-[1100px] 2xl:max-w-[1920px] font-cormorant flex flex-col items-center w-full gap-[110px]"
          >
            <motion.span
              custom={0}
              variants={item}
              className="w-full flex justify-start tracking-[10px]"
            >
              Tulla
            </motion.span>
            <motion.span
              custom={1}
              variants={item}
              className="w-full flex justify-center tracking-[10px]"
            >
              Home
            </motion.span>
            <motion.span
              custom={2}
              variants={item}
              className="w-full flex justify-end tracking-[10px]"
            >
              Interior
            </motion.span>
          </motion.div>
        </div>
        <p className="text-white font-light-font-weight mb-[40px] text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] max-w-[300px] lg:max-w-[450px] min-[420px]:max-w-[400px] xl:max-w-[660px]  absolute z-999 bottom-5 px-12.5">
          Tullahome Interior to studio projektowania wnętrz, w którym tworzymy
          dopracowane, funkcjonalne przestrzenie — od układu po wykończenie.
          Opieramy się na ponadczasowej estetyce i dbałości o detale, aby
          powstawały wnętrza idealnie dopasowane do Ciebie i Twojego stylu
          życia.
        </p>
      </div>

      <span className="absolute bottom-2 right-12.5 mx-margin-mobile font-normal-font-weight text-[#c6c6c6] text-[10px] md:mx-tablet md:bottom-[30px]  md:right-12.5 md:text-[14px] opacity-[64%] 2xl:mx-desktop z-9999">
        (przewiń w dół)
      </span>
    </section>
  );
}
