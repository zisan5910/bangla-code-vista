
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, ExternalLink, Award, Target, Brain, Monitor } from 'lucide-react';

const Olympiad = () => {
  const olympiads = [
    {
      title: "Zero Olympiad",
      description: "UN SDGs and climate action strategies",
      icon: <Target className="h-8 w-8 text-green-500" />,
      links: ["Certificate", "Website"]
    },
    {
      title: "Bangladesh Artificial Intelligence Olympiad",
      description: "National AI competition testing knowledge in machine learning, neural networks, and AI ethics",
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      links: ["Certificate", "Website"]
    },
    {
      title: "ICT Olympiad Bangladesh",
      description: "National competition testing knowledge in information and communication technologies",
      icon: <Monitor className="h-8 w-8 text-blue-500" />,
      links: ["Certificate", "Website"]
    }
  ];

  return (
    <section id="olympiad" className="py-20 bg-secondary/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="h-8 w-8 text-yellow-500" />
            <h2 className="text-4xl font-bold text-foreground">Academic Olympiads</h2>
          </div>
          <p className="text-xl text-muted-foreground">Competitive achievements and recognitions</p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {olympiads.map((olympiad, index) => (
            <Card key={index} className="border-l-4 border-l-yellow-500 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="flex justify-center mb-3">{olympiad.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {olympiad.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4 text-center">
                  {olympiad.description}
                </p>
                <div className="flex justify-center gap-4">
                  {olympiad.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="flex items-center gap-1 text-blue-600 hover:text-blue-800 cursor-pointer">
                      <Award className="h-4 w-4" />
                      <span className="text-sm">{link}</span>
                      <ExternalLink className="h-3 w-3" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Olympiad;
