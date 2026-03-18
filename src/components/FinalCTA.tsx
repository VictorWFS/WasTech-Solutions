import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionReveal from "./SectionReveal";

const FinalCTA = () => (
  <section className="py-24 md:py-32 bg-cta-dark">
    <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
      <SectionReveal>
        <h2 className="text-3xl md:text-4xl font-bold text-cta-dark-foreground mb-4">
          Sua empresa merece uma presença digital à altura do seu produto.
        </h2>
        <p className="text-cta-dark-foreground/60 text-lg mb-8">
          Se sua empresa quer vender mais, a sua página precisa trabalhar por você.
        </p>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_4px_14px_0_hsl(221_83%_53%/0.3)] hover:shadow-[0_6px_20px_0_hsl(221_83%_53%/0.4)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-base px-8 h-12">
          Solicitar Orçamento Premium
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <p className="text-cta-dark-foreground/40 text-sm mt-5">
          Respostas em até 24h úteis. Projetos limitados por mês.
        </p>
      </SectionReveal>
    </div>
  </section>
);

export default FinalCTA;
