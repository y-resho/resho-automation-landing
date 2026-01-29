const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">R</span>
            </div>
            <span className="font-medium text-foreground">Resho Automation</span>
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Resho Automation. All rights reserved.
          </p>
          
          {/* Links */}
          <div className="flex items-center gap-6">
            <a 
              href="mailto:ferhad.resho@bluewin.ch" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </a>
            <a 
              href="https://linkedin.com/in/ferhad-resho" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
