
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
      <div id="hero">
        <Hero />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="courses">
        <Courses />
      </div>
      <div id="olympiad">
        <Olympiad />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="certificates">
        <Certificates />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      <GhostAI />
    </div>
  );
};

export default Index;
