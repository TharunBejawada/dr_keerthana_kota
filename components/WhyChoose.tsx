import Image from "next/image";
import Reveal from "./Reveal";
import { WHY } from "@/lib/data";

// Figma order: left column (1,3,5) and right column (2,4,6)
const order = [0, 1, 2, 3, 4, 5];
// sprite crops exported from Figma are numbered by their position in the file, not in this list
const ICON = [1, 4, 2, 5, 3, 6];

export default function WhyChoose() {
  return (
    <section id="why" className="relative bg-cream mt-8 overflow-hidden min-h-[460px]">
      <div className="max-w-[1440px] mx-auto relative">
        <div className="relative px-5 lg:px-[105px] pt-[36px] pb-10 lg:w-[66%]">
          <Reveal>
            <h2 className="font-inter font-bold text-[26px] lg:text-[28px] text-brand">WHY CHOOSE DR. KEERTHANA KOTA?</h2>
            <p className="font-poppins font-medium text-[18px] tracking-[1.8px] text-navy mt-[10px]">EXPERIENCE. EXPERTISE. PERSONALISED CARE.</p>
          </Reveal>
          <div className="mt-[34px] grid sm:grid-cols-2 gap-x-[22px] gap-y-[22px] lg:gap-y-[22px] lg:w-[804px] lg:grid-cols-[392px_392px]">
            {order.map((i, n) => (
              <Reveal key={WHY[i].title} delay={n * 0.08} y={30}>
                <div className="flex gap-[20px] group">
                  <Image src={`/images/why-${ICON[i]}.png`} alt="" width={77} height={77} className="w-[77px] h-[77px] shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
                  <div>
                    <h3 className="font-inter font-semibold text-[18px] leading-[24px] text-brand">{WHY[i].title}</h3>
                    <p className="font-poppins text-[14px] leading-[21px] text-ink mt-1">{WHY[i].desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal x={80} y={0} className="hidden lg:block absolute top-0 right-0 w-[516px] h-full">
          <Image src="/images/why-image.png" alt="Endoscopy procedure" width={516} height={460} className="w-full h-full object-cover rounded-tl-[28px] rounded-bl-[28px]" />
        </Reveal>
      </div>
    </section>
  );
}
