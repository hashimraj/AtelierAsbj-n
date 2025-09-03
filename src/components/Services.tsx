import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Building2, 
  Hotel, 
  Cross, 
  Lightbulb, 
  Sofa, 
  Layout, 
  Palette,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const sectors = [
    {
      icon: Home,
      title: 'Residential',
      description: 'Transform your home into a personal sanctuary that reflects your lifestyle and values.',
      features: ['Living Spaces', 'Bedrooms', 'Kitchens', 'Home Offices']
    },
    {
      icon: Building2,
      title: 'Commercial',
      description: 'Create inspiring work environments that boost productivity and employee satisfaction.',
      features: ['Office Spaces', 'Retail Design', 'Coworking Areas', 'Reception Areas']
    },
    {
      icon: Hotel,
      title: 'Hospitality',
      description: 'Design memorable experiences through thoughtful hospitality interior design.',
      features: ['Hotels', 'Restaurants', 'Bars & Lounges', 'Event Spaces']
    },
    {
      icon: Cross,
      title: 'Healthcare',
      description: 'Healing-focused environments that promote well-being and comfort for patients and staff.',
      features: ['Clinics', 'Waiting Areas', 'Treatment Rooms', 'Wellness Centers']
    },
  ];

  const capabilities = [
    {
      icon: Layout,
      title: 'Spatial Planning',
      description: 'Optimizing flow and functionality to maximize every square meter of your space.'
    },
    {
      icon: Palette,
      title: 'Material Selection',
      description: 'Curating premium materials and finishes that align with your vision and budget.'
    },
    {
      icon: Sofa,
      title: 'Bespoke Furnishings',
      description: 'Custom furniture and fixtures designed specifically for your unique requirements.'
    },
    {
      icon: Lightbulb,
      title: 'Lighting Design',
      description: 'Creating atmospheric lighting schemes that enhance mood and functionality.'
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-headline mb-6">Our Services</h2>
            <p className="text-subtitle text-neutral-600 max-w-3xl mx-auto">
              From concept to completion, we provide comprehensive interior design services 
              across multiple sectors, ensuring every project reflects our commitment to excellence.
            </p>
          </div>

          {/* Sectors */}
          <div className="mb-20">
            <h3 className="text-title text-center mb-12">Design Sectors</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sectors.map((sector, index) => (
                <Card key={index} className="p-6 border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <sector.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-playfair font-medium mb-3">{sector.title}</h4>
                    <p className="text-body text-neutral-600 mb-4">{sector.description}</p>
                    <div className="space-y-1">
                      {sector.features.map((feature, idx) => (
                        <div key={idx} className="text-sm text-neutral-500">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Capabilities */}
          <div className="mb-12">
            <h3 className="text-title text-center mb-12">Our Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <Card key={index} className="p-8 border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <capability.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-playfair font-medium mb-3">{capability.title}</h4>
                      <p className="text-body text-neutral-600">{capability.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="text-lg px-8 py-6 shadow-medium hover:shadow-large transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;