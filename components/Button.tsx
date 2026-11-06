"use client";
import Image from "next/image";
import { scrollToId } from "./SmoothScroll";

export function ScrollBtn({
  target,
  className = "",
  icon = "/images/icon-calendar.png",
  iconSize = 36,
  children,
}: {
  target: string;
  className?: string;
  icon?: string;
  iconSize?: number;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={() => scrollToId(target)}
      className={`inline-flex items-center gap-3 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 ${className}`}
    >
      <Image src={icon} alt="" width={iconSize} height={iconSize} />
      {children}
    </button>
  );
}
