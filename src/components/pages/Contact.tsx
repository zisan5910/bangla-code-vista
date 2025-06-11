
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, MapPin, Linkedin, Mail, Send } from 'lucide-react';

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

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-green-500" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Contact</h2>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground">Get in touch with me</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4 p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors">
                <div className="flex-shrink-0">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-medium text-muted-foreground">Phone</p>
                  <p className="text-base sm:text-lg font-semibold text-foreground">+8801712525910</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors">
                <div className="flex-shrink-0">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-medium text-muted-foreground">Location</p>
                  <p className="text-base sm:text-lg font-semibold text-foreground">Bogura, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors">
                <div className="flex-shrink-0">
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-medium text-muted-foreground">LinkedIn</p>
                  <p className="text-base sm:text-lg font-semibold text-foreground">Professional Profile</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors">
                <div className="flex-shrink-0">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-medium text-muted-foreground">Email</p>
                  <p className="text-base sm:text-lg font-semibold text-foreground break-all">ridoan.zisan@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Additional Info Card for larger screens */}
            <Card className="hidden sm:block shadow-lg">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                  Let's Connect
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  I'm always open to discussing new opportunities, collaborations, 
                  or just having a conversation about technology and innovation. 
                  Feel free to reach out through any of the channels above or use the contact form.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardContent className="p-4 sm:p-6">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
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
                    className="w-full h-10 sm:h-11"
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
                    className="w-full h-10 sm:h-11"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message here..."
                    rows={5}
                    className="w-full resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 sm:py-3 h-auto"
                >
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
