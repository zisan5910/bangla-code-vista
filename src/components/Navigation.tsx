
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand - Hidden on mobile to save space */}
          <div className="hidden sm:block text-lg lg:text-xl font-bold text-foreground">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1 xl:space-x-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 hover:bg-accent ${
                  activeSection === item.id
                    ? 'text-primary bg-accent border-b-2 border-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden space-x-1">
            {navigationItems.slice(0, 6).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-2 py-1 text-xs font-medium rounded transition-all duration-200 hover:bg-accent ${
                  activeSection === item.id
                    ? 'text-primary bg-accent'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="px-2">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col space-y-3 mt-8">
                  <div className="text-base font-semibold text-foreground mb-4">
                    More Sections
                  </div>
                  {navigationItems.slice(6).map((item) => (
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

          {/* Mobile Navigation */}
          <div className="md:hidden flex-1 flex justify-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="w-full max-w-xs">
                  <Menu className="h-5 w-5 mr-2" />
                  <span className="text-sm font-medium">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 sm:w-72">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="text-lg font-semibold text-foreground mb-4">
                    Navigation
                  </div>
                  {navigationItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left py-3 px-4 rounded-lg transition-colors hover:bg-accent ${
                        activeSection === item.id
                          ? 'bg-accent text-accent-foreground font-medium border-l-4 border-primary'
                          : 'text-muted-foreground'
                      }`}
                    >
                      <span className="text-base">{item.label}</span>
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
