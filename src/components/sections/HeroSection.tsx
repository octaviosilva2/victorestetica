import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";
import clinicReception from "@/assets/clinic-reception-new.png";

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open(siteConfig.links.whatsappUrl, "_blank");
  };
  return (
    <section className="relative min-h-[92vh] sm:min-h-[600px] h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat scale-105 bg-center max-sm:bg-[center_35%]"
        style={{ 
          backgroundImage: `url(${clinicReception})`,
          filter: 'blur(2px)'
        }}
      />
      
      {/* Dark Overlay — stronger on mobile */}
      <div className="absolute inset-0 bg-black/[0.35] sm:bg-black/30" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in-up max-w-[320px] sm:max-w-none mx-auto flex flex-col items-center">
        {/* Specialty Badge */}
        <span className="inline-block text-white/90 text-[0.75rem] sm:text-sm md:text-base font-semibold tracking-[0.35em] sm:tracking-[0.4em] uppercase mb-8 sm:mb-6 md:mb-8">
          {siteConfig.professional.specialty}
        </span>
        {/* Name */}
        <h1 className="font-playfair text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-medium mb-5 sm:mb-4 md:mb-6 leading-[1.1] sm:leading-[1.1] tracking-tight">
          {siteConfig.professional.name}
        </h1>
        {/* Support Text */}
        <p className="text-white/60 text-[0.875rem] sm:text-sm md:text-base max-w-[300px] sm:max-w-xl mx-auto mb-6 md:mb-8 leading-[1.55] sm:leading-relaxed">
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
