import SectionReveal from "./SectionReveal";

const stats = [
  { value: "+47%", label: "Taxa de Conversão" },
  { value: "2.4x", label: "ROI Médio" },
  { value: "-30%", label: "Custo por Lead" },
  { value: "<1.5s", label: "Tempo de Carregamento" },
];

const ImpactSection = () => (
  <section className="section-padding bg-secondary/50">
    <div className="container mx-auto px-4 lg:px-8">
      <SectionReveal className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wide">Impacto</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Números que falam por si.
        </h2>
      </SectionReveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((s, i) => (
          <SectionReveal key={s.label} delay={i * 0.05}>
            <div className="wastech-card p-7 text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2" style={{ fontVariantNumeric: "tabular-nums" }}>
                {s.value}
              </p>
              <p className="text-sm text-muted-foreground font-medium">{s.label}</p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactSection;
