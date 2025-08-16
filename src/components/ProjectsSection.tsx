import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, Clock, Zap } from "lucide-react";
import codingBg from "@/assets/coding-bg.jpg";
import laptopClean from "@/assets/laptop-clean.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "ETL Pipelines",
      description: "Automated large-scale data pipelines in Azure Data Factory & SSIS, cutting processing time by 30%.",
      image: codingBg,
      tools: ["Azure Data Factory", "SSIS", "Azure Synapse", "SQL Server"],
      outcome: "Automated large-scale data pipelines",
      icon: TrendingUp,
      metrics: "30% faster processing"
    },
    {
      title: "Power BI Dashboards",
      description: "Built 20+ interactive dashboards, reducing manual reporting by 40% and improving decision-making.",
      image: laptopClean,
      tools: ["Power BI", "SSRS", "DAX", "Power Query"],
      outcome: "Built 20+ interactive dashboards",
      icon: Clock,
      metrics: "40% less manual reporting"
    },
    {
      title: "Cloud Solutions",
      description: "Delivered secure, scalable solutions with Azure Synapse, Databricks, and Key Vault.",
      image: codingBg,
      tools: ["Azure Synapse", "Databricks", "Key Vault", "ARM Templates"],
      outcome: "Delivered secure, scalable cloud solutions",
      icon: Zap,
      metrics: "Enterprise-grade security"
    }
  ];

  return (
    <section id="projects" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Real-world data engineering solutions that deliver measurable business impact
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="card-shadow transition-smooth hover:shadow-lg group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center text-white">
                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm mr-3">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="font-semibold">{project.metrics}</span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="secondary" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="p-3 bg-primary/5 rounded-lg border-l-4 border-primary">
                    <p className="text-sm font-medium text-primary">{project.outcome}</p>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                  >
                    View Details
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">Want to see more of my work?</p>
          <Button variant="outline" size="lg">
            View All Projects
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;