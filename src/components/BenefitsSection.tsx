import { Award, Zap, Smartphone, Target, BarChart3, Layers } from "lucide-react";
import SectionReveal from "./SectionReveal";

const benefits = [
  { icon: Award, title: "Design de Elite", desc: "Visual que posiciona sua marca no topo do mercado." },
  { icon: Zap, title: "Velocidade Brutal", desc: "Carregamento em menos de 1.5s para não perder nenhum clique." },
  { icon: Smartphone, title: "Mobile-First", desc: "Experiência perfeita onde 80% do seu tráfego está." },
  { icon: Target, title: "Foco em Conversão", desc: "Estrutura pensada para transformar visitantes em clientes." },
  { icon: BarChart3, title: "Pronta para Ads", desc: "Otimizada para campanhas de tráfego pago e remarketing." },
  { icon: Layers, title: "UX Estratégica", desc: "Hierarquia visual que guia o olhar até a ação." },
];

const BenefitsSection = () => (
  <section id="beneficios" className="section-padding">
    <div className="container mx-auto px-4 lg:px-8">
      <SectionReveal className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wide">Benefícios</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Tudo que sua página precisa para vender mais.
        </h2>
        <p className="text-muted-foreground text-lg">
          Cada detalhe é pensado para gerar resultado real.
        </p>
      </SectionReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {benefits.map((b, i) => (
          <SectionReveal key={b.title} delay={i * 0.05}>
            <div className="wastech-card p-7 h-full hover:-translate-y-1 transition-transform duration-200">
              <div className="h-11 w-11 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-5">
                <b.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-lg">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
