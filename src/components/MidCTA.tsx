import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionReveal from "./SectionReveal";

const MidCTA = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <SectionReveal className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Sua empresa merece uma página à altura da sua marca.
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          Transforme visitas em oportunidades reais de negócio.
        </p>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_4px_14px_0_hsl(221_83%_53%/0.3)] hover:shadow-[0_6px_20px_0_hsl(221_83%_53%/0.4)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-base px-8 h-12">
          <a href="https://wa.me/5585981613890?text=Ol%C3%A1%2C%20quero%20solicitar%20um%20or%C3%A7amento.">Solicitar Orçamento</a>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </SectionReveal>
    </div>
  </section>
);

export default MidCTA;
