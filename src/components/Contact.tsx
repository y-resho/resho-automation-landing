import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Work <span className="text-gradient">Together</span>
            </h2>
            <p className="text-muted-foreground">
              Ready to transform your business with smart IT solutions? Get in touch today.
            </p>
          </div>
          
          {/* Contact card */}
          <Card className="bg-card border-border glow">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar/Photo placeholder */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-primary/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl font-bold text-gradient">FR</span>
                </div>
                
                {/* Contact info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Ferhad Resho</h3>
                  <p className="text-muted-foreground mb-6">
                    Your dedicated partner for IT excellence. With a passion for technology 
                    and a commitment to quality, I help small businesses leverage the power of IT.
                  </p>
                  
                  {/* Location */}
                  <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground mb-6">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Switzerland</span>
                  </div>
                  
                  {/* Contact buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Button variant="hero" size="lg" asChild>
                      <a href="mailto:ferhad.resho@bluewin.ch">
                        <Mail className="w-4 h-4" />
                        Send Email
                      </a>
                    </Button>
                    <Button variant="heroOutline" size="lg" asChild>
                      <a 
                        href="https://linkedin.com/in/ferhad-resho" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-4 h-4" />
                        Connect on LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
