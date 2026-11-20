import { useState, useEffect } from 'react';
import { 
  Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, 
  Heart, Shield, Award, Play, Pause, Sparkles, UserCheck 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    content: 'The clinical care and empathy I received at Lunaria Hill Hospital was beyond exceptional. From the emergency triage to my post-op cardiac recovery, every surgeon and nurse treated me with world-class dedication and reassuring warmth.',
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
    content: 'Thanks to the rapid response emergency team, my life was saved during a severe neurological episode. Triage was immediate, the diagnostic 3T MRI was performed in minutes, and the ICU facilities are the best in the state.',
    rating: 5,
    date: 'Treated last month',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    highlight: 'Rapid Sub-3-Min Triage'
  },
  {
    name: 'Emily Davis',
    role: 'Pediatric Care & Telemedicine',
    department: 'Pediatrics Wing',
    doctorConsulted: 'Dr. Emily Davis (Head Pediatrician)',
    content: 'The pediatric ward made my 4-year-old daughter feel completely safe and comfortable instead of scared. The digital telemedicine portal also allowed us to do seamless follow-ups from home with instant e-prescriptions.',
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
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    highlight: 'Robotic Surgery Success'
  },
  {
    name: 'Jessica Taylor',
    role: 'Ophthalmology & Retinal Recovery',
    department: 'Eye Care Center',
    doctorConsulted: 'Ophthalmic Laser Specialists',
    content: 'The retinal laser microsurgery was completely painless and restored my clear vision. The medical staff guided me through every step with transparency, and the patient portal kept my test records at my fingertips.',
    rating: 5,
    date: 'Treated 1 month ago',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
    highlight: '100% Vision Restored'
  }
];

