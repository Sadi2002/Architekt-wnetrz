"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { urlFor } from "@/lib/sanity/client";

export default function HeroBackgroundImage({ src, alt }) {
  const wrapperRef = useRef(null);

  const [zoomOut, setZoomOut] = useState(false);

  // zoom startowy – ZOSTAJE
  useEffect(() => {
    const onReady = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setZoomOut(true);
        });
      });
    };

    window.addEventListener("app-content-start", onReady);
    return () => window.removeEventListener("app-content-start", onReady);
  }, []);

  // parallax – ZOSTAJE
  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024;

    if (!window.__PERF_READY__) return;

    if (!isDesktop) return;
  }, [zoomOut]);

  return (
    <div ref={wrapperRef} className="h-full will-change-transform">
      <Image
        src={urlFor(src).url()}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className={`
    object-cover
    will-change-transform
    transition-transform
    duration-[1200ms]
    ease-[cubic-bezier(0.76,0,0.24,1)]
    ${zoomOut ? "scale-100" : "scale-105"}
    z-0
  `}
      />

      <div className="absolute inset-0 bg-[rgba(0,0,0,0.56)] z-100 pointer-events-none" />
    </div>
  );
}
