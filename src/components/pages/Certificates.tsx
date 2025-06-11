
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Download, Share, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certificates = () => {
  const [currentCertificate, setCurrentCertificate] = React.useState(0);

  const certificates = [
    {
      title: "Introduction to Python",
      issuer: "Sololearn",
      date: "2024",
      description: "Comprehensive course covering Python fundamentals and programming concepts"
    },
    {
      title: "Complete Web Development",
      issuer: "Programming Hero",
      date: "2024",
      description: "Full-stack web development covering modern frameworks and technologies"
    },
    {
      title: "Digital Marketing",
      issuer: "HubSpot Academy",
      date: "2024",
      description: "Strategic online marketing and promotional techniques"
    }
  ];

  const nextCertificate = () => {
    setCurrentCertificate((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentCertificate((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="h-8 w-8 text-green-500" />
            <h2 className="text-4xl font-bold text-foreground">Certifications</h2>
          </div>
          <p className="text-xl text-muted-foreground">Professional achievements and recognitions</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10"></div>
                  <div className="text-center z-10">
                    <Award className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {certificates[currentCertificate].title}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {certificates[currentCertificate].issuer}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {certificates[currentCertificate].date}
                    </p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  {certificates[currentCertificate].description}
                </p>

                <div className="flex justify-center items-center gap-4 mb-6">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevCertificate}
                    className="rounded-full"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  
                  <span className="text-sm text-muted-foreground">
                    {currentCertificate + 1} / {certificates.length}
                  </span>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextCertificate}
                    className="rounded-full"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex justify-center gap-4">
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Download className="mr-2 h-4 w-4" />
                    Resume (PDF)
                  </Button>
                  <Button variant="outline">
                    <Award className="mr-2 h-4 w-4" />
                    Certificates
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
