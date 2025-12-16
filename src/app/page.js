import ContactUs from "@/components/ContactUs";
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/HeroSection";
import HomePage from "@/components/HomePage";
import ImpactStats from "@/components/Impact";
import NewsLetter from "@/components/NewsLetter";
import OurImpact from "@/components/OurImpact";
import OurServices from "@/components/OurServices";
import OurTeam from "@/components/OurTeam";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* HomePgae */}
      <HomePage />
      {/* hero section */}
      {/* <HeroSection /> */}
      {/* our impact section */}
      {/* <OurImpact /> */}
      {/* our agents section */}
      {/* <OurTeam /> */}
      {/* impact section */}
      {/* <ImpactStats /> */}
      {/* our service section */}
      {/* <OurServices /> */}
      {/* testimonial section */}
      {/* <Testimonial /> */}
      {/* FAQ section */}
      <FAQ />
      {/* contact Us section */}
      <ContactUs />
      {/* News letter section */}
      <NewsLetter />
    </div>
  );
}
