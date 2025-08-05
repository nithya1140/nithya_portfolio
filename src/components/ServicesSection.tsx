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
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-3xl mx-auto text-lg">
            I offer comprehensive data engineering services for freelance, part-time consulting, 
            or full-time roles. Let's transform your data challenges into business opportunities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="card-shadow transition-smooth hover:shadow-lg hover:scale-105 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Work Together?</h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Available for freelance projects, part-time consulting, or full-time opportunities. 
              Let's discuss how I can help solve your data engineering challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="transition-bounce hover:scale-105">
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;