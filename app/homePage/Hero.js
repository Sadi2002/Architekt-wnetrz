"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HeroBg from "../../public/hero-bg.jpg";
import HeroBackgroundImage from "../components/HeroBacgrkoundImage";

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

export default function Hero({ data }) {
  // ROZDZIELENIE 3 SŁÓW
  const title = data.title.toLowerCase().split(" ");
  const getFirstLetterUppercase = title.map((word) => {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
  });
  const [first, second, third] = getFirstLetterUppercase;

  // ROZDZIELENIE OPISÓW
  const [firstdescription, secondDescrition] = data.description.split(".");

  // ANIMACJA 3 SŁÓW
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
    <section className="h-[100dvh] w-full overflow-hidden px-5 md:px-10 lg:px-12.5 lg:relative">
      <div className="absolute inset-0 overflow-hidden">
        <HeroBackgroundImage src={HeroBg} alt="hero zdjecie" />
      </div>

      <div className="h-full flex w-full relative top-[40px] z-9 lg:static">
        <div className="h-full flex w-full flex-col justify-center gap-8">
          <motion.div
            variants={container}
            initial="hidden"
            animate={start ? "show" : "hidden"}
            className="flex w-full justify-start items-start text-[#F4E5BE] font-cormorant font-regular text-[clamp(50px,15vw,80px)] gap-x-3 flex-wrap leading-[clamp(50px,15vw,80px)] max-w-[500px] lg:flex-col lg:max-w-[85%] lg:self-center lg:gap-10 lg:uppercase xl:max-w-[90%] xl:gap-15 xl:text-[clamp(100px,8vw,160px)] xl:leading-[clamp(100px,8vw,160px)]"
          >
            <motion.span
              custom={0}
              variants={item}
              className="tracking-[3px] lg:flex lg:justify-start lg:w-full xl:tracking-[5px] 2xl:tracking-[10px]"
            >
              {first}
            </motion.span>
            <motion.span
              custom={1}
              variants={item}
              className=" 
          tracking-[3px] lg:flex lg:justify-center lg:w-full xl:tracking-[5px] 2xl:tracking-[10px]"
            >
              {second}
            </motion.span>
            <motion.span
              custom={2}
              variants={item}
              className="tracking-[3px] lg:flex lg:justify-end lg:w-full xl:tracking-[5px] 2xl:tracking-[10px]"
            >
              {third}
            </motion.span>
          </motion.div>
          <div className="flex flex-col gap-4 max-w-[600px] lg:gap-0 lg:absolute lg:bottom-[30px] 2xl:bottom-[50px]">
            <p className=" text-[#E9E9E9] text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)]">
              {firstdescription}.
            </p>
            <p className=" text-[#E9E9E9] text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)]">
              {secondDescrition}.
            </p>
          </div>
        </div>
      </div>

      <span className="absolute bottom-[30px] opacity-[64%] right-5 text-[#E9E9E9] text-[12px] md:right-10 lg:right-12.5 2xl:text-[14px]">
        (przewiń w dół)
      </span>
    </section>
  );
}
