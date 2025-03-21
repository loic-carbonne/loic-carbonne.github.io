
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Talks from '@/components/Talks';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { initScrollAnimation } from '@/utils/animations';

const Index = () => {
  useEffect(() => {
    document.title = "Loïc Carbonne | Engineering Leader";
    
    // Initialize scroll animation immediately on page load
    // Now we're using the non-hook version that can be called in useEffect
    initScrollAnimation();
  }, []);
  
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Talks />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
