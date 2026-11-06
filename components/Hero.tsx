"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollBtn } from "./Button";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/data";

const item = (i: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  return (
    <section id="home" className="relative mt-[17px] min-h-[501px] overflow-hidden bg-[#eef6fb]">
      <Image src="/images/hero-bg.png" alt="" fill priority sizes="100vw" className="object-cover object-left" />
      <div className="absolute inset-0 hidden md:block">
        <div className="relative max-w-[1440px] mx-auto h-full">
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 1.03 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[55.88%] w-[30.88%] top-[3.8px]"
          >
            <Image src="/images/hero-doctor.png" alt="Dr. Keerthana Kota, Consultant Urologist" width={445} height={497} priority className="w-full h-auto" />
          </motion.div>
        </div>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-5 lg:px-[146px] min-h-[501px] flex items-start pt-[60px] md:pt-[62px] pb-10">
        <div className="max-w-[570px]">
          <motion.p {...item(0)} className="font-inter font-medium text-[18px] md:text-[21px] text-[#100000]">
            12+ Years of Clinical Experience
          </motion.p>
          <motion.h1 {...item(1)} className="font-inter font-extrabold text-[30px] md:text-[36px] text-navy mt-[15px] leading-[1.45]">
            Dr. Keerthana Kota
          </motion.h1>
          <motion.p {...item(2)} className="font-inter font-semibold text-[19px] md:text-[21px] text-brand mt-[6px]">
            Consultant Urologist in Hyderabad
          </motion.p>
          <motion.p {...item(2)} className="font-inter font-bold text-[19px] md:text-[24px] text-navy mt-[4px]">
            MBBS, MS, DNB (Urology)
          </motion.p>
          <motion.p {...item(3)} className="font-inter text-[16px] md:text-[18px] text-[#000102] leading-[26px] mt-[10px] max-w-[532px]">
            Specialised care for kidney stones, urinary disorders, prostate conditions, and other urological concerns.
          </motion.p>
          <motion.div {...item(4)} className="flex flex-wrap gap-[27px] mt-[26px]">
            <ScrollBtn
              target="contact"
              icon="/images/icon-calendar-lg.png"
              iconSize={50}
              className="h-[73px] w-full sm:w-[280px] bg-gold rounded-[10px] text-white font-inter font-semibold text-[18px] px-6 shadow-[0_4px_4px_rgba(0,0,0,0.25)] gap-[12px] pl-6"
            >
              Book Appointment
            </ScrollBtn>
            <a
              href={`tel:${PHONE_TEL}`}
              className="h-[73px] w-full sm:w-[263px] bg-navy rounded-[10px] text-white flex items-center gap-[20px] px-[25px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Image src="/icons/phone.svg" alt="" width={39} height={40} />
              <span className="font-inter leading-tight">
                <span className="block text-[16px] font-medium">Call Us</span>
                <span className="block text-[21px] font-semibold">{PHONE_DISPLAY}</span>
              </span>
            </a>
          </motion.div>
          <motion.p {...item(5)} className="flex items-center gap-[14px] font-inter font-medium text-[18px] text-[#000102] mt-[23px]">
            <Image src="/icons/pin.svg" alt="" width={14} height={21} />
            Consultation at Susheela Hospital, Kothapet, Hyderabad
          </motion.p>
        </div>
      </div>
    </section>
  );
}
