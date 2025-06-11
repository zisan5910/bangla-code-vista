
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, User, Calendar, Globe, Droplets, MapPin, Users, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gradient-to-br from-background to-secondary/5">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-primary/10">
              <User className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground">About Me</h2>
          </div>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">Get to know me on a personal level</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 mb-12">
          <Card className="border-red-200 bg-gradient-to-br from-red-50/80 to-red-50/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
            <CardContent className="p-6 lg:p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-full bg-red-500/10 group-hover:bg-red-500/20 transition-colors">
                    <Heart className="h-6 w-6 text-red-500" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-foreground">Family Information</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                    <span className="text-muted-foreground font-medium">Father:</span>
                    <span className="font-semibold text-foreground">Md Rokibul Hasan Shekh</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                    <span className="text-muted-foreground font-medium">Mother:</span>
                    <span className="font-semibold text-foreground">Mst. Zosna Khatun</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                    <span className="text-muted-foreground font-medium">Siblings:</span>
                    <span className="font-semibold text-foreground">1 Younger Sister</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-gradient-to-br from-green-50/80 to-green-50/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
            <CardContent className="p-6 lg:p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                    <User className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-foreground">Personal Information</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Date of Birth:</span>
                    <span className="font-semibold">31 December, 2007</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Age:</span>
                    <span className="font-semibold">17 years</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Droplets className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Blood Group:</span>
                    <span className="font-semibold text-red-600">B+</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Nationality:</span>
                    <span className="font-semibold">Bangladeshi</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Religion:</span>
                    <span className="font-semibold">Humanity</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional personal insights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <Card className="text-center p-6 border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors group">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h4 className="font-semibold mb-2">Location</h4>
            <p className="text-muted-foreground">Bogura, Bangladesh</p>
          </Card>

          <Card className="text-center p-6 border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10 transition-colors group">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                <BookOpen className="h-6 w-6 text-blue-500" />
              </div>
            </div>
            <h4 className="font-semibold mb-2">Current Focus</h4>
            <p className="text-muted-foreground">Higher Secondary Studies</p>
          </Card>

          <Card className="text-center p-6 border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 transition-colors group sm:col-span-2 lg:col-span-1">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                <Users className="h-6 w-6 text-purple-500" />
              </div>
            </div>
            <h4 className="font-semibold mb-2">Interests</h4>
            <p className="text-muted-foreground">Community Service & Tech</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
