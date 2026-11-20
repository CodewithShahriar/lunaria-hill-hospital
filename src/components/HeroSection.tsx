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

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center pt-14 pb-20 lg:pt-16 lg:pb-24 bg-white">
      
      {/* 1. Doctors Photo Background (Vibrant, Crystal-Clear & Highlighted on Right) */}
      <div className="absolute inset-0 select-none overflow-hidden">
        <img
          src="/hero-doctors.jpg"
          alt="Lunaria Hill Hospital Medical Team & Specialists"
          className="w-full h-full object-cover object-[70%_top] lg:object-[65%_center] filter contrast-[1.08] brightness-[1.04] saturate-[1.08]"
        />

        {/* Clean Left-Side Only Gradient: Keeps text 100% readable while leaving the right-side doctors completely bright and unfogged */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[54%] bg-gradient-to-r from-white via-white/90 via-55% to-transparent pointer-events-none" />

        {/* Subtle Bottom Blend into Cards */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-sky-100/60 to-transparent pointer-events-none" />

        {/* Subtle Medical Plus Grid (Faint on Left) */}
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
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
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[68vh]">

          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center animate-fade-in pt-2">
            
            {/* Unique Modern Badge (Replacing generic '// TRUSTED HEALTHCARE') */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-sky-200/90 shadow-sm text-sky-900 text-xs font-semibold mb-5 w-fit backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span className="text-slate-900 uppercase font-extrabold tracking-wider text-[11px]">
                Next-Gen Healthcare
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-sky-600 font-semibold flex items-center gap-1 text-[11px]">
                <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                Digital Clinical Excellence
              </span>
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
              
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 bg-white/85 backdrop-blur-sm px-4 py-3 rounded-lg border border-sky-100 shadow-xs">
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
              <div className="flex items-center gap-1.5 bg-white/85 backdrop-blur-sm px-3 py-1.5 rounded-full border border-sky-150">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>150+ Top Specialists</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/85 backdrop-blur-sm px-3 py-1.5 rounded-full border border-sky-150">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>JCI & ISO Certified</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/85 backdrop-blur-sm px-3 py-1.5 rounded-full border border-sky-150">
                <Activity className="w-3.5 h-3.5 text-sky-600 animate-pulse" />
                <span>Live Tele-Triage</span>
              </div>
            </div>

          </div>

          {/* Right Column: Compact Instant Booking Card (Moved Further Down & Further to the Right) */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-24 flex justify-center lg:justify-end lg:translate-x-6 lg:translate-y-8">
            <div className="bg-white/95 backdrop-blur-md p-5 rounded-xl shadow-xl border border-sky-150 max-w-[300px] w-full animate-fade-in">
              
              {/* Header */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <h3 className="font-bold text-slate-900 text-sm font-display">Instant Booking</h3>
              </div>

              {/* Compact Booking Fields */}
              <div className="space-y-3">
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Specialty
                  </label>
                  <select 
                    className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-colors"
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
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Available Date
                  </label>
                  <input 
                    type="date"
                    className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-colors"
                    defaultValue={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 text-xs rounded-md shadow-sm shadow-blue-500/20 hover:shadow-md transition-all mt-1"
                  onClick={() => setAppointmentDialogOpen(true)}
                >
                  Check Availability
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
