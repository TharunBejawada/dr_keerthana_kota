import Reveal from "./Reveal";
import { STEPS } from "@/lib/data";

export default function Journey() {
  return (
    <section className="mt-[29px] pt-[49px] pb-[55px] bg-gradient-to-r from-[#f2faff] to-[#fbefd3]">
      <div className="max-w-[1297px] mx-auto px-5">
        <Reveal className="text-center">
          <p className="font-poppins font-medium text-[16px] tracking-[0.8px] text-navy">YOUR TREATMENT JOURNEY</p>
          <h2 className="font-inter font-bold text-[24px] md:text-[28px] text-brand mt-[6px]">A SIMPLE APPROACH TO BETTER UROLOGICAL HEALTH</h2>
        </Reveal>
        <div className="mt-[32px] grid sm:grid-cols-2 lg:grid-cols-5 gap-[14px]">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1} y={40}>
              <div className="h-full lg:min-h-[310px] bg-white rounded-[8px] px-[29px] pt-[30px] pb-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_30px_rgba(2,61,110,0.15)]">
                <span className="inline-block bg-gold text-white font-poppins font-medium text-[14px] px-[12px] py-[4px] rounded-[3px]">Step 0{i + 1}</span>
                <h3 className="font-poppins font-semibold text-[16px] leading-[21px] text-brand mt-[26px] max-w-[130px]">{s.title}</h3>
                <p className="font-poppins text-[14px] leading-[21px] text-ink mt-[10px]">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
