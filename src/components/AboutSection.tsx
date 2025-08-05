import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Data Engineer with expertise in building scalable, cloud-based data pipelines 
              and automation solutions. My journey spans from developing real-time streaming architectures 
              to implementing comprehensive data governance frameworks.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With hands-on experience in modern data stack technologies like Apache Kafka, Databricks, 
              and Azure cloud services, I transform complex data challenges into elegant, efficient solutions 
              that drive business insights and decision-making.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing my Master's in Electrical and Computer Engineering at the University of Windsor, 
              I combine academic rigor with practical industry experience to stay at the forefront of 
              data engineering innovation.
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="card-shadow transition-smooth hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Master of Engineering</h3>
                    <p className="text-muted-foreground">Electrical and Computer Engineering</p>
                    <p className="text-sm text-muted-foreground">University of Windsor • 2023–2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-shadow transition-smooth hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Bachelor of Engineering</h3>
                    <p className="text-muted-foreground">Electronics and Instrumentation</p>
                    <p className="text-sm text-muted-foreground">RMD Engineering College • 2015–2019</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;