"use client";

import { useEffect } from "react";

export default function useParallax() {
  useEffect(() => {
    let rafId: number | null = null;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(".parallax"));
    if (elements.length === 0) return;

    function onScroll() {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY || window.pageYOffset;
        const viewportHeight = window.innerHeight;
        elements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const speed = parseFloat(el.dataset.speed || "0.15");
          // Compute amount based on element position in viewport
          const offsetFromCenter = rect.top + rect.height / 2 - viewportHeight / 2;
          const translateY = -offsetFromCenter * speed;
          el.style.transform = `translateY(${translateY}px)`;
        });
      });
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
}
