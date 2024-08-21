// components/MouseHalo.tsx
"use client";

import { useEffect } from "react";

export default function MouseHalo() {
  useEffect(() => {
    const halo = document.createElement("div");
    halo.className = "halo";
    document.body.appendChild(halo);

    const moveHalo = (e: MouseEvent) => {
      halo.style.left = `${e.clientX}px`;
      halo.style.top = `${e.clientY}px`;
    };

    const handleMouseEnter = () => {
      halo.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      halo.style.opacity = "0";
    };

    document.addEventListener("mousemove", moveHalo);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", moveHalo);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeChild(halo);
    };
  }, []);

  return null;
}
