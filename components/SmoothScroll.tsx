"use client";
import { useEffect } from "react";
import Lenis from "lenis";

let lenis: Lenis | null = null;

/** Smoothly scroll to a section by id (falls back to native smooth scroll). */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  // absolute document position of the section, minus the sticky nav height
  const top = id === "home" ? 0 : Math.max(0, el.getBoundingClientRect().top + window.scrollY - 80);
  if (lenis) lenis.scrollTo(top, { duration: 1.4, easing: (t) => 1 - Math.pow(1 - t, 4) });
  else window.scrollTo({ top, behavior: "smooth" });
  history.replaceState(null, "", id === "home" ? location.pathname : `#${id}`);
}

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let raf = 0;
    const loop = (t: number) => {
      lenis?.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    // honour a deep link such as /#faqs
    if (location.hash) setTimeout(() => scrollToId(location.hash.slice(1)), 300);
    return () => {
      cancelAnimationFrame(raf);
      lenis?.destroy();
      lenis = null;
    };
  }, []);
  return null;
}
