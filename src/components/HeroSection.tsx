import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionReveal from "./SectionReveal";
import heroMockup from "@/assets/hero-mockup.png";

const HeroSection = () => (
  <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
    {/* Subtle gradient bg */}
    <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent pointer-events-none" />

    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="max-w-xl">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/[0.08] px-4 py-1.5 text-xs font-medium text-primary mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Landing Pages de Alta Conversão
            </div>
          </SectionReveal>

          <SectionReveal delay={0.05}>
            <h1 className="text-4xl md:text-5xl lg:text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.08] mb-6" style={{ textWrap: "balance" as any }}>
              Sua landing page não é um site.{" "}
              <span className="wastech-gradient-text">É sua melhor vendedora.</span>
            </h1>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-md">
              Transformamos tráfego caro em lucro real com design estratégico e tecnologia de alta conversão.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_4px_14px_0_hsl(221_83%_53%/0.3)] hover:shadow-[0_6px_20px_0_hsl(221_83%_53%/0.4)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-base px-8 h-12">
                Solicitar Orçamento Premium
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="ghost" className="text-muted-foreground hover:text-foreground h-12 text-base">
                <Play className="mr-2 h-4 w-4" />
                Ver nosso método
              </Button>
            </div>
          </SectionReveal>
        </div>

        <SectionReveal delay={0.2} className="relative">
          <div className="wastech-card p-2 lg:p-3">
            <img
              src={heroMockup}
              alt="Dashboard de conversão WasTech Solutions"
              className="w-full rounded-xl"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 wastech-card px-4 py-3 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <ArrowRight className="h-5 w-5 text-primary -rotate-45" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">+47%</p>
              <p className="text-xs text-muted-foreground">Taxa de conversão</p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </div>
  </section>
);

export default HeroSection;
