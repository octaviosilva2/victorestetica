import { FadeIn, FadeInUp } from "@/hooks/useScrollAnimation";
import botoxResult from "@/assets/botox-result.png";

const ResultsSection = () => {
  return (
    <section id="resultados" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Title */}
        <FadeIn className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Resultados Reais de Pacientes
          </h2>
          <p className="text-foreground-muted max-w-xl mx-auto mb-6">
            Transformações reais que falam por si. Cada resultado é único e personalizado.
          </p>
          <div className="w-20 h-0.5 bg-primary mx-auto" />
        </FadeIn>

        {/* Result Image */}
        <FadeInUp delay={100}>
          <div className="flex justify-center">
            <div className="relative overflow-hidden rounded-2xl max-w-xs shadow-lg">
              <img
                src={botoxResult}
                alt="Resultado de Botox - Antes e Depois"
                className="w-full h-auto object-cover"
              />
              {/* Botox Badge */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-primary/90 backdrop-blur-sm px-4 py-1.5 rounded-full">
                <span className="text-primary-foreground font-medium text-sm tracking-wide">
                  Botox
                </span>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};

export default ResultsSection;
