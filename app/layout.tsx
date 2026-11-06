import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Keerthana Kota – Consultant Urologist in Hyderabad | Susheela Hospital",
  description:
    "Dr. Keerthana Kota, MBBS, MS, DNB (Urology) – Consultant Urologist at Susheela Hospital, Kothapet, Hyderabad. Kidney stones, laser urology, prostate and female urology care.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
