import React from "react";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./testimonials.css"; // 👈 create this CSS file

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  project: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    location: "Oslo",
    rating: 5,
    text: "Elizabeth and her team brought life to our house. The rooms now feel brighter, more open, and so welcoming. We absolutely love spending time home.",
    project: "Residential Renovation",
  },
  {
    id: 2,
    name: "Marcus Eriksson",
    role: "CEO, TechFlow AS",
    location: "Bergen",
    rating: 5,
    text: "AtelierAsbjøn designa vårt kontor med omtanke og stil. Hele teamet føler økt trivsel, og kundene blir alltid imponert når de besøker oss. Fantastisk opplevelse.",
    project: "Corporate Office Design",
  },
  {
    id: 3,
    name: "Anna Lindberg",
    role: "Hotel Manager",
    location: "Stavanger",
    rating: 5,
    text: "Lobbyen ble helt forvandlet til et vakkert, varmt og luksuriøst rom. Gjester nevner ofte hvor behagelig atmosfæren er, og det gir oss et godt omdømme.",
    project: "Boutique Hotel Renovation",
  },
  {
    id: 4,
    name: "Dr. Olav Hansen",
    role: "Medical Director",
    location: "Trondheim",
    rating: 5,
    text: "Pacients feel calm and comfortable now. The clinic has a peaceful design with natural light. Staff also happier working here. Thank you Elizabeth and team.",
    project: "Healthcare Facility Design",
  },
  {
    id: 5,
    name: "Selin Yılmaz",
    role: "Restoran Sahibi",
    location: "İstanbul",
    rating: 5,
    text: "Yeni restoran tasarımımız çok şık ve huzurlu oldu. Müşterilerimiz kendilerini evde gibi hissediyor. Çalışanlarımız da daha motive. Her şey harika bir şekilde tamamlandı.",
    project: "Restaurant Interior",
  },
  {
    id: 6,
    name: "John Paul",
    role: "Apartment Owner",
    location: "London",
    rating: 4,
    text: "The design looks beautiful and modern, even though delivery was slightly late. Friends always compliment the cozy feeling. Overall, very satisfied with the final outcome.",
    project: "Apartment Makeover",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding bg-neutral-50">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-headline mb-4">What Our Clients Say</h2>
            <p className="text-subtitle text-neutral-600 max-w-3xl mx-auto">
              Our success is measured by the satisfaction of our clients. 
              Here's what they have to say about working with AtelierAsbjøn.
            </p>
          </div>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            grabCursor={true}
            className="pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <Card className="p-8 bg-white border border-neutral-100 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 rounded-2xl relative max-w-3xl mx-auto">
                  <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-body text-neutral-700 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="border-t border-neutral-200 pt-4">
                    <div className="flex items-center justify-between flex-wrap gap-3">
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
                      <div className="text-right text-sm text-primary font-medium">
                        {testimonial.project}
                      </div>
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="p-8 bg-primary/5 border-primary/20 shadow-md rounded-xl max-w-3xl mx-auto">
              <h3 className="text-title mb-4">Ready to Start Your Project?</h3>
              <p className="text-body text-neutral-600 mb-6">
                Join our satisfied clients and let us create a space that exceeds
                your expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:elizabeth@atelierasbjon.no"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium w-full sm:w-auto"
                >
                  Email Elizabeth
                </a>
                <a
                  href="tel:+4712345678"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors duration-200 font-medium w-full sm:w-auto"
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
