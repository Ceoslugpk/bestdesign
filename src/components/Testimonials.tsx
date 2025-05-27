import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "LouiseHost completely transformed our online presence. The performance is exceptional, and their support team is always there when we need them.",
      author: "Sarah Johnson",
      company: "Tech Innovators",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5
    },
    {
      quote: "We've tried several hosting providers, but none compare to LouiseHost. The speed, reliability, and features are unmatched.",
      author: "Michael Chen",
      company: "Growth Solutions",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5
    },
    {
      quote: "Our e-commerce site's performance improved dramatically after switching to LouiseHost. We've seen higher conversion rates and lower bounce rates.",
      author: "Emily Rodriguez",
      company: "StyleShop Online",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 4
    },
    {
      quote: "The migration to LouiseHost was seamless, and their technical team helped us every step of the way. Couldn't be happier with our decision.",
      author: "David Wilson",
      company: "Wilson & Partners",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-blue-100">
            Join thousands of satisfied customers who trust LouiseHost for their web hosting needs.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.author} 
                          className="w-14 h-14 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-bold text-lg">{testimonial.author}</h4>
                          <p className="text-blue-200">{testimonial.company}</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-5 w-5 ${
                              i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-blue-300'
                            }`} 
                          />
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-xl italic">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-blue-600 hover:bg-blue-500 text-white rounded-full p-2 shadow-lg transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-blue-600 hover:bg-blue-500 text-white rounded-full p-2 shadow-lg transition-all duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  activeIndex === index 
                    ? 'bg-white' 
                    : 'bg-blue-300 hover:bg-blue-200'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;