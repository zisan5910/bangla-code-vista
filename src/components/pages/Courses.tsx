
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, ExternalLink, Award, Bot, Globe, TrendingUp, Users, Clock } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: "AI, Data Science, Machine Learning & Cyber Security",
      description: "Comprehensive training in AI concepts, machine learning algorithms, and cybersecurity fundamentals",
      provider: "GOOGLE, IBM, Sololearn, Simplilearn|Skillup",
      duration: "6 Months",
      icon: <Bot className="h-8 w-8 text-blue-500" />,
      links: ["Certificate", "Course 1", "Course 2"],
      skills: ["Machine Learning", "Data Analysis", "Cybersecurity", "AI Ethics"]
    },
    {
      title: "Complete Web Development",
      description: "Full-stack web development with modern frameworks and best practices",
      provider: "Programming Hero",
      duration: "1 week",
      icon: <Globe className="h-8 w-8 text-green-500" />,
      links: ["Certificate", "Course"],
      skills: ["React", "JavaScript", "Node.js", "Database Design"]
    },
    {
      title: "Digital Marketing",
      description: "Strategic online marketing, SEO, and social media promotion techniques",
      provider: "HubSpot Academy",
      duration: "1 week",
      icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
      links: ["Certificate", "Course"],
      skills: ["SEO", "Content Marketing", "Analytics", "Social Media"]
    },
    {
      title: "Corporate Skills",
      description: "Professional communication, leadership, and workplace management skills",
      provider: "10 Minute School",
      duration: "3 weeks",
      icon: <Users className="h-8 w-8 text-purple-500" />,
      links: ["Certificate", "Course"],
      skills: ["Leadership", "Communication", "Team Management", "Professional Etiquette"]
    }
  ];

  return (
    <section id="courses" className="py-16 lg:py-24 bg-gradient-to-br from-background to-secondary/5">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-green-500/10">
              <BookOpen className="h-8 w-8 text-green-500" />
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground">Professional Courses</h2>
          </div>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">Continuous learning and skill development journey</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {courses.map((course, index) => (
            <Card key={index} className="border-l-4 border-l-green-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group overflow-hidden bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 lg:p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-gray-50 group-hover:scale-110 transition-transform duration-300">
                      {course.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 line-clamp-2">
                        {course.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {course.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-foreground">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="font-medium text-sm lg:text-base">{course.provider}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">Duration: {course.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">Key Skills:</p>
                      <div className="flex flex-wrap gap-2">
                        {course.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      {course.links.map((link, linkIndex) => (
                        <div key={linkIndex} className="flex items-center gap-1 text-blue-600 hover:text-blue-800 cursor-pointer group/link transition-colors">
                          <Award className="h-4 w-4" />
                          <span className="text-sm font-medium">{link}</span>
                          <ExternalLink className="h-3 w-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </div>
                      ))}
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

export default Courses;
