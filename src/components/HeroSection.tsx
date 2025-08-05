import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Brain, Cpu, Database } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient">
      {/* Geometric background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 ai-gradient opacity-20 rounded-3xl rotate-45 animate-float"></div>
      <div className="absolute bottom-32 right-20 w-24 h-24 accent-gradient opacity-30 rounded-2xl rotate-12 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm font-medium text-white/80">
                <Brain className="h-4 w-4" />
                <span>AI-Powered Data Engineering</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hello, I'm <br/>
                <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
                  Nithya Vasudevan
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-primary-glow">
                Data Engineer & AI Enthusiast
              </h2>
            </div>
            
            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl">
              I design and build scalable data pipelines that turn raw data into powerful insights. 
              Specializing in modern AI-driven solutions, automation, and cloud-based architectures.
            </p>
            
            {/* AI Stats */}
            <div className="flex gap-6 py-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-glow">5+</div>
                <div className="text-sm text-white/70">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-glow">50+</div>
                <div className="text-sm text-white/70">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-glow">99%</div>
                <div className="text-sm text-white/70">Pipeline Uptime</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="hero-shadow transition-bounce hover:scale-105 text-lg px-8"
                onClick={scrollToAbout}
              >
                Explore My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 transition-smooth text-lg px-8"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
          </div>
          
          <div className="relative">
            {/* Geometric frame around image */}
            <div className="absolute -inset-8 ai-gradient rounded-3xl opacity-20 rotate-6 animate-float"></div>
            <div className="absolute -inset-4 accent-gradient rounded-2xl opacity-30 -rotate-3 animate-float" style={{animationDelay: '1s'}}></div>
            
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 modern-shadow">
              <img 
                src={heroImage} 
                alt="Nithya Vasudevan - Data Engineer" 
                className="rounded-2xl w-full max-w-md mx-auto glow-shadow"
              />
              
              {/* Tech icons floating around image */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-xl flex items-center justify-center animate-float">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/20 backdrop-blur-sm rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '1.5s'}}>
                <Cpu className="h-6 w-6 text-accent" />
              </div>
              <div className="absolute top-1/2 -right-6 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center animate-float" style={{animationDelay: '0.5s'}}>
                <Brain className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/70" />
      </div>
    </section>
  );
};

export default HeroSection;