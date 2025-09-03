import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import residentialImage from '@/assets/portfolio-residential.jpg';
import commercialImage from '@/assets/portfolio-commercial.jpg';
import hospitalityImage from '@/assets/portfolio-hospitality.jpg';
import healthcareImage from '@/assets/portfolio-healthcare.jpg';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Modern Family Home',
      category: 'residential',
      location: 'Oslo, Norway',
      image: residentialImage,
      description: 'A contemporary family residence featuring clean lines, natural materials, and thoughtful spatial planning.',
      year: '2024'
    },
    {
      id: 2,
      title: 'Corporate Headquarters',
      category: 'commercial',
      location: 'Bergen, Norway',
      image: commercialImage,
      description: 'Innovative office design promoting collaboration and productivity through biophilic design principles.',
      year: '2023'
    },
    {
      id: 3,
      title: 'Boutique Hotel Lobby',
      category: 'hospitality',
      location: 'Stavanger, Norway',
      image: hospitalityImage,
      description: 'Elegant hospitality design creating memorable first impressions with Norwegian luxury aesthetics.',
      year: '2023'
    },
    {
      id: 4,
      title: 'Wellness Clinic',
      category: 'healthcare',
      location: 'Trondheim, Norway',
      image: healthcareImage,
      description: 'Healing-focused healthcare environment designed to reduce stress and promote patient well-being.',
      year: '2024'
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'hospitality', label: 'Hospitality' },
    { id: 'healthcare', label: 'Healthcare' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-gradient-neutral">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-headline mb-6">Our Portfolio</h2>
            <p className="text-subtitle text-neutral-600 max-w-3xl mx-auto">
              Explore our recent projects showcasing our commitment to creating timeless, 
              functional, and beautiful interior spaces across various sectors.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className="transition-all duration-300"
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden border-0 shadow-soft hover:shadow-large transition-all duration-500 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm" className="shadow-medium">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-caption text-primary font-medium capitalize">
                      {project.category}
                    </span>
                    <span className="text-caption text-neutral-500">
                      {project.year}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-playfair font-medium mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-neutral-500 mb-3">
                    {project.location}
                  </p>
                  
                  <p className="text-body text-neutral-600">
                    {project.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-body text-neutral-600 mb-6">
              Want to see more of our work or discuss your project?
            </p>
            <Button 
              size="lg"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-lg px-8 py-6 shadow-medium hover:shadow-large transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;