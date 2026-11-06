import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Conditions from "@/components/Conditions";
import Treatments from "@/components/Treatments";
import WhyChoose from "@/components/WhyChoose";
import WhenConsult from "@/components/WhenConsult";
import Journey from "@/components/Journey";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <SmoothScroll />
      <Header />
      <Hero />
      <About />
      <Conditions />
      <Treatments />
      <WhyChoose />
      <WhenConsult />
      <Journey />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
