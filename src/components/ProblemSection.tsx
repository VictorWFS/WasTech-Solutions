import { AlertTriangle, TrendingDown, UserX } from "lucide-react";
import SectionReveal from "./SectionReveal";
import teamWork from "@/assets/team-work.jpg";

const problems = [
  { icon: UserX, label: "Abandono de visitantes", desc: "Páginas amadoras afastam clientes antes de converter." },
  { icon: TrendingDown, label: "Baixa credibilidade", desc: "Visual genérico destrói a confiança na sua marca." },
  { icon: AlertTriangle, label: "Dinheiro perdido em ads", desc: "Tráfego pago sem página estratégica é prejuízo certo." },
];

const ProblemSection = () => (
  <section className="section-padding bg-secondary/50">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <SectionReveal>
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wide">O problema</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O custo invisível de uma página amadora.
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md">
            Cada segundo que sua landing page não converte, você está pagando para perder clientes.
          </p>
          <img src={teamWork} alt="Equipe WasTech trabalhando" className="rounded-2xl w-full object-cover max-h-72" />
        </SectionReveal>

        <div className="flex flex-col gap-5">
          {problems.map((p, i) => (
            <SectionReveal key={p.label} delay={i * 0.05}>
              <div className="wastech-card p-6 flex gap-5 items-start hover:-translate-y-0.5 transition-transform duration-200">
                <div className="h-11 w-11 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
                  <p.icon className="h-5 w-5 text-destructive" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{p.label}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
