
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
      <main className="pt-16 sm:pt-20">
        <section id="hero">
          <Hero />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="courses">
          <Courses />
        </section>
        <section id="olympiad">
          <Olympiad />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="certificates">
          <Certificates />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <GhostAI />
    </div>
  );
};

export default Index;
