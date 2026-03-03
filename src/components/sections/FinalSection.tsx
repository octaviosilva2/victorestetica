import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Camera } from "lucide-react";
import { FadeIn, FadeInUp } from "@/hooks/useScrollAnimation";

const FinalSection = () => {
  const handleWhatsApp = () => {
    window.open(siteConfig.links.whatsappUrl, "_blank");
  };

  return (
    <section id="clinica" className="section-padding bg-background-subtle">
      <div className="container-narrow">
        {/* Title + Subtitle */}
        <FadeIn className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            {siteConfig.cta.finalTitle}
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            {siteConfig.cta.finalSubtitle}
          </p>
        </FadeIn>

        {/* Institutional address block */}
        <FadeInUp delay={100} className="text-center mb-12 space-y-2">
          <p className="font-serif text-xl text-foreground font-medium">
            {siteConfig.contact.clinicName}
          </p>
          <div className="flex items-start justify-center gap-2 text-foreground-muted text-sm">
            <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <div className="text-left">
              <p>{siteConfig.contact.address}</p>
              <p>{siteConfig.contact.city}, {siteConfig.contact.cep}</p>
            </div>
          </div>
          <p className="text-foreground-muted text-sm pt-1">
            Atendo também em Florianópolis.
          </p>
        </FadeInUp>

        {/* Gallery + Map */}
        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Gallery Placeholders */}
          <FadeInUp delay={150}>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <div className="overflow-hidden rounded-2xl aspect-video bg-background border border-border/30 flex flex-col items-center justify-center">
                  <Camera className="w-8 h-8 text-foreground-muted/40 mb-2" />
                  <span className="text-foreground-muted/50 text-sm">Foto da clínica (em breve)</span>
                </div>
              </div>
              {[1, 2].map((i) => (
                <div key={i} className="overflow-hidden rounded-2xl aspect-square bg-background border border-border/30 flex flex-col items-center justify-center">
                  <Camera className="w-6 h-6 text-foreground-muted/40 mb-2" />
                  <span className="text-foreground-muted/50 text-xs">Foto da clínica (em breve)</span>
                </div>
              ))}
            </div>
          </FadeInUp>

          {/* Map */}
          <FadeInUp delay={200}>
            <div className="rounded-2xl overflow-hidden h-full min-h-[300px]">
              <iframe
                src={siteConfig.contact.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Clínica"
              />
            </div>
          </FadeInUp>
        </div>

        {/* Action buttons */}
        <FadeInUp delay={250} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-6 font-medium tracking-wide border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <a href={siteConfig.links.mapUrl} target="_blank" rel="noopener noreferrer">
              <MapPin className="w-5 h-5 mr-2" />
              Ver no mapa
            </a>
          </Button>
          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-6 text-base font-medium tracking-wide transition-all duration-300 hover:scale-105 gap-3"
          >
            <MessageCircle className="w-5 h-5" />
            {siteConfig.cta.finalButton}
          </Button>
        </FadeInUp>
      </div>
    </section>
  );
};

export default FinalSection;
