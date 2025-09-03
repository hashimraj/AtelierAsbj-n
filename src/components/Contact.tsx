import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Award,
  Users,
  Calendar
} from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Location',
      details: ['Storgata 15', '0155 Oslo, Norway']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+47 123 45 678', 'Mon-Fri 9:00-17:00']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['elizabeth@atelierasbjon.no', 'info@atelierasbjon.no']
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 - 17:00', 'Saturday: By appointment']
    },
  ];

  const highlights = [
    {
      icon: Calendar,
      title: 'Founded 2005',
      subtitle: '20 years of excellence'
    },
    {
      icon: Users,
      title: 'Expert Team',
      subtitle: 'Led by Elizabeth Asbjon'
    },
    {
      icon: Award,
      title: 'Award-Winning',
      subtitle: '25+ design awards'
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-neutral">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-headline mb-6">Get In Touch</h2>
            <p className="text-subtitle text-neutral-600 max-w-3xl mx-auto">
              Ready to transform your space? We'd love to hear about your project and discuss 
              how we can bring your vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 border-0 shadow-soft">
                <h3 className="text-title mb-6">Start Your Project</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-caption font-medium mb-2">
                        First Name *
                      </label>
                      <Input 
                        id="firstName" 
                        placeholder="Your first name"
                        required
                        className="transition-all duration-200 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-caption font-medium mb-2">
                        Last Name *
                      </label>
                      <Input 
                        id="lastName" 
                        placeholder="Your last name"
                        required
                        className="transition-all duration-200 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-caption font-medium mb-2">
                      Email Address *
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com"
                      required
                      className="transition-all duration-200 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-caption font-medium mb-2">
                      Phone Number
                    </label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+47 123 45 678"
                      className="transition-all duration-200 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-caption font-medium mb-2">
                      Project Type *
                    </label>
                    <select 
                      id="projectType" 
                      required
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="hospitality">Hospitality</option>
                      <option value="healthcare">Healthcare</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-caption font-medium mb-2">
                      Project Details *
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                      rows={5}
                      required
                      className="transition-all duration-200 focus:ring-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-lg py-6 shadow-medium hover:shadow-large transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 border-0 shadow-soft">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-playfair font-medium mb-2">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-body text-neutral-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}

              {/* Highlights */}
              <Card className="p-6 border-0 shadow-soft bg-primary/5">
                <h4 className="font-playfair font-medium mb-4">Why Choose AtelierAsbjøn?</h4>
                <div className="space-y-4">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <highlight.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{highlight.title}</div>
                        <div className="text-sm text-neutral-600">{highlight.subtitle}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Direct Contact Options */}
          <div className="text-center">
            <p className="text-body text-neutral-600 mb-6">
              Prefer to contact us directly?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:elizabeth@atelierasbjon.no"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Elizabeth
              </a>
              <a 
                href="tel:+4712345678"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors duration-200 font-medium"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call +47 123 45 678
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;