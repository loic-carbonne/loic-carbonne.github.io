import { useEffect, useRef } from 'react';
const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const {
        left,
        top,
        width,
        height
      } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      const content = containerRef.current.querySelector('.hero-content') as HTMLElement;
      if (content) {
        content.style.transform = `perspective(1000px) rotateY(${x * 2}deg) rotateX(${-y * 2}deg) translateZ(10px)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div className="min-h-screen flex items-center justify-center relative overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-secondary/30 z-0"></div>
      
      <div className="hero-content z-10 transition-transform duration-300 ease-out max-w-4xl px-6 py-12 md:px-8 animate-fade-in">
        <div className="inline-block px-3 py-1 mb-6 bg-primary/10 rounded-full text-primary text-sm font-medium">
          Engineering Leader
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          Hi, I'm <span className="text-primary">Loïc Carbonne</span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-3xl">Passionate engineering leader, currently building something new...</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button onClick={scrollToAbout} className="px-6 py-3 bg-primary text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-primary/20 hover:translate-y-[-2px]">
            Learn more
          </button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({
          behavior: 'smooth'
        })} className="px-6 py-3 bg-secondary text-foreground rounded-full font-medium transition-all hover:shadow-lg hover:shadow-foreground/5 hover:translate-y-[-2px]">
            Get in touch
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} aria-label="Scroll down">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/60">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </button>
      </div>
    </div>;
};
export default Hero;