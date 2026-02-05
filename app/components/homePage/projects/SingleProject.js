import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity/client";

export default function SingleProject({ project, index, aspect }) {
  return (
    <>
      <span className="block mb-2.5 text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)] lg:font-medium">
        (0{index + 1})
      </span>
      <Link href={project.link} className="cursor-pointer">
        <div className={`aspect-${aspect} relative w-full mb-1.25`}>
          <Image
            src={urlFor(project.image.asset).url()}
            alt={project.imageAlt}
            fill
            className="object-cover"
          />
        </div>
        <span className="font-medium block mb-2.5 text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,24px)]">
          {project.title}
        </span>
      </Link>
    </>
  );
}
