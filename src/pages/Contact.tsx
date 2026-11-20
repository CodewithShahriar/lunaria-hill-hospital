import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { AppointmentForm } from '@/components/AppointmentForm';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Sparkles,
  Send,
  MessageCircle,
  HelpCircle,
  CheckCircle2
} from 'lucide-react';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(20, { message: "Message must be at least 20 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const contactInfo = [
  {
    icon: MapPin,
    title: "Hospital Location",
    content: "123 Healthcare Blvd, Medical District, CA 91234",
    highlight: "Free multi-level patient & visitor parking (P1 & P2)",
    accent: "border-t-4 border-t-sky-500",
    iconBg: "bg-sky-50 text-sky-600 border border-sky-100"
  },
  {
    icon: Phone,
    title: "24/7 Helpline & Emergency",
    content: "Emergency: 1-800-123-4560",
    highlight: "General Appointments: (123) 456-7890",
    accent: "border-t-4 border-t-emerald-500",
    iconBg: "bg-emerald-50 text-emerald-600 border border-emerald-100"
  },
  {
    icon: Mail,
    title: "Direct Email Communication",
    content: "info@lunariahill.com",
    highlight: "care@lunariahill.com (Patient Portal Help)",
    accent: "border-t-4 border-t-blue-500",
    iconBg: "bg-blue-50 text-blue-600 border border-blue-100"
  },
  {
    icon: Clock,
    title: "Visiting & Outpatient Hours",
    content: "Emergency Department: Open 24/7/365",
    highlight: "Specialist OPD: Mon – Fri (8:00 AM – 8:00 PM)",
    accent: "border-t-4 border-t-indigo-500",
    iconBg: "bg-indigo-50 text-indigo-600 border border-indigo-100"
  }
];

const Contact = () => {
  const [appointmentDialogOpen, setAppointmentDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  });

  const handleBookAppointment = () => {
    setAppointmentDialogOpen(true);
  };
  
  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully!",
        description: "Our patient coordinator will contact you shortly.",
      });
      form.reset();
    }, 1200);
  };
  
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navigation onAppointmentClick={handleBookAppointment} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-950 via-sky-950 to-slate-900 text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-6 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            Patient Helpdesk & Support
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-sans mb-6">
            Contact Lunaria Hill Hospital
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
            We are here for you 24/7. Reach out for appointments, medical record requests, 
            emergency assistance, or general consultations.
          </p>
        </div>
      </section>

      {/* Contact Bento Info Cards */}
      <section className="py-12 -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info, index) => {
              const IconComp = info.icon;
              return (
                <div 
                  key={index} 
                  className={`bg-white rounded-2xl p-6 border-2 border-slate-200 ${info.accent} shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between`}
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl ${info.iconBg} flex items-center justify-center mb-4 shadow-xs`}>
                      <IconComp className="h-6 w-6" />
                    </div>
                    <h3 className="font-extrabold text-base text-slate-900 mb-1 font-display">{info.title}</h3>
                    <p className="text-slate-700 text-xs sm:text-sm font-semibold mb-2">{info.content}</p>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium pt-3 border-t border-slate-100">{info.highlight}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map & Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-white border-2 border-slate-200 rounded-2xl p-8 sm:p-10 shadow-md flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3 border border-blue-200">
                  <MessageCircle className="w-3.5 h-3.5 text-blue-600" />
                  Direct Helpdesk Inquiry
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mb-2">
                  Send Us a Direct Message
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-8">
                  Fill in your details below and our medical coordination team will contact you within 2 to 4 business hours.
                </p>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs font-bold text-slate-700">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} className="rounded-xl border-slate-300 bg-slate-50 focus-visible:bg-white text-sm h-11" />
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
                            <FormLabel className="text-xs font-bold text-slate-700">Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="you@example.com" {...field} className="rounded-xl border-slate-300 bg-slate-50 focus-visible:bg-white text-sm h-11" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs font-bold text-slate-700">Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="(123) 456-7890" {...field} className="rounded-xl border-slate-300 bg-slate-50 focus-visible:bg-white text-sm h-11" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs font-bold text-slate-700">Subject / Concern</FormLabel>
                            <FormControl>
                              <Input placeholder="E.g., Specialist consultation inquiry" {...field} className="rounded-xl border-slate-300 bg-slate-50 focus-visible:bg-white text-sm h-11" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-bold text-slate-700">Your Health Question / Inquiry</FormLabel>
                          <FormControl>
                            <textarea
                              rows={4}
                              placeholder="Describe your health question, appointment preference, or inquiry in detail..."
                              className="w-full rounded-xl border border-slate-300 bg-slate-50 focus-visible:bg-white px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 py-3.5 h-auto text-sm font-bold shadow-md shadow-blue-500/25 transition-all"
                      disabled={isSubmitting}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {isSubmitting ? "Sending..." : "Submit Inquiry"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>

            {/* Embedded Location Map & Campus Guide */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="rounded-2xl overflow-hidden shadow-md border-2 border-slate-200 relative min-h-[300px] flex-1">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-118.2436849!3d34.0522342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAzJzA4LjAiTiAxMTjCsDE0JzM3LjMiVw!5e0!3m2!1sen!2sus!4v1620251234567!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: '300px' }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Lunaria Hill Hospital Location"
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Campus Arrival Guide */}
              <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 space-y-3">
                <h4 className="font-extrabold text-sm text-slate-900 font-display flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  Campus Arrival & Visitor Guide
                </h4>
                <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                  <p className="flex items-start gap-2">
                    <span className="font-bold text-slate-800 flex-shrink-0">🚗 Visitor Parking:</span>
                    <span>Free multi-level covered parking on P1 & P2 with complimentary valet at Main Gate A.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="font-bold text-slate-800 flex-shrink-0">🚊 Public Transit:</span>
                    <span>Central Metro Station Exit 2 opens directly onto the South Hospital Walkway.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="font-bold text-slate-800 flex-shrink-0">♿ Accessibility:</span>
                    <span>Full wheelchair ramp access, elevators, and escort staff available at all entrances.</span>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* FAQs Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 font-display mb-2">
              Common Questions Before Your Visit
            </h2>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: "What are the visiting hours for inpatients?",
                a: "General in-patient visiting hours are 10:00 AM to 8:00 PM daily. For ICU and CCU suites, immediate family visits are scheduled between 4:00 PM and 6:00 PM to ensure patient tranquility."
              },
              {
                q: "How can I obtain my clinical records & test reports?",
                a: "Test reports are automatically encrypted and uploaded to your secure Patient Portal within hours of testing. You can also pick up certified hard copies at the Records Counter on Level 1."
              },
              {
                q: "Do you accept international and corporate insurance?",
                a: "Yes. Our Cashless Insurance Helpdesk coordinates directly with all major providers including Aetna, Cigna, BlueCross, and regional TPA networks for immediate approvals."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all">
                <h3 className="font-extrabold text-base text-slate-900 mb-2 font-display flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  {faq.q}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-4 border-l-2 border-slate-100">{faq.a}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              onClick={handleBookAppointment}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 py-3.5 h-auto text-sm font-bold shadow-md shadow-blue-500/25 transition-all"
            >
              Book an Appointment Today
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
