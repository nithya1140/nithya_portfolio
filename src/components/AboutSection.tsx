import { GraduationCap, Award, TrendingUp, Users, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-gradient relative overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute top-10 right-10 w-32 h-32 accent-gradient opacity-10 rounded-3xl rotate-12"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 ai-gradient opacity-15 rounded-2xl rotate-45"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Transforming complex data challenges into elegant, efficient solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6 animate-slide-in-left">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full ai-gradient rounded-full"></div>
              <div className="pl-8 space-y-6">
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
                  Having completed my Master's in Electrical and Computer Engineering at the University of Windsor, 
                  I combine academic rigor with practical industry experience to stay at the forefront of 
                  data engineering innovation.
                </p>
                
                {/* Resume Download Button */}
                <div className="pt-4">
                  <a 
                    href="/resume.pdf" 
                    download="Nithya_Vasudevan_Resume.pdf"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-smooth font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
            
            {/* Achievement Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center p-4 bg-primary/5 rounded-xl">
                <div className="text-2xl font-bold text-primary mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Pipeline Efficiency</div>
              </div>
              <div className="text-center p-4 bg-accent/5 rounded-xl">
                <div className="text-2xl font-bold text-accent mb-1">60%</div>
                <div className="text-sm text-muted-foreground">Processing Speed</div>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-xl">
                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">System Uptime</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Education Cards with modern design */}
            <Card className="modern-shadow transition-smooth hover:shadow-lg hover:scale-105 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 ai-gradient opacity-10 rounded-bl-3xl"></div>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Master of Engineering</h3>
                    <p className="text-muted-foreground font-medium">Electrical and Computer Engineering</p>
                    <p className="text-sm text-muted-foreground">University of Windsor • 2023–2024</p>
                    <div className="mt-3 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <span className="text-sm text-primary font-medium">Advanced Data Systems</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="modern-shadow transition-smooth hover:shadow-lg hover:scale-105 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 accent-gradient opacity-10 rounded-bl-3xl"></div>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Bachelor of Engineering</h3>
                    <p className="text-muted-foreground font-medium">Electronics and Instrumentation</p>
                    <p className="text-sm text-muted-foreground">RMD Engineering College • 2015–2019</p>
                    <div className="mt-3 flex items-center gap-2">
                      <Users className="h-4 w-4 text-accent" />
                      <span className="text-sm text-accent font-medium">Foundation in Engineering</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 rounded-xl text-center">
                <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-lg font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-4 rounded-xl text-center">
                <TrendingUp className="h-6 w-6 text-accent mx-auto mb-2" />
                <div className="text-lg font-bold text-accent">5+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;