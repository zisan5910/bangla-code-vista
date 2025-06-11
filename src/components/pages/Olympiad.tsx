
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, ExternalLink, Award, Target, Brain, Monitor, Calendar } from 'lucide-react';

const Olympiad = () => {
  const olympiads = [
    {
      title: "Zero Olympiad",
      description: "United Nations Sustainable Development Goals and climate action strategies competition",
      fullDescription: "Participated in a global competition focusing on UN SDGs, environmental sustainability, and innovative climate solutions.",
      icon: <Target className="h-8 w-8 text-green-500" />,
      links: ["Certificate", "Website"],
      category: "Environmental Science",
      achievement: "Participant"
    },
    {
      title: "Bangladesh Artificial Intelligence Olympiad",
      description: "National AI competition testing advanced knowledge in machine learning and neural networks",
      fullDescription: "Competed in Bangladesh's premier AI competition, demonstrating expertise in machine learning algorithms, neural network architectures, and AI ethics.",
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      links: ["Certificate", "Website"],
      category: "Artificial Intelligence",
      achievement: "National Participant"
    },
    {
      title: "ICT Olympiad Bangladesh",
      description: "National information and communication technology competition",
      fullDescription: "Showcased skills in programming, database management, networking, and emerging ICT technologies in this prestigious national competition.",
      icon: <Monitor className="h-8 w-8 text-blue-500" />,
      links: ["Certificate", "Website"],
      category: "Information Technology",
      achievement: "Regional Finalist"
    }
  ];

  return (
    <section id="olympiad" className="py-16 lg:py-24 bg-gradient-to-br from-secondary/5 to-background">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-yellow-500/10">
              <Trophy className="h-8 w-8 text-yellow-500" />
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground">Academic Olympiads</h2>
          </div>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">Competitive achievements and recognitions in various academic disciplines</p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {olympiads.map((olympiad, index) => (
            <Card key={index} className="border-l-4 border-l-yellow-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group overflow-hidden">
              <CardContent className="p-6 lg:p-8">
                <div className="space-y-6">
                  <div className="text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="p-4 rounded-full bg-gray-50 group-hover:scale-110 transition-transform duration-300">
                        {olympiad.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2 line-clamp-2">
                        {olympiad.title}
                      </h3>
                      <div className="inline-flex items-center gap-1 bg-yellow-500/10 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                        <Trophy className="h-3 w-3" />
                        {olympiad.achievement}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-muted-foreground text-center leading-relaxed">
                      {olympiad.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Category: {olympiad.category}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <div className="flex justify-center gap-4">
                        {olympiad.links.map((link, linkIndex) => (
                          <div key={linkIndex} className="flex items-center gap-1 text-blue-600 hover:text-blue-800 cursor-pointer group/link transition-colors">
                            <Award className="h-4 w-4" />
                            <span className="text-sm font-medium">{link}</span>
                            <ExternalLink className="h-3 w-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
            <Trophy className="h-5 w-5" />
            <span className="font-medium">Continuously participating in competitive academic events</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Olympiad;
