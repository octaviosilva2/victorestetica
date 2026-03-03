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
        {/* CTA Principal */}
        <FadeIn className="text-center mb-6 pt-8">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            {siteConfig.cta.finalTitle}
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-6 text-base font-medium tracking-wide transition-all duration-300 hover:scale-105 gap-3"
          >
            <MessageCircle className="w-5 h-5" />
            {siteConfig.cta.finalButton}
          </Button>
        </FadeIn>

        <FadeInUp delay={50} className="text-center mb-12">
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            {siteConfig.cta.finalSubtitle}
          </p>
        </FadeInUp>

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

        {/* Image + Map — two columns */}
        <div className="grid lg:grid-cols-2 gap-8 mb-6">
          {/* Single clinic image placeholder */}
          <FadeInUp delay={150}>
            <div className="overflow-hidden rounded-2xl aspect-video bg-background border border-border/30 flex flex-col items-center justify-center h-full min-h-[300px]">
              <Camera className="w-8 h-8 text-foreground-muted/40 mb-2" />
              <span className="text-foreground-muted/50 text-sm">Foto da clínica (em breve)</span>
            </div>
          </FadeInUp>

          {/* Map + "Ver no mapa" below */}
          <FadeInUp delay={200}>
            <div className="flex flex-col gap-3">
              <div className="rounded-2xl overflow-hidden min-h-[300px]">
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
              <Button
                asChild
                variant="outline"
                size="sm"
                className="rounded-full px-6 py-2 text-sm font-medium border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 self-start"
              >
                <a href={siteConfig.links.mapUrl} target="_blank" rel="noopener noreferrer">
                  <MapPin className="w-4 h-4 mr-1.5" />
                  Ver no mapa
                </a>
              </Button>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;
