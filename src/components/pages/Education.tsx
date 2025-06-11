
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, ExternalLink } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="h-8 w-8 text-green-500" />
            <h2 className="text-4xl font-bold text-foreground">Education</h2>
          </div>
          <p className="text-xl text-muted-foreground">My academic journey</p>
        </div>

        <div className="space-y-8">
          <Card className="border-l-4 border-l-green-500 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <GraduationCap className="h-8 w-8 text-green-500 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Higher Secondary Certificate (HSC)
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-green-600">KARATOA MULTIMEDIA SCHOOL AND COLLEGE</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground mb-2">2023-2024</p>
                  <p className="text-muted-foreground">Major: Higher Math</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <GraduationCap className="h-8 w-8 text-green-500 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Secondary School Certificate (SSC)
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-green-600">DHUNAT GOVT N.U. PILOT MODEL HIGH SCHOOL</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground mb-2">2021-2022</p>
                  <p className="text-lg font-semibold text-green-600 mb-2">GPA: 5.00/5.00</p>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Group: Science</p>
                    <p>Major: Higher Math</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
