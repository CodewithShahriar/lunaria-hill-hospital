import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  MessageCircle, Award, Shield, Clock, Calendar, Heart, 
  Stethoscope, Phone, ArrowRight, CheckCircle2, Users, 
  Zap, Brain, Baby, Bone, Microscope, Hospital, 
  Syringe, MessageCircleHeart, Ambulance, Star, Sparkles, Activity
} from 'lucide-react';
import { AppointmentForm } from '@/components/AppointmentForm';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [appointmentDialogOpen, setAppointmentDialogOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<string | undefined>(undefined);

  const handleBookAppointment = (doctorName?: string) => {
    setSelectedDoctor(doctorName);
    setAppointmentDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-sky-500 selection:text-white">
      {/* 1. Header & Navigation */}
      <Navigation onAppointmentClick={() => handleBookAppointment()} />
      
      {/* 2. Hero Section */}
      <HeroSection />
      
      {/* 2. Quick Info Cards (Hero Sky-Blue Background Extends Exactly to Midpoint of Cards) */}
      <section className="relative z-20 bg-white pb-16">
        <div className="relative">
          {/* Top 50% Background: Seamless continuation of Hero sky-blue background */}
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-sky-100/75 via-blue-50/60 to-cyan-50/70 pointer-events-none">
            {/* Subtle medical plus grid pattern matching Hero */}
            <div 
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 14v12M14 20h12' stroke='%230284c7' stroke-width='2' stroke-linecap='round' fill='none'/%3E%3C/svg%3E")`,
                backgroundSize: '40px 40px'
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-xl overflow-hidden shadow-2xl">
            {/* 1. Working Time */}
            <div className="bg-[#169fe6] text-white p-6 lg:p-8 flex flex-col justify-between min-h-[260px]">
              <div>
                <h3 className="text-lg font-bold mb-4 font-display">Working Time</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between border-b border-white/20 pb-1.5">
                    <span>Mon – Wed</span>
                    <span className="font-bold">9:00 AM - 7:00 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-white/20 pb-1.5">
                    <span>Thursday</span>
                    <span className="font-bold">9:00 AM - 6:30 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-white/20 pb-1.5">
                    <span>Friday</span>
                    <span className="font-bold">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between pt-0.5">
                    <span>Sunday</span>
                    <span className="font-bold">CLOSED</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. Doctors Timetable */}
            <div className="bg-[#0c8fd3] text-white p-6 lg:p-8 flex flex-col justify-between min-h-[260px]">
              <div>
                <h3 className="text-lg font-bold mb-3 font-display">Doctors Timetable</h3>
                <p className="text-sm mb-6 leading-relaxed text-white/95">
                  Check our weekly timetable to see when each doctor is available. Planning ahead helps you avoid long waits and ensures you meet the right specialist at the right time for your medical needs.
                </p>
              </div>
              <div>
                <Link to="/doctors">
                  <button className="bg-white text-[#0c8fd3] font-semibold text-sm px-4 py-2 rounded hover:bg-slate-50 transition-colors shadow-sm">
                    View Timetable
                  </button>
                </Link>
              </div>
            </div>

            {/* 3. Appointments */}
            <div className="bg-[#0c7cc6] text-white p-6 lg:p-8 flex flex-col justify-between min-h-[260px]">
              <div>
                <h3 className="text-lg font-bold mb-3 font-display">Appointments</h3>
                <p className="text-sm mb-6 leading-relaxed text-white/95">
                  Book your appointment online or by phone at your convenience. We offer flexible scheduling options to fit your routine and reduce waiting times. Secure your spot early for faster, more efficient care.
                </p>
              </div>
              <div>
                <button 
                  onClick={() => handleBookAppointment()}
                  className="bg-white text-[#0c7cc6] font-semibold text-sm px-4 py-2 rounded hover:bg-slate-50 transition-colors shadow-sm"
                >
                  Make an Appointment
                </button>
              </div>
            </div>

            {/* 4. Emergency Cases */}
            <div className="bg-[#0c69b5] text-white p-6 lg:p-8 flex flex-col justify-between min-h-[260px]">
              <div>
                <h3 className="text-lg font-bold mb-3 font-display">Emergency Cases</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">📞</span>
                  <a href="tel:18001234560" className="text-2xl font-extrabold hover:underline font-display">
                    1-800-123-4560
                  </a>
                </div>
                <p className="text-sm leading-relaxed text-white/95">
                  For urgent medical assistance, contact our 24/7 emergency line. Our experienced team is ready to help at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* 4. About Section - Complete Medical Solutions */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Image Frame with Floating Experience Card */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-sky-500/10 ring-1 ring-slate-100">
                <img 
                  src="https://media.licdn.com/dms/image/v2/C4D1BAQHKoycNIXHKYg/company-background_10000/company-background_10000/0/1583639567756/medex_healthcare_co_cover?e=2147483647&v=beta&t=cxhITWOAEuXZ7PO7ZSVwbflxEqE2uBMWpRVzcZI5FpY" 
                  alt="Lunaria Hill Hospital Team and Facilities" 
                  className="w-full h-[400px] sm:h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating 15+ Years Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 glass-card p-4 sm:p-5 rounded-2xl shadow-xl border border-white/80">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 bg-gradient-to-tr from-sky-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-sky-500/30">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-extrabold text-slate-900 text-lg font-display">15+ Years</p>
                    <p className="text-xs text-slate-500 font-medium">Healthcare Excellence</p>
                  </div>
                </div>
              </div>

              {/* Patient Trust Tag */}
              <div className="absolute -top-4 -left-4 glass-card px-3.5 py-1.5 rounded-full shadow-md text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Zero Complication Records</span>
              </div>
            </div>
            
            {/* Text Information */}
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-sky-100">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                Complete Medical Solutions
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6 font-display">
                A Recognized Leader in Exceptional Healthcare
              </h2>
              <p className="text-slate-600 mb-8 text-base sm:text-lg leading-relaxed">
                At Lunaria Hill Hospital, we unite compassionate clinical care with pioneering medical innovation. 
                Our approach delivers personalized, evidence-driven patient treatments designed for quick recovery and long-term wellness.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50/70 border border-slate-100 hover:bg-sky-50/50 transition-colors">
                  <div className="bg-sky-500 text-white p-1 rounded-full mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Board-Certified Medical Specialists</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Multi-disciplinary team of surgeons, internists, and diagnosticians committed to your recovery.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50/70 border border-slate-100 hover:bg-sky-50/50 transition-colors">
                  <div className="bg-sky-500 text-white p-1 rounded-full mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Next-Generation Diagnostic Equipment</h4>
                    <p className="text-slate-500 text-xs mt-0.5">High-precision 3T MRI, CT imaging, and automated digital pathology for definitive diagnostics.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50/70 border border-slate-100 hover:bg-sky-50/50 transition-colors">
                  <div className="bg-sky-500 text-white p-1 rounded-full mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Patient-First Healing Environment</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Comfortable private recovery suites, empathetic nursing staff, and transparent billing.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link to="/about">
                  <Button size="lg" className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-full px-6 shadow-md shadow-sky-500/20">
                    Learn More About Us
                  </Button>
                </Link>
                <Link to="/doctors">
                  <Button size="lg" variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50 rounded-full px-6">
                    Our Doctors
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* 5. Department Cards */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Hospital className="w-3.5 h-3.5 text-sky-600" />
              Specialized Care
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
              Explore Our Medical Departments
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Comprehensive medical specialties equipped with modern infrastructure and world-class physicians.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {[
              { name: "General Medicine", icon: Stethoscope, desc: "Comprehensive adult care & health checks", badge: "24/7 Outpatient" },
              { name: "Cardiology", icon: Heart, desc: "Heart failure, angioplasty & cardiac ICU", badge: "Cath Lab" },
              { name: "Neurology", icon: Brain, desc: "Stroke center & neuro-rehab care", badge: "Advanced ICU" },
              { name: "Gastroenterology", icon: Microscope, desc: "Endoscopy, liver & digestive wellness", badge: "Day Care" },
              { name: "Pediatrics", icon: Baby, desc: "Neonatal ICU & adolescent care", badge: "Specialist Team" },
              { name: "Orthopedics", icon: Bone, desc: "Joint replacement & sports trauma", badge: "Robotic Surgery" },
            ].map((dept, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-sm hover:shadow-xl hover:border-sky-300 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="bg-gradient-to-tr from-sky-50 to-sky-100 rounded-2xl h-14 w-14 flex items-center justify-center mx-auto mb-4 group-hover:from-sky-500 group-hover:to-blue-600 transition-all duration-300 shadow-inner">
                    <dept.icon className="h-7 w-7 text-sky-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900 mb-1 group-hover:text-sky-600 transition-colors">{dept.name}</h3>
                  <p className="text-slate-500 text-xs mb-3 leading-relaxed">{dept.desc}</p>
                </div>
                <div>
                  <span className="inline-block text-[10px] font-semibold text-sky-700 bg-sky-50 rounded-full px-2.5 py-0.5 mb-3">
                    {dept.badge}
                  </span>
                  <Link to="/departments">
                    <Button variant="ghost" size="sm" className="text-sky-600 hover:text-sky-700 hover:bg-sky-50 text-xs font-semibold p-0 w-full">
                      Learn Details →
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/departments">
              <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white rounded-full px-8 shadow-md shadow-sky-600/20">
                View All Departments & Facilities
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Highest Quality Care Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-sky-100">
                <Shield className="w-3.5 h-3.5 text-sky-600" />
                Highest Quality Care
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6 font-display">
                Advanced Solutions for Complex Medical Needs
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our super-specialists solve complex and rare medical conditions using research-backed protocols, 
                minimally invasive precision tools, and collaborative multi-specialty tumor boards.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-slate-800 text-sm font-medium">
                  <div className="bg-sky-100 text-sky-700 p-1.5 rounded-full flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>Multidisciplinary medical boards for complex diagnostics</span>
                </div>
                <div className="flex items-center gap-3 text-slate-800 text-sm font-medium">
                  <div className="bg-sky-100 text-sky-700 p-1.5 rounded-full flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>Real-time digital patient monitoring & predictive AI tools</span>
                </div>
                <div className="flex items-center gap-3 text-slate-800 text-sm font-medium">
                  <div className="bg-sky-100 text-sky-700 p-1.5 rounded-full flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>Faster recovery times with minimally invasive robotic surgery</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-full px-6 shadow-md shadow-sky-500/20"
                  onClick={() => handleBookAppointment()}
                >
                  Consult a Specialist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="md:col-span-6 lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 ring-1 ring-slate-100">
                <img
                  src="https://immigrantinvest.com/_next/image/?url=https%3A%2F%2F9zkkfwp3kz3ung7j.public.blob.vercel-storage.com%2FCI5-S2K-8ZX-FLN%2Fstoryblok.jpeg&w=3840&q=75"
                  alt="Modern Lunaria Hill Hospital Clinic Overview"
                  className="w-full h-[380px] sm:h-[420px] object-cover hover:scale-102 transition-transform duration-700"
                />
                {/* Floating Stat Pill on Image */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs glass-card p-4 rounded-2xl shadow-lg border border-white/80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center font-bold">
                      99%
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">Precision Surgery Outcome</p>
                      <p className="text-[11px] text-slate-500">Over 12,000 successful procedures</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 7. Deep Modern Banner: Innovative Approach to Treatment */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900 text-white relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Visual with Stat Badge */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-sky-500/20 ring-1 ring-white/10">
                <img 
                  src="https://media.assettype.com/newindianexpress%2F2024-07%2F6cf84595-4d0d-42c3-b6ef-23d97ac0c3b1%2FHealthcare.jpg" 
                  alt="Innovative Healthcare Research and Tech" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              </div>

              {/* Floating Counter Card */}
              <div className="absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-slate-700/80 w-72">
                <div className="flex items-center gap-3.5 mb-2">
                  <div className="bg-sky-500/20 text-sky-400 p-2.5 rounded-xl border border-sky-500/30">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-2xl font-display">8,500+</p>
                    <span className="text-[11px] text-emerald-400 font-semibold uppercase tracking-wider">Annual Cases</span>
                  </div>
                </div>
                <p className="text-slate-400 text-xs leading-snug">
                  Patients successfully treated each year with innovative clinical therapies.
                </p>
              </div>
            </div>

            {/* Content Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
                <Zap className="w-3.5 h-3.5 text-sky-400" />
                Cutting-Edge Protocols
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight font-display leading-tight">
                Pioneering Medical Excellence with Compassionate Touch
              </h2>
              <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">
                We combine traditional compassionate medicine with high-tech diagnostic advancements to ensure precision treatment, minimal recovery times, and superior long-term clinical outcomes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-sky-500/40 transition-colors">
                  <div className="bg-sky-500/20 text-sky-400 rounded-xl w-10 h-10 flex items-center justify-center mb-3">
                    <Shield className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold mb-1">Evidence-Based Medicine</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">All procedures and prescriptions are validated by rigorous peer-reviewed clinical research.</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-sky-500/40 transition-colors">
                  <div className="bg-sky-500/20 text-sky-400 rounded-xl w-10 h-10 flex items-center justify-center mb-3">
                    <Zap className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold mb-1">Advanced Technology</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">Equipped with robotic surgical arms, ultra-clear imaging, and automated ICUs.</p>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-white text-slate-900 hover:bg-slate-100 font-semibold rounded-full px-7"
                onClick={() => handleBookAppointment()}
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Total Healthcare Solutions Section */}
      <section className="py-20 lg:py-24 bg-slate-50/70">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
              Comprehensive Health Care Solutions
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Personalized, reliable, and holistic medical services to care for you and your family at every stage of life.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Feature Cards Grid (8 cols) */}
            <div className="lg:col-span-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: Stethoscope, title: "Top-Tier Doctors", desc: "Internationally trained physicians and seasoned medical directors." },
                { icon: Microscope, title: "Modern Equipment", desc: "Automated labs, 3D imaging, and modern molecular diagnostics." },
                { icon: Hospital, title: "World-Class Infrastructure", desc: "Ultra-clean surgical suites and private executive recovery rooms." },
                { icon: Syringe, title: "Outpatient Services", desc: "Same-day procedures, vaccinations, and comprehensive checks." },
                { icon: MessageCircleHeart, title: "Health Counseling", desc: "Mental health guidance, nutrition, and rehabilitation therapy." },
                { icon: Ambulance, title: "24/7 Ambulance", desc: "Advanced cardiac life support ambulances on standby around the clock." }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-sky-300 transition-all flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1.5">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Opening Hours & Custom Health Plan (4 cols) */}
            <div className="lg:col-span-4 bg-gradient-to-br from-sky-600 to-blue-700 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-sky-200" />
                  <h3 className="text-lg font-bold font-display">Hospital Service Hours</h3>
                </div>
                <p className="text-xs text-white/80 leading-relaxed mb-6">
                  Committed to delivering compassionate care around the clock. Your health is our highest priority.
                </p>
                <ul className="text-xs space-y-3 border-t border-white/20 pt-4">
                  <li className="flex justify-between">
                    <span className="text-white/80">Monday – Wednesday</span>
                    <span className="font-bold">8:00 AM – 8:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-white/80">Thursday</span>
                    <span className="font-bold">8:00 AM – 7:30 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-white/80">Friday</span>
                    <span className="font-bold">8:00 AM – 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-white/80">Weekend Emergency</span>
                    <span className="font-bold text-emerald-300">24/7 Active</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-5 border-t border-white/20">
                <h4 className="font-bold text-sm mb-1">Need a Personalized Health Checkup?</h4>
                <p className="text-xs text-white/80 mb-4">
                  Get a tailored wellness and diagnostic package for your family or corporate team.
                </p>
                <Button 
                  size="sm" 
                  className="w-full bg-white text-sky-800 hover:bg-sky-50 font-bold rounded-xl text-xs py-2.5 h-auto"
                  onClick={() => handleBookAppointment()}
                >
                  Book Executive Package
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Testimonials Section */}
      <TestimonialsSection />

      {/* 10. Qualified Doctors & Medical Specialists */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Stethoscope className="w-3.5 h-3.5 text-sky-600" />
              World-Class Faculty
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
              Meet Our Medical Specialists
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Experienced, board-certified clinicians dedicated to providing compassionate, top-tier healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Dr. Sarah Johnson",
                specialty: "Chief Cardiologist",
                experience: "15+ Years Exp",
                rating: 4.9,
                image: "https://jthemes.net/themes/html/medservices/files/images/doctor-1.jpg"
              },
              {
                name: "Dr. Michael Chen",
                specialty: "Senior Neurologist",
                experience: "12+ Years Exp",
                rating: 4.8,
                image: "https://jthemes.net/themes/html/medservices/files/images/doctor-3.jpg"
              },
              {
                name: "Dr. Emily Davis",
                specialty: "Head Pediatrician",
                experience: "10+ Years Exp",
                rating: 4.9,
                image: "https://jthemes.net/themes/html/medservices/files/images/doctor-4.jpg"
              },
              {
                name: "Dr. James Wilson",
                specialty: "Orthopedic Surgeon",
                experience: "14+ Years Exp",
                rating: 4.9,
                image: "https://jthemes.net/themes/html/medservices/files/images/doctor-2.jpg"
              }
            ].map((doctor, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative overflow-hidden h-72">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                    
                    {/* Rating Pill */}
                    <div className="absolute top-3 right-3 glass-card px-2.5 py-1 rounded-full text-xs font-bold text-slate-800 flex items-center gap-1 shadow-sm">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <span>{doctor.rating}</span>
                    </div>

                    {/* Experience Tag */}
                    <div className="absolute bottom-3 left-3 text-white">
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/20">
                        {doctor.experience}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 text-center">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {doctor.name}
                    </h3>
                    <p className="text-xs font-semibold text-sky-600 mb-3">{doctor.specialty}</p>
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-600 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Available for Consultation
                    </span>
                  </div>
                </div>

                <div className="px-5 pb-5">
                  <Button 
                    className="w-full bg-sky-50 hover:bg-sky-500 text-sky-700 hover:text-white rounded-xl text-xs font-semibold py-2.5 transition-colors"
                    onClick={() => handleBookAppointment(doctor.name)}
                  >
                    Book with {doctor.name.split(' ')[1]}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/doctors">
              <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white rounded-full px-8 shadow-md shadow-sky-600/20">
                View All Medical Specialists
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 11. Modern Medicine & High-Tech Diagnostics */}
      <section className="py-20 lg:py-24 bg-slate-50/70">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-4">
                <Microscope className="w-3.5 h-3.5 text-sky-600" />
                Modern Medicine
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-6">
                Better Technologies for Better Healthcare
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-base sm:text-lg">
                We continuously invest in leading medical technologies to provide you with faster, 
                more accurate diagnoses, less invasive treatments, and rapid recovery times.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900">Advanced 3T MRI & Dual-Source CT</h3>
                    <p className="text-slate-500 text-xs mt-0.5">Sub-millimeter resolution for early, definitive detection of vascular and soft-tissue conditions.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900">Robotic Minimally Invasive Surgery</h3>
                    <p className="text-slate-500 text-xs mt-0.5">High dexterity instruments resulting in smaller incisions, reduced blood loss, and faster discharge.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900">Connected Electronic Health Records (EHR)</h3>
                    <p className="text-slate-500 text-xs mt-0.5">Instant coordination between labs, pharmacy, and physicians with encrypted digital reports.</p>
                  </div>
                </div>
              </div>
              
              <Link to="/services">
                <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white rounded-full px-6 shadow-md shadow-sky-600/20">
                  Explore Diagnostic Facilities
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-sky-500/10 ring-1 ring-slate-100">
                <img 
                  src="https://almadinadiagnostic.com/assets/img/department/Pathology-Lab-Management-Software.jpg" 
                  alt="Modern Lunaria Hill Pathology Lab Technology" 
                  className="w-full h-[420px] object-cover"
                />
              </div>

              {/* Stat Card Over Image */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-gradient-to-tr from-sky-600 to-blue-700 text-white p-6 rounded-3xl shadow-xl max-w-xs">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-extrabold text-2xl font-display">99.7%</p>
                    <p className="text-xs text-white/90">Diagnostic Accuracy Score</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 12. News & Health Blog Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              Latest Articles & Insights
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
              Health Insights & Hospital Updates
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Doctor-reviewed wellness advice, preventive care tips, and recent medical breakthroughs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Understanding Heart Health: Clinical Prevention & Lifestyle",
                excerpt: "Discover the latest research on cardiovascular prevention, early warning indicators, and cardiac fitness.",
                date: "May 15, 2024",
                category: "Cardiology",
                readTime: "4 min read",
                image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Advances in Pediatric Medicine at Lunaria Hill Hospital",
                excerpt: "Explore our specialized neonatal ICU wing and personalized treatments for infant and adolescent health.",
                date: "June 02, 2024",
                category: "Pediatrics",
                readTime: "5 min read",
                image: "https://healthier.stanfordchildrens.org/wp-content/uploads/2022/06/21_1299711083_iStock-scaled.jpg"
              },
              {
                title: "Mental Wellness & Preventive Stress Care in Daily Life",
                excerpt: "Expert insights on recognizing burnout symptoms early and utilizing professional therapeutic counseling.",
                date: "June 24, 2024",
                category: "Wellness",
                readTime: "3 min read",
                image: "https://media.istockphoto.com/id/1470219517/photo/doctor-surgeon-and-neurologist-use-robotic-and-medical-technology-diagnose-and-examine.jpg?s=612x612&w=0&k=20&c=zPmI9WvScFbiM_jzHq3W3uSQD02dnWf2GDs84u1dl7s="
              }
            ].map((article, idx) => (
              <Card 
                key={idx} 
                className="overflow-hidden border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-sky-700 shadow-sm">
                      {article.category}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 hover:text-sky-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                  </CardContent>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <Link to="/blog">
                    <Button variant="ghost" className="text-sky-600 hover:text-sky-700 hover:bg-sky-50 font-semibold text-xs p-0 flex items-center gap-1">
                      Read Full Article
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/blog">
              <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white rounded-full px-8 shadow-md shadow-sky-600/20">
                Browse All Health Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* 13. High-Conversion Modern CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-slate-950 via-sky-950 to-slate-900 text-white overflow-hidden">
        {/* Subtle hospital overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage: "url('https://media.istockphoto.com/id/593305618/photo/putting-their-skills-to-good-use.jpg?s=612x612&w=0&k=20&c=_5_-dWH79KXUt0GXHgnzswN_rYQoNM425Ru4fPtE5OE=')",
          }}
        />

        <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-6 border border-sky-500/30">
            <Heart className="h-3.5 w-3.5 fill-sky-400 text-sky-400" />
            Your Health Is Our Priority
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 font-display">
            Take the First Step Toward Better Health Today
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
            Don't delay your medical care. Whether you require a routine checkup or specialized consultation, 
            our renowned specialists are here to guide you with clinical excellence and warmth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-slate-900 hover:bg-slate-100 font-bold rounded-full px-8 py-6 h-auto shadow-xl text-base"
              onClick={() => handleBookAppointment()}
            >
              <Calendar className="mr-2 h-5 w-5 text-sky-600" />
              Book Instant Appointment
            </Button>
            
            <a 
              href="tel:18001234560"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-slate-900/80 border border-slate-700 hover:border-slate-500 text-white transition-all"
            >
              <Phone className="h-4 w-4 text-sky-400" />
              <div className="text-left text-xs">
                <span className="block text-slate-400">Emergency 24/7 Hotline</span>
                <span className="font-bold text-sm text-sky-300">1-800-123-4560</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      
      {/* 14. Modern Footer */}
      <Footer />
      
      {/* 15. Modern Floating Live Chat / Help Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-full shadow-2xl shadow-sky-500/40 px-5 py-4 h-auto flex items-center gap-2 group transition-all"
          onClick={() => handleBookAppointment()}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>
          <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
          <span className="text-sm font-semibold hidden sm:inline">Need Help? Chat / Book</span>
        </Button>
      </div>
      
      {/* Appointment Dialog Modal */}
      <AppointmentForm 
        open={appointmentDialogOpen} 
        onOpenChange={setAppointmentDialogOpen} 
      />
    </div>
  );
};

export default Index;
