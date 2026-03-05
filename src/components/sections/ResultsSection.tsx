import { FadeIn, FadeInUp } from "@/hooks/useScrollAnimation";
import { Camera } from "lucide-react";

const ResultsSection = () => {
  return (
    <section id="resultados" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Title */}
        <FadeIn className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Resultados reais. Elegância sem exageros.
          </h2>
          <p className="text-foreground-muted max-w-xl mx-auto mb-6">
            A prioridade não é transformar, é harmonizar.
            Resultados progressivos, seguros e compatíveis com sua estrutura.
          </p>
          <div className="w-20 h-0.5 bg-primary mx-auto" />
        </FadeIn>

        {/* Placeholder for future photos */}
        <FadeInUp delay={100}>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-[3/4] rounded-2xl bg-background-subtle border border-border/50 flex flex-col items-center justify-center text-foreground-muted"
              >
                <Camera className="w-8 h-8 mb-3 opacity-40" />
                <span className="text-sm opacity-60">Em breve</span>
              </div>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};

export default ResultsSection;
