"use client";
import Image from "next/image";
import { FOOTER_LINKS, MOBILE_DISPLAY } from "@/lib/data";
import { scrollToId } from "./SmoothScroll";

export default function Footer() {
  return (
    <footer className="mt-[44px]">
      <div className="bg-sky border-t-[3px] border-gold">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-[72px] py-10 lg:pt-[28px] lg:pb-[40px] grid md:grid-cols-2 lg:grid-cols-[355px_380px_241px_1fr] gap-8 lg:gap-0">
          <Image src="/images/logo.png" alt="Susheela Hospital" width={314} height={129} className="w-[314px] h-auto" />
          <div className="lg:pt-[12px]">
            <p className="font-inter font-bold text-[26px] text-ink">Dr. Keerthana Kota</p>
            <p className="font-poppins text-[18px] text-ink mt-[10px]">MBBS, MS, DNB (Urology)</p>
            <p className="font-poppins text-[18px] text-ink mt-[4px]">Consultant Urologist | Hyderabad</p>
          </div>
          <ul className="flex flex-col gap-[14px] lg:pt-[8px]">
            {FOOTER_LINKS.map((l) => (
              <li key={l.label}>
                <button onClick={() => scrollToId(l.id)} className="font-poppins text-[18px] text-ink cursor-pointer transition-all hover:text-brand hover:translate-x-1">{l.label}</button>
              </li>
            ))}
          </ul>
          <div>
            <p className="font-inter font-semibold text-[18px] text-ink">Consultation</p>
            <p className="font-poppins text-[18px] leading-[27px] text-ink mt-1 max-w-[260px]">Susheela Hospital, Kothapet, Hyderabad</p>
            <p className="font-inter font-semibold text-[18px] text-ink mt-5">Phone</p>
            <a href={`tel:${MOBILE_DISPLAY.replace(/\s/g, "")}`} className="font-poppins text-[18px] text-ink hover:text-brand">+91 7013048272</a>
          </div>
        </div>
      </div>
      <div className="bg-gold h-[73px] flex items-center justify-center px-4">
        <p className="font-inter font-medium text-[18px] md:text-[21px] text-white text-center">© 2026 Dr. Keerthana Kota. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
