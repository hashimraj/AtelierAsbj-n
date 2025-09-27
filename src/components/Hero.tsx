import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/UrbanApartmentRenovation.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with blur-to-clear animation */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={heroImage}
          alt="Elegant interior design by Atelier Asbjøn"
          initial={{ filter: "blur(20px)", scale: 1.05, opacity: 0 }}
          animate={{ filter: "blur(0px)", scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          {/* Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-playfair font-semibold leading-snug text-white mb-4 sm:mb-6">
            Timeless <span className="text-primary">Interior Design</span>
            <span className="block text-xl sm:text-2xl md:text-3xl mt-3 font-light text-neutral-200">
              Crafted in Norway
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            With over 20 years of expertise, Atelier Asbjøn transforms spaces
            into elegant sanctuaries that blend aesthetics, comfort, and
            functionality across residential, commercial, and hospitality
            sectors.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            {/* First button → half width on mobile */}
            <Button
              size="default"
              className="w-1/2 sm:w-auto text-sm sm:text-base px-5 py-3 sm:px-6 sm:py-4 shadow-md 
                         transition-all duration-300 bg-gradient-to-r from-primary to-primary/80 
                         text-white group"
              onClick={() => scrollToSection("portfolio")}
            >
              <span className="transition duration-300">View Our Work</span>
              <ArrowRight
                className="ml-2 h-4 w-4 transition-transform duration-300 
                           group-hover:rotate-45"
              />
            </Button>

            {/* Second button → 3/8 width on mobile */}
            <Button
              size="default"
              className="w-3/8 sm:w-auto text-sm sm:text-base px-5 py-3 sm:px-6 sm:py-4 shadow-md 
                         transition-all duration-300 bg-white text-primary 
                         hover:bg-gradient-to-r hover:from-primary hover:to-primary/80 hover:text-white"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-white opacity-80"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

