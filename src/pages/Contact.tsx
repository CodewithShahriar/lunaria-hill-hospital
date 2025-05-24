
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
  Linkedin
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
    title: "Address",
    content: "123 Healthcare Blvd, Medical District, CA 91234",
    color: "blue"
  },
  {
    icon: Phone,
    title: "Phone",
    content: "(123) 456-7890",
    color: "green"
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@lunariahill.com",
    color: "red"
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "24/7 Emergency Services, Admin: Mon-Fri 8am-8pm",
    color: "purple"
  }
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", url: "#", color: "text-blue-600" },
  { icon: Twitter, label: "Twitter", url: "#", color: "text-sky-500" },
  { icon: Instagram, label: "Instagram", url: "#", color: "text-pink-600" },
  { icon: Linkedin, label: "LinkedIn", url: "#", color: "text-blue-700" }
];

const ContactInfoCard = ({ info }: { info: any }) => {
  const IconComponent = info.icon;
  const colorMap: Record<string, { bg: string, text: string }> = {
    blue: { bg: "bg-blue-100", text: "text-blue-600" },
    green: { bg: "bg-green-100", text: "text-green-600" },
    red: { bg: "bg-red-100", text: "text-red-600" },
    purple: { bg: "bg-purple-100", text: "text-purple-600" }
  };
  
  const colors = colorMap[info.color];
  
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6 flex items-start">
        <div className={`${colors.bg} p-3 rounded-lg mr-4`}>
          <IconComponent className={`h-6 w-6 ${colors.text}`} />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-800 mb-1">{info.title}</h3>
          <p className="text-gray-600">{info.content}</p>
        </div>
      </CardContent>
    </Card>
  );
};

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
    
    // Simulate form submission
    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation onAppointmentClick={handleBookAppointment} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Contact Us</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We're here to assist you. Reach out to us for any inquiries or to schedule an appointment.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <ContactInfoCard key={index} info={info} />
            ))}
          </div>
        </div>
      </section>

      {/* Map & Contact Form */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg h-[500px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-118.2436849!3d34.0522342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAzJzA4LjAiTiAxMTjCsDE0JzM3LjMiVw!5e0!3m2!1sen!2sus!4v1620251234567!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Hospital Location"
              ></iframe>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
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
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="(123) 456-7890" {...field} />
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
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Subject of your message" {...field} />
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
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <textarea
                            rows={5}
                            placeholder="Your message here..."
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto bg-primary-500 hover:bg-primary-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-12 bg-primary-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Connect With Us</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Follow us on social media for health tips, hospital news, and community events.
          </p>
          
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => {
              const SocialIcon = social.icon;
              return (
                <a 
                  key={index}
                  href={social.url}
                  className={`p-3 rounded-full border border-gray-300 hover:border-transparent hover:bg-white hover:shadow-lg transition-all ${social.color}`}
                  aria-label={social.label}
                >
                  <SocialIcon className="h-6 w-6" />
                </a>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* FAQs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Find quick answers to common questions about contacting us</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="pt-6 pb-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2">What are the visiting hours?</h3>
                <p className="text-gray-600">Regular visiting hours are from 10:00 AM to 8:00 PM daily. Specific departments may have different visiting policies.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 pb-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2">How can I request my medical records?</h3>
                <p className="text-gray-600">You can request your medical records through our patient portal, by visiting the Records Department in person, or by submitting a written request by mail or email.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 pb-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2">Do you accept insurance?</h3>
                <p className="text-gray-600">Yes, we accept most major insurance plans. Please contact our billing department to confirm coverage for specific procedures.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button 
              onClick={handleBookAppointment}
              className="bg-primary-500 hover:bg-primary-600"
            >
              Schedule an Appointment
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
