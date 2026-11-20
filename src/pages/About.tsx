import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Heart, Eye, Target, Award, Users, CheckCircle2, ShieldCheck, Sparkles, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AppointmentForm } from '@/components/AppointmentForm';

const About = () => {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every patient with profound empathy, dignity, and personalized attention across every department.'
    },
    {
      icon: CheckCircle2,
      title: 'Clinical Excellence',
      description: 'We adhere to the highest international benchmarks in medical safety, precision, and surgical standards.'
    },
    {
      icon: Users,
      title: 'Collaborative Teamwork',
      description: 'Our multi-specialty physician boards consult together to deliver seamless, holistic patient recoveries.'
    },
    {
      icon: Award,
      title: 'Medical Innovation',
      description: 'We actively adopt cutting-edge robotics, AI-assisted diagnostics, and minimally invasive procedures.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <Navigation onAppointmentClick={() => setAppointmentOpen(true)} />
      
      {/* 1. Hero Header */}
      <section className="bg-gradient-to-b from-slate-950 via-sky-950 to-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
        {/* Subtle Ambient Orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-6 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            About Lunaria Hill Hospital
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display mb-6">
            Pioneering Healthcare with Human Warmth
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
            Dedicated to providing world-class medical treatments with cutting-edge medical technology, 
            internationally certified specialists, and unwavering commitment to our patients.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold rounded-full px-7 shadow-lg shadow-sky-500/25"
              onClick={() => setAppointmentOpen(true)}
            >
              Book an Appointment
            </Button>
            <a 
              href="#history" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all text-sm font-medium"
            >
              Our History & Vision
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision Bento */}
      <section className="py-20 lg:py-24 bg-slate-50/70">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6 shadow-inner">
                <Target className="h-7 w-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 font-display">Our Mission</h2>
              <p className="text-slate-600 text-base leading-relaxed">
                To provide comprehensive, patient-centered healthcare services that promote healing, wellness, 
                and quality of life for all communities. We are committed to delivering exceptional clinical 
                care through innovative treatments, state-of-the-art medical technology, and empathetic service.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-6 shadow-inner">
                <Eye className="h-7 w-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 font-display">Our Vision</h2>
              <p className="text-slate-600 text-base leading-relaxed">
                To be the leading and most trusted healthcare institution in the region, recognized globally for 
                uncompromising medical excellence, breakthrough clinical research, and accessible modern care 
                that transforms healthcare for future generations.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Hospital History */}
      <section id="history" className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Image with Floating Milestone */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-sky-500/10 ring-1 ring-slate-150">
                <img
                  src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Lunaria Hill Hospital History and Campus"
                  className="w-full h-[420px] object-cover"
                />
              </div>

              {/* Floating Est badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 glass-card p-5 rounded-2xl shadow-xl border border-white/80">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 bg-sky-500 text-white rounded-xl flex items-center justify-center font-bold">
                    2000
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Established</p>
                    <p className="text-sm font-bold text-slate-900">25+ Years Legacy</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-sky-100">
                <Clock className="w-3.5 h-3.5 text-sky-600" />
                Our Journey
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-6">
                A Quarter-Century Legacy of Healing & Trust
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  Nestled in the heart of Lunaria Hill, our hospital was founded with an ambitious mission: to bring 
                  world-class healthcare directly to our community. What began as an intimate clinic has now flourished 
                  into one of the nation's premier multi-specialty research and medical centers.
                </p>
                <p>
                  With every passing year, we have expanded our capacity, recruited top international medical directors, 
                  and embraced advanced diagnostic and surgical technologies. From rapid trauma response to intricate 
                  organ surgeries, Lunaria Hill is synonymous with hope and excellence.
                </p>
                <p>
                  Whether you visit for an annual wellness screening or life-saving specialized care, our promise remains 
                  unshakable: treating you with empathy, surgical precision, and transparent integrity.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Director's Message */}
      <section className="py-20 lg:py-24 bg-slate-50/70">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-display">
              Leadership & Medical Director's Message
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 sm:p-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              <div className="relative flex-shrink-0">
                <img
                  src="https://st2.depositphotos.com/1054848/7169/i/950/depositphotos_71691653-stock-photo-smiling-doctor-on-white-background.jpg"
                  alt="Medical Director Dr. Michael Anderson"
                  className="w-56 h-56 rounded-3xl object-cover shadow-lg ring-4 ring-sky-100"
                />
                <span className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-emerald-500 text-white text-[11px] font-bold shadow">
                  FACS Certified
                </span>
              </div>

              <div className="flex-1 text-center lg:text-left">
                <blockquote className="text-base sm:text-lg text-slate-700 italic leading-relaxed mb-6">
                  "At Lunaria Hill Hospital, we believe healthcare is never merely about treating pathology—it is about caring 
                  for the complete human being. Our unwavering commitment to clinical innovation, patient safety, and compassionate 
                  bedside care guides every single member of our staff."
                </blockquote>

                <div className="mb-4">
                  <img
                    src="https://signature.freefire-name.com/img.php?f=2&t=Anderson"
                    alt="Signature of Dr. Michael Anderson"
                    className="w-48 h-16 object-contain mx-auto lg:mx-0 opacity-80"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-xl text-slate-900 font-display">Dr. Michael Anderson</h3>
                  <p className="text-sky-600 font-semibold text-sm">Medical Director & Chief Executive Officer</p>
                  <p className="text-slate-400 text-xs mt-0.5">MD, FACS • 25+ Years of Clinical Leadership</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-display mb-4">
              Our Guiding Principles
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              The foundational ethical standards that govern every clinical decision and patient interaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 hover:-translate-y-1.5 text-center group"
              >
                <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-sky-500 transition-colors shadow-inner">
                  <value.icon className="h-7 w-7 text-sky-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Awards & Recognition Section */}
      <section className="py-16 bg-slate-50/80 border-t border-slate-150">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5 text-sky-600" />
              National & Global Honors
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mb-2">
              Recognized for Clinical Excellence
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Accredited by international health organizations for safety and exceptional outcomes.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-85 hover:opacity-100 transition-opacity">
            <img
              src="https://www.casacolina.org/images/CMMS-logo_2305_v3_cmyk_6-inch-Height_300dpi.jpg"
              alt="Casa Colina Logo"
              className="h-12 sm:h-14 max-w-[130px] object-contain grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="https://d11mkob3ld6ys.cloudfront.net/images/logos/SCH-016_5star-Overall-Quality-Badge_Navy.png"
              alt="5 Star Quality Badge"
              className="h-14 sm:h-16 max-w-[130px] object-contain grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLYokV7w7M_hRanF5giERDsqSehPOImQmLTQ&s"
              alt="Dignity Health Awards"
              className="h-12 sm:h-14 max-w-[130px] object-contain grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="https://newsroom.spectrumhealth.org/wp-content/uploads/2018/02/HG_Americas_50_Best_Award_Image_2015-2018.jpg"
              alt="HG Americas 50 Best Award"
              className="h-12 sm:h-14 max-w-[130px] object-contain grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="https://www.kauveryhospital.com/wp-content/uploads/2023/07/Newsweek-small.jpg"
              alt="Newsweek Ranked Hospital"
              className="h-12 sm:h-14 max-w-[130px] object-contain grayscale hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      </section>

      <Footer />

      {/* Appointment Dialog */}
      <AppointmentForm 
        open={appointmentOpen} 
        onOpenChange={setAppointmentOpen} 
      />
    </div>
  );
};

export default About;
