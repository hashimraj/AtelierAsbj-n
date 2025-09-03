import React from 'react';
import { Card } from '@/components/ui/card';
import { Award, Users, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Calendar, value: '20+', label: 'Years of Experience' },
    { icon: Users, value: '500+', label: 'Projects Completed' },
    { icon: Award, value: '25+', label: 'Design Awards' },
    { icon: MapPin, value: 'Norway', label: 'Based in' },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-neutral">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-headline mb-6">About AtelierAsbjøn</h2>
            <p className="text-subtitle text-neutral-600 max-w-3xl mx-auto">
              Founded in 2005, we've spent two decades perfecting the art of interior design, 
              creating spaces that stand the test of time while reflecting our clients' unique stories.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-playfair font-semibold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-caption text-neutral-600">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-title mb-4">Led by Elizabeth Asbjon</h3>
              <p className="text-body text-neutral-600 mb-6">
                Our founder and CEO Elizabeth Asbjon established AtelierAsbjøn with a vision to create 
                interiors that transcend trends. With her Norwegian heritage and international perspective, 
                she brings a unique approach that combines Scandinavian minimalism with global sophistication.
              </p>
              
              <p className="text-body text-neutral-600 mb-6">
                Our expertise spans across four key sectors: residential homes that become personal sanctuaries, 
                commercial spaces that inspire productivity, hospitality environments that create memorable experiences, 
                and healthcare facilities that promote healing and well-being.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-body text-neutral-600">
                    <strong>Spatial Planning:</strong> Optimizing flow and functionality in every space
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-body text-neutral-600">
                    <strong>Material Selection:</strong> Curating textures and finishes that tell your story
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-body text-neutral-600">
                    <strong>Bespoke Furnishings:</strong> Creating custom pieces that perfectly fit your vision
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="p-8 bg-primary/5 border-primary/20">
                <blockquote className="text-body italic text-neutral-700 mb-4">
                  "Great design is not about following trends—it's about creating timeless spaces 
                  that enhance the lives of those who inhabit them. Every project we undertake is 
                  a collaboration between our expertise and our client's dreams."
                </blockquote>
                <cite className="text-caption font-medium text-foreground">
                  — Elizabeth Asbjon, Founder & CEO
                </cite>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;