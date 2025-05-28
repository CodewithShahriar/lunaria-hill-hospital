
import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Patient',
      content: 'The care I received at Lunaria Hill Hospital was exceptional. The staff was compassionate and the facilities are world-class.',
      rating: 5,
      image: 'https://jthemes.net/themes/html/medservices/files/images/review-author-5.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Patient',
      content: 'Thanks to the emergency team, my life was saved. The quick response and professional treatment made all the difference.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Emily Davis',
      role: 'Patient',
      content: 'The telemedicine service is amazing. I could consult with the doctor from home, which saved me time and effort.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-primary-50">
  <div className="container mx-auto px-4">
    {/* Heading */}
    <div className="text-center mb-12 md:mb-16 animate-fade-in">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
        What Our Patients Say
      </h2>
      <p className="text-base md:text-xl text-gray-600">
        Real stories from real people who trust us with their health
      </p>
    </div>

    {/* Testimonial Card */}
    <div className="max-w-4xl mx-auto relative">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 animate-fade-in">
        <div className="text-center">
          {/* Stars */}
          <div className="flex justify-center mb-4 md:mb-6">
            {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 md:h-6 md:w-6 text-yellow-400 fill-current" />
            ))}
          </div>

          {/* Content */}
          <blockquote className="text-base md:text-2xl text-gray-700 italic mb-6 md:mb-8 leading-relaxed">
            "{testimonials[currentTestimonial].content}"
          </blockquote>

          {/* Author */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <img
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].name}
              className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover"
            />
            <div className="text-center sm:text-left">
              <div className="font-semibold text-gray-800 text-base md:text-lg">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {testimonials[currentTestimonial].role}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-wrap justify-center items-center gap-4 mt-6 md:mt-8">
        <Button
          variant="outline"
          size="sm"
          onClick={prevTestimonial}
          className="rounded-full w-9 h-9 md:w-10 md:h-10 p-0"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all ${
                index === currentTestimonial ? 'bg-primary-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={nextTestimonial}
          className="rounded-full w-9 h-9 md:w-10 md:h-10 p-0"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  </div>
</section>

  );
};

export default TestimonialsSection;
