import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ShieldCheck, Stethoscope, Activity, 
  ArrowRight, Calendar, Clock
} from 'lucide-react';
import { AppointmentForm } from '@/components/AppointmentForm';

const slides = [
  {
    badge: "Next-Gen Healthcare • Compassionate & Advanced",
    line1Words: ["Compassionate", "Care."],
    line2Words: ["Advanced", "for", "You."],
    subWords: "Lunaria Hill Hospital blends advanced medical technology with human compassion to deliver exceptional care for you and your loved ones.".split(' ')
  },
  {
    badge: "Smart Diagnostics • Precision Medicine",
    line1Words: ["Smart", "Diagnostics."],
    line2Words: ["Powered", "by", "Precision."],
    subWords: "Experience 24/7 dedicated emergency trauma triage, paperless digital telemetry, and AI-assisted clinical testing engineered for total peace of mind.".split(' ')
  },
  {
    badge: "World-Class Specialists • Patient-First Approach",
    line1Words: ["Expert", "Specialists."],
    line2Words: ["Dedicated", "to", "You."],
    subWords: "From routine wellness screenings to comprehensive multi-specialty surgical suites, our certified medical faculty delivers world-class care with genuine empathy.".split(' ')
  }
];

const HeroSection = () => {
  const [appointmentDialogOpen, setAppointmentDialogOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Auto-rotate with word-by-word reveal followed by reading break (7.5s)
  useEffect(() => {
    const timer = setInterval(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsFadingOut(false);
      }, 400);
    }, 7500);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];
  const totalTitleWords = slide.line1Words.length + slide.line2Words.length;

  return (
    <section className="relative overflow-hidden min-h-[82vh] lg:min-h-[88vh] flex items-center pt-16 pb-20 lg:pt-20 lg:pb-24 bg-white">
      
      {/* 1. Photorealistic Lunaria Hill Hospital Architecture Background */}
      <div className="absolute inset-0 select-none overflow-hidden bg-white">
        <img
          src="/hero-hospital-building.jpg"
          alt="Lunaria Hill Hospital Building and Campus Architecture"
          className="w-full h-full object-cover object-[78%_center] lg:object-[72%_center] filter contrast-[1.03] brightness-[1.01]"
        />

        {/* Clean, Natural Left Gradient: Extra soft white backdrop behind title for maximum readability */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[65%] xl:w-[60%] bg-gradient-to-r from-white via-white/98 via-42% lg:via-white/94 to-transparent pointer-events-none" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[520px] bg-white/75 rounded-full blur-3xl pointer-events-none" />

        {/* Soft Bottom Blend into Quick Info Cards */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">

          {/* Left Hero Content: Shifted gracefully slightly to the right with extra left offset */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center max-w-2xl lg:pl-6 xl:pl-10">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 shadow-xs text-blue-700 text-xs font-bold mb-5 w-fit">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="tracking-wide text-[11px] uppercase font-semibold">
                {slide.badge}
              </span>
            </div>

            {/* Title & Subtitle with Single Word-by-Word Sequential Reveal */}
            <div className={`transition-opacity duration-400 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] font-sans select-none mb-5">
                {/* Line 1: Single Word by Word */}
                <span className="block text-slate-900 mb-1">
                  {slide.line1Words.map((word, idx) => (
                    <span
                      key={`l1-${currentSlide}-${idx}`}
                      className="animate-word-reveal mr-3 inline-block"
                      style={{ animationDelay: `${idx * 150}ms` }}
                    >
                      {word}
                    </span>
                  ))}
                </span>

                {/* Line 2: Single Word by Word continuing from Line 1 */}
                <span className="block text-[#005C72] drop-shadow-xs">
                  {slide.line2Words.map((word, idx) => (
                    <span
                      key={`l2-${currentSlide}-${idx}`}
                      className="animate-word-reveal mr-3 inline-block"
                      style={{ animationDelay: `${(slide.line1Words.length * 150) + (idx * 150)}ms` }}
                    >
                      {word}
                    </span>
                  ))}
                </span>
              </h1>

              {/* Subtitle: Single Word by Word Streaming in right after title */}
              <p className="text-base sm:text-lg text-slate-900 font-medium leading-relaxed select-none mb-8 max-w-xl">
                {slide.subWords.map((word, sIdx) => (
                  <span
                    key={`sub-${currentSlide}-${sIdx}`}
                    className="animate-sub-word mr-1.5 inline-block"
                    style={{ animationDelay: `${(totalTitleWords * 150) + 80 + (sIdx * 45)}ms` }}
                  >
                    {word}
                  </span>
                ))}
              </p>
            </div>

            {/* Action Row: Two side-by-side buttons exactly as in reference */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Button 
                size="lg" 
                className="bg-[#02316B] hover:bg-[#012450] text-white font-semibold text-base px-8 py-3.5 h-auto rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
                onClick={() => setAppointmentDialogOpen(true)}
              >
                <Calendar className="h-5 w-5" />
                <span>Book Appointment</span>
              </Button>
              
              <Link to="/services">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-slate-300 bg-white/95 hover:bg-slate-50 text-slate-800 font-semibold text-base px-8 py-3.5 h-auto rounded-lg shadow-xs hover:border-slate-400 transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="h-4 w-4 text-slate-500" />
                </Button>
              </Link>
            </div>

            {/* Bottom Micro Trust Features exactly matching reference design */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-6 border-t border-slate-200/90 text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#005C72]/10 flex items-center justify-center text-[#005C72]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span>24/7 Emergency Care</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#005C72]/10 flex items-center justify-center text-[#005C72]">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <span>Expert Specialists</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#005C72]/10 flex items-center justify-center text-[#005C72]">
                  <Activity className="w-4 h-4" />
                </div>
                <span>Advanced Technology</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean open architectural view letting the building shine */}
          <div className="lg:col-span-5 xl:col-span-5 hidden lg:block" />

        </div>
      </div>

      {/* Appointment Dialog Trigger */}
      <AppointmentForm 
        open={appointmentDialogOpen} 
        onOpenChange={setAppointmentDialogOpen} 
      />
    </section>
  );
};

export default HeroSection;