
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MessageCircle, Award, Shield, Clock, Calendar, Heart, Stethoscope, Phone, ArrowRight, CheckCircle, Users, Clipboard, PlusCircle, Zap, Brain, Thermometer, Baby, Eye, Bone, UtensilsCrossed,
  Microscope,
  Hospital,
  Syringe,
  MessageCircleHeart,
  Ambulance } from 'lucide-react';
import { AppointmentForm } from '@/components/AppointmentForm';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [appointmentDialogOpen, setAppointmentDialogOpen] = useState(false);

  const handleBookAppointment = () => {
    setAppointmentDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation onAppointmentClick={handleBookAppointment} />
      
      {/* 1. Hero Section */}
      <HeroSection />
      
      {/* 2. Quick Info Cards */}
      <section className="py-8 bg-white relative z-10">
          <div className="container mx-auto px-4 -mt-24 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {/* Working Time */}
              <div className="bg-[#169fe6] text-white p-6 lg:p-8">
                <h3 className="text-lg font-semibold mb-4">Working Time</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between border-b border-white/20 pb-1">
                    <span>Mon – Wed</span> <span className="font-bold">9:00 AM - 7:00 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-white/20 pb-1">
                    <span>Thursday</span> <span className="font-bold">9:00 AM - 6:30 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-white/20 pb-1">
                    <span>Friday</span> <span className="font-bold">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span> <span className="font-bold">CLOSED</span>
                  </li>
                </ul>
              </div>

              {/* Doctors Timetable */}
              <div className="bg-[#0c8fd3] text-white p-6 lg:p-8">
                <h3 className="text-lg font-semibold mb-4">Doctors Timetable</h3>
                <p className="text-sm mb-4 leading-relaxed">
                  Check our weekly timetable to see when each doctor is available. Planning ahead helps you avoid long waits and ensures you meet the right specialist at the right time for your medical needs.
                </p>
                <button className="bg-white text-[#0c8fd3] font-medium text-sm px-4 py-2 rounded hover:bg-gray-100 transition">
                  View Timetable
                </button>
              </div>

              {/* Appointments */}
              <div className="bg-[#0c7cc6] text-white p-6 lg:p-8">
                <h3 className="text-lg font-semibold mb-4">Appointments</h3>
                <p className="text-sm mb-4 leading-relaxed">
                  Book your appointment online or by phone at your convenience. We offer flexible scheduling options to fit your routine and reduce waiting times. Secure your spot early for faster, more efficient care.
                </p>
                <button className="bg-white text-[#0c7cc6] font-medium text-sm px-4 py-2 rounded hover:bg-gray-100 transition">
                  Make an Appointment
                </button>
              </div>

              {/* Emergency Cases */}
              <div className="bg-[#0c69b5] text-white p-6 lg:p-8">
                <h3 className="text-lg font-semibold mb-4">Emergency Cases</h3>
                <p className="text-2xl font-bold mb-2 flex items-center gap-2">
                  <span>📞</span> 1-800-123-4560
                </p>
                <p className="text-sm leading-relaxed">
                  For urgent medical assistance, contact our 24/7 emergency line. Our experienced team is ready to help at any time.
                </p>
              </div>
            </div>
          </div>
        </section>

      
      {/* 3. About Section - Complete Medical Solutions in One Place */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://media.licdn.com/dms/image/v2/C4D1BAQHKoycNIXHKYg/company-background_10000/company-background_10000/0/1583639567756/medex_healthcare_co_cover?e=2147483647&v=beta&t=cxhITWOAEuXZ7PO7ZSVwbflxEqE2uBMWpRVzcZI5FpY" 
                  alt="Hospital Team" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500 text-white p-2 rounded-full">
                    <Award className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">15+ Years</p>
                    <p className="text-sm text-gray-600">of Experience</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                Complete Medical Solutions in One Place
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">A Recognized Leader in Exceptional Healthcare</h2>
              <p className="text-gray-600 mb-6 text-lg">
                At Lunaria Hill Hospital, we combine compassionate care with cutting-edge medical technology. Our approach centers on providing personalized healthcare experiences that address the unique needs of each patient.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-700 p-1 rounded-full mt-1">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Experienced Medical Professionals</p>
                    <p className="text-gray-600">Our talented team of doctors and specialists are committed to your health and well-being.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-700 p-1 rounded-full mt-1">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Advanced Medical Technology</p>
                    <p className="text-gray-600">We utilize the latest medical equipment and techniques to deliver exceptional care.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-700 p-1 rounded-full mt-1">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Patient-Centered Approach</p>
                    <p className="text-gray-600">Your comfort, dignity, and health are our top priorities throughout your care journey.</p>
                  </div>
                </li>
              </ul>
              
              {/* Signature of Head of Hospital */}
              {/* <div className="mb-6">
                <img 
                  src="https://cdn-ildceij.nitrocdn.com/DRnNUxiqxHnxDRbzoFypjebKFRSlJIyA/assets/images/optimized/rev-2118018/www.wisestamp.com/wp-content/uploads/2024/04/Michael-Jordan-personal-autograph.webp" 
                  alt="Director's Signature" 
                  className="h-16 mb-2"
                />
                <p className="font-medium">Dr. Michael Roberts</p>
                <p className="text-gray-600 text-sm">Chief Medical Director</p>
              </div> */}
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-lg">
                  Learn More About Us
                </Button>
                <Button size="lg" variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50 rounded-lg">
                  Our Doctors
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 4. Department Cards - Choose Department */}
     <section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
        Our Departments
      </div>
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Choose Department</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Specialized departments to address all your healthcare needs with expert care
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {[
        { name: "Medicine", icon: Stethoscope, desc: "General care" },
        { name: "Cardiology", icon: Heart, desc: "Heart care" },
        { name: "Neurology", icon: Brain, desc: "Brain & nerve care" },
        { name: "Gastroenterology", icon: Microscope, desc: "Digestive care" },
        { name: "Pediatrics", icon: Baby, desc: "Child healthcare" },
        { name: "Orthopedics", icon: Bone, desc: "Bone & joint care" },
      ].map((dept, idx) => (
        <div
          key={idx}
          className="bg-blue-100 rounded-lg shadow-md hover:shadow-xl transition-all p-6 text-center group"
        >
          <div className="bg-blue-500 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
            <dept.icon className="h-8 w-8 text-white" />
          </div>
          <h3 className="font-bold text-lg mb-1">{dept.name}</h3>
          <p className="text-gray-600 text-sm mb-4">{dept.desc}</p>
          <Button variant="link" className="text-blue-500 p-0 hover:text-blue-700">
            Learn More
          </Button>
        </div>
      ))}
    </div>

    <div className="mt-10 text-center">
      <Button className="bg-blue-600 text-white hover:bg-blue-700">
        See All Departments
      </Button>
    </div>
  </div>
</section>

      
      {/* 5. Highest Quality Care Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                Highest Quality Care
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Solutions to Complex Medical Problems</h2>
              <p className="text-gray-600 mb-8">
                Our specialists tackle even the most challenging medical conditions with advanced technology and evidence-based approaches, offering hope and healing to patients with complex needs.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 text-blue-700 p-1.5 rounded-full">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p className="font-medium">Multidisciplinary approach to complex cases</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 text-blue-700 p-1.5 rounded-full">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p className="font-medium">Advanced diagnostic capabilities</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 text-blue-700 p-1.5 rounded-full">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p className="font-medium">Innovative treatment protocols</p>
                </div>
              </div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="md:col-span-3">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="https://immigrantinvest.com/_next/image/?url=https%3A%2F%2F9zkkfwp3kz3ung7j.public.blob.vercel-storage.com%2FCI5-S2K-8ZX-FLN%2Fstoryblok.jpeg&w=3840&q=75"
                  alt="Clinic Overview"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* 6. Best Practices Section */}
      <section className="py-20 bg-blue-600 text-white">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-block px-4 py-1 bg-white text-blue-600 rounded-full text-sm font-medium mb-4">
          Best Practices
        </div>
        <h2 className="text-4xl font-bold mb-6">Clinic with Innovative Approach to Treatment</h2>
        <p className="text-white/90 text-lg mb-8">
          We combine traditional medical excellence with cutting-edge innovations to provide treatments that are both effective and forward-thinking, delivering exceptional outcomes for our patients.
        </p>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Evidence-Based Care</h3>
            <p className="text-white/80">All our treatments are backed by rigorous research and clinical evidence</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Advanced Technology</h3>
            <p className="text-white/80">State-of-the-art equipment for accurate diagnosis and treatment</p>
          </div>
        </div>

        <Button variant="outline" size="lg" className="border-white text-blue-800 hover:bg-white/80 hover:text-blue-800">
          Discover Our Approach
        </Button>
      </div>

      <div className="relative hidden md:block">
        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          <img 
            src="https://media.assettype.com/newindianexpress%2F2024-07%2F6cf84595-4d0d-42c3-b6ef-23d97ac0c3b1%2FHealthcare.jpg" 
            alt="Innovative Medical Technology" 
            className="w-full h-auto"
          />

          {/* Floating card over the image */}
          <div className="absolute bottom-4 left-2 bg-white rounded-xl p-4 shadow-xl w-64 z-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-100 p-2 rounded-full">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <p className="font-bold text-gray-800">8,500+</p>
            </div>
            <p className="text-gray-600 text-sm leading-snug">Patients helped annually with innovative treatments</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



          
      
      {/* 7. Total Health Care Solutions Section */}
     <section className="hidden md:block py-20 bg-gray-50 px-4">

  <div className="max-w-7xl mx-auto">
    {/* Section Heading */}
    <div className="text-center mb-12 px-2">
      <h2 className="text-4xl font-bold text-gray-800">Total Health Care Solutions</h2>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Offering personalized and reliable care to support your health and wellness every day.
      </p>
    </div>

    {/* Grid Layout */}
    <div className="grid md:grid-cols-3 gap-2">
      
      {/* Left: Feature Cards */}
      <div className="md:col-span-2 grid sm:grid-cols-2 gap-0 ">
        {[
          {
            icon: <Stethoscope className="text-cyan-600 w-10 h-10 mb-3" />,
            title: "Top Level Doctors",
            desc: "Expert physicians offering specialized and primary care."
          },
          {
            icon: <Microscope className="text-cyan-600 w-10 h-10 mb-3" />,
            title: "Modern Equipment",
            desc: "Advanced diagnostic tools for accurate treatment."
          },
          {
            icon: <Hospital className="text-cyan-600 w-10 h-10 mb-3" />,
            title: "Qualified Facilities",
            desc: "State-of-the-art infrastructure and hygiene."
          },
          {
            icon: <Syringe className="text-cyan-600 w-10 h-10 mb-3" />,
            title: "Professional Services",
            desc: "Routine and specialized treatments delivered with care."
          },
          {
            icon: <MessageCircleHeart className="text-cyan-600 w-10 h-10 mb-3" />,
            title: "Medical Counseling",
            desc: "Personalized mental and physical wellness support."
          },
          {
            icon: <Ambulance className="text-cyan-600 w-10 h-10 mb-3" />,
            title: "Emergency Help",
            desc: "24/7 medical emergency and ambulance assistance."
          }
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 px-4 py-5 rounded-lg min-h-[120px] flex flex-col items-center text-center hover:bg-blue-100 transition"
          >
            
            {item.icon}
            <h4 className="text-sm font-semibold text-gray-800 mb-1">{item.title}</h4>
            <p className="text-xs text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Right: Opening Hours Box */}
      <div className="bg-cyan-600 text-white p-8 rounded-lg shadow-md flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold mb-3">Opening Hours:</h3>
          <p className="text-sm mb-6 leading-relaxed">
            We Are Committed to Serving You with the Utmost Care and Dedication—Your Health Is Our Priority.
          </p>
          <ul className="text-sm border-t border-white/30 pt-4 space-y-3">
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
        <div className="mt-6 border-t border-white/30 pt-4">
          <h4 className="font-semibold mb-2">Need a personal health plan?</h4>
          <p className="text-sm">
            Get a customized health plan tailored to your needs. Our experts are ready to help you achieve your wellness goals.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>




      
      {/* 8. Testimonials Section */}
      <TestimonialsSection />
      
      {/* 9. Medical Specialists Section - Duplicating doctor section with different title to match reference */}
      {/* 10. Qualified Doctors Section */}
      <section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
        Qualified Doctors
      </div>
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Medical Specialists</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Meet our team of experienced healthcare professionals dedicated to your wellbeing
      </p>
    </div>

    {/* Doctor Grid */}
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
      {[
        {
          name: "Dr. Sarah Johnson",
          specialty: "Cardiologist",
          image: "https://jthemes.net/themes/html/medservices/files/images/doctor-1.jpg"
        },
        {
          name: "Dr. Michael Chen",
          specialty: "Neurologist",
          image: "https://jthemes.net/themes/html/medservices/files/images/doctor-3.jpg"
        },
        {
          name: "Dr. Emily Davis",
          specialty: "Pediatrician",
          image: "https://jthemes.net/themes/html/medservices/files/images/doctor-4.jpg"
        },
        {
          name: "Dr. James Wilson",
          specialty: "Orthopedic Surgeon",
          image: "https://jthemes.net/themes/html/medservices/files/images/doctor-2.jpg"
        }
      ].map((doctor, idx) => (
        <div key={idx} className="group">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative overflow-hidden">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                <Button variant="outline" size="sm" className="bg-white/20 text-white border-white hover:bg-white/40">
                  View Profile
                </Button>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-1">{doctor.name}</h3>
              <p className="text-blue-600 font-medium">{doctor.specialty}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* CTA Button */}
    <div className="text-center mt-12">
      <Link to="/doctors">
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-lg">
          View All Doctors
        </Button>
      </Link>
    </div>
  </div>
</section>
      
      {/* 10. Modern Medicine Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                Modern Medicine
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Better Technologies for Better Healthcare</h2>
              <p className="text-gray-600 mb-8 text-lg">
                We've invested in the latest medical technologies to provide you with more accurate diagnoses, less invasive procedures, and faster recovery times.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500 text-white p-1.5 rounded-full mt-1">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Advanced Imaging</h3>
                    <p className="text-gray-600">High-resolution imaging for precise diagnosis</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500 text-white p-1.5 rounded-full mt-1">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Robotic Surgery</h3>
                    <p className="text-gray-600">Minimally invasive procedures with faster recovery</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500 text-white p-1.5 rounded-full mt-1">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Digital Records</h3>
                    <p className="text-gray-600">Secure electronic health records for better coordination</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-lg">
                Explore Our Technology
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div>
              <div className="relative">
                <img 
                  src="https://almadinadiagnostic.com/assets/img/department/Pathology-Lab-Management-Software.jpg" 
                  alt="Modern Medical Technology" 
                  className="w-full rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <Shield className="h-10 w-10" />
                    <div>
                      <p className="font-bold text-xl">99.7%</p>
                      <p className="text-sm text-white/80">Diagnostic Accuracy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 11. News & Blog Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              Latest News
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Stories, Tips & Latest News</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest medical news, health tips, and hospital updates
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Understanding Heart Health: Prevention Tips",
                excerpt: "Learn about the latest research on heart disease prevention and heart-healthy lifestyle choices.",
                date: "May 15, 2023",
                image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Advances in Pediatric Care at Lunaria Hill",
                excerpt: "Discover our new pediatric wing and specialized treatments available for young patients.",
                date: "June 02, 2023",
                image: "https://healthier.stanfordchildrens.org/wp-content/uploads/2022/06/21_1299711083_iStock-scaled.jpg"
              },
              {
                title: "Mental Health Awareness: Seeking Help Early",
                excerpt: "Understanding the importance of mental health and when to consult with healthcare professionals.",
                date: "June 24, 2023",
                image: "https://media.istockphoto.com/id/1470219517/photo/doctor-surgeon-and-neurologist-use-robotic-and-medical-technology-diagnose-and-examine.jpg?s=612x612&w=0&k=20&c=zPmI9WvScFbiM_jzHq3W3uSQD02dnWf2GDs84u1dl7s="
              }
            ].map((article, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-blue-600 text-sm font-medium mb-2">{article.date}</p>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <Link to="/blog">
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/blog">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-lg">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* 12. CTA Section */}
<section className="relative py-20 bg-blue-800 text-white">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('https://media.istockphoto.com/id/593305618/photo/putting-their-skills-to-good-use.jpg?s=612x612&w=0&k=20&c=_5_-dWH79KXUt0GXHgnzswN_rYQoNM425Ru4fPtE5OE=')",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-blue-900/70"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 container mx-auto px-4">
    <div className="max-w-3xl">
      <h2 className="text-4xl font-bold mb-4">Take the First Step to Help</h2>
      <p className="text-xl text-white/90 mb-6">
        Your health is your most valuable asset—don’t put it on hold. Whether you're dealing with a specific concern or just need a routine check-up, our experienced medical professionals are here to provide expert guidance and compassionate care. Contact us today to schedule your appointment and take the first step toward a healthier, more confident you.
      </p>
      <div className="flex flex-wrap items-center gap-6">
        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
          <Calendar className="mr-2 h-5 w-5" />
          Book Appointment
        </Button>
        <div className="flex flex-col">
          <p className="text-sm">Call Lunaria Hill Hospital Now</p>
          <p className="text-2xl font-bold">(123) 456-7890</p>
        </div>
      </div>
    </div>
  </div>
</section>

      
      {/* 13. Footer */}
      <Footer />
      
      {/* Live Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="lg" 
          className="bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg animate-pulse-soft"
        >
          <MessageCircle className="h-6 w-6 mr-2" />
          Live Chat
        </Button>
      </div>
      
      {/* Appointment Dialog */}
      <AppointmentForm 
        open={appointmentDialogOpen} 
        onOpenChange={setAppointmentDialogOpen} 
      />
    </div>
  );
};

export default Index;
