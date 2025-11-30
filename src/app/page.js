import ContactUs from "@/components/ContactUs";
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/HeroSection";
import ImpactStats from "@/components/Impact";
import OurServices from "@/components/OurServices";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HeroSection />
      {/* impact section */}
      <ImpactStats />
      {/* our service section */}
      <OurServices />
      {/* testimonial section */}
      <Testimonial />
      {/* FAQ section */}
      <FAQ />
      {/* contact Us section */}
      <ContactUs />
    </div>
  );
}
