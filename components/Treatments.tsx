import Image from "next/image";
import Reveal from "./Reveal";
import { TREATMENTS } from "@/lib/data";

export default function Treatments() {
  return (
    <section id="treatments" className="bg-mist mt-8 pt-[31px] pb-[36px]">
      <div className="max-w-[1270px] mx-auto px-5">
        <Reveal className="text-center">
          <p className="font-poppins font-medium text-[16px] tracking-[1.6px] text-navy">ADVANCED TREATMENTS &amp; PROCEDURES</p>
          <h2 className="font-inter font-bold text-[26px] text-brand mt-[6px]">MODERN UROLOGICAL TREATMENTS</h2>
          <p className="font-poppins font-medium text-[16px] text-navy mt-[4px]">Minimally Invasive Solutions for Urological Conditions</p>
          <p className="font-poppins text-[16px] leading-[25px] text-ink mt-[7px] max-w-[785px] mx-auto">
            Dr. Keerthana Kota provides evaluation and treatment planning for various urological conditions, including procedures designed to reduce surgical trauma when clinically appropriate.
          </p>
        </Reveal>
        <div className="mt-[24px] grid sm:grid-cols-2 lg:grid-cols-4 gap-[12px]">
          {TREATMENTS.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.1} y={50}>
              <article className="group h-full bg-paper rounded-[19px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_36px_rgba(2,61,110,0.18)] min-h-[491px]">
                <div className="h-[200px] overflow-hidden">
                  <Image src={`/images/treat-${i + 1}.png`} alt={t.title} width={298} height={200} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="px-[28px] pt-[28px] pb-6">
                  <h3 className="font-poppins font-semibold text-[18px] leading-[25px] text-brand min-h-[50px]">{t.title}</h3>
                  <p className="font-poppins text-[11px] leading-[15px] text-ink mt-[10px] min-h-[60px]">{t.desc}</p>
                  <p className="font-poppins font-medium text-[12px] text-brand mt-[14px]">Key Benefits:</p>
                  <ul className="font-poppins text-[10px] leading-[19px] text-ink mt-[6px] -mr-4">
                    {t.benefits.map((b) => (
                      <li key={b}>•&nbsp;{b}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
