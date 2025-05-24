
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MessageCircle, Award, Shield, Clock, Calendar, Heart, Stethoscope, Phone, ArrowRight, CheckCircle, Users, Clipboard, PlusCircle, Zap, Brain, Thermometer, Baby, Eye, Bone } from 'lucide-react';
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-500">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white p-3 rounded-lg">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Opening Hours</h3>
                  <p className="text-gray-600 text-sm">Mon-Fri: 8:00-20:00</p>
                  <p className="text-gray-600 text-sm">Sat-Sun: 9:00-18:00</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-500">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white p-3 rounded-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Contact Info</h3>
                  <p className="text-gray-600 text-sm">Call: (123) 456-7890</p>
                  <p className="text-gray-600 text-sm">info@lunariahill.com</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-500">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white p-3 rounded-lg">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Appointments</h3>
                  <p className="text-gray-600 text-sm">Book Online or Call</p>
                  <p className="text-gray-600 text-sm">24/7 Support Available</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-500">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white p-3 rounded-lg">
                  <Heart className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Emergency Care</h3>
                  <p className="text-gray-600 text-sm">24/7 Emergency Service</p>
                  <p className="text-gray-600 text-sm">Qualified Specialists</p>
                </div>
              </div>
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
                  src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80" 
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
              <div className="mb-8">
                <img 
                  src="https://i.ibb.co/7KnCHX4/signature.png" 
                  alt="Director's Signature" 
                  className="h-16 mb-2"
                />
                <p className="font-medium">Dr. Michael Roberts</p>
                <p className="text-gray-600 text-sm">Chief Medical Director</p>
              </div>
              
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
              { name: "Cardiology", icon: Heart, desc: "Heart care" },
              { name: "Neurology", icon: Brain, desc: "Brain & nerve care" },
              { name: "Pulmonology", icon: Thermometer, desc: "Respiratory care" },
              { name: "Pediatrics", icon: Baby, desc: "Child healthcare" },
              { name: "Ophthalmology", icon: Eye, desc: "Eye care" },
              { name: "Orthopedics", icon: Bone, desc: "Bone & joint care" },
            ].map((dept, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 text-center group">
                <div className="bg-blue-500 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                  <dept.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-1">{dept.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{dept.desc}</p>
                <Button variant="link" className="text-blue-500 p-0 hover:text-blue-700">
                  Learn More
                </Button>
              </div>
            ))}
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
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3" 
                    alt="Advanced Medical Equipment" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3" 
                    alt="Surgery Room" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden col-span-2">
                  <img 
                    src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3" 
                    alt="Medical Consultation" 
                    className="w-full h-72 object-cover"
                  />
                </div>
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
              
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
                Discover Our Approach
              </Button>
            </div>
            
            <div className="relative hidden md:block">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3" 
                  alt="Innovative Medical Technology" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute top-1/2 -left-10 transform -translate-y-1/2 bg-white rounded-xl p-6 shadow-xl w-60">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="font-bold text-gray-800">8,500+</p>
                </div>
                <p className="text-gray-600">Patients helped annually with innovative treatments</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 7. Qualified Doctors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              Qualified Doctors
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Group of Certified and Experienced Doctors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our skilled medical professionals bring years of specialized experience to provide you with exceptional care
            </p>
          </div>
          
          <Tabs defaultValue="all" className="w-full mb-10">
            <TabsList className="w-full max-w-md mx-auto flex justify-center mb-6">
              <TabsTrigger value="all" className="flex-1">All Doctors</TabsTrigger>
              <TabsTrigger value="cardio" className="flex-1">Cardiologists</TabsTrigger>
              <TabsTrigger value="neuro" className="flex-1">Neurologists</TabsTrigger>
              <TabsTrigger value="pedia" className="flex-1">Pediatricians</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="grid md:grid-cols-4 gap-8 mt-8">
              {[
                {
                  name: "Dr. Sarah Johnson",
                  specialty: "Cardiologist",
                  image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                },
                {
                  name: "Dr. Michael Chen",
                  specialty: "Neurologist",
                  image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                },
                {
                  name: "Dr. Emily Davis",
                  specialty: "Pediatrician",
                  image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                },
                {
                  name: "Dr. James Wilson",
                  specialty: "Orthopedic Surgeon",
                  image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                }
              ].map((doctor, idx) => (
                <div key={idx} className="group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="relative overflow-hidden">
                      <img 
                        src={doctor.image} 
                        alt={doctor.name} 
                        className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
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
            </TabsContent>
            
            <TabsContent value="cardio" className="grid md:grid-cols-4 gap-8 mt-8">
              {/* Content for cardiologists tab */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3" 
                    alt="Dr. Sarah Johnson" 
                    className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">Dr. Sarah Johnson</h3>
                  <p className="text-blue-600 font-medium">Cardiologist</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="neuro" className="grid md:grid-cols-4 gap-8 mt-8">
              {/* Content for neurologists tab */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3" 
                    alt="Dr. Michael Chen" 
                    className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">Dr. Michael Chen</h3>
                  <p className="text-blue-600 font-medium">Neurologist</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="pedia" className="grid md:grid-cols-4 gap-8 mt-8">
              {/* Content for pediatricians tab */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3" 
                    alt="Dr. Emily Davis" 
                    className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">Dr. Emily Davis</h3>
                  <p className="text-blue-600 font-medium">Pediatrician</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center">
            <Link to="/doctors">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-lg">
                View All Doctors
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* 8. Testimonials Section */}
      <TestimonialsSection />
      
      {/* 9. Medical Specialists Section - Duplicating doctor section with different title to match reference */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              Our Team
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Medical Specialists</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our team of experienced healthcare professionals dedicated to your wellbeing
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Lisa Martinez",
                specialty: "Chief Surgeon",
                image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                name: "Dr. Robert Taylor",
                specialty: "Dermatologist",
                image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                name: "Dr. Jennifer Adams",
                specialty: "Oncologist",
                image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                name: "Dr. Daniel Wright",
                specialty: "Radiologist",
                image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              }
            ].map((doctor, idx) => (
              <div key={idx} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative overflow-hidden">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name} 
                      className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
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
                  src="https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?ixlib=rb-4.0.3" 
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
                image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Mental Health Awareness: Seeking Help Early",
                excerpt: "Understanding the importance of mental health and when to consult with healthcare professionals.",
                date: "June 24, 2023",
                image: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
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
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">Take the First Step to Help</h2>
              <p className="text-xl text-white/90 mb-6">
                Don't wait to address your health concerns. Contact us today to schedule an appointment with our expert medical team.
              </p>
              <div className="flex items-center gap-4">
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
            
            <div className="relative hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3" 
                alt="Doctor with Patient" 
                className="w-full rounded-xl shadow-lg"
              />
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
