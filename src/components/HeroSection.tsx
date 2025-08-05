import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background to-muted/20">
      {/* Background geometric elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-3xl rotate-12 opacity-20"></div>
      <div className="absolute bottom-40 left-10 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl rotate-45 opacity-15"></div>
      <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl rotate-12 opacity-10"></div>
      
      {/* Social Media Icons */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-10 space-y-4">
        <a href="https://github.com/nithyavasudevan" target="_blank" rel="noopener noreferrer" 
           className="flex items-center justify-center w-10 h-10 bg-background/80 backdrop-blur-sm border border-border rounded-xl hover:bg-primary hover:text-primary-foreground transition-smooth">
          <Github className="h-5 w-5" />
        </a>
        <a href="https://linkedin.com/in/nithyavasudevan" target="_blank" rel="noopener noreferrer"
           className="flex items-center justify-center w-10 h-10 bg-background/80 backdrop-blur-sm border border-border rounded-xl hover:bg-primary hover:text-primary-foreground transition-smooth">
          <Linkedin className="h-5 w-5" />
        </a>
        <a href="mailto:nithyavasudevan9804@gmail.com"
           className="flex items-center justify-center w-10 h-10 bg-background/80 backdrop-blur-sm border border-border rounded-xl hover:bg-primary hover:text-primary-foreground transition-smooth">
          <Mail className="h-5 w-5" />
        </a>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-muted-foreground">Hello, I'm</span><br />
                <span className="text-black">Nithya Vasudevan</span><br />
                <span className="text-primary">A Data Engineer</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                I design and build scalable data pipelines that turn raw data into powerful insights. 
                Passionate about automation, clean code, and cloud-based solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-xl font-medium"
              >
                Browse Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 rounded-xl font-medium"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Image with Geometric Frame */}
          <div className="relative flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              {/* Background geometric shapes */}
              <div className="absolute -top-6 -right-6 w-72 h-80 bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl rotate-6 opacity-90"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl rotate-12"></div>
              
              {/* Main image container */}
              <div className="relative w-72 h-80 overflow-hidden rounded-3xl border-4 border-background shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Nithya Vasudevan - Data Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-white rounded-full opacity-80"></div>
              <div className="absolute bottom-8 right-8 w-4 h-4 bg-yellow-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;