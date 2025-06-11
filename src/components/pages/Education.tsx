
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "KARATOA MULTIMEDIA SCHOOL AND COLLEGE",
      period: "2023-2024",
      major: "Higher Math",
      location: "Bogura, Bangladesh",
      highlights: ["Science Group", "Mathematics Focus"]
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "DHUNAT GOVT N.U. PILOT MODEL HIGH SCHOOL",
      period: "2021-2022",
      gpa: "5.00/5.00",
      major: "Higher Math",
      group: "Science",
      location: "Dhunat, Bangladesh",
      highlights: ["Perfect GPA", "Science Group", "Mathematics Excellence"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Education</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation through academic excellence and continuous learning
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {edu.degree}
                        </h3>
                        <h4 className="text-lg font-semibold text-primary mb-2">
                          {edu.institution}
                        </h4>
                      </div>
                      
                      {edu.gpa && (
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-center lg:text-right">
                          <div className="flex items-center gap-2">
                            <Award className="h-4 w-4" />
                            <span className="font-bold">GPA: {edu.gpa}</span>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-muted-foreground">
                        <span className="font-medium">Major:</span> {edu.major}
                        {edu.group && <span> | <span className="font-medium">Group:</span> {edu.group}</span>}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-3">
                        {edu.highlights.map((highlight, idx) => (
                          <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
