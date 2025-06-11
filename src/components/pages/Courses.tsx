
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, ExternalLink, Award, Bot, Globe, TrendingUp, Users } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: "AI, Data Science, Machine Learning & Cyber Security",
      description: "Gained foundational knowledge of AI concepts and applications",
      provider: "GOOGLE, IBM, Sololearn, Simplilearn|Skillup",
      duration: "6 Months",
      icon: <Bot className="h-8 w-8 text-blue-500" />,
      links: ["Certificate", "Course 1", "Course 2"]
    },
    {
      title: "Complete Web Development",
      description: "Acquired hands-on skills in building modern web applications",
      provider: "Programming Hero",
      duration: "1 week",
      icon: <Globe className="h-8 w-8 text-green-500" />,
      links: ["Certificate", "Course"]
    },
    {
      title: "Digital Marketing",
      description: "Learned strategic online promotion techniques",
      provider: "HubSpot Academy",
      duration: "1 week",
      icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
      links: ["Certificate", "Course"]
    },
    {
      title: "Corporate Skills",
      description: "Mastered professional etiquette, management basics, and communication techniques",
      provider: "10 Minute School",
      duration: "3 weeks",
      icon: <Users className="h-8 w-8 text-purple-500" />,
      links: ["Certificate", "Course"]
    }
  ];

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="h-8 w-8 text-green-500" />
            <h2 className="text-4xl font-bold text-foreground">Professional Courses</h2>
          </div>
          <p className="text-xl text-muted-foreground">Continuous learning and skill development</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="border-l-4 border-l-green-500 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {course.icon}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {course.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <p className="font-medium text-foreground">{course.provider}</p>
                      <p className="text-sm text-muted-foreground">Duration: {course.duration}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {course.links.map((link, linkIndex) => (
                        <div key={linkIndex} className="flex items-center gap-1 text-blue-600 hover:text-blue-800 cursor-pointer">
                          <Award className="h-4 w-4" />
                          <span className="text-sm">{link}</span>
                          <ExternalLink className="h-3 w-3" />
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
