import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  MessageCircle, Award, Shield, Clock, Calendar, Heart, HeartPulse,
  Stethoscope, Phone, ArrowRight, CheckCircle2, Users, 
  Zap, Brain, Thermometer, Baby, Eye, Bone, Microscope, Hospital, 
  Syringe, MessageCircleHeart, Ambulance, Star, Sparkles, Activity
} from 'lucide-react';
import { AppointmentForm } from '@/components/AppointmentForm';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [appointmentDialogOpen, setAppointmentDialogOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<string | undefined>(undefined);
  const [selectedSpecialtyTab, setSelectedSpecialtyTab] = useState<string>('All');
  const [activeTechTab, setActiveTechTab] = useState<'imaging' | 'robotic' | 'records'>('imaging');

  const handleBookAppointment = (doctorName?: string) => {
    setSelectedDoctor(doctorName);
    setAppointmentDialogOpen(true);
  };

  const techDetails = {
    imaging: {
      title: "Advanced 3D Imaging & Diagnostic MRI",
      desc: "Ultra-high-resolution 3 Tesla MRI and low-dose dual-source CT scans for micro-millimeter precision diagnostics.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      accuracy: "99.8%",
      metricLabel: "Diagnostic Accuracy"
    },
    robotic: {
      title: "Robotic Precision Surgery Suites",
      desc: "Next-gen robotic-assisted surgical arms providing sub-millimeter dexterity, minimal blood loss, and 3x faster post-op recovery.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      accuracy: "99.4%",
      metricLabel: "Procedure Precision Rate"
    },
    records: {
      title: "Encrypted Cloud Telemetry & E-Health",
      desc: "Instant encrypted access to lab tests, medical history, and direct physician communications on any device with zero paperwork.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      accuracy: "100%",
      metricLabel: "HIPAA Compliant Security"
    }
  };

  const allDoctors = [
    {
      name: "Dr. Emily Johnson",
      department: "Cardiology",
      specialty: "Chief Cardiologist",
      experience: "12+ Years Exp",
      rating: 4.8,
      reviews: "98 reviews",
      nextSlot: "Today • 11:30 AM",
      image: "/doctors/doctor-2.jpg"
    },
    {
      name: "Dr. Michael Brown",
      department: "Neurology",
      specialty: "Senior Neurologist",
      experience: "10+ Years Exp",
      rating: 4.7,
      reviews: "156 reviews",
      nextSlot: "Today • 02:15 PM",
      image: "/doctors/doctor-3.jpg"
    },
    {
      name: "Dr. Maria Martinez",
      department: "Pediatrics",
      specialty: "Head Pediatrician",
      experience: "12+ Years Exp",
      rating: 4.9,
      reviews: "142 reviews",
      nextSlot: "Tomorrow • 09:00 AM",
      image: "/doctors/doctor-9.jpg"
    },
    {
      name: "Dr. Thomas Hall",
      department: "Orthopedics",
      specialty: "Orthopedic Surgeon",
      experience: "14+ Years Exp",
      rating: 4.8,
      reviews: "165 reviews",
      nextSlot: "Tomorrow • 01:30 PM",
      image: "/doctors/doctor-10.jpg"
    }
  ];

  const filteredDoctors = selectedSpecialtyTab === 'All' 
    ? allDoctors 
    : allDoctors.filter(doc => doc.department.toLowerCase() === selectedSpecialtyTab.toLowerCase());

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-sky-500 selection:text-white">
      {/* 1. Header & Navigation */}
      <Navigation onAppointmentClick={() => handleBookAppointment()} />
      
      {/* 2. Hero Section */}
      <HeroSection />
      
      {/* 2. Quick Info Cards (Card Section Moved Lower & Hero Background Extends to the Marked Line) */}
      <section className="relative z-20 bg-white pb-20">
        <div className="relative">
          {/* Hero background continuation reaching down to the marked line (~68% of the cards, right below Friday) */}
          <div className="absolute inset-x-0 top-0 bottom-[32%] bg-gradient-to-b from-sky-100/80 via-blue-50/70 to-sky-150/50 pointer-events-none">
            {/* Subtle medical plus grid pattern matching Hero */}
            <div 
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 14v12M14 20h12' stroke='%230284c7' stroke-width='2' stroke-linecap='round' fill='none'/%3E%3C/svg%3E")`,
                backgroundSize: '40px 40px'
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10 pt-4 lg:pt-6">
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
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        {/* Soft Moving Ambient Bubbles & Light Orbs */}
        <div className="absolute top-10 left-8 w-72 h-72 rounded-full bg-blue-100/35 blur-3xl animate-bubble-1 pointer-events-none" />
        <div className="absolute top-1/2 -right-16 -translate-y-1/2 w-96 h-96 rounded-full bg-teal-100/35 blur-3xl animate-bubble-2 pointer-events-none" />
        <div className="absolute -bottom-12 left-1/3 w-80 h-80 rounded-full bg-sky-100/30 blur-3xl animate-bubble-3 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-indigo-50/40 blur-2xl animate-bubble-1 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Image Frame with Floating Experience Card */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-200/90 ring-1 ring-slate-100 bg-slate-100 group">
                <img 
                  src="/clinical-heritage.jpg" 
                  alt="Lunaria Hill Hospital Clinical Team in Trauma & Critical Care" 
                  className="w-full h-[400px] sm:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = "/hero-doctors.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating 15+ Years Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 glass-card p-4 sm:p-5 rounded-xl shadow-xl border border-white/80 animate-fade-in">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white shadow-md shadow-primary/30">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-extrabold text-slate-900 text-lg font-sans">15+ Years</p>
                    <p className="text-xs text-slate-500 font-medium">Healthcare Excellence</p>
                  </div>
                </div>
              </div>

              {/* Patient Trust Tag */}
              <div className="absolute -top-4 -left-4 glass-card px-3.5 py-1.5 rounded-full shadow-md text-xs font-semibold text-slate-800 flex items-center gap-1.5 border border-slate-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Zero Complication Records</span>
              </div>
            </div>
            
            {/* Text Information */}
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3.5 border border-primary/20">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                Trusted Clinical Heritage
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4 font-sans">
                A Recognized Leader in Exceptional Healthcare
              </h2>
              <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed font-sans">
                At Lunaria Hill Hospital, we combine compassionate care with cutting-edge medical technology. Our approach centers on providing personalized healthcare experiences that address the unique needs of each patient.
              </p>
              
              <div className="space-y-1.5 mb-6 font-sans">
                <div className="flex items-start gap-3 py-1.5 px-2 rounded-xl hover:bg-slate-50/80 transition-colors">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base mb-0.5">Experienced Medical Professionals</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Our talented team of doctors and specialists are committed to your health and well-being.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 py-1.5 px-2 rounded-xl hover:bg-slate-50/80 transition-colors">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base mb-0.5">Advanced Medical Technology</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">We utilize the latest medical equipment and techniques to deliver exceptional care.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 py-1.5 px-2 rounded-xl hover:bg-slate-50/80 transition-colors">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base mb-0.5">Patient-Centered Approach</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Your comfort, dignity, and health are our top priorities throughout your care journey.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link to="/about">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg px-7 py-3 text-base shadow-sm transition-all hover:shadow-md">
                    Learn More About Us
                  </Button>
                </Link>
                <Link to="/doctors">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 font-semibold rounded-lg px-7 py-3 text-base flex items-center gap-2 transition-all">
                    Our Doctors
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* 5. Department Cards - Choose Department (Icon-Centric Specialized Cards) */}
      <section className="py-20 bg-gray-50/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold tracking-wider uppercase mb-3">
              Specialized Centers of Excellence
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4 font-sans">Choose Department</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              State-of-the-art specialty wings led by board-certified department heads and multidisciplinary clinicians.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
            {[
              { 
                name: "Cardiology", 
                icon: HeartPulse, 
                desc: "ECG, catheterization lab & complex coronary interventions",
                specialists: "8 Doctors",
              },
              { 
                name: "Neurology", 
                icon: Brain, 
                desc: "Brain, spine surgery & stroke trauma care center",
                specialists: "6 Doctors",
              },
              { 
                name: "Medicine", 
                icon: Stethoscope, 
                desc: "Internal medicine, chronic illness & acute preventive care",
                specialists: "11 Doctors",
              },
              { 
                name: "Pediatrics", 
                icon: Baby, 
                desc: "Neonatal ICU (NICU), immunizations & child healthcare",
                specialists: "10 Doctors",
              },
              { 
                name: "Orthopedics", 
                icon: Bone, 
                desc: "Robotic joint replacement, sports injury & spine therapy",
                specialists: "9 Doctors",
              },
              { 
                name: "Surgery", 
                icon: Activity, 
                desc: "Minimally invasive laparoscopic & precision robotic suites",
                specialists: "12 Doctors",
              },
            ].map((dept, idx) => (
              <div 
                key={idx} 
                className="relative bg-gradient-to-b from-[#02316B]/[0.06] via-[#02316B]/[0.025] to-white rounded-2xl border border-[#02316B]/15 shadow-xs hover:shadow-xl hover:border-primary/50 hover:-translate-y-1.5 transition-all duration-300 p-5 group flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle top primary highlight on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Department Icon Header & Specialist Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-[#02316B]/15 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                      <dept.icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="text-[11px] font-semibold text-primary bg-white/90 border border-[#02316B]/15 group-hover:bg-primary group-hover:text-white transition-colors px-2.5 py-1 rounded-full shadow-2xs">
                      {dept.specialists}
                    </span>
                  </div>

                  <div className="text-left">
                    <h3 className="font-bold text-base text-gray-900 group-hover:text-primary transition-colors mb-1.5 font-sans">
                      {dept.name}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed font-sans line-clamp-3">
                      {dept.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-3.5 mt-4 border-t border-[#02316B]/10">
                  <Link to={`/doctors?department=${encodeURIComponent(dept.name)}`}>
                    <span className="text-xs font-semibold text-primary hover:text-secondary inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Explore Doctors <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Highest Quality Care Section (Upgraded with Surgical Theater Image & Live Telemetry) */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3.5 border border-primary/20">
                <Shield className="w-3.5 h-3.5 text-primary" />
                Highest Quality Care
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3.5 font-sans">
                Advanced Solutions for Complex Medical Needs
              </h2>
              <p className="text-slate-600 mb-5 leading-relaxed font-sans text-base">
                Our super-specialists solve complex and rare medical conditions using research-backed protocols, 
                minimally invasive precision tools, and collaborative multi-specialty tumor boards.
              </p>
              
              <div className="space-y-2 mb-6 font-sans">
                <div className="flex items-center gap-3 text-slate-800 text-sm font-medium py-1.5 px-2 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="bg-primary/10 text-primary p-1.5 rounded-full flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>Multidisciplinary medical boards for complex diagnostics</span>
                </div>
                <div className="flex items-center gap-3 text-slate-800 text-sm font-medium py-1.5 px-2 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="bg-primary/10 text-primary p-1.5 rounded-full flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>Real-time digital patient monitoring & predictive AI tools</span>
                </div>
                <div className="flex items-center gap-3 text-slate-800 text-sm font-medium py-1.5 px-2 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="bg-primary/10 text-primary p-1.5 rounded-full flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>Faster recovery times with minimally invasive robotic surgery</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg px-7 py-3 text-base shadow-sm hover:shadow-md transition-all"
                  onClick={() => handleBookAppointment()}
                >
                  Consult a Specialist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="md:col-span-6 lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-200/90 ring-1 ring-slate-100 bg-slate-100 group">
                <img
                  src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="State-of-the-Art Surgical Theater at Lunaria Hill Hospital"
                  className="w-full h-[380px] sm:h-[430px] object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = "/clinic-overview.jpg";
                  }}
                />
                
                {/* Floating Top Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>JCI & NABH Gold Standard</span>
                </div>

                {/* Floating Stat Pill on Image */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs glass-card p-4 rounded-xl shadow-lg border border-white/80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center font-bold">
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 ring-1 ring-white/10 bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Innovative Healthcare Research and Tech" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              </div>

              {/* Floating Counter Card */}
              <div className="absolute -bottom-6 -left-6 bg-slate-900/95 backdrop-blur-md rounded-xl p-5 shadow-2xl border border-slate-700/80 w-72">
                <div className="flex items-center gap-3.5 mb-2">
                  <div className="bg-blue-600/20 text-blue-400 p-2.5 rounded-lg border border-blue-500/30">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-2xl font-sans">8,500+</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight font-sans leading-tight">
                Pioneering Medical Excellence with Compassionate Touch
              </h2>
              <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed font-sans">
                We combine traditional compassionate medicine with high-tech diagnostic advancements to ensure precision treatment, minimal recovery times, and superior long-term clinical outcomes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 font-sans">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-blue-500/40 transition-colors">
                  <div className="bg-blue-600/20 text-blue-400 rounded-lg w-10 h-10 flex items-center justify-center mb-3">
                    <Shield className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold mb-1">Evidence-Based Medicine</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">All procedures and prescriptions are validated by rigorous peer-reviewed clinical research.</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-blue-500/40 transition-colors">
                  <div className="bg-blue-600/20 text-blue-400 rounded-lg w-10 h-10 flex items-center justify-center mb-3">
                    <Zap className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold mb-1">Advanced Technology</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">Equipped with robotic surgical arms, ultra-clear imaging, and automated ICUs.</p>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-white text-slate-900 hover:bg-slate-100 font-semibold rounded-lg px-7 py-3 text-base shadow-sm"
                onClick={() => handleBookAppointment()}
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Total Healthcare Solutions Section (Modern Clinical Ecosystem Redesign) */}
      <section className="py-20 lg:py-24 bg-slate-50/80 px-4 relative overflow-hidden">
        {/* Subtle decorative background blurs */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Heading */}
          <div className="text-center mb-14 px-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3.5 border border-primary/20">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Comprehensive Clinical Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight font-sans mb-3">
              Total Health Care Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg font-sans leading-relaxed">
              Integrated specialty care, advanced diagnostics, and dedicated patient services engineered for clinical excellence.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid lg:grid-cols-3 gap-7 items-stretch">
            
            {/* Left: 6 Modern Elevated Feature Cards */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
              {[
                {
                  icon: Stethoscope,
                  title: "Board-Certified Faculty",
                  desc: "Over 150+ internationally trained department heads, super-specialists, and diagnostic clinicians providing multidisciplinary care.",
                  badge: "150+ Specialists",
                  highlight: "Multidisciplinary Care"
                },
                {
                  icon: Microscope,
                  title: "High-Precision Diagnostics",
                  desc: "Ultra-high-definition 3T MRI, low-dose dual-source CT scans, and fully automated molecular pathology laboratories.",
                  badge: "3T MRI & AI Labs",
                  highlight: "Same-Day Lab Reports"
                },
                {
                  icon: Hospital,
                  title: "Robotic Operating Suites",
                  desc: "Class-100 laminar airflow theaters with AI-guided laparoscopic arms, ensuring micro-precision and zero-infection standards.",
                  badge: "JCI & NABH Gold",
                  highlight: "Zero-Infection Protocol"
                },
                {
                  icon: Syringe,
                  title: "Specialized Clinical Wings",
                  desc: "Over 40 focused sub-specialty clinics from interventional cardiology to orthopedic reconstructive medicine.",
                  badge: "40+ Clinical Wings",
                  highlight: "Comprehensive OPD"
                },
                {
                  icon: MessageCircleHeart,
                  title: "Patient Concierge & Care",
                  desc: "Personalized post-operative recovery coaching, confidential counseling, and transparent family health roadmaps.",
                  badge: "100% Confidential",
                  highlight: "Dedicated Attendant"
                },
                {
                  icon: Ambulance,
                  title: "Emergency & Trauma Triage",
                  desc: "Level-1 emergency department with mobile ICU ambulances and sub-3-minute acute trauma response 24 hours a day.",
                  badge: "24/7 Rapid Triage",
                  highlight: "Sub-3-Min Response"
                }
              ].map((item, index) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={index}
                    className="relative bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
                  >
                    {/* Top gradient highlight on hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div>
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/15 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-xs">
                          <IconComp className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-primary/10 group-hover:text-primary transition-colors border border-slate-200/70">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 font-sans group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans line-clamp-3">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-3.5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-primary group-hover:text-secondary transition-colors">
                      <span className="inline-flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        {item.highlight}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Master Schedule & Live Opening Hours Card */}
            <div className="bg-gradient-to-br from-[#02316B] via-[#012552] to-[#005C72] text-white p-7 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between border border-white/10 relative overflow-hidden">
              {/* Background ambient accents */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                {/* Live Open Status Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30 mb-5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  <span>Currently Open • Walk-ins Welcome</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-2 font-sans">Hospital Clinical Hours</h3>
                <p className="text-xs sm:text-sm mb-6 leading-relaxed text-blue-100 font-sans">
                  Outpatient consultations, routine diagnostic tests, and specialist clinic timings.
                </p>

                {/* Timetable Rows */}
                <div className="space-y-2 text-xs sm:text-sm border-t border-white/20 pt-4">
                  <div className="flex justify-between items-center py-2 px-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="text-blue-100 font-medium">Mon – Wed</span>
                    <span className="font-bold text-white">9:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="text-blue-100 font-medium">Thursday</span>
                    <span className="font-bold text-white">9:00 AM – 6:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="text-blue-100 font-medium">Friday</span>
                    <span className="font-bold text-white">9:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="text-blue-100 font-medium">Saturday</span>
                    <span className="font-bold text-white">9:00 AM – 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 rounded-xl bg-emerald-500/20 border border-emerald-400/30">
                    <span className="text-emerald-200 font-semibold">Sunday & Holidays</span>
                    <span className="font-bold text-emerald-300">24/7 Emergency & ICU</span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action: Personalized Health Plan */}
              <div className="relative z-10 mt-7 pt-5 border-t border-white/20">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3.5 border border-white/15 mb-4">
                  <h4 className="font-bold mb-1 text-xs sm:text-sm font-sans text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    Personal Health Consultation
                  </h4>
                  <p className="text-xs text-blue-100 leading-relaxed font-sans">
                    Get customized wellness packages tailored to your age, clinical history, and preventive goals.
                  </p>
                </div>

                <Button 
                  onClick={() => handleBookAppointment()}
                  className="w-full bg-white text-[#02316B] hover:bg-slate-100 font-bold py-3 rounded-xl shadow-lg text-xs sm:text-sm flex items-center justify-center gap-2 transition-all hover:shadow-xl hover:scale-[1.01]"
                >
                  <Calendar className="w-4 h-4 text-[#02316B]" />
                  <span>Book Consultation Plan</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Testimonials Section */}
      <TestimonialsSection />

      {/* 10. Qualified Doctors & Medical Specialists (Dynamic Specialty Filter + Real Medical Portraits) */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-100">
              <Stethoscope className="w-3.5 h-3.5 text-blue-600" />
              World-Class Faculty
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight font-sans mb-4">
              Meet Our Medical Specialists
            </h2>
            <p className="text-slate-600 text-base md:text-lg font-sans">
              Experienced, board-certified clinicians dedicated to providing compassionate, top-tier healthcare.
            </p>
          </div>

          {/* Dynamic Specialty Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {['All', 'Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedSpecialtyTab(tab)}
                className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedSpecialtyTab === tab
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                }`}
              >
                {tab === 'All' ? 'All Specialists' : tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredDoctors.map((doctor, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl overflow-hidden border-2 border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Photo container height and object-top alignment for full head and hair visibility */}
                  <div className="relative overflow-hidden h-80 bg-slate-100">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "/doctor-avatar.svg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent"></div>
                    
                    {/* Rating Pill */}
                    <div className="absolute top-3 right-3 glass-card px-2.5 py-1 rounded-full text-xs font-bold text-slate-800 flex items-center gap-1 shadow-sm">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <span>{doctor.rating}</span>
                    </div>

                    {/* Department Tag */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-600/90 text-white backdrop-blur-sm shadow-xs">
                        {doctor.department}
                      </span>
                    </div>

                    {/* Next Available Slot Pill */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="flex items-center justify-between text-[11px] bg-slate-950/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                        <span className="text-slate-300 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-emerald-400" />
                          Next Slot:
                        </span>
                        <span className="font-semibold text-emerald-400">{doctor.nextSlot}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 text-center font-sans">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {doctor.name}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 mb-2">{doctor.specialty}</p>
                    <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500">
                      <span>{doctor.experience}</span>
                      <span>•</span>
                      <span>{doctor.reviews}</span>
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5">
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold py-2.5 shadow-sm transition-all"
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
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-8 py-3.5 shadow-sm transition-all hover:shadow-md">
                View All Medical Specialists
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 11. Modern Medicine & High-Tech Diagnostics (Dynamic Interactive Tech Tabs) */}
      <section className="py-20 bg-gray-50/80">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-100">
                <Microscope className="w-3.5 h-3.5 text-blue-600" />
                Medical Innovation
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4 font-sans">
                Better Technologies for Better Healthcare
              </h2>
              <p className="text-gray-600 mb-8 text-base sm:text-lg leading-relaxed font-sans">
                We've invested in the latest medical technologies to provide you with more accurate diagnoses, less invasive procedures, and faster recovery times.
              </p>
              
              {/* Interactive Technology Selection Cards */}
              <div className="space-y-4 mb-8 font-sans">
                {[
                  {
                    key: 'imaging' as const,
                    title: "Advanced 3D Imaging",
                    desc: "High-resolution 3T MRI & low-dose CT imaging for precise diagnosis."
                  },
                  {
                    key: 'robotic' as const,
                    title: "Robotic Surgery Suites",
                    desc: "Minimally invasive micro-dexterity procedures with 3x faster recovery."
                  },
                  {
                    key: 'records' as const,
                    title: "Encrypted Cloud Health Records",
                    desc: "Instant, secure electronic health records for seamless care coordination."
                  }
                ].map((item) => (
                  <div
                    key={item.key}
                    onClick={() => setActiveTechTab(item.key)}
                    className={`cursor-pointer p-4 rounded-xl border-2 transition-all duration-200 flex items-start gap-3.5 ${
                      activeTechTab === item.key
                        ? 'bg-white border-blue-600 shadow-md ring-2 ring-blue-500/10'
                        : 'bg-white/60 border-slate-200/90 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <CheckCircle2 className={`h-6 w-6 flex-shrink-0 mt-0.5 ${
                      activeTechTab === item.key ? 'text-blue-600' : 'text-slate-400'
                    }`} />
                    <div>
                      <h3 className={`font-semibold text-base mb-1 ${
                        activeTechTab === item.key ? 'text-blue-700' : 'text-gray-900'
                      }`}>
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link to="/services">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-7 py-3 text-base shadow-sm flex items-center gap-2 hover:shadow-md transition-all">
                  Explore Our Technology
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            {/* Dynamic Technology Image Display */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-200/90 bg-slate-100 min-h-[420px] group">
                <img 
                  src={techDetails[activeTechTab].image} 
                  alt={techDetails[activeTechTab].title} 
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = "/medical-technology.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                
                {/* Dynamic Content Overlay */}
                <div className="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-white/80 shadow-md">
                  <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-0.5">Active Protocol</p>
                  <p className="text-sm font-extrabold text-slate-900">{techDetails[activeTechTab].title}</p>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-blue-600 text-white p-5 rounded-xl shadow-xl font-sans animate-fade-in">
                <div className="flex items-center gap-3.5">
                  <Shield className="h-10 w-10 text-white flex-shrink-0" />
                  <div>
                    <p className="font-extrabold text-2xl leading-none mb-1">{techDetails[activeTechTab].accuracy}</p>
                    <p className="text-xs text-white/90 font-medium">{techDetails[activeTechTab].metricLabel}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 12. News & Health Blog Section (With Eye-Catching Context-Accurate Photography) */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-100">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Latest Articles & Insights
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight font-sans mb-4">
              Health Insights & Hospital Updates
            </h2>
            <p className="text-slate-600 text-base md:text-lg font-sans">
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
                image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Mental Wellness & Preventive Stress Care in Daily Life",
                excerpt: "Expert insights on recognizing burnout symptoms early and utilizing professional therapeutic counseling.",
                date: "June 24, 2024",
                category: "Wellness",
                readTime: "3 min read",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((article, idx) => (
              <Card 
                key={idx} 
                className="overflow-hidden border-2 border-slate-200/90 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-bold text-blue-700 shadow-sm border border-slate-200">
                      {article.category}
                    </div>
                  </div>
                  <CardContent className="p-6 font-sans">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                  </CardContent>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <Link to="/blog">
                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-semibold text-xs p-0 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
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
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-8 py-3.5 shadow-sm transition-all hover:shadow-md">
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
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
          }}
        />

        <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6 border border-blue-500/30">
            <Heart className="h-3.5 w-3.5 fill-blue-400 text-blue-400" />
            Your Health Is Our Priority
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6 font-sans">
            Take the First Step Toward Better Health Today
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed font-sans">
            Don't delay your medical care. Whether you require a routine checkup or specialized consultation, 
            our renowned specialists are here to guide you with clinical excellence and warmth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-8 py-4 h-auto shadow-xl text-base transition-all hover:shadow-2xl hover:scale-102"
              onClick={() => handleBookAppointment()}
            >
              <Calendar className="mr-2 h-5 w-5 text-white" />
              Book Instant Appointment
            </Button>
            
            <a 
              href="tel:18001234560"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-lg bg-slate-900/80 border border-slate-700 hover:border-slate-500 text-white transition-all font-sans"
            >
              <Phone className="h-4 w-4 text-blue-400" />
              <div className="text-left text-xs">
                <span className="block text-slate-400">Emergency 24/7 Hotline</span>
                <span className="font-bold text-sm text-blue-300">1-800-123-4560</span>
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
