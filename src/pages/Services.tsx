import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { AppointmentForm } from '@/components/AppointmentForm';
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, Ambulance, Phone, Calendar, 
  Microscope, Pill, Syringe, HeartPulse, Monitor, 
  ShieldCheck, Clock, Building2, Sparkles, CheckCircle2, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesList = [
  {
    id: 1,
    title: "Emergency & Trauma Services",
    description: "24/7 level 1 critical emergency care equipped with rapid trauma triage and resus suites.",
    icon: Stethoscope,
    color: "red",
    badge: "24/7 Active",
    features: [
      "Round-the-clock availability",
      "Critical Care Specialists",
      "Immediate CT & Cath Lab",
      "< 5 min Average Triage"
    ]
  },
  {
    id: 2,
    title: "Cardiac Life Support Ambulance",
    description: "Fast-dispatch mobile intensive care ambulances staffed by certified emergency paramedics.",
    icon: Ambulance,
    color: "blue",
    badge: "GPS Dispatch",
    features: [
      "Live GPS Fleet Tracking",
      "Defibrillator & Oxygen onboard",
      "Experienced Paramedics",
      "Direct Hospital Handover"
    ]
  },
  {
    id: 3,
    title: "Specialist Telemedicine",
    description: "Encrypted HD virtual consultations with hospital consultants from anywhere in the world.",
    icon: Monitor,
    color: "emerald",
    badge: "Virtual Care",
    features: [
      "No waiting room delays",
      "Digital e-Prescriptions",
      "Follow-up reviews",
      "Encrypted medical records"
    ]
  },
  {
    id: 4,
    title: "24/7 Digital Pharmacy",
    description: "Fully stocked hospital pharmacy dispensing genuine medicines, cold-chain biologics, and implants.",
    icon: Pill,
    color: "purple",
    badge: "24/7 Open",
    features: [
      "Licensed Pharmacists",
      "Doorstep Home Delivery",
      "Medication counseling",
      "Automated refills"
    ]
  },
  {
    id: 5,
    title: "Precision Pathology & Lab Tests",
    description: "Automated high-throughput diagnostic laboratory offering biochemistry, hematology, and genetic tests.",
    icon: Microscope,
    color: "amber",
    badge: "Automated Lab",
    features: [
      "Same-day digital reports",
      "Home sample collection",
      "NABL accredited testing",
      "Zero-contamination protocols"
    ]
  },
  {
    id: 6,
    title: "Modular Operation Theaters",
    description: "Ultra-sterile surgical theaters equipped with robotic arms, 4K laparoscopy, and C-arms.",
    icon: Syringe,
    color: "teal",
    badge: "Robotic Suites",
    features: [
      "Laminar flow air filtration",
      "Minimally invasive tools",
      "Dedicated anesthesia team",
      "Modern post-op recovery"
    ]
  },
  {
    id: 7,
    title: "Executive Health Checkups",
    description: "Comprehensive preventive checkup packages designed for every age group and lifestyle.",
    icon: HeartPulse,
    color: "rose",
    badge: "Preventive Care",
    features: [
      "Comprehensive blood panels",
      "Full cardiac stress testing",
      "One-on-one doctor debrief",
      "Diet & wellness plans"
    ]
  },
  {
    id: 8,
    title: "Cashless Insurance Desk",
    description: "Seamless on-spot approval and processing with all major domestic and international health insurers.",
    icon: ShieldCheck,
    color: "indigo",
    badge: "Instant Approval",
    features: [
      "Cashless hospitalization",
      "Dedicated claims coordinator",
      "Zero hassle paperwork",
      "Corporate insurance support"
    ]
  },
  {
    id: 9,
    title: "Physical & Neuro Rehabilitation",
    description: "Tailored physiotherapy, occupational rehabilitation, and speech therapy for restorative recovery.",
    icon: Building2,
    color: "sky",
    badge: "Holistic Rehab",
    features: [
      "Post-stroke motor recovery",
      "Orthopedic joint rehab",
      "Ergonomic therapy",
      "Personalized milestones"
    ]
  }
];

const ServiceCard = ({ service, onBookAppointment }: { service: any, onBookAppointment: () => void }) => {
  const IconComponent = service.icon;
  
  return (
    <div className="bg-white rounded-2xl p-7 border-2 border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-xs">
            <IconComponent className="h-7 w-7" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
            {service.badge}
          </span>
        </div>

        <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors font-display">
          {service.title}
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
          {service.features.map((feature: string, index: number) => (
            <div key={index} className="flex items-center gap-2 text-xs text-slate-800 font-medium">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <Button
        onClick={onBookAppointment}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold py-2.5 shadow-sm shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
      >
        <Calendar className="h-4 w-4" />
        Book Service / Consultation
      </Button>
    </div>
  );
};

const Services = () => {
  const [appointmentDialogOpen, setAppointmentDialogOpen] = useState(false);

  const handleBookAppointment = () => {
    setAppointmentDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navigation onAppointmentClick={handleBookAppointment} />
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-950 via-sky-950 to-slate-900 text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-6 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            Comprehensive Clinical Care
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display mb-6">
            Our Healthcare Services
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
            Advanced medical services delivered under one roof—from round-the-clock emergency dispatch 
            to high-precision robotic operations and rehabilitative therapies.
          </p>
        </div>
      </section>
      
      {/* Emergency Strip */}
      <section className="bg-gradient-to-r from-red-600 to-rose-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 animate-bounce" />
            <div>
              <span className="font-bold text-sm">Need Emergency Assistance?</span>
              <span className="text-xs text-white/80 ml-2 hidden sm:inline">24/7 Trauma line active now</span>
            </div>
          </div>
          <a 
            href="tel:18001234560"
            className="bg-white text-red-600 hover:bg-red-50 font-bold px-4 py-1.5 rounded-full text-xs shadow-sm transition-colors flex items-center gap-1.5"
          >
            <span>Dial 1-800-123-4560</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
              World-Class Clinical Capabilities
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Explore our wide range of outpatient, inpatient, diagnostic, and emergency medical services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {servicesList.map(service => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onBookAppointment={handleBookAppointment}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900 text-white relative">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 font-display">
            Need a Tailored Health Package or Consultation?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
            Our multi-disciplinary team is ready to provide you with personalized clinical care tailored to your specific condition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-full px-8 font-semibold shadow-lg shadow-sky-500/25"
              onClick={handleBookAppointment}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book an Appointment
            </Button>
            <Link to="/contact">
              <Button 
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-white/20 text-slate-900 bg-white hover:bg-slate-100 font-semibold"
              >
                <Phone className="mr-2 h-5 w-5 text-sky-600" />
                Contact Helpdesk
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* Appointment Dialog */}
      <AppointmentForm 
        open={appointmentDialogOpen} 
        onOpenChange={setAppointmentDialogOpen} 
      />
    </div>
  );
};

export default Services;
