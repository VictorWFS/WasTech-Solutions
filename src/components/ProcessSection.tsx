import { Search, Lightbulb, Paintbrush, Rocket } from "lucide-react";
import SectionReveal from "./SectionReveal";

const steps = [
  { icon: Search, num: "01", title: "Diagnóstico", desc: "Entendemos seu funil, público e objetivo de negócio." },
  { icon: Lightbulb, num: "02", title: "Estratégia", desc: "Copywriting focado em psicologia de vendas e conversão." },
  { icon: Paintbrush, num: "03", title: "Criação", desc: "Design premium sob medida — sem templates genéricos." },
  { icon: Rocket, num: "04", title: "Deploy", desc: "Entrega otimizada, testada e pronta para escalar." },
];

const ProcessSection = () => (
  <section id="processo" className="section-padding">
    <div className="container mx-auto px-4 lg:px-8">
      <SectionReveal className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wide">Processo</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Do diagnóstico ao resultado em 4 etapas.
        </h2>
        <p className="text-muted-foreground text-lg">
          Um método claro e eficiente para entregar páginas que realmente convertem.
        </p>
      </SectionReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((s, i) => (
          <SectionReveal key={s.num} delay={i * 0.05}>
            <div className="wastech-card p-7 h-full relative">
              <span className="text-5xl font-bold text-primary/[0.07] absolute top-4 right-5">{s.num}</span>
              <div className="h-11 w-11 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-5">
                <s.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-lg">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
