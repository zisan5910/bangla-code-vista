
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, ExternalLink, Award, Bot, Globe, TrendingUp, Users, Clock } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: "AI, Data Science, Machine Learning & Cyber Security",
      description: "Comprehensive learning in emerging technologies with hands-on projects and real-world applications",
      provider: "GOOGLE, IBM, Sololearn, Simplilearn",
      duration: "6 Months",
      icon: <Bot className="h-8 w-8 text-blue-500" />,
      skills: ["Machine Learning", "Data Analysis", "Cybersecurity", "Python"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Complete Web Development",
      description: "Full-stack development covering modern frameworks, responsive design, and deployment strategies",
      provider: "Programming Hero",
      duration: "1 week",
      icon: <Globe className="h-8 w-8 text-green-500" />,
      skills: ["React", "JavaScript", "HTML/CSS", "Node.js"],
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Digital Marketing",
      description: "Strategic online marketing including SEO, content marketing, and social media strategies",
      provider: "HubSpot Academy",
      duration: "1 week",
      icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
      skills: ["SEO", "Content Marketing", "Analytics", "Social Media"],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Corporate Skills",
      description: "Professional development focusing on leadership, communication, and business management",
      provider: "10 Minute School",
      duration: "3 weeks",
      icon: <Users className="h-8 w-8 text-purple-500" />,
      skills: ["Leadership", "Communication", "Project Management", "Team Building"],
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Professional Courses</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and skill development through industry-recognized programs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-white/80 backdrop-blur-sm overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 bg-gradient-to-r ${course.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {course.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {course.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-semibold text-foreground">Provider:</span>
                        <span className="text-muted-foreground">{course.provider}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Duration: {course.duration}</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Skills Gained:</h4>
                      <div className="flex flex-wrap gap-2">
                        {course.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-blue-600 hover:text-blue-800 cursor-pointer group/link">
                        <Award className="h-4 w-4 group-hover/link:scale-110 transition-transform" />
                        <span className="text-sm font-medium">Certificate</span>
                        <ExternalLink className="h-3 w-3" />
                      </div>
                      <div className="flex items-center gap-1 text-green-600 hover:text-green-800 cursor-pointer group/link">
                        <BookOpen className="h-4 w-4 group-hover/link:scale-110 transition-transform" />
                        <span className="text-sm font-medium">Course Details</span>
                        <ExternalLink className="h-3 w-3" />
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

export default Courses;
