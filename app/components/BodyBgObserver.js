"use client";
import { useEffect } from "react";

export default function BodyAndTitleObserver({ targetId }) {
  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isAtTop = entry.boundingClientRect.top <= 0;

        document.body.classList.toggle("is-dark", isAtTop);
        target.classList.toggle("is-gold", isAtTop);
      },
      {
        rootMargin: "0px 0px -100% 0px",
        threshold: 0,
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [targetId]);

  return null;
}
