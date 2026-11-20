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
  Zap, Brain, Thermometer, Baby, Eye, Bone, Microscope, Hospital, 
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
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Image Frame with Floating Experience Card */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-200/90 ring-1 ring-slate-100 bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Lunaria Hill Hospital Team and Facilities" 
                  className="w-full h-[400px] sm:h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = "/hero-doctors.jpg";
                  }}
                />
              </div>

              {/* Floating 15+ Years Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 glass-card p-4 sm:p-5 rounded-xl shadow-xl border border-white/80">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-md shadow-blue-500/30">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-extrabold text-slate-900 text-lg font-sans">15+ Years</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6 font-sans">
                A Recognized Leader in Exceptional Healthcare
              </h2>
              <p className="text-gray-600 mb-8 text-base sm:text-lg leading-relaxed font-sans">
                At Lunaria Hill Hospital, we combine compassionate care with cutting-edge medical technology. Our approach centers on providing personalized healthcare experiences that address the unique needs of each patient.
              </p>
              
              <div className="space-y-6 mb-8 font-sans">
                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base mb-1">Experienced Medical Professionals</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Our talented team of doctors and specialists are committed to your health and well-being.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base mb-1">Advanced Medical Technology</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">We utilize the latest medical equipment and techniques to deliver exceptional care.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base mb-1">Patient-Centered Approach</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Your comfort, dignity, and health are our top priorities throughout your care journey.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link to="/about">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-7 py-3 text-base shadow-sm">
                    Learn More About Us
                  </Button>
                </Link>
                <Link to="/doctors">
                  <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg px-7 py-3 text-base flex items-center gap-2">
                    Our Doctors
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* 5. Department Cards - Choose Department */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              Our Departments
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4 font-sans">Choose Department</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized departments to address all your healthcare needs with expert care
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Cardiology", icon: Heart, desc: "Heart care" },
              { name: "Neurology", icon: Brain, desc: "Brain & nerve care" },
              { name: "Pulmonology", icon: Thermometer, desc: "Respiratory care" },
              { name: "Pediatrics", icon: Baby, desc: "Child healthcare" },
              { name: "Ophthalmology", icon: Eye, desc: "Eye care" },
              { name: "Orthopedics", icon: Bone, desc: "Bone & joint care" },
            ].map((dept, idx) => (
              <div key={idx} className="bg-white rounded-xl border-2 border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-500 transition-all p-6 text-center group flex flex-col justify-between">
                <div>
                  <div className="bg-blue-600 rounded-xl h-14 w-14 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors shadow-sm">
                    <dept.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold text-base text-gray-900 mb-1">{dept.name}</h3>
                  <p className="text-gray-500 text-xs mb-4 leading-relaxed">{dept.desc}</p>
                </div>
                <Link to="/departments">
                  <Button variant="link" className="text-blue-600 p-0 hover:text-blue-700 font-semibold text-sm">
                    Learn More →
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Highest Quality Care Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-100">
                <Shield className="w-3.5 h-3.5 text-blue-600" />
                Highest Quality Care
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6 font-sans">
                Advanced Solutions for Complex Medical Needs
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed font-sans text-base">
                Our super-specialists solve complex and rare medical conditions using research-backed protocols, 
                minimally invasive precision tools, and collaborative multi-specialty tumor boards.
              </p>
              
              <div className="space-y-4 mb-8 font-sans">
                <div className="flex items-center gap-3 text-slate-800 text-sm font-medium">
                  <div className="bg-blue-100 text-blue-700 p-1.5 rounded-full flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>Multidisciplinary medical boards for complex diagnostics</span>
                </div>
                <div className="flex items-center gap-3 text-slate-800 text-sm font-medium">
                  <div className="bg-blue-100 text-blue-700 p-1.5 rounded-full flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>Real-time digital patient monitoring & predictive AI tools</span>
                </div>
                <div className="flex items-center gap-3 text-slate-800 text-sm font-medium">
                  <div className="bg-blue-100 text-blue-700 p-1.5 rounded-full flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>Faster recovery times with minimally invasive robotic surgery</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-7 py-3 text-base shadow-sm"
                  onClick={() => handleBookAppointment()}
                >
                  Consult a Specialist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="md:col-span-6 lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-200/90 ring-1 ring-slate-100 bg-slate-100">
                <img
                  src="/clinic-overview.jpg"
                  alt="Modern Lunaria Hill Hospital Clinic Overview"
                  className="w-full h-[380px] sm:h-[420px] object-cover hover:scale-102 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
                  }}
                />
                {/* Floating Stat Pill on Image */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs glass-card p-4 rounded-xl shadow-lg border border-white/80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
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

      {/* 8. Total Healthcare Solutions Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12 px-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight font-sans">Total Health Care Solutions</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg font-sans">
              Offering personalized and reliable care to support your health and wellness every day.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            
            {/* Left: Feature Cards Grid with connected borders */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 rounded-xl overflow-hidden border-2 border-slate-200/90 bg-slate-200 gap-px shadow-sm">
              {[
                {
                  icon: <Stethoscope className="text-blue-600 w-10 h-10 mb-3" />,
                  title: "Top Level Doctors",
                  desc: "Expert physicians offering specialized and primary care."
                },
                {
                  icon: <Microscope className="text-blue-600 w-10 h-10 mb-3" />,
                  title: "Modern Equipment",
                  desc: "Advanced diagnostic tools for accurate treatment."
                },
                {
                  icon: <Hospital className="text-blue-600 w-10 h-10 mb-3" />,
                  title: "Qualified Facilities",
                  desc: "State-of-the-art infrastructure and hygiene."
                },
                {
                  icon: <Syringe className="text-blue-600 w-10 h-10 mb-3" />,
                  title: "Professional Services",
                  desc: "Routine and specialized treatments delivered with care."
                },
                {
                  icon: <MessageCircleHeart className="text-blue-600 w-10 h-10 mb-3" />,
                  title: "Medical Counseling",
                  desc: "Personalized mental and physical wellness support."
                },
                {
                  icon: <Ambulance className="text-blue-600 w-10 h-10 mb-3" />,
                  title: "Emergency Help",
                  desc: "24/7 medical emergency and ambulance assistance."
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-7 sm:p-8 flex flex-col items-center text-center hover:bg-blue-50/70 transition-colors"
                >
                  {item.icon}
                  <h4 className="text-base font-bold text-gray-800 mb-1.5 font-sans">{item.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Right: Opening Hours Box */}
            <div className="bg-blue-600 text-white p-8 rounded-xl shadow-md flex flex-col justify-between font-sans">
              <div>
                <h3 className="text-lg font-bold mb-3">Opening Hours:</h3>
                <p className="text-sm mb-6 leading-relaxed text-white/95">
                  We Are Committed to Serving You with the Utmost Care and Dedication—Your Health Is Our Priority.
                </p>
                <ul className="text-sm border-t border-white/20 pt-4 space-y-3">
                  <li className="flex justify-between">
                    <span>Mon – Wed</span>
                    <span className="font-semibold">9:00 AM - 7:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Thursday</span>
                    <span className="font-semibold">9:00 AM - 6:30 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sun - Sun</span>
                    <span className="font-semibold">Closed</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 border-t border-white/20 pt-4">
                <h4 className="font-semibold mb-2 text-base">Need a personal health plan?</h4>
                <p className="text-sm text-white/90 leading-relaxed">
                  Get a customized health plan tailored to your needs. Our experts are ready to help you achieve your wellness goals.
                </p>
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
                className="bg-white rounded-2xl overflow-hidden border-2 border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Photo container height and object-top alignment to prevent cutting doctor head & hair */}
                  <div className="relative overflow-hidden h-80 bg-slate-100">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-75 group-hover:opacity-85 transition-opacity"></div>
                    
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

                  <div className="p-5 text-center font-sans">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {doctor.name}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 mb-3">{doctor.specialty}</p>
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-600 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Available for Consultation
                    </span>
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
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-8 py-3.5 shadow-sm transition-all">
                View All Medical Specialists
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 11. Modern Medicine & High-Tech Diagnostics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6 font-sans">
                Better Technologies for Better Healthcare
              </h2>
              <p className="text-gray-600 mb-8 text-base sm:text-lg leading-relaxed font-sans">
                We've invested in the latest medical technologies to provide you with more accurate diagnoses, less invasive procedures, and faster recovery times.
              </p>
              
              <div className="space-y-6 mb-8 font-sans">
                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base mb-1">Advanced Imaging</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">High-resolution imaging for precise diagnosis</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base mb-1">Robotic Surgery</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Minimally invasive procedures with faster recovery</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base mb-1">Digital Records</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Secure electronic health records for better coordination</p>
                  </div>
                </div>
              </div>
              
              <Link to="/services">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-7 py-3 text-base shadow-sm flex items-center gap-2">
                  Explore Our Technology
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-slate-200/90 bg-slate-100 min-h-[380px]">
                <img 
                  src="/medical-technology.jpg" 
                  alt="Modern Medical Technology" 
                  className="w-full h-[400px] object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
                  }}
                />
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-blue-600 text-white p-5 rounded-xl shadow-xl font-sans">
                <div className="flex items-center gap-3.5">
                  <Shield className="h-10 w-10 text-white flex-shrink-0" />
                  <div>
                    <p className="font-extrabold text-2xl leading-none mb-1">99.7%</p>
                    <p className="text-xs text-white/90 font-medium">Diagnostic Accuracy</p>
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
                image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((article, idx) => (
              <Card 
                key={idx} 
                className="overflow-hidden border-2 border-slate-200/90 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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
                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-semibold text-xs p-0 flex items-center gap-1">
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
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-8 py-3.5 shadow-sm transition-all">
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
            backgroundImage: "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')",
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
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-8 py-4 h-auto shadow-xl text-base transition-all"
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
