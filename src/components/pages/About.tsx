
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, User, Calendar, Globe, Phone, Droplets, Users, MapPin } from 'lucide-react';

const About = () => {
  const personalInfo = [
    { icon: Calendar, label: "Date of Birth", value: "31 December, 2007" },
    { icon: User, label: "Age", value: "17 years" },
    { icon: Droplets, label: "Blood Group", value: "B+" },
    { icon: Globe, label: "Nationality", value: "Bangladeshi" },
    { icon: Heart, label: "Religion", value: "Humanity" },
    { icon: MapPin, label: "Location", value: "Bogura, Bangladesh" }
  ];

  const familyInfo = [
    { label: "Father", value: "Md Rokibul Hasan Shekh" },
    { label: "Mother", value: "Mst. Zosna Khatun" },
    { label: "Siblings", value: "1 Younger Sister" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-heart to-pink-600 rounded-full">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">About Me</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know the person behind the projects and achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-red-50 to-pink-50 hover:scale-[1.02]">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Family Information</h3>
              </div>
              <div className="space-y-4">
                {familyInfo.map((info, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/50 rounded-lg group-hover:bg-white/70 transition-colors">
                    <span className="font-medium text-muted-foreground">{info.label}:</span>
                    <span className="font-semibold text-foreground">{info.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50 hover:scale-[1.02]">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
                  <User className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Personal Information</h3>
              </div>
              <div className="grid gap-4">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white/50 rounded-lg group-hover:bg-white/70 transition-colors">
                    <info.icon className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="font-medium text-muted-foreground min-w-0">{info.label}:</span>
                    <span className="font-semibold text-foreground ml-auto">{info.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">My Philosophy</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I believe in the power of technology to create positive change in society. Through education, 
              volunteering, and development work, I strive to bridge the gap between innovation and 
              community needs. My goal is to use my skills not just for personal growth, but to contribute 
              meaningfully to the betterment of society.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
