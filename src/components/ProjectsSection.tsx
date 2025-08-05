import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, Clock, Zap } from "lucide-react";
import codingBg from "@/assets/coding-bg.jpg";
import laptopClean from "@/assets/laptop-clean.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Customer Data Platform – ETL Pipeline Modernization",
      description: "Modernized legacy ETL processes by building scalable data pipelines using Python and Azure cloud services, resulting in significant performance improvements.",
      image: codingBg,
      tools: ["Python", "Azure Data Factory", "Synapse", "SQL Server"],
      outcome: "Reduced processing time by 60%",
      icon: TrendingUp,
      metrics: "60% faster processing"
    },
    {
      title: "Product Inventory Analytics Pipeline",
      description: "Built end-to-end analytics pipeline for inventory management using modern data stack, enabling real-time insights and predictive analytics.",
      image: laptopClean,
      tools: ["Airflow", "dbt", "PostgreSQL", "AWS S3"],
      outcome: "Reduced out-of-stock incidents by 30%",
      icon: Clock,
      metrics: "30% fewer stockouts"
    },
    {
      title: "Real-Time User Activity Streaming Pipeline",
      description: "Implemented high-throughput streaming pipeline for user activity data, enabling real-time personalization and analytics.",
      image: codingBg,
      tools: ["Kafka", "PySpark", "Redshift", "Lambda"],
      outcome: "Reduced processing delay from 20 mins to <1 min",
      icon: Zap,
      metrics: "<1 min latency"
    }
  ];

  return (
    <section id="projects" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
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