import Image from "next/image";
import { urlFor } from "@/lib/sanity/client";

export default function Partners({ data }) {
  return (
    <section className="pt-20 xl:pt-37.5 overflow-hidden">
      <div className="marquee py-2.5">
        {[...data.logos, ...data.logos].map((logo, i) => (
          <div key={i} className="pr-10 lg:pr-20 shrink-0">
            <Image
              src={urlFor(logo.image.asset).url()}
              alt={logo.alt}
              className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto object-contain"
              width={100}
              height={50}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
