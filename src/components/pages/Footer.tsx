
import React from 'react';
import { Linkedin, Github, Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5 lg:h-6 lg:w-6" />, href: "#", label: "LinkedIn" },
    { icon: <Github className="h-5 w-5 lg:h-6 lg:w-6" />, href: "#", label: "GitHub" },
    { icon: <Facebook className="h-5 w-5 lg:h-6 lg:w-6" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5 lg:h-6 lg:w-6" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="h-5 w-5 lg:h-6 lg:w-6" />, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-8 lg:py-12">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="text-center space-y-6 lg:space-y-8">
          <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold">Md Ridoan Mahmud Zisan</h3>
          <p className="text-base lg:text-lg opacity-90">Student | Volunteer | Web Application Developer</p>
          
          <div className="flex justify-center space-x-4 lg:space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-2 hover:opacity-75 transition-all duration-200 hover:scale-110 rounded-full hover:bg-primary-foreground/10"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="border-t border-primary-foreground/20 pt-6 lg:pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs sm:text-sm opacity-75">
                <div className="flex items-center gap-2">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Bogura, Bangladesh</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="break-all">ridoan.zisan@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>+8801712525910</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm opacity-75 text-center lg:text-right">
                © 2025. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
