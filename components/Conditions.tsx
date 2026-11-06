"use client";
import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";
import { CONDITIONS } from "@/lib/data";

export default function Conditions() {
  const [active, setActive] = useState(0);
  return (
    <section id="expertise" className="bg-cream pt-[33px] pb-[36px]">
      <div className="max-w-[1270px] mx-auto px-5">
        <Reveal className="text-center">
          <h2 className="font-inter font-bold text-[22px] text-brand">Urological Conditions We Help Manage</h2>
          <p className="font-poppins text-[16px] leading-[25px] text-ink mt-[14px] max-w-[614px] mx-auto">
            From kidney stones to urinary infections and prostate concerns, get the right evaluation and treatment for your urological health.
          </p>
        </Reveal>
        <div className="mt-[30px] grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-[10px]">
          {CONDITIONS.map((c, i) => {
            const on = i === active;
            return (
              <Reveal key={c.title} delay={i * 0.06} y={40}>
                <button
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`w-full h-[221px] rounded-[19px] flex flex-col items-center text-center pt-[13px] px-[10px] cursor-pointer transition-all duration-500 ${
                    on ? "bg-navy -translate-y-1 shadow-[0_14px_28px_rgba(2,61,110,0.3)]" : "bg-white hover:-translate-y-1 hover:shadow-lg"
                  }`}
                >
                  <Image src={`/images/cond-${i + 1}.png`} alt="" width={82} height={84} className={`h-[84px] w-auto object-contain transition-transform duration-500 ${on ? "scale-110" : ""}`} />
                  <span className={`font-poppins font-semibold text-[11px] leading-4 mt-[14px] min-h-8 flex items-start justify-center ${on ? "text-gold" : "text-brand"}`}>{c.title}</span>
                  <span className={`font-poppins text-[9px] leading-3 mt-[8px] ${on ? "text-white" : "text-ink"}`}>{c.desc}</span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
