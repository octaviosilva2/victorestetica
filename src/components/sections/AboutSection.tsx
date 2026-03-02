import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Clock, ThumbsUp } from "lucide-react";
import { FadeIn, FadeInUp } from "@/hooks/useScrollAnimation";
import professionalImg from "@/assets/professional-portrait.jpg";

const AboutSection = () => {
  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${siteConfig.contact.whatsapp}?text=Olá! Gostaria de agendar uma consulta.`,
      "_blank"
    );
  };

  const stats = [
    {
      icon: Users,
      value: `+${siteConfig.professional.patientsServed}`,
      label: "Pacientes atendidos",
    },
    {
      icon: Clock,
      value: siteConfig.professional.yearsExperience,
      label: "Anos de experiência",
    },
    {
      icon: ThumbsUp,
      value: `${siteConfig.professional.satisfactionRate}%`,
      label: "Satisfação",
    },
  ];

  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Image + Stats */}
          <FadeIn className="space-y-8">
            {/* Image */}
            <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-background-subtle">
              <img
                src={professionalImg}
                alt={siteConfig.professional.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stats below the image */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-xl bg-background-subtle"
                >
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <div className="font-serif text-2xl md:text-3xl text-foreground font-medium">
                    {stat.value}
                  </div>
                  <div className="text-foreground-muted text-xs mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right Column - Content */}
          <FadeInUp delay={200} className="flex flex-col justify-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              {siteConfig.about.title}
            </h2>

            <p className="text-foreground-muted text-lg leading-relaxed mb-8">
              {siteConfig.about.description}
            </p>

            {/* Highlights */}
            <ul className="space-y-4 mb-10">
              {siteConfig.about.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </li>
              ))}
            </ul>

            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 font-medium tracking-wide transition-all duration-300 hover:scale-105 w-fit"
            >
              {siteConfig.cta.heroButton}
            </Button>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
