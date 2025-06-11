
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navigationItems = [
    { id: 'hero', label: 'Home' },
    { id: 'education', label: 'Education' },
    { id: 'courses', label: 'Courses' },
    { id: 'olympiad', label: 'Olympiad' },
    { id: 'experience', label: 'Experience' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-foreground">
            Ridoan Zisan
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="text-lg font-semibold text-foreground mb-4">
                    Navigation
                  </div>
                  {navigationItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left py-2 px-3 rounded-md transition-colors hover:bg-accent ${
                        activeSection === item.id
                          ? 'bg-accent text-accent-foreground font-medium'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
