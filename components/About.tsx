import Image from "next/image";
import Reveal from "./Reveal";
import { ScrollBtn } from "./Button";

export default function About() {
  return (
    <section id="about" className="bg-white py-12 lg:pt-[48px] lg:pb-[51px]">
      <div className="max-w-[1270px] mx-auto px-5 grid lg:grid-cols-[501px_1fr] gap-10 lg:gap-[51px]">
        <Reveal x={-40} y={0}>
          <div className="rounded-[28px] overflow-hidden shadow-[0_10px_30px_rgba(2,61,110,0.12)] group">
            <Image src="/images/about.png" alt="Dr. Keerthana Kota consulting a patient" width={501} height={584} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
          </div>
        </Reveal>
        <Reveal x={40} y={0} delay={0.1}>
          <p className="font-poppins font-medium text-[18px] tracking-[1.8px] text-navy lg:mt-0">Meet your Urology Specialist</p>
          <h2 className="font-inter font-semibold text-[28px] lg:text-[32px] leading-[47px] text-brand mt-[14px]">
            Dr. Keerthana Kota –<br />Experienced Urologist in Hyderabad
          </h2>
          <div className="font-poppins text-[16px] leading-[25px] text-ink mt-[22px] space-y-[10px] max-w-[686px]">
            <p>Dr. Keerthana Kota is a Consultant Urologist with over 12 years of clinical experience in diagnosing and managing urological conditions affecting men, women, and children.</p>
            <p>Her expertise includes kidney stone management, endourology, laser urology, prostate disorders, and female urological conditions. She focuses on identifying the underlying cause of symptoms and recommending appropriate treatment based on each patient&apos;s clinical needs.</p>
            <p>With experience in minimally invasive and endoscopic procedures, Dr. Keerthana Kota aims to provide effective treatment while minimizing unnecessary surgical intervention.</p>
            <p>She believes in clear communication, personalized treatment planning, and comprehensive follow-up care to help patients make informed decisions about their urological health.</p>
          </div>
          <ScrollBtn target="contact" className="mt-[26px] min-h-[57px] py-2 px-4 rounded-[10px] bg-gold text-white font-inter font-semibold text-[17px] sm:text-[21px] gap-2 shadow-[0_4px_4px_rgba(0,0,0,0.12)]">
            Schedule Your Consultation
          </ScrollBtn>
        </Reveal>
      </div>
    </section>
  );
}