const AUTOPLAY_DURATION = 6000; // 6 seconds per slide

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Auto-play timer with animated progress bar
  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime = 50; // update progress every 50ms
    const step = (intervalTime / AUTOPLAY_DURATION) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          triggerSlideChange((currentIndex + 1) % testimonials.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, currentIndex]);

  const triggerSlideChange = (newIndex: number) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsFading(false);
      setProgress(0);
    }, 280);
  };

  const handleNext = () => {
    triggerSlideChange((currentIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    triggerSlideChange((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleSelect = (idx: number) => {
    if (idx === currentIndex) return;
    triggerSlideChange(idx);
  };

  const current = testimonials[currentIndex];

  return (
    <section 
      className="py-24 bg-gradient-to-b from-white via-slate-50 to-blue-50/30 relative overflow-hidden"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Decorative ambient glowing orbs */}
      <div className="absolute top-12 left-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        
        {/* Section Heading */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-100">
            <Star className="h-3.5 w-3.5 fill-blue-600 text-blue-600" />
            Verified Patient Experiences
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight font-sans mb-3">
            Trusted by Thousands of Patients & Families
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-sans leading-relaxed">
            Real stories, authentic healing journeys, and genuine clinical experiences from those who put their trust in Lunaria Hill.
          </p>
        </div>

        {/* Interactive Patient Avatars Switcher Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
          {testimonials.map((patient, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              className={`group flex items-center gap-2.5 px-3 py-1.5 rounded-full border transition-all duration-300 ${
                idx === currentIndex
                  ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25 scale-105'
                  : 'bg-white text-slate-700 border-slate-200/90 hover:border-blue-400 hover:bg-blue-50/50'
              }`}
            >
              <img
                src={patient.image}
                alt={patient.name}
                className={`w-7 h-7 rounded-full object-cover ring-2 transition-all ${
                  idx === currentIndex ? 'ring-white' : 'ring-slate-200'
                }`}
              />
              <span className="text-xs font-bold whitespace-nowrap">{patient.name}</span>
            </button>
          ))}
        </div>

        {/* Master Animated Testimonial Card */}
        <div className="relative">
          <div className="relative bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-2xl shadow-blue-900/5 border-2 border-slate-200/90 overflow-hidden">
            
            {/* Background Decorative Quote Watermark */}
            <Quote className="absolute -top-4 -right-4 h-36 w-36 text-blue-50 -rotate-12 pointer-events-none select-none" />

            {/* Top Bar: Stars, Rating, Department Badge & Verified Status */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-bold text-slate-900">5.0 / 5.0</span>
                <span className="text-slate-300">|</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                  {current.department}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5 shadow-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Medical Patient</span>
                </span>
              </div>
            </div>

            {/* Animated Content Wrapper */}
            <div className={`transition-all duration-300 relative z-10 ${
              isFading ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
            }`}>
              
              {/* Highlight Tag */}
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-md mb-4 border border-blue-100">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Outcome: {current.highlight}</span>
              </div>

              {/* Quote Content */}
              <blockquote className="text-lg sm:text-2xl text-slate-800 font-medium leading-relaxed mb-8 font-sans">
                "{current.content}"
              </blockquote>

              {/* Patient & Doctor Attribution Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-slate-100">
                
                {/* Patient Profile */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={current.image}
                      alt={current.name}
                      className="w-14 h-14 rounded-2xl object-cover ring-2 ring-blue-600/30 shadow-md"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white rounded-full p-1 shadow-xs">
                      <CheckCircle2 className="w-3 h-3" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base sm:text-lg font-sans">
                      {current.name}
                    </h4>
                    <p className="text-slate-500 text-xs sm:text-sm font-medium">
                      {current.role}
                    </p>
                    <p className="text-[11px] text-blue-600 font-semibold mt-0.5">
                      Treated by: {current.doctorConsulted}
                    </p>
                  </div>
                </div>

                {/* Treatment Timestamp */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between text-xs text-slate-400 font-medium">
                  <span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-600">
                    {current.date}
                  </span>
                  <span className="text-[11px] text-slate-400 mt-1">Verified Medical Record</span>
                </div>

              </div>
            </div>

            {/* Live Progress Bar Under Card */}
            <div className="absolute bottom-0 inset-x-0 h-1.5 bg-slate-100">
              <div 
                className="h-full bg-blue-600 transition-all duration-75 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

          </div>

          {/* Navigation Controls: Prev, Play/Pause, Next */}
          <div className="flex items-center justify-between mt-8">
            
            {/* Play / Pause Toggle Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 shadow-xs transition-colors"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-blue-600" />
                  <span>Pause Auto-play</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-blue-600" />
                  <span>Play Slideshow</span>
                </>
              )}
            </button>

            {/* Stepper Dots Indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSelect(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-blue-600 shadow-sm' 
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Nav Buttons */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                className="w-10 h-10 rounded-lg border-2 border-slate-200 hover:border-blue-500 hover:bg-blue-50 text-slate-700 hover:text-blue-600 shadow-xs transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="w-10 h-10 rounded-lg border-2 border-slate-200 hover:border-blue-500 hover:bg-blue-50 text-slate-700 hover:text-blue-600 shadow-xs transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

          </div>
        </div>

        {/* Clinical Trust & Metric Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              icon: Star,
              stat: "4.9 / 5.0",
              label: "Average Patient Rating",
              sub: "Over 1,850+ verified reviews"
            },
            {
              icon: UserCheck,
              stat: "99.2%",
              label: "Clinical Success Rate",
              sub: "Monitored across 12k procedures"
            },
            {
              icon: Shield,
              stat: "100%",
              label: "Confidentiality & Rights",
              sub: "Encrypted HIPAA-compliant records"
            },
            {
              icon: Award,
              stat: "Top 1%",
              label: "Regional Hospital Safety",
              sub: "Recognized by Healthline 2024"
            }
          ].map((metric, mIdx) => {
            const IconComponent = metric.icon;
            return (
              <div 
                key={mIdx}
                className="bg-white/90 backdrop-blur-sm p-5 rounded-2xl border-2 border-slate-200/90 shadow-xs text-center flex flex-col items-center justify-center hover:border-blue-400 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
                  <IconComponent className="w-5 h-5" />
                </div>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 font-sans">{metric.stat}</p>
                <p className="text-xs font-semibold text-slate-700 mt-0.5">{metric.label}</p>
                <p className="text-[10px] text-slate-400 mt-1">{metric.sub}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
