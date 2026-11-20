import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Cardiac Surgery Patient',
      content: 'The clinical care and empathy I received at Lunaria Hill Hospital was beyond exceptional. From consultation to post-op recovery, every doctor and nurse treated me with world-class dedication.',
      rating: 5,
      date: 'Treated 2 weeks ago',
      image: 'https://jthemes.net/themes/html/medservices/files/images/review-author-5.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Emergency & Trauma Care',
      content: 'Thanks to the rapid response emergency team, my life was saved during a critical condition. Triage was immediate, and the ICU facilities are the best in the state. Forever grateful.',
      rating: 5,
      date: 'Treated last month',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Emily Davis',
      role: 'Pediatric Care & Telemedicine',
      content: 'The telemedicine and appointment portal is incredibly seamless. I consulted with the pediatrician from home, received digital prescriptions in minutes, and experienced zero friction.',
      rating: 5,
      date: 'Treated 3 days ago',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const t = testimonials[currentTestimonial];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-sky-50/30 to-white relative overflow-hidden">
      {/* Decorative ambient orbs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16 animate-fade-in max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Star className="h-3.5 w-3.5 fill-sky-600 text-sky-600" />
            Patient Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-display mb-4">
            Trusted by Thousands of Patients & Families
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Real stories and genuine experiences from people who trusted Lunaria Hill with their health and well-being.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
            {/* Quote Icon Background Accent */}
            <Quote className="absolute top-6 right-8 h-16 w-16 text-sky-100 -rotate-12 pointer-events-none" />

            <div className="relative z-10">
              {/* Star Rating & Verified Tag */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="ml-2 text-sm font-bold text-slate-800">5.0 / 5.0</span>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-200/60">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  Verified Patient
                </span>
              </div>

              {/* Quote Content */}
              <blockquote className="text-lg sm:text-xl md:text-2xl text-slate-800 font-medium leading-relaxed mb-8">
                "{t.content}"
              </blockquote>

              {/* Patient Profile */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-100 flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-sky-500/20"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-sky-500 text-white rounded-full p-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">{t.name}</h4>
                    <p className="text-slate-500 text-xs sm:text-sm">{t.role}</p>
                  </div>
                </div>

                <div className="text-xs text-slate-400 font-medium">
                  {t.date}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full w-10 h-10 border-slate-200 hover:bg-white hover:text-sky-600 shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'w-8 bg-sky-600' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full w-10 h-10 border-slate-200 hover:bg-white hover:text-sky-600 shadow-sm"
              aria-label="Next testimonial"
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
