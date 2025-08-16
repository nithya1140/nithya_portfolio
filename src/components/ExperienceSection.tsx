import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Avanade",
      location: "Toronto, Canada",
      position: "Data Engineer",
      period: "Jan 2025 – Present",
      achievements: [
        "Developed and monitored large-scale ETL pipelines using ADF and SSIS",
        "Designed Power BI dashboards & SSRS reports to improve decision-making",
        "Built OLTP/OLAP architectures, optimized with partitioning & caching",
        "Automated deployments using ARM templates",
        "Implemented metadata management & lineage with Azure Purview",
        "Mentored junior developers & enforced coding best practices"
      ],
      current: true
    },
    {
      company: "TCS",
      location: "Kochi, India", 
      position: "Cloud and BI Engineer",
      period: "Sep 2021 – Jul 2023",
      achievements: [
        "Built ETL pipelines & dashboards with SSIS + Power BI",
        "Designed real-time data solutions using Azure Stream Analytics & Functions",
        "Automated workflows using Azure Logic Apps & Data Lake",
        "Enhanced analytics with SSAS models & advanced Power BI reporting",
        "Ensured compliance with enterprise data governance"
      ],
      current: false
    },
    {
      company: "Indian Overseas Bank",
      location: "Tamil Nadu, India",
      position: "BI Engineer", 
      period: "Sep 2019 – Sep 2021",
      achievements: [
        "Built interactive Power BI dashboards for credit risk & financial insights",
        "Designed schemas in Azure Synapse & integrated with Key Vault security",
        "Enhanced dashboards for performance & UX",
        "Developed SSIS packages with parallel processing & table partitioning",
        "Configured SSRS subscriptions, security roles, and delivery automation",
        "Maintained SSAS tabular models & ensured data integrity"
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className={`card-shadow transition-smooth hover:shadow-lg ${exp.current ? 'ring-2 ring-primary/20' : ''}`}>
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">{exp.position}</h3>
                      <h4 className="text-xl text-primary font-semibold">{exp.company}</h4>
                      {exp.current && (
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                          Current Position
                        </span>
                      )}
                    </div>
                    <div className="mt-4 lg:mt-0 space-y-2 text-right">
                      <div className="flex items-center justify-start lg:justify-end text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center justify-start lg:justify-end text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;