"use client";
import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";
import { MAPS_URL, MOBILE_DISPLAY, MOBILE_TEL } from "@/lib/data";

const input = "w-full h-[38px] rounded-[6px] border border-[#8a8a8a] bg-white px-3 font-poppins text-[14px] text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";
const label = "block font-poppins text-[12px] text-ink mb-[6px] ml-[10px]";

export default function Contact() {
  const [sent, setSent] = useState(false);

  // Static site (no backend): the form opens WhatsApp with the details pre-filled.
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const msg = `Appointment request for Dr. Keerthana Kota\nName: ${d.get("name")}\nMobile: ${d.get("mobile")}\nAge: ${d.get("age")}\nPreferred time: ${d.get("when") || "-"}\nHealth concern: ${d.get("concern") || "-"}`;
    window.open(`https://wa.me/${MOBILE_TEL.replace("+", "")}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="bg-[#fff8e6] mt-[40px] pt-[40px] pb-[36px]">
      <div className="max-w-[1226px] mx-auto px-5">
        <Reveal className="text-center">
          <p className="font-poppins font-medium text-[20px] text-navy">TAKE THE FIRST STEP TOWARDS BETTER UROLOGICAL HEALTH</p>
          <h2 className="font-inter font-bold text-[26px] text-brand mt-[10px]">Consult Dr. Keerthana Kota</h2>
          <p className="font-poppins text-[18px] leading-[28px] text-[#000102] mt-[8px] max-w-[607px] mx-auto">for kidney stones, urinary problems, prostate conditions, and other urological concerns.</p>
        </Reveal>
        <div className="mt-[34px] grid lg:grid-cols-[642px_1fr] gap-[17px]">
          <Reveal x={-40} y={0}>
            <form onSubmit={submit} className="bg-white rounded-[16px] p-[26px] lg:px-[47px] h-full">
              <p className="font-poppins font-medium text-[14px] tracking-[0.7px] text-brand uppercase">Book your appointment :</p>
              <div className="grid sm:grid-cols-2 gap-x-[28px] gap-y-[14px] mt-[22px]">
                <div><label className={label} htmlFor="name">Your Name :</label><input id="name" name="name" required className={input} /></div>
                <div><label className={label} htmlFor="mobile">Mobile No :</label><input id="mobile" name="mobile" required type="tel" pattern="[0-9+ ]{10,15}" className={input} /></div>
                <div><label className={label} htmlFor="age">Age :</label><input id="age" name="age" required type="number" min={0} max={120} className={input} /></div>
                <div><label className={label} htmlFor="when">Preferred Date / Time :</label><input id="when" name="when" className={input} /></div>
              </div>
              <label className={`${label} mt-[18px]`} htmlFor="concern">Health concern :</label>
              <textarea id="concern" name="concern" rows={3} className={`${input} h-[80px] py-2 resize-none`} />
              <button type="submit" className="group mt-[20px] w-full h-[48px] rounded-[7px] bg-gold text-white font-inter font-semibold text-[18px] flex items-center justify-center gap-3 cursor-pointer transition-all duration-300 hover:bg-[#d5a04a] hover:shadow-lg">
                Book an Appointment
                <Image src="/icons/arrow.svg" alt="" width={23} height={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
              {sent && <p role="status" className="mt-3 text-center text-[13px] text-brand">Thank you! Continue in WhatsApp to send your request.</p>}
            </form>
          </Reveal>
          <Reveal x={40} y={0} delay={0.1}>
            <div className="bg-white rounded-[16px] p-[26px] lg:px-[55px] h-full">
              <div className="flex gap-[18px]">
                <Image src="/icons/pin.svg" alt="" width={22} height={30} className="mt-1 h-[30px] w-auto shrink-0" />
                <div>
                  <p className="font-poppins font-semibold text-[16px] text-brand">Susheela Hospital</p>
                  <p className="font-poppins text-[12px] text-ink">SRK Puram, Kothapet, Hyderabad, Telangana</p>
                </div>
              </div>
              <div className="flex gap-[18px] mt-[14px]">
                <Image src="/icons/phone-sm.svg" alt="" width={25} height={25} className="mt-1 shrink-0" />
                <div>
                  <p className="font-poppins text-[12px] text-ink">Phone:</p>
                  <a href={`tel:${MOBILE_TEL}`} className="font-poppins font-medium text-[16px] text-brand hover:underline">{MOBILE_DISPLAY}</a>
                </div>
              </div>
              <div className="mt-[10px] rounded-[16px] overflow-hidden">
                <Image src="/images/map.png" alt="Map to Susheela Hospital" width={416} height={181} className="w-full h-auto" />
              </div>
              <div className="grid grid-cols-2 gap-[28px] mt-[16px]">
                <a href={MAPS_URL} target="_blank" rel="noreferrer" className="h-[48px] rounded-[7px] bg-[#dff2ff] flex items-center justify-center gap-3 font-poppins font-medium text-[14px] text-ink transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <Image src="/icons/pin-sm.svg" alt="" width={16} height={24} />Get Directions
                </a>
                <a href={`tel:${MOBILE_TEL}`} className="h-[48px] rounded-[7px] bg-gold flex items-center justify-center gap-3 font-poppins font-medium text-[14px] text-white transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <Image src="/icons/phone-sm.svg" alt="" width={21} height={20} className="brightness-0 invert" />Call Now
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
