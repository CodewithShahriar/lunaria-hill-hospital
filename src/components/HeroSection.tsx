import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Calendar, Phone, ShieldCheck, Stethoscope, 
  CheckCircle2, Activity 
} from 'lucide-react';
import { AppointmentForm } from '@/components/AppointmentForm';

const slides = [
  {
    badge: "NEXT-GEN HEALTHCARE • Digital Clinical Excellence",
    line1: ["Quality", "Healthcare"],
    line2: ["Made", "Simple", "&", "Smart"],
    subWords: "Book instant appointments, consult board-certified specialists, and access digital diagnostics — all in one unified healthcare platform for you and your family.".split(' ')
  },
  {
    badge: "NEXT-GEN HEALTHCARE • Advanced Clinical Care",
    line1: ["Smart", "Diagnostics"],
    line2: ["Powered", "by", "Precision"],
    subWords: "Experience 24/7 dedicated emergency triage, paperless digital health records, and AI-assisted clinical testing engineered for your peace of mind.".split(' ')
  },
  {
    badge: "NEXT-GEN HEALTHCARE • Patient-First Approach",
    line1: ["World-Class", "Doctors"],
    line2: ["Dedicated", "to", "You"],
    subWords: "From routine health screenings to comprehensive multi-specialty care, our certified medical team delivers world-class care with genuine compassion.".split(' ')
  }
];

const HeroSection = () => {
  const [appointmentDialogOpen, setAppointmentDialogOpen] = useState(false);
  const [specialty, setSpecialty] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Auto-rotate with a comfortable reading break (7.5 seconds total)
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

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center pt-16 pb-24 lg:pt-24 lg:pb-32 bg-white">
      
      {/* 1. Doctors Photo Background (Cropped at top to red line & aligned to top) */}
      <div className="absolute inset-0 select-none overflow-hidden bg-white">
        <img
          src="/hero-doctors.jpg"
          alt="Lunaria Hill Hospital Medical Team & Specialists"
          className="w-full h-full object-cover object-[78%_top] lg:object-[72%_top] filter contrast-[1.03] brightness-[1.01]"
        />

        {/* Clean, Natural Left Gradient: Guarantees pure white backdrop for text with zero ghost shapes */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[60%] bg-gradient-to-r from-white via-white/98 via-48% to-transparent pointer-events-none" />

        {/* Subtle Bottom Blend into Cards */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-sky-100/60 to-transparent pointer-events-none" />

        {/* Live Animated ECG Pulse Wave */}
        <div className="absolute bottom-2 left-0 right-0 opacity-20 hidden md:block pointer-events-none">
          <svg 
            viewBox="0 0 1400 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-20 stroke-sky-600 animate-ecg"
          >
            <path 
              d="M0 60 H280 L300 20 L315 100 L330 38 L345 75 L360 60 H660 L680 16 L695 106 L710 34 L725 76 L740 60 H1040 L1060 20 L1075 100 L1090 38 L1105 75 L1120 60 H1400" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[70vh]">

          {/* Left Content Column (Shifted up to balance with hero doctors) */}
          <div className="lg:col-span-7 flex flex-col justify-center pt-6 sm:pt-8 lg:pt-10">
            
            {/* Clean Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-100/90 border border-slate-300 shadow-xs text-slate-900 text-xs font-bold mb-5 w-fit">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span className="tracking-wide text-[11px] uppercase">
                {slide.badge}
              </span>
            </div>

            {/* Smooth Animated Title & Subtitle Wrapper */}
            <div className={`transition-opacity duration-400 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
              
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black text-black tracking-tight leading-[1.15] font-sans select-none">
                
                {/* Line 1: Word by Word Reveal starting from 0ms */}
                <span className="block mb-1 sm:mb-1.5">
                  {slide.line1.map((word, idx) => (
                    <span
                      key={`l1-${currentSlide}-${idx}`}
                      className="animate-word-reveal text-black mr-3 sm:mr-3.5 inline-block"
                      style={{ animationDelay: `${idx * 150}ms` }}
                    >
                      {word}
                    </span>
                  ))}
                </span>

                {/* Line 2: Word by Word Reveal */}
                <span className="block">
                  {slide.line2.map((word, idx) => (
                    <span
                      key={`l2-${currentSlide}-${idx}`}
                      className="animate-word-reveal text-black mr-3 sm:mr-3.5 inline-block"
                      style={{ animationDelay: `${(slide.line1.length + idx) * 150}ms` }}
                    >
                      {word}
                    </span>
                  ))}
                </span>

              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-800 mt-3 sm:mt-4 mb-7 leading-relaxed max-w-xl font-normal select-none">
                {slide.subWords.map((word, sIdx) => (
                  <span
                    key={`sub-${currentSlide}-${sIdx}`}
                    className="animate-sub-word text-slate-800 mr-1.5 inline-block"
                    style={{ animationDelay: `${sIdx * 75}ms` }}
                  >
                    {word}
                  </span>
                ))}
              </p>
            </div>

            {/* Action Row: Find Doctor Button + Visiting Hours */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-8">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-7 py-3.5 h-auto rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5"
                onClick={() => setAppointmentDialogOpen(true)}
              >
                <Stethoscope className="h-5 w-5" />
                <span>Find a Doctor</span>
              </Button>
              
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-900 bg-white/95 px-4 py-3 rounded-lg border border-slate-300 shadow-xs">
                <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                </span>
                <span className="leading-snug">
                  <strong className="font-bold text-black">Visiting Hours:</strong> Sunday - Friday: 08:00 AM - 10:00 PM
                </span>
              </div>
            </div>

            {/* Smart Micro-Highlights */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200 text-xs text-slate-900">
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-300 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span className="font-semibold text-slate-900">150+ Top Specialists</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-300 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span className="font-semibold text-slate-900">JCI & ISO Certified</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-300 shadow-xs">
                <Activity className="w-3.5 h-3.5 text-sky-600 animate-pulse" />
                <span className="font-semibold text-slate-900">Live Tele-Triage</span>
              </div>
            </div>

          </div>

          {/* Right Column: Instant Appointment Card (Shifted further down as requested) */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-40 xl:mt-48 flex justify-center lg:justify-end">
            <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl shadow-slate-900/15 border border-slate-200/90 max-w-[285px] w-full animate-fade-in">
              
              {/* Header: Instant Appointment */}
              <div className="flex items-center gap-2 mb-3.5">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <h3 className="font-bold text-slate-950 text-sm font-sans">Instant Appointment</h3>
              </div>

              {/* Compact Booking Fields */}
              <div className="space-y-3">
                <div>
                  <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                    Specialty
                  </label>
                  <select 
                    className="w-full bg-slate-50 border border-slate-300 rounded-md px-3 py-2 text-xs text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-colors"
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                  >
                    <option value="">Select specialty</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Neurology">Neurology</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Orthopedics">Orthopedics</option>
                    <option value="General Care">General Care</option>
                    <option value="Emergency Care">Emergency Care</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                    Available Date
                  </label>
                  <input 
                    type="date"
                    className="w-full bg-slate-50 border border-slate-300 rounded-md px-3 py-1.5 text-xs text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-colors"
                    defaultValue={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 text-xs rounded-md shadow-sm shadow-blue-500/20 hover:shadow-md transition-all mt-1"
                  onClick={() => setAppointmentDialogOpen(true)}
                >
                  Book Instant Appointment
                </Button>
              </div>

            </div>
          </div>

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
