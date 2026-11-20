import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Phone, Award, Heart, ShieldCheck, ArrowRight, Star, Clock, Activity, CheckCircle2 } from 'lucide-react';
import { AppointmentForm } from '@/components/AppointmentForm';

const HeroSection = () => {
  const [appointmentDialogOpen, setAppointmentDialogOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/80 via-white to-slate-50/50 py-12 lg:py-20">
      {/* Modern Ambient Mesh Aurora Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-cyan-100/30 rounded-full blur-2xl" />
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#0284c7 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[75vh]">

          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center animate-fade-in">
            {/* Status Live Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-100 shadow-sm text-sky-800 text-xs sm:text-sm font-semibold mb-6 w-fit">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Next-Gen Healthcare</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 font-normal">NABH & JCI Accredited</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6 font-display">
              Advanced Healthcare for a{' '}
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Healthier Tomorrow
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl font-normal">
              Experience world-class clinical excellence with cutting-edge medical technology, 
              renowned specialists, and 24/7 dedicated patient care tailored to your unique journey.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold text-base px-7 py-6 h-auto rounded-full shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/35 transition-all group flex items-center justify-center gap-2"
                onClick={() => setAppointmentDialogOpen(true)}
              >
                <Calendar className="h-5 w-5" />
                <span>Book Instant Appointment</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <a 
                href="tel:18001234560"
                className="inline-flex items-center justify-center gap-2 border border-slate-200 bg-white/80 hover:bg-slate-50 hover:border-slate-300 text-slate-800 font-medium text-base px-6 py-4 rounded-full shadow-sm transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600">
                  <Phone className="h-4 w-4 animate-bounce" />
                </div>
                <div className="text-left text-xs leading-tight">
                  <span className="block text-slate-500 font-normal">Emergency 24/7</span>
                  <span className="font-bold text-slate-900 text-sm">1-800-123-4560</span>
                </div>
              </a>
            </div>

            {/* Quick Metrics Trust Bar */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              <div>
                <div className="flex items-center gap-1 text-sky-600 font-bold text-xl lg:text-2xl font-display">
                  <span>99.8%</span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">Patient Satisfaction</p>
              </div>

              <div>
                <div className="flex items-center gap-1 text-slate-900 font-bold text-xl lg:text-2xl font-display">
                  <span>150+</span>
                  <span className="text-sky-500 text-lg">+</span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">Top Specialists</p>
              </div>

              <div>
                <div className="flex items-center gap-1 text-slate-900 font-bold text-xl lg:text-2xl font-display">
                  <span>25k+</span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">Recovered Patients</p>
              </div>

              <div>
                <div className="flex items-center gap-1 text-emerald-600 font-bold text-xl lg:text-2xl font-display">
                  <span>&lt; 5 min</span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">Emergency Triage</p>
              </div>
            </div>
          </div>

          {/* Right Visual Column with Frosted Glass Badges */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Visual Frame */}
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-sky-500/10 ring-1 ring-slate-900/10 bg-slate-100">
                <img
                  src="https://img.freepik.com/premium-photo/doctors-nurses-arms-crossed-portrait-diversity-hospital-about-us-leadership-people-trust-community-support-smile-happy-confident-healthcare-workers-teamwork-collaboration_590464-143114.jpg?semt=ais_hybrid&w=740"
                  alt="Lunaria Hill Hospital Medical Specialists"
                  className="w-full h-[360px] sm:h-[450px] lg:h-[480px] object-cover object-center transform hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                
                {/* Embedded bottom caption on photo */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">Certified Excellence</span>
                  </div>
                  <p className="text-sm font-medium text-white/95">Board-Certified Physicians & Surgical Experts</p>
                </div>
              </div>

              {/* Floating Glassmorphic Badge 1: Top Left */}
              <div className="absolute -top-4 -left-4 sm:-left-6 glass-card rounded-2xl p-3.5 shadow-xl border border-white/80 animate-float hidden sm:flex items-center gap-3">
                <div className="w-11 h-11 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
                  <Heart className="h-5 w-5 fill-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-slate-900 text-sm">24/7 Rapid Care</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  </div>
                  <div className="text-xs text-slate-500">Always Ready & On-Duty</div>
                </div>
              </div>

              {/* Floating Glassmorphic Badge 2: Bottom Right */}
              <div 
                className="absolute -bottom-6 -right-4 sm:-right-6 glass-card rounded-2xl p-4 shadow-xl border border-white/80 animate-float hidden sm:flex items-center gap-3"
                style={{ animationDelay: '1.5s' }}
              >
                <div className="w-11 h-11 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center text-white shadow-md shadow-amber-500/20">
                  <Star className="h-5 w-5 fill-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-slate-900 text-sm">4.9 / 5.0 Rating</span>
                  </div>
                  <div className="text-xs text-slate-500">Based on 2,400+ Patient Reviews</div>
                </div>
              </div>

              {/* Floating Glass Badge 3: Top Right Small Pill */}
              <div className="absolute top-6 -right-3 glass-card rounded-full px-3 py-1.5 shadow-lg border border-white/80 flex items-center gap-1.5 text-xs font-semibold text-slate-800">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                <span>Zero Wait Triage</span>
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
