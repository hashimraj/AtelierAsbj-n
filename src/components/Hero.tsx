import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-interior.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Elegant interior design by AtelierAsbjøn" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto container-padding text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-display mb-6 animate-fade-up">
            Timeless Interior Design
            <span className="block text-primary">From Norway</span>
          </h1>
          
          <p className="text-subtitle text-neutral-600 mb-8 max-w-2xl mx-auto animate-fade-up" 
             style={{ animationDelay: '0.2s' }}>
            20 years of creating sophisticated interiors that balance aesthetics, comfort, and 
            functionality across residential, commercial, hospitality, and healthcare spaces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" 
               style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-medium hover:shadow-large transition-all duration-300"
              onClick={() => scrollToSection('portfolio')}
            >
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neutral-400 rounded-full p-1">
          <div className="w-1 h-3 bg-neutral-400 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;