
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, User, Calendar, Globe, Phone, Droplets } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground">Get to know me better</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-red-200 bg-red-50/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="h-6 w-6 text-red-500" />
                <h3 className="text-xl font-semibold text-foreground">Family Information</h3>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Father:</span>
                  <span className="font-medium">Md Rokibul Hasan Shekh</span>
                </div>
                <div className="flex justify-between">
                  <span>Mother:</span>
                  <span className="font-medium">Mst. Zosna Khatun</span>
                </div>
                <div className="flex justify-between">
                  <span>Siblings:</span>
                  <span className="font-medium">1 Younger Sister</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <User className="h-6 w-6 text-green-500" />
                <h3 className="text-xl font-semibold text-foreground">Personal Information</h3>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Date of Birth: 31 December, 2007</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Age: 17 years</span>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="h-4 w-4" />
                  <span>Blood Group: B+</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span>Nationality: Bangladeshi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  <span>Religion: Humanity</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
