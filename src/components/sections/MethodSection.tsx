import { FadeIn, FadeInUp } from "@/hooks/useScrollAnimation";

const MethodSection = () => {
  return (
    <section className="section-padding bg-background-subtle">
      <div className="container-narrow">
        <FadeIn className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Método baseado em ciência, não em tendências
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto" />
        </FadeIn>

        <FadeInUp delay={100} className="max-w-2xl mx-auto text-center space-y-6">
          <p className="text-foreground-muted text-lg leading-relaxed">
            A estética deve respeitar anatomia, proporção e biologia.
            Íntegro conhecimento clínico, farmacológico e estético para avaliar cada paciente de forma global, garantindo maior segurança, previsibilidade e resultados naturais.
          </p>
          <p className="text-foreground-muted text-lg leading-relaxed">
            Cada protocolo é estruturado de forma personalizada, considerando estrutura facial, qualidade de pele, histórico clínico e objetivos individuais.
          </p>

          {/* Highlight Quote */}
          <blockquote className="border-l-4 border-primary pl-6 py-4 mt-8">
            <p className="font-serif text-xl md:text-2xl text-foreground italic">
              Naturalidade não é acaso. É planejamento.
            </p>
          </blockquote>
        </FadeInUp>
      </div>
    </section>
  );
};

export default MethodSection;
