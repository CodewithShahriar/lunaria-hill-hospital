import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Calendar, Phone, Heart, ShieldCheck, ArrowRight, 
  Sparkles, Activity, Stethoscope, CheckCircle2, 
  Zap, Clock, ChevronRight, UserCheck 
} from 'lucide-react';
import { AppointmentForm } from '@/components/AppointmentForm';

const HeroSection = () => {
  const [appointmentDialogOpen, setAppointmentDialogOpen] = useState(false);
  const [specialty, setSpecialty] = useState('');
  const [slide, setSlide] = useState(2);

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center pt-16 pb-20 lg:pt-20 lg:pb-24 bg-slate-50">
      
      {/* 1. Doctors Photo Full Background (Matching Reference Image) */}
      <div className="absolute inset-0 select-none overflow-hidden">
        <img
          src="https://img.freepik.com/premium-photo/doctors-nurses-arms-crossed-portrait-diversity-hospital-about-us-leadership-people-trust-community-support-smile-happy-confident-healthcare-workers-teamwork-collaboration_590464-143114.jpg?semt=ais_hybrid&w=1600"
          alt="Lunaria Hill Hospital Medical Team & Specialists"
          className="w-full h-full object-cover object-[70%_top] lg:object-[65%_center] opacity-95"
        />

        {/* Left-to-Right Soft Gradient Overlay for Maximum Text Clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-50 via-sky-50/95 via-45% to-sky-100/20 lg:from-slate-50/95 lg:via-sky-50/90 lg:via-52% lg:to-transparent" />

        {/* Top & Bottom Ambient Blends */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-sky-50/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-sky-100/90 via-sky-50/60 to-transparent" />

        {/* Warm Sunlight Ambient Glow on Upper Right */}
        <div className="absolute -top-10 right-0 w-[500px] h-[400px] bg-gradient-to-br from-amber-200/35 via-orange-100/25 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Subtle Medical Plus Grid */}
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 14v12M14 20h12' stroke='%230284c7' stroke-width='2' stroke-linecap='round' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}
        />

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
        <div className="grid lg:grid-cols-12 gap-10 items-center min-h-[68vh]">

          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center animate-fade-in pt-4">
            
            {/* Tagline / Kicker */}
            <div className="text-sky-600 font-bold tracking-wider text-xs sm:text-sm uppercase mb-4 flex items-center gap-2">
              <span className="text-sky-500 font-mono text-base font-extrabold">//</span>
              <span>TRUSTED HEALTHCARE & INNOVATION</span>
            </div>

            {/* Smart Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6 font-display">
              Quality Healthcare{' '}
              <br />
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Made Simple & Smart
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-700 mb-8 leading-relaxed max-w-xl font-normal">
              Book instant appointments, consult board-certified specialists, and access digital diagnostics — 
              all in one unified healthcare platform for you and your family.
            </p>

            {/* Action Row: Find Doctor Button + Visiting Hours */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 sm:gap-6 mb-8">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-7 py-5 h-auto rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5"
                onClick={() => setAppointmentDialogOpen(true)}
              >
                <Stethoscope className="h-5 w-5" />
                <span>Find a Doctor</span>
              </Button>
              
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 bg-white/70 backdrop-blur-sm px-4 py-3 rounded-lg border border-sky-100">
                <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="leading-snug">
                  <strong className="font-bold text-slate-900">Visiting Hours:</strong> Sunday - Friday: 08:00 AM - 10:00 PM
                </span>
              </div>
            </div>

            {/* Smart Micro-Highlights */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-sky-200/50 text-xs text-slate-600">
              <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-sky-150">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>150+ Top Specialists</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-sky-150">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>JCI & ISO Certified</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-sky-150">
                <Activity className="w-3.5 h-3.5 text-sky-600 animate-pulse" />
                <span>Live Tele-Triage</span>
              </div>
            </div>

          </div>

          {/* Right Column: Floating Instant Booking Card (Matching Reference Layout) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center lg:justify-end">
            <div className="bg-white/95 backdrop-blur-md p-6 sm:p-7 rounded-2xl shadow-2xl border border-sky-100 max-w-sm w-full animate-fade-in">
              
              {/* Header */}
              <div className="flex items-center gap-2.5 mb-5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></span>
                <h3 className="font-bold text-slate-900 text-base font-display">Instant Booking</h3>
              </div>

              {/* Booking Fields */}
              <div className="space-y-4">
                <div>
                  <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">
                    Specialty
                  </label>
                  <select 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-colors"
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
                  <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">
                    Available Date
                  </label>
                  <input 
                    type="date"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-colors"
                    defaultValue={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md shadow-blue-500/20 hover:shadow-lg transition-all"
                  onClick={() => setAppointmentDialogOpen(true)}
                >
                  Check Availability
                </Button>
              </div>

              {/* Slider Indicator Controls */}
              <div className="flex items-center justify-end gap-2.5 mt-5 pt-4 border-t border-slate-100">
                <button 
                  onClick={() => setSlide((prev) => (prev > 1 ? prev - 1 : 3))}
                  className="w-8 h-8 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center hover:bg-slate-50 text-slate-600 text-xs font-bold transition-colors"
                  aria-label="Previous Slide"
                >
                  &larr;
                </button>
                <span className="text-xs font-bold text-slate-700 px-1">{slide} / 3</span>
                <button 
                  onClick={() => setSlide((prev) => (prev < 3 ? prev + 1 : 1))}
                  className="w-8 h-8 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center hover:bg-slate-50 text-slate-600 text-xs font-bold transition-colors"
                  aria-label="Next Slide"
                >
                  &rarr;
                </button>
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
