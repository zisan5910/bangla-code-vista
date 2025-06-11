
import React from 'react';
import { Linkedin, Github, Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Linkedin className="h-6 w-6" />, href: "#", label: "LinkedIn" },
    { icon: <Github className="h-6 w-6" />, href: "#", label: "GitHub" },
    { icon: <Facebook className="h-6 w-6" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="h-6 w-6" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="h-6 w-6" />, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold">Md Ridoan Mahmud Zisan</h3>
          <p className="text-lg opacity-90">Student | Volunteer | Web Application Developer</p>
          
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="hover:opacity-75 transition-opacity"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="border-t border-primary-foreground/20 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-6 text-sm opacity-75">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Bogura, Bangladesh</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>ridoan.zisan@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+8801712525910</span>
                </div>
              </div>
              <p className="text-sm opacity-75">
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
