import { 
  TestTube2, 
  Cog, 
  Headphones, 
  Search, 
  Target, 
  Palette, 
  BarChart3 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: TestTube2,
    title: "QA Testing",
    description: "Comprehensive quality assurance to ensure your software meets the highest standards of reliability and performance."
  },
  {
    icon: Cog,
    title: "IT Automation",
    description: "Streamline your workflows with custom automation solutions that save time and reduce human error."
  },
  {
    icon: Headphones,
    title: "IT Support",
    description: "Reliable technical support to keep your systems running smoothly and your team productive."
  },
  {
    icon: Search,
    title: "SEO",
    description: "Boost your online visibility with strategic search engine optimization that drives organic traffic."
  },
  {
    icon: Target,
    title: "Google Ad Campaigns",
    description: "Targeted advertising campaigns that maximize your ROI and reach your ideal customers."
  },
  {
    icon: Palette,
    title: "Website Design",
    description: "Modern, responsive websites that capture your brand and convert visitors into customers."
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights that drive informed business decisions."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-radial-glow opacity-30" />
      
      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT solutions designed to help small businesses thrive in the digital age.
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="bg-card border-border card-hover group"
              style={{ 
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
