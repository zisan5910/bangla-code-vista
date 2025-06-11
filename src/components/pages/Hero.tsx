
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Award, MapPin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/10 to-primary/5 px-4 pt-20">
      <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="relative animate-scale-in">
          <div className="w-56 h-56 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
              alt="Md Ridoan Mahmud Zisan"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse">
            Available for Projects
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent leading-tight">
              Md Ridoan Mahmud Zisan
            </h1>
            <div className="flex flex-wrap justify-center gap-2 text-lg md:text-xl">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">Student</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full font-medium">Volunteer</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full font-medium">Web Developer</span>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about creating positive impact through technology and education. 
            I combine academic excellence with practical development skills to build 
            meaningful solutions for communities.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Bogura, Bangladesh</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>ridoan.zisan@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('certificates')}
            className="border-2 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
          >
            <Award className="mr-2 h-5 w-5" />
            View Certifications
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
