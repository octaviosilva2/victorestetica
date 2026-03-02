import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProceduresSection from "@/components/sections/ProceduresSection";
import ResultsSection from "@/components/sections/ResultsSection";
import FinalSection from "@/components/sections/FinalSection";
import FooterSection from "@/components/sections/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ProceduresSection />
      <ResultsSection />
      <FinalSection />
      <FooterSection />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
