
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, ExternalLink, Calendar, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-16 lg:py-24 bg-gradient-to-br from-secondary/5 to-background">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-green-500/10">
              <GraduationCap className="h-8 w-8 text-green-500" />
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground">Education</h2>
          </div>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">My academic journey and achievements</p>
        </div>

        <div className="space-y-8 lg:space-y-12">
          <Card className="border-l-4 border-l-green-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group overflow-hidden">
            <CardContent className="p-6 lg:p-8">
              <div className="flex flex-col lg:flex-row items-start gap-6">
                <div className="p-4 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                  <GraduationCap className="h-10 w-10 text-green-500" />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                      Higher Secondary Certificate (HSC)
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-green-600 text-lg">KARATOA MULTIMEDIA SCHOOL AND COLLEGE</span>
                        <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>2023-2024</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        <span>Major: Higher Math</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group overflow-hidden">
            <CardContent className="p-6 lg:p-8">
              <div className="flex flex-col lg:flex-row items-start gap-6">
                <div className="p-4 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                  <GraduationCap className="h-10 w-10 text-green-500" />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                      Secondary School Certificate (SSC)
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-green-600 text-lg">DHUNAT GOVT N.U. PILOT MODEL HIGH SCHOOL</span>
                        <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>2021-2022</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-700 px-4 py-2 rounded-full text-lg font-bold mb-4">
                      <Award className="h-5 w-5" />
                      GPA: 5.00/5.00
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Group:</span>
                        <span>Science</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Major:</span>
                        <span>Higher Math</span>
                      </div>
                    </div>
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
