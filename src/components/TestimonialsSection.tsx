import { useState, useEffect } from 'react';
import { 
  Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, 
  Sparkles, ShieldCheck 
} from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  department: string;
  doctorConsulted: string;
  content: string;
  rating: number;
  date: string;
  image: string;
  highlight: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'Cardiac Surgery Patient',
    department: 'Cardiology Center',
    doctorConsulted: 'Dr. Sarah Johnson (Chief Cardiologist)',
    content: 'The clinical care and empathy I received at Lunaria Hill Hospital was beyond exceptional. From emergency triage to my post-op recovery, every surgeon and nurse treated me with world-class dedication.',
    rating: 5,
    date: 'Treated 2 weeks ago',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    highlight: 'Full Recovery in 14 Days'
  },
  {
    name: 'Michael Chen',
    role: 'Emergency & Trauma Recovery',
    department: 'Trauma & Critical Care',
    doctorConsulted: 'Dr. Michael Chen (Senior Neurologist)',
    content: 'Thanks to the rapid response emergency team, my life was saved during a severe neurological episode. Triage was immediate, the diagnostic 3T MRI was performed in minutes, and the ICU facilities are superior.',
    rating: 5,
    date: 'Treated last month',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    highlight: 'Rapid Sub-3-Min Triage'
  },
  {
    name: 'Emily Davis',
    role: 'Pediatric Care & Wellness',
    department: 'Pediatrics Wing',
    doctorConsulted: 'Dr. Emily Davis (Head Pediatrician)',
    content: 'The pediatric ward made my 4-year-old daughter feel completely safe instead of scared. The digital telemedicine portal also allowed us to do seamless follow-ups from home with instant e-prescriptions.',
    rating: 5,
    date: 'Treated 3 days ago',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    highlight: 'Zero-Wait Child Care'
  },
  {
    name: 'David Miller',
    role: 'Orthopedic Joint Replacement',
    department: 'Orthopedic Institute',
    doctorConsulted: 'Dr. James Wilson (Orthopedic Surgeon)',
    content: 'After years of chronic knee pain, the robotic-assisted knee replacement surgery gave me back my mobility. I was walking with support on day two. The physical therapy staff here are phenomenal!',
    rating: 5,
    date: 'Treated 3 weeks ago',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    highlight: 'Robotic Surgery Success'
  },
  {
    name: 'Jessica Taylor',
    role: 'Ophthalmology & Retinal Recovery',
    department: 'Eye Care Center',
    doctorConsulted: 'Ophthalmic Laser Specialists',
    content: 'The retinal laser microsurgery was completely painless and restored my clear vision. The medical staff guided me through every step with transparency, and my digital test records were instant.',
    rating: 5,
    date: 'Treated 1 month ago',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
    highlight: '100% Vision Restored'
  },
  {
    name: 'Robert Hastings',
    role: 'Internal Medicine Patient',
    department: 'Internal Medicine Wing',
    doctorConsulted: 'Dr. Robert Hastings (Consultant Physician)',
    content: 'The comprehensive preventive metabolic screening caught a critical condition early. Their multi-disciplinary team put together an actionable lifestyle and medical plan that changed my life.',
    rating: 5,
    date: 'Treated 2 months ago',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
    highlight: 'Early Detection Saved Life'
  }
];

const TestimonialsSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Auto cycle smoothly every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [startIndex]);

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setStartIndex((prev) => (prev + 3 >= testimonials.length ? 0 : prev + 3));
      setIsFading(false);
    }, 250);
  };

  const handlePrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setStartIndex((prev) => (prev - 3 < 0 ? Math.max(0, testimonials.length - 3) : prev - 3));
      setIsFading(false);
    }, 250);
  };

  const visibleCards = testimonials.slice(startIndex, startIndex + 3);

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-slate-50/70 to-blue-50/20 relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        
        {/* Section Heading - Compact & Modern */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3 border border-primary/20">
              <Star className="h-3.5 w-3.5 fill-primary text-primary" />
              Verified Patient Experiences
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight font-sans">
              Trusted by Thousands of Patients & Families
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-sans mt-2 max-w-2xl">
              Authentic healing journeys and clinical recovery stories from board-certified specialty wings.
            </p>
          </div>

          {/* Rating Summary Badge & Slider Controls */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 shadow-xs">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-800">4.9 / 5.0</span>
              <span className="text-[11px] text-slate-500">• 12,000+ Reviews</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonials"
                className="w-10 h-10 rounded-xl bg-white border border-slate-200/90 text-slate-700 hover:text-primary hover:border-primary/50 shadow-xs hover:shadow-md flex items-center justify-center transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonials"
                className="w-10 h-10 rounded-xl bg-white border border-slate-200/90 text-slate-700 hover:text-primary hover:border-primary/50 shadow-xs hover:shadow-md flex items-center justify-center transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* 3-Card Responsive Grid - Compact, Elevated & Clinical */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
          {visibleCards.map((item, idx) => (
            <div
              key={`${startIndex}-${idx}`}
              className="relative bg-white rounded-2xl p-6 border-2 border-slate-200/90 hover:border-primary/40 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header: Stars & Verified Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/70">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified Patient
                  </span>
                </div>

                {/* Outcome Highlight Pill */}
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-md mb-3 border border-primary/15">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span>{item.highlight}</span>
                </div>

                {/* Patient Quote */}
                <p className="text-slate-700 text-sm leading-relaxed font-sans mb-5 line-clamp-4">
                  "{item.content}"
                </p>
              </div>

              {/* Patient Attribution Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3 mt-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-11 h-11 rounded-xl object-cover ring-2 ring-primary/20 shadow-xs"
                />
                <div className="min-w-0">
                  <h4 className="font-bold text-slate-900 text-sm truncate font-sans group-hover:text-primary transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 truncate">
                    {item.department}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stepper Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {[...Array(Math.ceil(testimonials.length / 3))].map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => {
                setIsFading(true);
                setTimeout(() => {
                  setStartIndex(dotIdx * 3);
                  setIsFading(false);
                }, 200);
              }}
              aria-label={`Go to slide group ${dotIdx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                Math.floor(startIndex / 3) === dotIdx
                  ? 'w-7 bg-primary'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
