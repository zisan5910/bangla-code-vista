
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Award, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 px-4 pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="relative animate-fade-in">
          <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105 group">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
              alt="Md Ridoan Mahmud Zisan"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
              Available for Work
            </div>
          </div>
        </div>
        
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Md Ridoan Mahmud
              </span>
              <br />
              <span className="text-foreground">Zisan</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-lg sm:text-xl lg:text-2xl">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Student</span>
              <span className="bg-green-500/10 text-green-700 px-3 py-1 rounded-full font-medium">Volunteer</span>
              <span className="bg-blue-500/10 text-blue-700 px-3 py-1 rounded-full font-medium">Developer</span>
            </div>
          </div>
          
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            As a dedicated student and volunteer, I aim to use my academic knowledge 
            and interpersonal skills to contribute to educational and social initiatives. I 
            seek opportunities for growth, collaboration, and positive impact while 
            upholding integrity, empathy, and excellence.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in">
          <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('certificates')}
            className="border-2 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            <Award className="mr-2 h-5 w-5" />
            View Certifications
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('education')}
            className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300"
            aria-label="Scroll to next section"
          >
            <ChevronDown className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
