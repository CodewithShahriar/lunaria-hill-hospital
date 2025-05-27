
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { AppointmentForm } from '@/components/AppointmentForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, Ambulance, Phone, Calendar, 
  Microscope, Pill, Syringe, HeartPulse, Monitor, 
  ShieldCheck, Clock, Building2
} from 'lucide-react';

const servicesList = [
  {
    id: 1,
    title: "Emergency Services",
    description: "24/7 emergency care for critical conditions with state-of-the-art equipment and specialized staff.",
    icon: Stethoscope,
    color: "red",
    features: [
      "24/7 Availability",
      "Critical Care Specialists",
      "Trauma Unit",
      "Fast Response Time"
    ]
  },
  {
    id: 2,
    title: "Ambulance Service",
    description: "Rapid response ambulance service with advanced life support equipment and trained paramedics.",
    icon: Ambulance,
    color: "blue",
    features: [
      "GPS Tracking",
      "Advanced Life Support",
      "Trained Paramedics",
      "Quick Dispatch"
    ]
  },
  {
    id: 3,
    title: "Telemedicine",
    description: "Virtual consultations with our specialists from the comfort of your home using secure video conferencing.",
    icon: Monitor,
    color: "purple",
    features: [
      "24/7 Availability",
      "Secure Platform",
      "Prescription Services",
      "Follow-up Care"
    ]
  },
  {
    id: 4,
    title: "Pharmacy",
    description: "In-house pharmacy with a comprehensive range of medications, open 24 hours for patient convenience.",
    icon: Pill,
    color: "green",
    features: [
      "24/7 Service",
      "Home Delivery",
      "Medication Counseling",
      "Prescription Refills"
    ]
  },
  {
    id: 5,
    title: "Lab Tests",
    description: "Comprehensive diagnostic laboratory offering a wide range of tests with quick and accurate results.",
    icon: Microscope,
    color: "orange",
    features: [
      "Advanced Equipment",
      "Quick Results",
      "Home Sample Collection",
      "Online Reports"
    ]
  },
  {
    id: 6,
    title: "Operation Theater",
    description: "Modern operation theaters equipped with cutting-edge technology for complex surgical procedures.",
    icon: Syringe,
    color: "teal",
    features: [
      "Advanced Equipment",
      "Specialized Teams",
      "Minimally Invasive Options",
      "Post-Op Care"
    ]
  },
  {
    id: 7,
    title: "Health Packages",
    description: "Comprehensive health check-up packages tailored to different age groups and health concerns.",
    icon: HeartPulse,
    color: "pink",
    features: [
      "Customized Plans",
      "Preventive Care",
      "Full Body Assessment",
      "Doctor Consultation"
    ]
  },
  {
    id: 8,
    title: "Insurance Services",
    description: "We work with major insurance providers to ensure smooth processing of health insurance claims.",
    icon: ShieldCheck,
    color: "indigo",
    features: [
      "Cashless Treatment",
      "Claims Assistance",
      "Network Hospitals",
      "Insurance Coordination"
    ]
  },
  {
    id: 9,
    title: "Rehabilitation",
    description: "Comprehensive rehabilitation services including physical, occupational, and speech therapy.",
    icon: Building2,
    color: "yellow",
    features: [
      "Physical Therapy",
      "Occupational Therapy",
      "Speech Therapy",
      "Specialized Equipment"
    ]
  }
];

// Color mapping function
const getColorClass = (color: string) => {
  const colorMap: Record<string, { bg: string, text: string, ring: string }> = {
    red: { bg: "bg-red-100", text: "text-red-600", ring: "ring-red-600" },
    blue: { bg: "bg-blue-100", text: "text-blue-600", ring: "ring-blue-600" },
    green: { bg: "bg-green-100", text: "text-green-600", ring: "ring-green-600" },
    purple: { bg: "bg-purple-100", text: "text-purple-600", ring: "ring-purple-600" },
    orange: { bg: "bg-orange-100", text: "text-orange-600", ring: "ring-orange-600" },
    teal: { bg: "bg-teal-100", text: "text-teal-600", ring: "ring-teal-600" },
    pink: { bg: "bg-pink-100", text: "text-pink-600", ring: "ring-pink-600" },
    indigo: { bg: "bg-indigo-100", text: "text-indigo-600", ring: "ring-indigo-600" },
    yellow: { bg: "bg-yellow-100", text: "text-yellow-600", ring: "ring-yellow-600" }
  };
  
  return colorMap[color] || { bg: "bg-primary-100", text: "text-primary-600", ring: "ring-primary-600" };
};

const ServiceCard = ({ service, onBookAppointment }: { service: any, onBookAppointment: () => void }) => {
  const colors = getColorClass(service.color);
  const IconComponent = service.icon;
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300 border border-gray-200">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-4">
          <div className={`${colors.bg} p-3 rounded-lg`}>
            <IconComponent className={`h-6 w-6 ${colors.text}`} />
          </div>
          <div>
            <CardTitle className="text-xl">{service.title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 mb-4">
          {service.description}
        </CardDescription>
        <div className="space-y-2 mb-6">
          {service.features.map((feature: string, index: number) => (
            <div key={index} className="flex items-center gap-2">
              <div className={`h-1.5 w-1.5 rounded-full ${colors.bg} ring-2 ${colors.ring}`}></div>
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        <Button
  // onClick={onBookAppointment}
  className="w-full text-gray-800 bg-white hover:bg-blue-200 border border-gray-200 outline-none "
>
  <Calendar className="mr-2 h-4 w-4" />
  View More Details
</Button>

      </CardContent>
    </Card>
  );
};

const Services = () => {
  const [appointmentDialogOpen, setAppointmentDialogOpen] = useState(false);

  const handleBookAppointment = () => {
    setAppointmentDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation onAppointmentClick={handleBookAppointment} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Our Services</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Comprehensive healthcare services designed to meet all your medical needs under one roof.
          </p>
        </div>
      </section>
      
      {/* Emergency Call Banner */}
      <section className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-3 md:mb-0">
              <Phone className="h-8 w-8 mr-3 animate-pulse" />
              <div>
                <h3 className="font-bold text-xl">Emergency? Call Now</h3>
                <p className="text-white/90">Our emergency line is open 24/7</p>
              </div>
            </div>
            <Button variant="outline" className="text-white border-white hover:bg-white/20 hover:text-white">
              <Phone className="mr-2 h-4 w-4" />
              911
            </Button>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive Healthcare Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our hospital offers a wide range of services to ensure that all your healthcare needs are met with the highest standards of care and professionalism.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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
      <section className="py-16 bg-gradient-to-br from-primary-100 to-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Need Personalized Healthcare?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team of specialists is ready to provide you with personalized care tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary-500 hover:bg-primary-600"
                onClick={handleBookAppointment}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book an Appointment
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary-500 text-primary-500 hover:bg-primary-50"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </div>
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
