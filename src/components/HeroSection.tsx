import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Phone, Heart, ShieldCheck, ArrowRight, Star, Activity, Sparkles } from 'lucide-react';
import { AppointmentForm } from '@/components/AppointmentForm';

const HeroSection = () => {
  const [appointmentDialogOpen, setAppointmentDialogOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-16 lg:py-24">
      {/* High-Tech Ambient Glowing Aurora Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glowing Luminous Orbs */}
        <div className="absolute -top-40 -right-20 w-[550px] h-[550px] bg-sky-500/20 rounded-full blur-[130px]" />
        <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 right-1/4 w-[400px] h-[400px] bg-cyan-400/15 rounded-full blur-[100px]" />
        
        {/* Subtle Cyber Grid */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px)`,
            backgroundSize: '28px 28px'
          }}
        />

        {/* Gradient Ray Overlay */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-80 bg-gradient-to-b from-sky-500/10 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[70vh]">

          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center animate-fade-in">
            
            {/* Modern Glowing Status Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/30 shadow-lg shadow-sky-500/10 text-sky-300 text-xs sm:text-sm font-semibold mb-6 w-fit backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <span>Next-Gen Healthcare</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300 font-normal">NABH & JCI Accredited Hospital</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.14] mb-6 font-display">
              Advanced Clinical Care for a{' '}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Healthier Tomorrow
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-9 leading-relaxed max-w-2xl font-normal">
              Experience world-class healthcare powered by cutting-edge medical technology, 
              internationally certified specialists, and 24/7 dedicated patient care tailored to your unique journey.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-base px-8 py-6 h-auto rounded-full shadow-xl shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all group flex items-center justify-center gap-2.5"
                onClick={() => setAppointmentDialogOpen(true)}
              >
                <Calendar className="h-5 w-5" />
                <span>Book Instant Appointment</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <a 
                href="tel:18001234560"
                className="inline-flex items-center justify-center gap-3 border border-slate-700 bg-slate-900/80 hover:bg-slate-800 hover:border-slate-600 text-white font-medium text-base px-6 py-4 rounded-full shadow-lg backdrop-blur-md transition-all hover:scale-[1.02]"
              >
                <div className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400">
                  <Phone className="h-4 w-4 animate-bounce" />
                </div>
                <div className="text-left text-xs leading-tight">
                  <span className="block text-slate-400 font-normal">Emergency 24/7</span>
                  <span className="font-bold text-sky-300 text-sm">1-800-123-4560</span>
                </div>
              </a>
            </div>

          </div>

          {/* Right Visual Column (Clean Frame without clashing overlapping badges) */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Image Frame with Luminous Cyber Border */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-sky-500/20 ring-1 ring-sky-500/30 bg-slate-900">
                <img
                  src="https://img.freepik.com/premium-photo/doctors-nurses-arms-crossed-portrait-diversity-hospital-about-us-leadership-people-trust-community-support-smile-happy-confident-healthcare-workers-teamwork-collaboration_590464-143114.jpg?semt=ais_hybrid&w=740"
                  alt="Lunaria Hill Hospital Medical Specialists"
                  className="w-full h-[380px] sm:h-[450px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Clean Subtle Bottom Vignette (without any covering text) */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Clean Bottom Status Bar Inside Photo (Cleanly spaced at bottom) */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white bg-slate-950/70 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-xs font-semibold text-white">Board-Certified Specialists</span>
                  </div>
                  <span className="text-[11px] font-medium text-sky-300">24/7 Available</span>
                </div>
              </div>

              {/* Floating High-Tech Glass Badge (Neatly Placed at Top-Left) */}
              <div className="absolute -top-5 -left-4 sm:-left-6 bg-slate-900/90 backdrop-blur-md rounded-2xl p-3.5 shadow-2xl border border-sky-500/30 animate-float hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-emerald-500/30">
                  <Heart className="h-5 w-5 fill-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-white text-xs sm:text-sm">24/7 Rapid Care</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  </div>
                  <div className="text-[11px] text-slate-400">Immediate Doctor Response</div>
                </div>
              </div>

              {/* Floating Top-Right Pill Badge */}
              <div className="absolute top-4 -right-3 bg-slate-900/90 backdrop-blur-md rounded-full px-3.5 py-1.5 shadow-xl border border-sky-500/30 flex items-center gap-1.5 text-xs font-semibold text-sky-200">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>Zero-Wait Triage</span>
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
