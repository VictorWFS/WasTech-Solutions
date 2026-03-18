const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm font-semibold text-foreground">
        Was<span className="text-primary">Tech</span> Solutions
      </p>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} WasTech Solutions. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
