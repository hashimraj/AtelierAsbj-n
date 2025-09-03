import React from 'react';
import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner',
      location: 'Oslo',
      rating: 5,
      text: 'Elizabeth and her team transformed our home into a space we never want to leave. Their attention to detail and understanding of our lifestyle was exceptional. The result is both beautiful and incredibly functional.',
      project: 'Residential Renovation'
    },
    {
      id: 2,
      name: 'Marcus Eriksson',
      role: 'CEO, TechFlow AS',
      location: 'Bergen',
      rating: 5,
      text: 'AtelierAsbjøn designed our new office space with such thoughtfulness. Our team productivity has increased, and clients are constantly impressed when they visit. Absolutely worth the investment.',
      project: 'Corporate Office Design'
    },
    {
      id: 3,
      name: 'Anna Lindberg',
      role: 'Hotel Manager',
      location: 'Stavanger',
      rating: 5,
      text: 'The lobby redesign has completely transformed our guests\' first impression. The elegant, welcoming atmosphere Elizabeth created perfectly captures our brand while maintaining Norwegian sophistication.',
      project: 'Boutique Hotel Renovation'
    },
    {
      id: 4,
      name: 'Dr. Olav Hansen',
      role: 'Medical Director',
      location: 'Trondheim',
      rating: 5,
      text: 'Our patients consistently comment on how calm and comfortable our clinic feels. AtelierAsbjøn understood the healing power of good design and created an environment that truly supports wellness.',
      project: 'Healthcare Facility Design'
    },
  ];

  const stats = [
    { number: '98%', label: 'Client Satisfaction' },
    { number: '95%', label: 'Project Completion Rate' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '85%', label: 'Repeat Clients' },
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-headline mb-6">What Our Clients Say</h2>
            <p className="text-subtitle text-neutral-600 max-w-3xl mx-auto">
              Our success is measured by the satisfaction of our clients. Here's what they have to say 
              about working with AtelierAsbjøn.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-playfair font-semibold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-caption text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-8 border-0 shadow-soft hover:shadow-medium transition-all duration-300 relative">
                <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-body text-neutral-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="border-t border-neutral-200 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-playfair font-medium text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-neutral-500">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-neutral-400">
                        {testimonial.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-primary font-medium">
                        {testimonial.project}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Card className="p-8 bg-primary/5 border-primary/20 max-w-3xl mx-auto">
              <h3 className="text-title mb-4">Ready to Start Your Project?</h3>
              <p className="text-body text-neutral-600 mb-6">
                Join our satisfied clients and let us create a space that exceeds your expectations. 
                Get in touch for a consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:elizabeth@atelierasbjon.no"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
                >
                  Email Elizabeth
                </a>
                <a 
                  href="tel:+4712345678"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors duration-200 font-medium"
                >
                  Call +47 123 45 678
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;