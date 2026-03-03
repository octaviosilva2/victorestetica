import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";
import clinicReception from "@/assets/clinic-reception-new.png";

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open(siteConfig.links.whatsappUrl, "_blank");
  };

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat scale-105 bg-center max-sm:bg-[center_35%]"
        style={{ 
          backgroundImage: `url(${clinicReception})`,
          filter: 'blur(2px)'
        }}
      />
      
      {/* Dark Overlay — stronger on mobile */}
      <div className="absolute inset-0 bg-black/[0.45] sm:bg-black/35" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in-up max-w-[320px] sm:max-w-none mx-auto">
        {/* Specialty Badge */}
        <span className="inline-block text-primary text-xs md:text-sm font-medium tracking-[0.4em] uppercase mb-6 md:mb-8">
          {siteConfig.professional.specialty}
        </span>

        {/* Name */}
        <h1 className="font-serif text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-medium mb-4 md:mb-6 leading-[1.12] sm:leading-[1.1] tracking-tight">
          {siteConfig.professional.name}
        </h1>

        {/* Support Text */}
        <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto mb-10 md:mb-12 leading-[1.55] sm:leading-relaxed">
          Protocolos personalizados que unem ciência, precisão e naturalidade para resultados elegantes e progressivos.
        </p>

        {/* CTA Button */}
        <Button
          onClick={handleWhatsApp}
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full w-[min(320px,88%)] sm:w-auto px-12 md:px-16 py-6 sm:py-7 md:py-8 text-base md:text-lg font-medium tracking-wide transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30"
        >
          {siteConfig.cta.heroButton}
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
