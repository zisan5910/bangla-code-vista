
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, MapPin, Linkedin, Mail, Send, User, GraduationCap, BookOpen, Briefcase, Award } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const quickLinks = [
    { name: "Profile", icon: <User className="h-5 w-5" /> },
    { name: "Education", icon: <GraduationCap className="h-5 w-5" /> },
    { name: "Courses", icon: <BookOpen className="h-5 w-5" /> },
    { name: "Experience", icon: <Briefcase className="h-5 w-5" /> },
    { name: "Certificates", icon: <Award className="h-5 w-5" /> }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Mail className="h-8 w-8 text-green-500" />
            <h2 className="text-4xl font-bold text-foreground">Contact</h2>
          </div>
          <p className="text-xl text-muted-foreground">Get in touch with me</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-lg">
                <Phone className="h-5 w-5 text-green-500" />
                <span className="text-foreground">+8801712525910</span>
              </div>
              <div className="flex items-center gap-3 text-lg">
                <MapPin className="h-5 w-5 text-red-500" />
                <span className="text-foreground">Bogura, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3 text-lg">
                <Linkedin className="h-5 w-5 text-blue-500" />
                <span className="text-foreground">LinkedIn Profile</span>
              </div>
              <div className="flex items-center gap-3 text-lg">
                <Mail className="h-5 w-5 text-green-500" />
                <span className="text-foreground">ridoan.zisan@gmail.com</span>
              </div>
            </div>

            <Card className="mt-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Quick Links</h3>
                <div className="grid grid-cols-2 gap-3">
                  {quickLinks.map((link, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 cursor-pointer transition-colors"
                    >
                      {link.icon}
                      <span className="text-sm font-medium text-foreground">{link.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Enter subject"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Compose email
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
