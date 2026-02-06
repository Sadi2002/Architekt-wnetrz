import Image from "next/image";
import ona from "../../public/ona.png";
import Link from "next/link";

export default function Media() {
  return (
    <section className="pt-20 pb-100 px-5 md:px-10 lg:px-12.5 xl:pt-37.5 flex items-center flex-col relative gap-5 lg:gap-10">
      <div className="relative aspect-4/6 w-[65%] lg:w-[30%]">
        <Image src={ona} fill alt="test" className="object-cover" />
        <div className="bg-[rgba(0,0,0,0.37)] absolute top-0 left-0 z-99 w-full h-full"></div>
      </div>

      <div className="relative text-center text-[clamp(16px,4vw,20px)] leading-[clamp(24px,4vw,28px)] media-active z-99999 font-cormorant flex flex-col gap-5 lg:text-[clamp(26px,4vw,36px)] lg:leading-[clamp(36px,4vw,48px)] lg:max-w-[900px] lg:gap-10">
        <p className="px-5 media-text transition-colors duration-300">
          ,,Dziękuję za wasze życzliwe opinie. Utwierdzają mnie w przekonaniu że
          miejsce które stworzyłam ma sens i przynosi pożytek dla wielu z Was,,
        </p>
        <div className="flex w-full justify-center px-5 md:px-10 lg:px-[62px] ">
          <button className="media-btn transition-colors duration-300 text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)]  font-medium relative after:content-[''] after:absolute after:h-[1px] after:bg-[#000] after:w-full after:bottom-[-1px] after:left-0 cursor-pointer lg:text-[22px] xl:mb-20">
            <Link href="#">Media o nas</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
