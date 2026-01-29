import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 bg-radial-glow" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Empowering Your Business with{' '}
            <span className="text-gradient">Smart IT Solutions</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            From quality assurance to digital marketing, we provide end-to-end IT services 
            tailored for small businesses across Switzerland.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button variant="hero" size="xl" onClick={scrollToContact}>
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl" onClick={scrollToServices}>
              Explore Services
            </Button>
          </div>
          
          {/* Trust indicator */}
          <p className="mt-12 text-sm text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            Based in Switzerland • Serving businesses Europe-wide
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
