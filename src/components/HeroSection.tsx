import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Calendar, Phone, Heart, ShieldCheck, ArrowRight, 
  Sparkles, Activity, Stethoscope, CheckCircle2, 
  Zap, Clock, FileText, UserCheck 
} from 'lucide-react';
import { AppointmentForm } from '@/components/AppointmentForm';

const HeroSection = () => {
  const [appointmentDialogOpen, setAppointmentDialogOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-100/75 via-blue-50/60 to-cyan-50/70 min-h-[calc(100vh-80px)] flex items-center pt-12 pb-12 lg:pt-16 lg:pb-16">
      
      {/* Visual Medical Background Elements with Smooth Subtle Animations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        
        {/* 1. Organic Breathing Ambient Glowing Blobs */}
        <div className="absolute -top-24 -right-16 w-[560px] h-[560px] bg-gradient-to-br from-sky-300/40 to-blue-400/30 rounded-full blur-[110px] animate-blob-slow" />
        <div className="absolute top-1/3 -left-28 w-[490px] h-[490px] bg-gradient-to-tr from-cyan-300/35 to-sky-200/50 rounded-full blur-[105px] animate-blob-slow-delay" />
        <div className="absolute -bottom-24 right-1/3 w-[440px] h-[440px] bg-indigo-200/30 rounded-full blur-[90px] animate-blob-slow" />

        {/* 2. Medical Plus Signs (+) Clean Grid */}
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 14v12M14 20h12' stroke='%230284c7' stroke-width='2' stroke-linecap='round' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* 3. Live Animated ECG Heartbeat Pulse Wave */}
        <div className="absolute bottom-4 left-0 right-0 opacity-25 hidden md:block">
          <svg 
            viewBox="0 0 1400 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-24 stroke-sky-600 animate-ecg"
          >
            <path 
              d="M0 60 H280 L300 20 L315 100 L330 38 L345 75 L360 60 H660 L680 16 L695 106 L710 34 L725 76 L740 60 H1040 L1060 20 L1075 100 L1090 38 L1105 75 L1120 60 H1400" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* 4. Concentric Modern Geometric Rings */}
        <div className="absolute -top-10 right-1/4 w-96 h-96 border border-sky-300/30 rounded-full pointer-events-none hidden lg:block animate-pulse-soft" />
        <div className="absolute -top-20 right-1/4 w-[460px] h-[460px] border border-sky-200/40 rounded-full pointer-events-none hidden lg:block" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center min-h-[72vh]">

          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center animate-fade-in">
            
            {/* Live Smart Hospital Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 border border-sky-300 shadow-md shadow-sky-500/10 text-sky-900 text-xs sm:text-sm font-semibold mb-6 w-fit backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-slate-900 font-bold">Smart Digital Healthcare</span>
              <span className="text-slate-300">•</span>
              <span className="text-sky-700 font-semibold flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-sky-600 animate-pulse" />
                Live OPD & Tele-Triage Active
              </span>
            </div>

            {/* Smart Hospital Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.14] mb-6 font-display">
              Advanced Healthcare Powered by{' '}
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Smart Innovation
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-700 mb-8 leading-relaxed max-w-2xl font-normal">
              Experience modern clinical excellence with automated digital diagnostics, 
              paperless health records, and world-class specialists for both in-person and telemedicine care.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-9">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold text-base px-8 py-6 h-auto rounded-full shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all group flex items-center justify-center gap-2.5"
                onClick={() => setAppointmentDialogOpen(true)}
              >
                <Calendar className="h-5 w-5" />
                <span>Book Instant Consultation</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Button>
              
              <a 
                href="tel:18001234560"
                className="inline-flex items-center justify-center gap-3 border border-sky-200/90 bg-white/95 hover:bg-white hover:border-sky-300 text-slate-800 font-medium text-base px-6 py-4 rounded-full shadow-md shadow-slate-200/50 transition-all hover:scale-[1.02]"
              >
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500 border border-red-100">
                  <Phone className="h-4 w-4 animate-bounce" />
                </div>
                <div className="text-left text-xs leading-tight">
                  <span className="block text-slate-500 font-normal">Emergency 24/7 Helpline</span>
                  <span className="font-bold text-slate-900 text-sm">1-800-123-4560</span>
                </div>
              </a>
            </div>

            {/* Smart Hospital Feature Highlights (Glass Pills) */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-6 border-t border-sky-200/60 text-xs sm:text-sm">
              <div className="flex items-center gap-2 bg-white/85 backdrop-blur-sm border border-sky-150 px-3.5 py-1.5 rounded-full shadow-xs hover:border-sky-300 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-semibold text-slate-800">Smart Digital Prescriptions</span>
              </div>
              <div className="flex items-center gap-2 bg-white/85 backdrop-blur-sm border border-sky-150 px-3.5 py-1.5 rounded-full shadow-xs hover:border-sky-300 transition-colors">
                <Activity className="w-4 h-4 text-sky-600 flex-shrink-0 animate-pulse" />
                <span className="font-semibold text-slate-800">Live ECG & Patient Vitals</span>
              </div>
              <div className="flex items-center gap-2 bg-white/85 backdrop-blur-sm border border-sky-150 px-3.5 py-1.5 rounded-full shadow-xs hover:border-sky-300 transition-colors">
                <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="font-semibold text-slate-800">Encrypted Health Vault</span>
              </div>
            </div>

          </div>

          {/* Right Visual Column (Elevated Smart Hospital Canvas with Balanced Micro-Animations) */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Ambient Glow Halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-400 to-cyan-400 rounded-3xl blur-xl opacity-25 transform -rotate-1 scale-102"></div>

              {/* Main Medical Visual Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-sky-900/15 border-4 border-white bg-white">
                <img
                  src="https://img.freepik.com/premium-photo/doctors-nurses-arms-crossed-portrait-diversity-hospital-about-us-leadership-people-trust-community-support-smile-happy-confident-healthcare-workers-teamwork-collaboration_590464-143114.jpg?semt=ais_hybrid&w=740"
                  alt="Lunaria Hill Hospital Doctors and Specialists"
                  className="w-full h-[390px] sm:h-[460px] object-cover object-center transform hover:scale-102 transition-transform duration-700"
                />

                {/* Bottom Overlay Pill (Clean, zero text obstruction) */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 text-white flex items-center justify-center shadow-md shadow-sky-500/30">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-tight font-display">Board-Certified Specialists</h4>
                      <p className="text-[11px] text-slate-500">150+ Renowned Clinicians</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                    On-Duty Now
                  </span>
                </div>
              </div>

              {/* Smart Card 1: Top-Left Floating Smart Telemedicine Widget (With Heartbeat Animation) */}
              <div className="absolute -top-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-sky-150 animate-float hidden sm:flex items-center gap-3.5">
                <div className="w-10 h-10 bg-gradient-to-tr from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center text-white shadow-md shadow-sky-500/30">
                  <Heart className="h-5 w-5 fill-white animate-heartbeat" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm">Smart Health Hub</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">Virtual Triage: &lt; 3 mins wait</div>
                </div>
              </div>

              {/* Smart Card 2: Top-Right Pill */}
              <div className="absolute top-4 -right-4 bg-white/95 backdrop-blur-md rounded-full px-4 py-1.5 shadow-lg border border-sky-150 flex items-center gap-1.5 text-xs font-semibold text-slate-800 animate-float" style={{ animationDelay: '1.2s' }}>
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                <span>JCI & ISO Certified</span>
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
