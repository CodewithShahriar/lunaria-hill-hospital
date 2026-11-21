import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { AppointmentForm } from '@/components/AppointmentForm';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MapPin, Phone, Mail, Clock, Sparkles, Send, 
  MessageCircle, HelpCircle, CheckCircle2, Ambulance, 
  Calendar, ShieldCheck, Stethoscope, HeartPulse, Brain, 
  Baby, Pill, FileText, ArrowRight, ExternalLink, MessageSquare,
  Compass, Car, Train, Accessibility, ChevronDown
} from 'lucide-react';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from "@/components/ui/form";
import { useToast } from '@/hooks/use-toast';
import { ScrollReveal, ScrollTextReveal } from '@/components/ScrollReveal';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  department: z.string().min(1, { message: "Please select a department." }),
  urgency: z.string().default("normal"),
  subject: z.string().min(4, { message: "Subject must be at least 4 characters." }),
  message: z.string().min(15, { message: "Message must be at least 15 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const mainContactChannels = [
  {
    icon: Ambulance,
    title: "24/7 Emergency & Trauma",
    subtitle: "Immediate critical care & ambulance dispatch",
    contact: "1-800-123-4560",
    actionLabel: "Call Emergency Bay",
    actionHref: "tel:18001234560",
    badge: "Sub-3 Min Response",
    badgeColor: "bg-rose-500/10 text-rose-600 border-rose-500/20",
    cardBg: "bg-gradient-to-br from-rose-50/80 via-white to-rose-50/30 border-rose-200/80 hover:border-rose-500",
    iconBg: "bg-gradient-to-tr from-rose-600 to-red-500 text-white shadow-rose-500/30",
    accentColor: "text-rose-600"
  },
  {
    icon: Calendar,
    title: "Outpatient & Appointments",
    subtitle: "Book specialized doctor consultations",
    contact: "(123) 456-7890",
    actionLabel: "Schedule Clinic Visit",
    actionHref: "#book-dialog",
    badge: "Same-Day Priority",
    badgeColor: "bg-primary/10 text-primary border-primary/20",
    cardBg: "bg-gradient-to-br from-primary/5 via-white to-secondary/5 border-primary/25 hover:border-primary",
    iconBg: "bg-gradient-to-tr from-[#02316B] to-[#005C72] text-white shadow-primary/30",
    accentColor: "text-primary"
  },
  {
    icon: ShieldCheck,
    title: "Insurance & Cashless Desk",
    subtitle: "TPA approvals, claims & corporate billing",
    contact: "insurance@lunariahill.com",
    actionLabel: "Verify Policy Coverage",
    actionHref: "mailto:insurance@lunariahill.com",
    badge: "45+ TPA Networks",
    badgeColor: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
    cardBg: "bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/30 border-emerald-200/80 hover:border-emerald-500",
    iconBg: "bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-emerald-500/30",
    accentColor: "text-emerald-700"
  },
  {
    icon: MapPin,
    title: "Main Campus & Navigation",
    subtitle: "Medical Pavilion, Parking P1 & Valet",
    contact: "123 Healthcare Blvd, CA 91234",
    actionLabel: "Open Google Maps",
    actionHref: "https://maps.google.com",
    badge: "Free Valet at Gate A",
    badgeColor: "bg-indigo-500/10 text-indigo-700 border-indigo-500/20",
    cardBg: "bg-gradient-to-br from-indigo-50/80 via-white to-sky-50/30 border-indigo-200/80 hover:border-indigo-500",
    iconBg: "bg-gradient-to-tr from-indigo-600 to-blue-500 text-white shadow-indigo-500/30",
    accentColor: "text-indigo-700"
  }
];

const departmentDirectLines = [
  {
    icon: HeartPulse,
    name: "Cardiology & Cath Lab",
    ext: "Ext. 101",
    directPhone: "+1 (800) 586-2741",
    hours: "24/7 On-Call",
    color: "from-red-500/10 to-rose-500/5 text-rose-700 border-rose-200",
    iconColor: "bg-rose-500 text-white"
  },
  {
    icon: Brain,
    name: "Neurology & Stroke Unit",
    ext: "Ext. 102",
    directPhone: "+1 (800) 586-2742",
    hours: "24/7 Stroke Desk",
    color: "from-purple-500/10 to-indigo-500/5 text-purple-700 border-purple-200",
    iconColor: "bg-purple-600 text-white"
  },
  {
    icon: Stethoscope,
    name: "Internal Medicine & OPD",
    ext: "Ext. 103",
    directPhone: "+1 (800) 586-2743",
    hours: "8:00 AM – 8:00 PM",
    color: "from-blue-500/10 to-sky-500/5 text-primary border-blue-200",
    iconColor: "bg-primary text-white"
  },
  {
    icon: Baby,
    name: "Pediatrics & NICU Center",
    ext: "Ext. 104",
    directPhone: "+1 (800) 586-2744",
    hours: "24/7 Neonatal Support",
    color: "from-amber-500/10 to-yellow-500/5 text-amber-800 border-amber-200",
    iconColor: "bg-amber-500 text-white"
  },
  {
    icon: Pill,
    name: "24/7 Pharmacy & Delivery",
    ext: "Ext. 105",
    directPhone: "+1 (800) 586-2745",
    hours: "Open 24 Hours",
    color: "from-emerald-500/10 to-teal-500/5 text-emerald-800 border-emerald-200",
    iconColor: "bg-emerald-600 text-white"
  },
  {
    icon: FileText,
    name: "Lab Reports & Diagnostics",
    ext: "Ext. 106",
    directPhone: "+1 (800) 586-2746",
    hours: "Same-Day Results",
    color: "from-sky-500/10 to-cyan-500/5 text-sky-800 border-sky-200",
    iconColor: "bg-[#005C72] text-white"
  }
];

const faqs = [
  {
    q: "What are the visiting hours for general wards and ICU?",
    a: "General in-patient visiting hours are 10:00 AM to 8:00 PM daily. For ICU and CCU suites, immediate family visits are held between 4:00 PM and 6:00 PM to ensure patient rest and sterilization protocols.",
    category: "Hospital Policy"
  },
  {
    q: "How can I obtain digital test reports and e-prescriptions?",
    a: "All clinical lab results, diagnostic MRI/CT scans, and doctor prescriptions are automatically uploaded to your secure Lunaria Hill Patient Portal within 2-4 hours. Certified hard copies are also issued at the Central Records Counter on Level 1.",
    category: "Diagnostic Records"
  },
  {
    q: "Which insurance providers and TPA networks do you accept?",
    a: "We offer seamless cashless hospitalization with all major global and national health providers including BlueCross, Aetna, Cigna, UnitedHealthcare, and regional TPA panels. Our Cashless Insurance Desk coordinates direct approvals 24/7.",
    category: "Insurance & Billing"
  },
  {
    q: "Is emergency ambulance service available outside the city center?",
    a: "Yes. Our mobile ICU fleet operates within a 50-mile radius with advanced life support (ALS) telemetry, real-time doctor tracking, and emergency airway equipment. Call our 24/7 hotline 1-800-123-4560 for instant dispatch.",
    category: "Emergency Triage"
  },
  {
    q: "Do you have international patient concierge and language assistance?",
    a: "Our International Patient Cell assists with medical visas, multi-lingual medical translators (Spanish, Mandarin, Arabic, Bengali, French), airport ambulance transfers, and family lodging arrangements.",
    category: "International Care"
  },
  {
    q: "Where should I park when visiting the hospital?",
    a: "Complimentary covered visitor parking is located in Towers P1 and P2 with direct air-conditioned elevator links to all clinical wings. Free valet parking is also stationed at Main Gate A and Emergency Gate B.",
    category: "Campus Access"
  }
];

const Contact = () => {
  const [appointmentDialogOpen, setAppointmentDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      department: "General Medicine",
      urgency: "normal",
      subject: "",
      message: ""
    }
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);
      toast({
        title: "Medical Inquiry Received!",
        description: "Our patient liaison officer will reach out to you within 2 business hours.",
      });
      form.reset();
    }, 1200);
  };
  
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-primary/20 selection:text-primary">
      <Navigation onAppointmentClick={() => setAppointmentDialogOpen(true)} />
      
      {/* 1. Colorful High-End Architectural Hero Section */}
      <section className="relative text-white py-24 lg:py-28 overflow-hidden bg-slate-950">
        {/* Hospital Building Background Photo with Multi-Color Brand Gradients */}
        <div className="absolute inset-0 select-none overflow-hidden">
          <img
            src="/hero-hospital-building.jpg"
            alt="Lunaria Hill Hospital Medical Campus Architecture"
            className="w-full h-full object-cover object-[75%_center] filter brightness-[0.45] contrast-[1.12]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#02316B]/95 via-[#012552]/90 to-[#005C72]/80" />
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sky-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-teal-400/15 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-sky-300 text-xs font-semibold uppercase tracking-wider mb-6 border border-white/15 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>24/7 Patient Coordination & Emergency Care</span>
          </div>

          <ScrollTextReveal
            text="Connect with Lunaria Hill Hospital"
            direction="left"
            as="h1"
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight font-sans mb-6 leading-[1.14]"
          />

          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8 font-sans">
            Whether you require immediate emergency trauma assistance, wish to book a super-specialist consultation, or need help navigating insurance coverage, our patient team is standing by 24 hours a day.
          </p>

          {/* Rapid Action Buttons inside Hero */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="tel:18001234560" 
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white font-bold text-sm shadow-xl shadow-rose-600/30 transition-all hover:scale-[1.02]"
            >
              <Ambulance className="w-4 h-4" />
              <span>Emergency Dispatch: 1-800-123-4560</span>
            </a>

            <button 
              onClick={() => setAppointmentDialogOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#02316B] font-bold text-sm shadow-xl transition-all hover:scale-[1.02]"
            >
              <Calendar className="w-4 h-4 text-primary" />
              <span>Book Doctor Consultation</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Top 4 Vibrant Contact Channel Cards (Floating Bento Overlap) */}
      <section className="py-10 -mt-14 relative z-20 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {mainContactChannels.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <ScrollReveal 
                  key={idx} 
                  direction={idx < 2 ? 'left' : 'right'} 
                  delay={idx * 100}
                  className="h-full"
                >
                  <div className={`h-full rounded-2xl p-6 border-2 ${item.cardBg} shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group`}>
                    <div>
                      {/* Top Header Row with Icon and Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                          <IconComp className="w-6 h-6" />
                        </div>
                        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="font-bold text-lg text-slate-900 mb-1 font-sans group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed mb-3">
                        {item.subtitle}
                      </p>
                      <p className="font-extrabold text-sm text-slate-900 mb-4 font-mono select-all">
                        {item.contact}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-200/60 mt-auto">
                      {item.actionHref === "#book-dialog" ? (
                        <button
                          onClick={() => setAppointmentDialogOpen(true)}
                          className={`text-xs font-bold ${item.accentColor} inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform`}
                        >
                          <span>{item.actionLabel}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <a
                          href={item.actionHref}
                          target={item.actionHref.startsWith('http') ? '_blank' : undefined}
                          rel={item.actionHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className={`text-xs font-bold ${item.accentColor} inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform`}
                        >
                          <span>{item.actionLabel}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Specialized Department Direct Directory (NEW High-Detail Colorful Directory) */}
      <section className="py-16 bg-white border-y border-slate-200/80 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3 border border-primary/20">
                <Compass className="w-3.5 h-3.5 text-primary" />
                Department Direct Extensions
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight font-sans">
                Direct Contact for Specialty Wings
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-sans mt-2 max-w-2xl">
                Skip the general hospital switchboard and reach out straight to your department's dedicated desk.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold self-start md:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>All 6 Critical Desks Live Now</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {departmentDirectLines.map((dept, index) => {
              const IconComp = dept.icon;
              return (
                <ScrollReveal 
                  key={index} 
                  direction={index % 2 === 0 ? 'left' : 'right'} 
                  delay={index * 80}
                  className="h-full"
                >
                  <div className={`h-full p-5 rounded-2xl bg-gradient-to-br ${dept.color} border-2 hover:border-primary/60 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 group`}>
                    <div className={`w-12 h-12 rounded-xl ${dept.iconColor} shadow-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComp className="w-6 h-6" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-white/90 px-2 py-0.5 rounded-md border border-black/5 shadow-2xs">
                          {dept.ext}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500">
                          {dept.hours}
                        </span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-base mb-1 truncate font-sans group-hover:text-primary transition-colors">
                        {dept.name}
                      </h4>
                      <a 
                        href={`tel:${dept.directPhone.replace(/[^0-9]/g, '')}`} 
                        className="text-xs font-bold text-slate-700 hover:text-primary inline-flex items-center gap-1.5 mt-1 transition-colors font-mono"
                      >
                        <Phone className="w-3 h-3 text-primary" />
                        <span>{dept.directPhone}</span>
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Interactive Inquiry Form & Live Campus Guide Section */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left Column: Comprehensive Patient Inquiry Form */}
            <ScrollReveal direction="left" className="lg:col-span-7 h-full">
              <div className="h-full bg-white border-2 border-primary/20 rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden">
                {/* Top Brand Accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#02316B] via-[#005C72] to-sky-400" />

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20">
                      <MessageSquare className="w-3.5 h-3.5 text-primary" />
                      Direct Helpdesk Inquiry
                    </div>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" />
                      Avg. Reply Time: 1–2 Hours
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans mb-2">
                    Send a Message to Our Medical Coordinators
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mb-8 leading-relaxed font-sans">
                    Have questions about specialist schedules, surgical package pricing, or diagnostic testing? Leave your query below and our clinical team will get back to you promptly.
                  </p>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      
                      {/* Name and Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-bold text-slate-700">Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. Eleanor Vance" {...field} className="rounded-xl border-slate-300 bg-slate-50/70 focus-visible:bg-white text-sm h-11 focus-visible:ring-primary" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-bold text-slate-700">Email Address *</FormLabel>
                              <FormControl>
                                <Input placeholder="eleanor@example.com" {...field} className="rounded-xl border-slate-300 bg-slate-50/70 focus-visible:bg-white text-sm h-11 focus-visible:ring-primary" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      {/* Phone and Department Selection */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-bold text-slate-700">Phone Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="(123) 456-7890" {...field} className="rounded-xl border-slate-300 bg-slate-50/70 focus-visible:bg-white text-sm h-11 focus-visible:ring-primary" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="department"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-bold text-slate-700">Target Clinical Specialty *</FormLabel>
                              <FormControl>
                                <select 
                                  {...field}
                                  className="w-full h-11 rounded-xl border border-slate-300 bg-slate-50/70 focus-visible:bg-white px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                >
                                  <option value="General Medicine">General & Preventive Medicine</option>
                                  <option value="Cardiology">Cardiology & Heart Care</option>
                                  <option value="Neurology">Neurology & Stroke Center</option>
                                  <option value="Orthopedics">Orthopedics & Joint Replacement</option>
                                  <option value="Pediatrics">Pediatrics & Neonatal Care</option>
                                  <option value="Surgery">General & Robotic Surgery</option>
                                  <option value="Insurance">Insurance, TPA & Billing Help</option>
                                </select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      {/* Subject */}
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs font-bold text-slate-700">Subject of Inquiry *</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. Schedule inquiry with Dr. Michael Chen" {...field} className="rounded-xl border-slate-300 bg-slate-50/70 focus-visible:bg-white text-sm h-11 focus-visible:ring-primary" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      {/* Message Content */}
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs font-bold text-slate-700">Detailed Message / Health Question *</FormLabel>
                            <FormControl>
                              <textarea
                                rows={4}
                                placeholder="Please describe symptoms, prior diagnosis, or appointment preferences..."
                                className="w-full rounded-xl border border-slate-300 bg-slate-50/70 focus-visible:bg-white px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      {/* Form Actions */}
                      <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                        <Button 
                          type="submit" 
                          className="bg-primary hover:bg-primary/90 text-white rounded-xl px-8 py-3.5 h-auto text-sm font-bold shadow-lg shadow-primary/25 transition-all flex items-center gap-2"
                          disabled={isSubmitting}
                        >
                          <Send className="w-4 h-4" />
                          <span>{isSubmitting ? "Dispatching Message..." : "Submit Patient Inquiry"}</span>
                        </Button>

                        <a
                          href="https://wa.me/18001234560"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Chat on WhatsApp</span>
                        </a>
                      </div>
                    </form>
                  </Form>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column: Embedded Map & Campus Transportation Guide */}
            <ScrollReveal direction="right" className="lg:col-span-5 h-full flex flex-col gap-6">
              {/* Interactive Google Maps Frame */}
              <div className="rounded-3xl overflow-hidden shadow-xl border-2 border-slate-200/90 relative min-h-[320px] bg-slate-100 flex-1 group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-118.2436849!3d34.0522342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAzJzA4LjAiTiAxMTjCsDE0JzM3LjMiVw!5e0!3m2!1sen!2sus!4v1620251234567!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: '320px' }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Lunaria Hill Hospital Main Medical Campus"
                  className="w-full h-full filter contrast-[1.02]"
                />

                {/* Floating Map Info Badge */}
                <div className="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200 shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-xs">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Main Medical Pavilion</p>
                      <p className="text-[11px] text-slate-500">123 Healthcare Blvd, CA 91234</p>
                    </div>
                  </div>

                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-100 hover:bg-primary hover:text-white text-slate-700 transition-colors"
                    title="Open in Maps"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Color-Coded Campus Arrival & Transport Guide */}
              <div className="bg-white border-2 border-primary/20 rounded-3xl p-6 shadow-md space-y-4">
                <h4 className="font-bold text-base text-slate-900 font-sans flex items-center gap-2">
                  <Compass className="h-5 w-5 text-primary" />
                  Campus Arrival & Patient Access
                </h4>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Car className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Visitor Parking & Valet</p>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        Free multi-level covered parking on P1 & P2 with complimentary wheelchair valet service at Main Gate A.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Train className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Rapid Metro Skybridge</p>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        Central Medical Metro Station (Line B) Exit 2 connects directly via climate-controlled skybridge to Level 2 OPD.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Accessibility className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">100% ADA Compliant & Escort Staff</p>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        Ramp access, braille tactile signage, wide automated elevators, and dedicated patient escorts stationed at all gates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 5. Expanded Colorful Accordion FAQs Section */}
      <section className="py-20 bg-white border-t border-slate-200/80 overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3 border border-primary/20">
              <HelpCircle className="w-3.5 h-3.5 text-primary" />
              Patient Knowledgebase
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight font-sans">
              Frequently Asked Patient Questions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-sans mt-2">
              Helpful answers regarding visitation policies, report access, and cashless billing.
            </p>
          </div>
          
          <div className="space-y-3.5">
            {faqs.map((faq, i) => {
              const isOpen = activeFaq === i;
              return (
                <ScrollReveal 
                  key={i} 
                  direction={i % 2 === 0 ? 'left' : 'right'} 
                  delay={i * 60}
                >
                  <div 
                    onClick={() => setActiveFaq(isOpen ? null : i)}
                    className={`cursor-pointer rounded-2xl border-2 transition-all duration-300 p-5 ${
                      isOpen 
                        ? 'bg-gradient-to-br from-primary/5 via-white to-secondary/5 border-primary shadow-md' 
                        : 'bg-white border-slate-200/90 hover:border-primary/40 hover:bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider border ${
                          isOpen ? 'bg-primary text-white border-primary' : 'bg-slate-100 text-slate-600 border-slate-200'
                        }`}>
                          {faq.category}
                        </span>
                        <h3 className="font-bold text-base text-slate-900 font-sans">
                          {faq.q}
                        </h3>
                      </div>

                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'bg-primary text-white rotate-180' : 'bg-slate-100 text-slate-600'
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>

                    {isOpen && (
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-4 pt-3.5 border-t border-slate-200/70 font-sans pl-2">
                        {faq.a}
                      </p>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              onClick={() => setAppointmentDialogOpen(true)}
              className="bg-primary hover:bg-primary/90 text-white rounded-xl px-8 py-3.5 h-auto text-sm font-bold shadow-lg shadow-primary/25 transition-all inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an In-Person Consultation Today</span>
            </Button>
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

export default Contact;
