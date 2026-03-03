import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Camera } from "lucide-react";
import { FadeIn, FadeInUp } from "@/hooks/useScrollAnimation";

const FinalSection = () => {
  const handleWhatsApp = () => {
    window.open(siteConfig.links.whatsappUrl, "_blank");
  };

  return (
    <section id="clinica">
      {/* BLOCO 1 — CTA puro */}
      <div className="section-padding bg-background">
        <div className="container-narrow">
          <FadeIn className="text-center pt-4">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-5 leading-tight">
              {siteConfig.cta.finalTitle}
            </h2>
            <div className="w-14 h-px bg-primary/60 mx-auto mb-6" />
            <p className="text-foreground-muted text-base md:text-lg max-w-xl mx-auto mb-8">
              {siteConfig.cta.finalSubtitle}
            </p>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-6 text-base font-medium tracking-wide transition-all duration-300 hover:scale-105 gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              {siteConfig.cta.finalButton}
            </Button>
          </FadeIn>
        </div>
      </div>

      {/* BLOCO 2 — Institucional */}
      <div className="section-padding bg-background-subtle/60">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Coluna esquerda — Imagem + Endereço */}
            <FadeInUp delay={100}>
              <div className="space-y-6">
                {/* Imagem da clínica */}
                <div className="overflow-hidden rounded-2xl aspect-[16/10] bg-background border border-border/30 flex flex-col items-center justify-center">
                  <Camera className="w-8 h-8 text-foreground-muted/40 mb-2" />
                  <span className="text-foreground-muted/50 text-sm">Foto da clínica (em breve)</span>
                </div>

                {/* Endereço */}
                <div className="space-y-1.5">
                  <p className="font-serif text-lg text-foreground font-medium">
                    {siteConfig.contact.clinicName}
                  </p>
                  <div className="flex items-start gap-2 text-foreground-muted text-sm">
                    <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p>{siteConfig.contact.address}</p>
                      <p>{siteConfig.contact.city}, {siteConfig.contact.cep}</p>
                    </div>
                  </div>
                  <p className="text-foreground-muted/60 text-xs pt-1 pl-6">
                    Atendo também em Florianópolis.
                  </p>
                </div>
              </div>
            </FadeInUp>

            {/* Coluna direita — Mapa + botão */}
            <FadeInUp delay={200}>
              <div className="space-y-3">
                <div className="rounded-2xl overflow-hidden aspect-[16/10] min-h-[280px]">
                  <iframe
                    src={siteConfig.contact.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "280px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Clínica"
                  />
                </div>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-xs text-foreground-muted hover:text-primary gap-1.5 px-2"
                >
                  <a href={siteConfig.links.mapUrl} target="_blank" rel="noopener noreferrer">
                    <MapPin className="w-3.5 h-3.5" />
                    Ver no mapa
                  </a>
                </Button>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;
