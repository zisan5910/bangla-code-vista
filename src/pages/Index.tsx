
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/pages/Hero';
import Education from '../components/pages/Education';
import Courses from '../components/pages/Courses';
import Olympiad from '../components/pages/Olympiad';
import Experience from '../components/pages/Experience';
import Certificates from '../components/pages/Certificates';
import Skills from '../components/pages/Skills';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';
import GhostAI from '../components/pages/GhostAI';
import Footer from '../components/pages/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Add proper spacing for fixed navigation */}
      <div className="pt-16 lg:pt-20">
        <div id="hero" className="min-h-screen flex items-center">
          <Hero />
        </div>
        <div id="education" className="py-12 lg:py-20">
          <Education />
        </div>
        <div id="courses" className="py-12 lg:py-20">
          <Courses />
        </div>
        <div id="olympiad" className="py-12 lg:py-20">
          <Olympiad />
        </div>
        <div id="experience" className="py-12 lg:py-20">
          <Experience />
        </div>
        <div id="certificates" className="py-12 lg:py-20">
          <Certificates />
        </div>
        <div id="skills" className="py-12 lg:py-20">
          <Skills />
        </div>
        <div id="about" className="py-12 lg:py-20">
          <About />
        </div>
        <div id="contact" className="py-12 lg:py-20">
          <Contact />
        </div>
        <Footer />
        <GhostAI />
      </div>
    </div>
  );
};

export default Index;
