import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AppointmentForm } from '@/components/AppointmentForm';
import { Search, Calendar, Star } from 'lucide-react';

const doctorsData = [
  {
    id: 1,
    name: "Dr. John Smith",
    specialty: "Cardiology",
    image: "https://i.pinimg.com/474x/29/3b/b5/293bb5c342dbb64de73e141c92cc6186.jpg",
    rating: 4.9,
    reviews: 124,
    degrees: ["MBBS", "MD (Cardiology)", "FACC"],
    experience: "15+ years",
    schedule: ["Sun", "Mon", "Thu"]
  },
  {
    id: 2,
    name: "Dr. Emily Johnson",
    specialty: "Neurology",
    image: "https://image1.masterfile.com/getImage/NjQ5LTA2MTY0NjQ3ZW4uMDAwMDAwMDA=AArl4q/649-06164647en_Masterfile.jpg",
    rating: 4.8,
    reviews: 98,
    degrees: ["MBBS", "MD (Neurology)", "DM"],
    experience: "12+ years",
    schedule: ["Tue", "Thu", "Sat"]
  },
];

const specialties = [
  "All Specialties",
  "Cardiology", 
  "Neurology", 
  "Pediatrics", 
  "Orthopedics", 
  "Gynecology", 
  "Dermatology", 
  "Ophthalmology", 
  "ENT"
];

const dayColors = {
  Sun: 'bg-yellow-100 text-yellow-700',
  Mon: 'bg-yellow-100 text-yellow-700',
  Tue: 'bg-yellow-100 text-yellow-700',
  Wed: 'bg-yellow-100 text-yellow-700',
  Thu: 'bg-yellow-100 text-yellow-700',
  Fri: 'bg-yellow-100 text-yellow-700',
  Sat: 'bg-yellow-100 text-yellow-700',
};

const DoctorCard = ({ doctor, onBookAppointment }) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
    <div className="h-64 w-full overflow-hidden">
      <img 
        src={doctor.image} 
        alt={doctor.name}
        className="w-full h-full object-cover object-center"
      />
    </div>
    <CardHeader className="pb-5">
      <CardTitle className="text-lg font-bold text-gray-900">{doctor.name}</CardTitle>
      <p className="text-gray-500 text-sm">{doctor.specialty}</p>
      <p className="text-gray-600 text-sm font-medium">{doctor.degrees.join(', ')}</p>
      
    </CardHeader>
    <CardContent>
      <p className="text-sm font-semibold text-gray-700 mb-1">Availability</p>
      <div className="flex flex-wrap gap-2">
        {doctor.schedule.map(day => (
          <span
            key={day}
            className={`px-3 py-1 rounded-full text-xs font-semibold ${dayColors[day]}`}
          >
            {day}
          </span>
        ))}
      </div>
    </CardContent>
    <CardFooter>
      <Button className="w-full bg-primary-500 hover:bg-primary-600" onClick={onBookAppointment}>
        <Calendar className="mr-2 h-4 w-4" /> Book Appointment
      </Button>
    </CardFooter>
  </Card>
);

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');
  const [appointmentDialogOpen, setAppointmentDialogOpen] = useState(false);

  const handleBookAppointment = () => setAppointmentDialogOpen(true);

  const filteredDoctors = doctorsData.filter(doctor => {
    const nameMatch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const specialtyMatch = selectedSpecialty === 'All Specialties' || doctor.specialty === selectedSpecialty;
    return nameMatch && specialtyMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation onAppointmentClick={handleBookAppointment} />

      <section className="bg-gradient-to-r from-primary-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Our Medical Experts</h1>
          <p className="text-lg max-w-2xl mx-auto animate-fade-in opacity-90" style={{ animationDelay: '0.2s' }}>
            Meet our team of experienced specialists dedicated to providing you with the best healthcare services.
          </p>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-1/3">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search doctor by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {specialties.map(specialty => (
                <Button
                  key={specialty}
                  variant={selectedSpecialty === specialty ? "default" : "outline"}
                  className={selectedSpecialty === specialty ? "bg-primary-500" : ""}
                  onClick={() => setSelectedSpecialty(specialty)}
                >
                  {specialty}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDoctors.map(doctor => (
                <DoctorCard 
                  key={doctor.id} 
                  doctor={doctor} 
                  onBookAppointment={handleBookAppointment} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-gray-700">No doctors found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      <Footer />

      <AppointmentForm 
        open={appointmentDialogOpen} 
        onOpenChange={setAppointmentDialogOpen} 
      />
    </div>
  );
};

export default Doctors;
