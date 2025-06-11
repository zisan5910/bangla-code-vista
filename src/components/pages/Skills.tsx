
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Languages, Briefcase, MessageCircle, Star } from 'lucide-react';

const Skills = () => {
  const languages = [
    { name: "Bengali", level: "Fluent", stars: 5 },
    { name: "English", level: "Professional", stars: 4 }
  ];

  const coreSkills = [
    "MS Office Suite", "Email Communication", "Team Collaboration", 
    "Time Management", "Problem Solving", "Professional Ethics"
  ];

  const communicationSkills = [
    "Presentation", "Professional Email"
  ];

  const additionalSkills = [
    "Canva/Photoshop", "Social Media", "Web and App Development", "The concept of AI"
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-secondary/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Lightbulb className="h-8 w-8 text-green-500" />
            <h2 className="text-4xl font-bold text-foreground">Skills</h2>
          </div>
          <p className="text-xl text-muted-foreground">My technical and professional capabilities</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border-l-4 border-l-blue-500 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Languages className="h-6 w-6 text-blue-500" />
                <h3 className="text-2xl font-bold text-foreground">Languages</h3>
              </div>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">{lang.name}</p>
                      <p className="text-sm text-muted-foreground">({lang.level})</p>
                    </div>
                    <StarRating rating={lang.stars} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="h-6 w-6 text-green-500" />
                <h3 className="text-2xl font-bold text-foreground">Core Professional Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {coreSkills.map((skill, index) => (
                  <div key={index} className="bg-secondary/30 px-3 py-2 rounded-lg text-sm font-medium text-foreground text-center">
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="h-6 w-6 text-purple-500" />
                <h3 className="text-2xl font-bold text-foreground">Communication Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {communicationSkills.map((skill, index) => (
                  <div key={index} className="bg-secondary/30 px-3 py-2 rounded-lg text-sm font-medium text-foreground text-center">
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="h-6 w-6 text-orange-500" />
                <h3 className="text-2xl font-bold text-foreground">Additional Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {additionalSkills.map((skill, index) => (
                  <div key={index} className="bg-secondary/30 px-3 py-2 rounded-lg text-sm font-medium text-foreground text-center">
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
