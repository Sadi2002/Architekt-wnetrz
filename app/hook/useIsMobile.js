"use client";
import { useEffect, useState } from "react";

export function useIsLessThan1024(width = 1024) {
  const [isLessThan1024, setIsLessThan1024] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLessThan1024(window.innerWidth < width);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isLessThan1024;
}
