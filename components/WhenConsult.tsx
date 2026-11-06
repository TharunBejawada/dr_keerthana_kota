import Image from "next/image";
import Reveal from "./Reveal";
import { ScrollBtn } from "./Button";
import { SIGNS } from "@/lib/data";

export default function WhenConsult() {
  return (
    <>
      <section id="conditions" className="bg-[#f4faff] mt-6 pt-[40px]">
        <div className="max-w-[1290px] mx-auto px-5">
          <Reveal className="text-center">
            <h2 className="font-inter font-bold text-[24px] md:text-[28px] text-brand">WHEN SHOULD YOU CONSULT A UROLOGIST?</h2>
            <p className="font-poppins font-medium text-[18px] tracking-[0.9px] text-navy mt-[10px]">SIGNS THAT MAY REQUIRE A UROLOGY CONSULTATION</p>
          </Reveal>
          <div className="mt-[34px] grid grid-cols-2 lg:grid-cols-4 gap-[18px] pb-[42px]">
            {SIGNS.map((s, i) => (
              <Reveal key={s} delay={(i % 4) * 0.08} y={30}>
                <div className="h-[74px] bg-white rounded-[8px] flex items-center justify-center text-center px-5 font-poppins text-[16px] leading-[22px] text-ink shadow-[0_1px_4px_rgba(2,61,110,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  {s}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#105a96] to-[#889c94] h-auto min-h-[134px] flex items-center">
          <div className="max-w-[1290px] w-full mx-auto px-5 flex flex-col md:flex-row md:items-center justify-between gap-5 py-6">
            <Reveal x={-30} y={0}>
              <p className="font-poppins font-medium text-[18px] md:text-[22px] leading-8 text-white max-w-[640px] md:max-w-[705px]">
                Early medical evaluation can help identify the underlying cause of urinary symptoms and guide appropriate treatment.
              </p>
            </Reveal>
            <Reveal x={30} y={0}>
              <ScrollBtn target="contact" className="min-h-[68px] py-2 px-[22px] rounded-full bg-navy border border-white/80 text-white font-inter font-medium text-[18px] sm:text-[26px] gap-[16px] shadow-[0_4px_6px_rgba(0,0,0,0.2)] md:whitespace-nowrap hover:bg-brand">
                Book a Urology Consultation
              </ScrollBtn>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
