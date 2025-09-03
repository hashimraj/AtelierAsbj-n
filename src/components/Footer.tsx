import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    'Residential Design',
    'Commercial Spaces',
    'Hospitality Design',
    'Healthcare Interiors',
    'Spatial Planning',
    'Lighting Design',
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-700 text-white">
      <div className="container mx-auto container-padding">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-playfair font-semibold text-lg">A</span>
                </div>
                <span className="font-playfair font-semibold text-xl">AtelierAsbjøn</span>
              </div>
              
              <p className="text-neutral-300 mb-6 max-w-md leading-relaxed">
                Creating timeless interior designs across Norway since 2005. Led by Elizabeth Asbjon, 
                we specialize in residential, commercial, hospitality, and healthcare spaces that 
                balance aesthetics, comfort, and functionality.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-neutral-300">Storgata 15, 0155 Oslo, Norway</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="tel:+4712345678" className="text-neutral-300 hover:text-white transition-colors">
                    +47 123 45 678
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="mailto:elizabeth@atelierasbjon.no" className="text-neutral-300 hover:text-white transition-colors">
                    elizabeth@atelierasbjon.no
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-playfair font-medium text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-neutral-300 hover:text-white transition-colors duration-200 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-playfair font-medium text-lg mb-4">Our Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="text-neutral-300">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-neutral-600" />

        {/* Footer Bottom */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-neutral-400 text-sm">
              <p>© {currentYear} AtelierAsbjøn. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-6 text-neutral-400 text-sm">
              <span>Founded 2005 • Based in Norway • 20 Years of Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;