
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Award } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="relative">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
              alt="Md Ridoan Mahmud Zisan"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Available
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">
            Md Ridoan Mahmud Zisan
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Student | Volunteer | Web Application Developer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            As a dedicated student and volunteer, I aim to use my academic knowledge 
            and interpersonal skills to contribute to educational and social initiatives. I 
            seek opportunities for growth, collaboration, and positive impact while 
            upholding integrity, empathy, and excellence.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('certificates')}
          >
            <Award className="mr-2 h-5 w-5" />
            Certifications
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
