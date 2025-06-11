
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, ExternalLink, Users, Heart } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Bogura Online Blood Donation Organisation",
      role: "Volunteer & Developer",
      period: "2023-Present",
      icon: <Heart className="h-8 w-8 text-red-500" />,
      achievements: [
        "Built blood donor platform serving 68k+ community members",
        "Implemented digital system reducing response time by 40%"
      ],
      links: ["Facebook Group", "Web Application"]
    },
    {
      title: "Youth Hope BD",
      role: "Volunteer & Developer",
      period: "2025-Present",
      icon: <Users className="h-8 w-8 text-green-500" />,
      achievements: [
        "Developed platform for youth development and social services",
        "Created tools for volunteer management and event organization"
      ],
      links: ["Web Application"]
    }
  ];

  const projects = [
    { name: "BOBDO", description: "online blood donation website and web app" },
    { name: "YouthHopeBD", description: "platform for youth development and social services" },
    { name: "UniConverter", description: "Unit converter supporting 50+ measurement categories" },
    { name: "DevHub", description: "My all projects" }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="h-8 w-8 text-blue-500" />
            <h2 className="text-4xl font-bold text-foreground">Experience</h2>
          </div>
          <p className="text-xl text-muted-foreground">Volunteer work and development projects</p>
        </div>

        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-blue-500 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {exp.icon}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                      <div className="flex gap-2">
                        {exp.links.map((link, linkIndex) => (
                          <div key={linkIndex} className="flex items-center gap-1 text-blue-600 hover:text-blue-800 cursor-pointer">
                            <span className="text-sm">{link}</span>
                            <ExternalLink className="h-3 w-3" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="text-lg font-medium text-muted-foreground mb-4">
                      {exp.role} | {exp.period}
                    </p>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-l-4 border-l-blue-500 shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Web Development Projects</h3>
            <p className="text-muted-foreground mb-4">Independent Developer | 2023-Present</p>
            <div className="grid md:grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/20">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      {project.name}
                      <ExternalLink className="h-4 w-4 text-blue-500" />
                    </h4>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
