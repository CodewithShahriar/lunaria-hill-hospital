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
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/90 via-slate-50/50 to-white py-16 lg:py-24">
      {/* Ambient Smart Hospital Lighting & Subtle Cyber Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Glowing Ambient Colors */}
        <div className="absolute -top-32 -right-20 w-[600px] h-[600px] bg-sky-200/40 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 -left-28 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-100/50 rounded-full blur-[110px]" />
        
        {/* Soft Modern Matrix Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#0284c7 1.5px, transparent 1.5px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Decorative Modern Ring Accents */}
        <div className="absolute top-12 right-12 w-64 h-64 border border-sky-200/40 rounded-full pointer-events-none hidden xl:block" />
        <div className="absolute top-6 right-6 w-80 h-80 border border-sky-100/60 rounded-full pointer-events-none hidden xl:block" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center min-h-[72vh]">

          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center animate-fade-in">
            
            {/* Smart Hospital Live Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-sky-200/80 shadow-sm shadow-sky-500/10 text-sky-800 text-xs sm:text-sm font-semibold mb-6 w-fit backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-slate-900 font-bold">Smart Digital Healthcare</span>
              <span className="text-slate-300">•</span>
              <span className="text-sky-600 font-medium flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                AI Triage & Virtual OPD Ready
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
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl font-normal">
              Experience modern clinical excellence with digital diagnostics, paperless records, 
              and world-class specialists available for instant in-person and tele-consultations.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-9">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold text-base px-8 py-6 h-auto rounded-full shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all group flex items-center justify-center gap-2.5"
                onClick={() => setAppointmentDialogOpen(true)}
              >
                <Calendar className="h-5 w-5" />
                <span>Book Instant Consultation</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <a 
                href="tel:18001234560"
                className="inline-flex items-center justify-center gap-3 border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-800 font-medium text-base px-6 py-4 rounded-full shadow-sm transition-all hover:scale-[1.02]"
              >
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500 border border-red-100">
                  <Phone className="h-4 w-4 animate-bounce" />
                </div>
                <div className="text-left text-xs leading-tight">
                  <span className="block text-slate-500 font-normal">Emergency 24/7 Hotline</span>
                  <span className="font-bold text-slate-900 text-sm">1-800-123-4560</span>
                </div>
              </a>
            </div>

            {/* Smart Hospital Feature Highlights (Clean Trust Badges) */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6 border-t border-slate-200/70 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-slate-700">Digital Smart Prescriptions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                  <Activity className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-slate-700">Real-Time Patient Vitals</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-slate-700">Encrypted Health Records</span>
              </div>
            </div>

          </div>

          {/* Right Visual Column (Modern Smart Hospital Composition) */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Medical Visual Card with Multi-layer Shadow */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-sky-500/15 border-4 border-white bg-white">
                <img
                  src="https://img.freepik.com/premium-photo/doctors-nurses-arms-crossed-portrait-diversity-hospital-about-us-leadership-people-trust-community-support-smile-happy-confident-healthcare-workers-teamwork-collaboration_590464-143114.jpg?semt=ais_hybrid&w=740"
                  alt="Lunaria Hill Hospital Doctors and Specialists"
                  className="w-full h-[380px] sm:h-[450px] object-cover object-center transform hover:scale-102 transition-transform duration-700"
                />

                {/* Bottom Overlay Pill (Centered at the very bottom, completely clear of any image text) */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-slate-100/90 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 text-white flex items-center justify-center shadow-md shadow-sky-500/20">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-tight">Board-Certified Specialists</h4>
                      <p className="text-[11px] text-slate-500">Multidisciplinary Medical Faculty</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold border border-emerald-200/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    On-Duty Now
                  </span>
                </div>
              </div>

              {/* Smart Card 1: Top-Left Floating Smart Telemedicine Widget */}
              <div className="absolute -top-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-sky-100 animate-float hidden sm:flex items-center gap-3.5">
                <div className="w-10 h-10 bg-gradient-to-tr from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center text-white shadow-md shadow-sky-500/25">
                  <Activity className="h-5 w-5" />
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
              <div className="absolute top-4 -right-4 bg-white/95 backdrop-blur-md rounded-full px-3.5 py-1.5 shadow-lg border border-sky-100 flex items-center gap-1.5 text-xs font-semibold text-slate-800">
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
