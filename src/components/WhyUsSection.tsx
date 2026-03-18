import { CheckCircle2 } from "lucide-react";
import SectionReveal from "./SectionReveal";

const reasons = [
  "Design moderno e estratégico, sem templates genéricos",
  "Páginas pensadas exclusivamente para conversão",
  "Visual profissional e premium em cada detalhe",
  "Foco absoluto em performance e velocidade",
  "Atendimento personalizado do início ao fim",
  "Estrutura limpa com UX de alto padrão",
];

const WhyUsSection = () => (
  <section className="section-padding bg-secondary/50">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <SectionReveal>
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wide">Por que a WasTech</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Resultados validados por dados, não por promessas.
          </h2>
          <p className="text-muted-foreground text-lg max-w-md">
            Cada projeto é um investimento estratégico com alto retorno. Criamos interfaces de alta performance que trabalham 24/7 por você.
          </p>
        </SectionReveal>

        <div className="flex flex-col gap-4">
          {reasons.map((r, i) => (
            <SectionReveal key={i} delay={i * 0.04}>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                <p className="text-foreground font-medium">{r}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyUsSection;
