import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { FadeIn, FadeInUp } from "@/hooks/useScrollAnimation";
import clinicReception from "@/assets/clinic-reception.jpg";
import clinicTreatment from "@/assets/clinic-treatment.jpg";
import clinicHallway from "@/assets/clinic-hallway.jpg";

const clinicImages = [
  { src: clinicReception, alt: "Recepção da Clínica" },
  { src: clinicTreatment, alt: "Sala de Atendimento" },
  { src: clinicHallway, alt: "Ambiente" },
];

const FinalSection = () => {
  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${siteConfig.contact.whatsapp}?text=Olá! Gostaria de agendar uma consulta.`,
      "_blank"
    );
  };

  return (
    <section id="clinica" className="section-padding bg-background-subtle">
      <div className="container-narrow">
        {/* Title */}
        <FadeIn className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Nossa Clínica
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto" />
        </FadeIn>

        {/* Clinic Gallery + Map */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Gallery */}
          <FadeInUp delay={100}>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <div className="overflow-hidden rounded-2xl aspect-video">
                  <img
                    src={clinicImages[0].src}
                    alt={clinicImages[0].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {clinicImages.slice(1).map((image, index) => (
                <div key={index} className="overflow-hidden rounded-2xl aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
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

        {/* CTA */}
        <FadeInUp delay={300} className="text-center py-8">
          <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">
            {siteConfig.cta.finalTitle}
          </h3>
          <p className="text-foreground-muted text-lg mb-4 max-w-2xl mx-auto">
            {siteConfig.cta.finalSubtitle}
          </p>
          <p className="text-foreground-muted text-sm mb-8">
            Atendimentos em Jaraguá do Sul e Florianópolis.
          </p>
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
