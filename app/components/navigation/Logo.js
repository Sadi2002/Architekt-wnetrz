import Image from "next/image";
import { urlFor } from "@/lib/sanity/client";
import Link from "next/link";

export default function Logo({ data }) {
  return (
    <Link href="/">
      <div className="relative aspect-square w-12">
        <Image
          src={urlFor(data.logo.image.asset).url()}
          alt={data.logo.alt}
          className="w-12 absolute object-cover"
          fill
        />
      </div>
    </Link>
  );
}
