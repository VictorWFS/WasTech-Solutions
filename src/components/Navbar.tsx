import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <a href="#" className="text-xl font-bold tracking-tight text-foreground">
          Was<span className="text-primary">Tech</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#beneficios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Benefícios</a>
          <a href="#processo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Processo</a>
          <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_4px_14px_0_hsl(221_83%_53%/0.3)] hover:shadow-[0_6px_20px_0_hsl(221_83%_53%/0.4)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
            <a href="https://wa.me/5585981613890?text=Ol%C3%A1%2C%20quero%20solicitar%20um%20or%C3%A7amento.">Solicitar Orçamento</a>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 flex flex-col gap-3">
          <a href="#beneficios" className="text-sm text-muted-foreground py-2" onClick={() => setOpen(false)}>Benefícios</a>
          <a href="#processo" className="text-sm text-muted-foreground py-2" onClick={() => setOpen(false)}>Processo</a>
          <a href="#faq" className="text-sm text-muted-foreground py-2" onClick={() => setOpen(false)}>FAQ</a>
          <Button className="bg-primary text-primary-foreground w-full" onClick={() => setOpen(false)}>
            Solicitar Orçamento
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
