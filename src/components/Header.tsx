import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Header = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img
              src={`${import.meta.env.BASE_URL}logo_no_background.png`}
              alt="Resho Automation"
              className="w-8 h-8"
            />
            <span className="font-semibold text-lg text-foreground">Resho Automation</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
          
          <Button variant="default" size="sm" onClick={scrollToContact}>
            <Mail className="w-4 h-4" />
            Get in Touch
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
