import { ChevronDown, Github, Linkedin, Mail, Brain, Cpu, Database, Zap, Sparkles, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "/lovable-uploads/56c2a101-72ba-4fe9-8f4d-cb5c56bdae1c.png";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* AI-themed background elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-3xl rotate-12 opacity-20 animate-pulse"></div>
      <div className="absolute bottom-40 left-10 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl rotate-45 opacity-15 animate-bounce"></div>
      <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl rotate-12 opacity-10 animate-spin"></div>
      
      {/* Floating AI particles */}
      <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      
      {/* Neural network lines */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#3B82F6', stopOpacity: 0.3}} />
              <stop offset="100%" style={{stopColor: '#8B5CF6', stopOpacity: 0.3}} />
            </linearGradient>
          </defs>
          <path d="M100,200 Q400,100 800,300" stroke="url(#neural-gradient)" strokeWidth="2" fill="none" />
          <path d="M200,400 Q500,200 900,500" stroke="url(#neural-gradient)" strokeWidth="2" fill="none" />
          <path d="M50,600 Q350,450 700,650" stroke="url(#neural-gradient)" strokeWidth="2" fill="none" />
        </svg>
      </div>
      
      {/* Social Media Icons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-10 space-y-4">
        <a href="https://github.com/nithya1140" target="_blank" rel="noopener noreferrer" 
           className="flex items-center justify-center w-10 h-10 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg">
          <Github className="h-5 w-5" />
        </a>
        <a href="https://linkedin.com/in/nithya-vasudevan-85190534a" target="_blank" rel="noopener noreferrer"
           className="flex items-center justify-center w-10 h-10 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg">
          <Linkedin className="h-5 w-5" />
        </a>
        <a href="mailto:nithyadevan9804@gmail.com"
           className="flex items-center justify-center w-10 h-10 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg">
          <Mail className="h-5 w-5" />
        </a>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            {/* AI Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">AI-Powered Data Engineering</span>
              <Bot className="h-4 w-4 text-purple-600" />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
                <span className="text-gray-600">Hello, I'm</span><br />
                <span className="text-black">Nithya Vasudevan</span><br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Data Engineer | Azure & BI Developer | Cloud Enthusiast
                </span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                I'm a Data Engineer with hands-on experience in designing and developing <span className="font-semibold text-blue-600">data pipelines</span>, cloud-based solutions, and business intelligence dashboards. I have a strong background in <span className="font-semibold text-purple-600">Microsoft BI Stack</span>, Azure Data Services, and Python. I enjoy solving complex data challenges, optimizing ETL processes, and delivering secure, scalable, and insightful analytics.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Explore AI Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 rounded-xl font-medium border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
              >
                <Brain className="mr-2 h-5 w-5" />
                Let's Collaborate
              </Button>
            </div>
          </div>

          {/* Image with AI-enhanced Geometric Frame */}
          <div className="relative flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              {/* AI-themed background shapes */}
              <div className="absolute -top-6 -right-6 w-72 h-80 bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 rounded-3xl rotate-6 opacity-90 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl rotate-12 animate-bounce"></div>
              
              {/* Main image container */}
              <div className="relative w-72 h-80 overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Nithya Vasudevan - AI Data Engineer"
                  className="w-full h-full object-cover"
                />
                {/* AI overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-purple-900/20"></div>
              </div>
              
              {/* Floating AI icons */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg animate-float">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg animate-float" style={{animationDelay: '1s'}}>
                <Database className="h-6 w-6 text-purple-600" />
              </div>
              <div className="absolute top-1/2 -right-6 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg animate-float" style={{animationDelay: '2s'}}>
                <Cpu className="h-5 w-5 text-cyan-600" />
              </div>
              
              {/* Glowing particles */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-white rounded-full opacity-80 animate-ping"></div>
              <div className="absolute bottom-8 right-8 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 left-4 w-3 h-3 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500 font-medium">Scroll to explore</span>
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;