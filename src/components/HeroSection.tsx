import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient">
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-primary-glow">Nithya Vasudevan</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
              I design and build scalable data pipelines that turn raw data into powerful insights. 
              Passionate about automation, clean code, and cloud-based solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="hero-shadow transition-bounce hover:scale-105"
                onClick={scrollToAbout}
              >
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 transition-smooth"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Nithya Vasudevan" 
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto glow-shadow"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent"></div>
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