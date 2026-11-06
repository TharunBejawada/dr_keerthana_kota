"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV, SOCIALS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/data";
import { scrollToId } from "./SmoothScroll";

export default function Header() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setStuck(window.scrollY > 76);
      // active section = last section whose top is above the 40% line
      const line = window.innerHeight * 0.4;
      let cur = "home";
      for (const n of NAV) {
        const el = document.getElementById(n.id);
        if (el && el.getBoundingClientRect().top <= line) cur = n.id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className="relative z-50">
      {/* top bar */}
      <div className="bg-navy text-white h-[76px] flex items-center">
        <div className="w-full max-w-[1440px] mx-auto px-5 lg:px-[68px] flex items-center justify-between">
          <a href={`tel:${PHONE_TEL}`} className="font-inter font-medium text-[15px] sm:text-[20px] hover:opacity-80 transition-opacity">
            Book An Appointment : {PHONE_DISPLAY}
          </a>
          <div className="hidden md:flex items-center gap-[22px] pr-[18px]">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                className="w-11 h-11 rounded-full bg-[#d3dfea] flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110 hover:-translate-y-0.5 group"
              >
                <span aria-hidden className="block w-6 h-6 bg-navy" style={{ WebkitMask: `url(/icons/${s.icon}.svg) center/contain no-repeat`, mask: `url(/icons/${s.icon}.svg) center/contain no-repeat` }} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* nav */}
      <div className={`sticky top-0 z-50 bg-sky transition-shadow duration-300 ${stuck ? "shadow-[0_6px_24px_rgba(2,61,110,0.15)]" : ""}`}>
        <div className="max-w-[1440px] mx-auto px-5 lg:px-[68px] h-[72px] lg:h-[114px] flex items-center justify-between lg:justify-start">
          <button onClick={() => go("home")} aria-label="Susheela Hospital – home" className="cursor-pointer lg:w-[213px] shrink-0">
            <Image src="/images/logo.png" alt="Susheela Hospital" width={213} height={87} priority className="h-[52px] lg:h-[87px] w-auto" />
          </button>

          <nav className="hidden lg:flex items-center gap-6 ml-[78px] -mt-[24px]" aria-label="Main">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className={`relative font-inter font-medium text-[16px] py-1 cursor-pointer transition-colors ${
                  active === n.id ? "text-brand font-semibold" : "text-ink hover:text-brand"
                }`}
              >
                {n.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-[2px] bg-gold transition-all duration-300 ${
                    active === n.id ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
          </nav>

          <button
            className="lg:hidden w-11 h-11 flex flex-col items-center justify-center gap-[5px] cursor-pointer"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span className={`h-[2px] w-6 bg-navy transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-[2px] w-6 bg-navy transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`h-[2px] w-6 bg-navy transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-sky border-t border-navy/10"
            >
              <div className="px-5 py-3 flex flex-col">
                {NAV.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => go(n.id)}
                    className={`text-left font-inter font-medium py-3 border-b border-navy/10 ${active === n.id ? "text-brand" : "text-ink"}`}
                  >
                    {n.label}
                  </button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
