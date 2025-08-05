import { 
  Database, 
  Cloud, 
  Code, 
  Shield, 
  GitBranch, 
  BarChart3,
  Settings,
  PenTool
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Data Engineering",
      icon: Database,
      skills: ["Python", "PySpark", "Airflow", "Databricks", "Kafka", "SSIS"],
      color: "text-blue-600 bg-blue-100"
    },
    {
      title: "Cloud & Containers", 
      icon: Cloud,
      skills: ["Azure", "OpenShift", "Docker", "Azure Functions"],
      color: "text-purple-600 bg-purple-100"
    },
    {
      title: "Databases & SQL",
      icon: Database,
      skills: ["SQL Server", "Azure SQL", "PostgreSQL", "Data Modeling"],
      color: "text-green-600 bg-green-100"
    },
    {
      title: "Security",
      icon: Shield,
      skills: ["OAuth 2.0", "Kerberos", "LDAP", "Azure Key Vault"],
      color: "text-red-600 bg-red-100"
    },
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "DSA", "Algorithm Optimization", "Clean Code"],
      color: "text-orange-600 bg-orange-100"
    },
    {
      title: "DevOps",
      icon: GitBranch,
      skills: ["Git", "GitHub Actions", "CI/CD", "Version Control"],
      color: "text-teal-600 bg-teal-100"
    },
    {
      title: "BI Tools",
      icon: BarChart3,
      skills: ["Power BI", "SSRS", "Data Visualization", "Dashboards"],
      color: "text-indigo-600 bg-indigo-100"
    },
    {
      title: "Project Tools",
      icon: PenTool,
      skills: ["JIRA", "Notion", "Agile", "Project Management"],
      color: "text-pink-600 bg-pink-100"
    }
  ];

  return (
    <section id="skills" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable data solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="card-shadow transition-smooth hover:shadow-lg hover:scale-105 group">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${category.color} group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;