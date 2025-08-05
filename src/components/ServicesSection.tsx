import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Database, 
  Cloud, 
  BarChart3, 
  Shield, 
  GitBranch,
  ArrowRight 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "ETL/ELT Pipeline Development",
      description: "Design and build robust batch and streaming data pipelines that scale with your business needs.",
      icon: Database,
      features: ["Real-time streaming", "Batch processing", "Data validation", "Error handling"]
    },
    {
      title: "Cloud Data Platform Setup",
      description: "Architect and implement modern cloud data platforms on Azure, AWS, and other leading providers.",
      icon: Cloud,
      features: ["Infrastructure as Code", "Auto-scaling", "Cost optimization", "Multi-cloud support"]
    },
    {
      title: "Data Modeling & Warehousing",
      description: "Create efficient data models and warehouses using Snowflake, Redshift, and Azure Synapse.",
      icon: BarChart3,
      features: ["Dimensional modeling", "Performance tuning", "Query optimization", "Schema design"]
    },
    {
      title: "Analytics Platform Support",
      description: "Enable your analytics teams with reliable, fast, and well-documented data infrastructure.",
      icon: GitBranch,
      features: ["Data cataloging", "Documentation", "Monitoring", "Performance optimization"]
    },
    {
      title: "Data Quality & Governance",
      description: "Implement comprehensive data governance frameworks and quality monitoring systems.",
      icon: Shield,
      features: ["Data lineage", "Quality metrics", "Compliance", "Access controls"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute top-0 left-1/4 w-40 h-40 ai-gradient opacity-5 rounded-full"></div>
      <div className="absolute bottom-10 right-1/4 w-32 h-32 accent-gradient opacity-5 rounded-3xl rotate-45"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block p-2 bg-primary/10 rounded-lg mb-4">
            <span className="text-sm font-medium text-primary">WHAT I OFFER</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">Which Services I Will<br/>Provide For You</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-3xl mx-auto text-lg">
            Comprehensive data engineering services for freelance, part-time consulting, 
            or full-time roles. Transform your data challenges into business opportunities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="modern-shadow transition-smooth hover:shadow-lg hover:scale-105 group relative overflow-hidden border-0">
                {/* Geometric decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-2xl"></div>
                
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="relative bg-gradient-to-r from-primary/10 via-accent/5 to-accent/10 rounded-3xl p-10 max-w-4xl mx-auto overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-32 h-32 ai-gradient opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 accent-gradient opacity-15 rounded-2xl translate-x-1/2 translate-y-1/2 rotate-45"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-foreground mb-4">Ready to Work Together?</h3>
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                Available for freelance projects, part-time consulting, or full-time opportunities. 
                Let's discuss how I can help solve your data engineering challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="hero-shadow transition-bounce hover:scale-105 text-lg px-8">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 hover:bg-primary/5">
                  Explore All Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;