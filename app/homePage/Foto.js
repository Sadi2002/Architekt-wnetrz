import Image from "next/image";
import ona from "../../public/ona.png";
import Link from "next/link";

export default function Foto() {
  return (
    <section className="pt-20 md:px-10 lg:px-12.5 xl:pt-37.5 flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <div className="relative aspect-5/6 w-[65%]">
          <Image src={ona} alt="test" className="object-cover" fill />
        </div>

        <div className="flex flex-col gap-5">
          <p className="foto-text text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)] text-white font-cormorant px-5">
            Dziękuję za wasze życzliwe opinie. Utwierdzają mnie w przekonaniu że
            miejsce które stworzyłam ma sens.
          </p>

          <div className="flex w-full justify-end px-5 md:px-10 lg:px-[62px] lg:justify-start">
            <button className="foto-btn text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)]  mb-10 relative after:content-[''] after:absolute after:h-[1px] after:bg-[#F4E5BE] [body.is-dark_&]:text-[#F4E5BE] after:w-full after:bottom-[-2px] after:left-0 cursor-pointer xl:mb-20">
              <Link href="#">Zobacz wszystkie</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end pr-5">
        <div className="relative aspect-4/3 w-[75%]">
          <Image src={ona} alt="test" className="object-cover" fill />
        </div>
      </div>
    </section>
  );
}
