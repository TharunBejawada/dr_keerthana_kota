"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { FAQS } from "@/lib/data";

function Item({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className={`rounded-[9px] border transition-colors duration-300 ${open ? "bg-brand border-brand text-white" : "bg-paper border-navy text-navy hover:shadow-md"}`}>
      <button onClick={onToggle} aria-expanded={open} className={`w-full flex items-center justify-between gap-4 text-left px-[29px] cursor-pointer ${open ? "pt-[14px] pb-[6px]" : "min-h-[85px]"}`}>
        <span className="font-poppins font-semibold text-[16px] leading-[22px]">{q}</span>
        <span className="relative w-[18px] h-[18px] shrink-0">
          <span className="absolute left-0 top-[7.5px] w-[18px] h-[3px] bg-current" />
          <span className={`absolute left-[7.5px] top-0 w-[3px] h-[18px] bg-current transition-transform duration-300 ${open ? "scale-y-0" : ""}`} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: "easeInOut" }} className="overflow-hidden">
            <p className="font-poppins text-[12px] leading-[18px] px-[29px] pb-[16px] max-w-[500px]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faqs" className="bg-[#f4faff] mt-[28px] pt-[48px] pb-[48px]">
      <div className="max-w-[1278px] mx-auto px-5">
        <Reveal>
          <h2 className="font-inter font-bold text-[26px] md:text-[28px] text-brand text-center">FREQUENTLY ASKED QUESTIONS</h2>
        </Reveal>
        <div className="mt-[38px] grid md:grid-cols-2 gap-x-[27px] gap-y-[18px] items-start">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={(i % 2) * 0.1} y={24}>
              <Item q={f.q} a={f.a} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
