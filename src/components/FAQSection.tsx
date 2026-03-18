import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionReveal from "./SectionReveal";

const faqs = [
  { q: "Para quem é a landing page?", a: "Para qualquer negócio que investe em tráfego pago, campanhas de marketing digital ou precisa de uma presença online que realmente converta visitantes em clientes." },
  { q: "Em quanto tempo fica pronta?", a: "Projetos são entregues entre 5 e 10 dias úteis, dependendo da complexidade e do escopo. Trabalhamos com agilidade sem abrir mão da qualidade." },
  { q: "A página funciona no celular?", a: "Sim. Todas as nossas landing pages são criadas com abordagem mobile-first, garantindo experiência perfeita em qualquer dispositivo." },
  { q: "Posso usar em tráfego pago?", a: "Com certeza. Nossas páginas são otimizadas para campanhas de Google Ads, Meta Ads e qualquer fonte de tráfego pago." },
  { q: "Vocês personalizam para meu negócio?", a: "100%. Cada projeto é feito sob medida para o seu nicho, público e objetivos. Não usamos templates genéricos." },
];

const FAQSection = () => (
  <section id="faq" className="section-padding">
    <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
      <SectionReveal className="text-center mb-12">
        <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wide">Dúvidas Frequentes</p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Perguntas que recebemos com frequência.
        </h2>
      </SectionReveal>

      <SectionReveal delay={0.05}>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="wastech-card px-6 border-none">
              <AccordionTrigger className="text-foreground font-medium text-left hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SectionReveal>
    </div>
  </section>
);

export default FAQSection;
