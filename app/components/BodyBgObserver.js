"use client";
import { useEffect } from "react";

export default function BodyAndTitleObserver({ targetId }) {
  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // aktywne tylko, gdy "linia" na górze ekranu przecina target
        const isActive = entry.isIntersecting;

        document.body.classList.toggle("is-dark", isActive);
        target.classList.toggle("is-gold", isActive);
      },
      {
        rootMargin: "100px 0px -100% 0px",
        threshold: 0,
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
      // opcjonalnie: posprzątaj klasy przy unmount
      document.body.classList.remove("is-dark");
      target.classList.remove("is-gold");
    };
  }, [targetId]);

  return null;
}
