import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AppointmentForm } from '@/components/AppointmentForm';
import { Search, Calendar, Star } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

// Doctor data
const doctorsData = [
  {
    id: 1,
    name: "Dr. John Smith",
    specialty: "Medicine",
    image: "https://img.freepik.com/premium-photo/smiling-doctor_13339-567.jpg?w=740",
    rating: 4.9,
    reviews: 124,
    degrees: ["MBBS", "MD (Cardiology)", "FACC"],
    experience: "15+ years",
    schedule: "Mon, Wed, Fri"
  },
  {
    id: 2,
    name: "Dr. Emily Johnson",
    specialty: "Cardiology",
    image: "https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827776.jpg?w=740",
    rating: 4.8,
    reviews: 98,
    degrees: ["MBBS", "MD", "DM (Cardiology)"],
    experience: "12+ years",
    schedule: "Tue, Thu, Sat"
  },
  {
    id: 3,
    name: "Dr. Michael Brown",
    specialty: "Neurology",
    image: "https://img.freepik.com/premium-photo/tell-me-about-your-habits-mature-male-doctor-making-notes-clipboard-looking-camera-with-smile-while-standing-against-grey-background_425904-20099.jpg?ga=GA1.1.653135042.1746913730&semt=ais_hybrid&w=740",
    rating: 4.7,
    reviews: 156,
    degrees: ["MBBS", "MD (Neurology)", "DM (Neuroscience)"],
    experience: "10+ years",
    schedule: "Mon, Tue, Thu"
  },
  {
    id: 4,
    name: "Dr. Sarah Davis",
    specialty: "Medicine",
    image: "https://img.freepik.com/premium-photo/portrait-smiling-female-doctor-standing-with-arms-crossed_107420-77645.jpg?ga=GA1.1.653135042.1746913730&semt=ais_hybrid&w=740",
    rating: 4.9,
    reviews: 210,
    degrees: ["MBBS", "MD (General Medicine)"],
    experience: "14+ years",
    schedule: "Tue, Wed, Fri"
  },
  {
    id: 5,
    name: "Dr. Robert Wilson",
    specialty: "Medicine",
    image: "https://img.freepik.com/free-photo/portrait-candid-male-doctor_329181-611.jpg?ga=GA1.1.653135042.1746913730&semt=ais_hybrid&w=740",
    rating: 4.6,
    reviews: 89,
    degrees: ["MBBS", "MD (Internal Medicine)"],
    experience: "11+ years",
    schedule: "Mon, Thu, Sat"
  },
  {
    id: 6,
    name: "Dr. Jennifer Taylor",
    specialty: "Cardiology",
    image: "https://img.freepik.com/free-photo/i-trying-be-best-doctor_329181-2188.jpg?ga=GA1.1.653135042.1746913730&semt=ais_hybrid&w=740",
    rating: 4.8,
    reviews: 132,
    degrees: ["MBBS", "MD (Medicine)", "DM (Cardiology)"],
    experience: "9+ years",
    schedule: "Wed, Thu, Fri"
  },
  {
    id: 7,
    name: "Dr. David Anderson",
    specialty: "Gastroenterology",
    image: "https://img.freepik.com/free-photo/portrait-candid-female-doctor_329181-2305.jpg?ga=GA1.1.653135042.1746913730&semt=ais_hybrid&w=740",
    rating: 4.7,
    reviews: 104,
    degrees: ["MBBS", "MD (Medicine)", "DM (Gastroenterology)"],
    experience: "13+ years",
    schedule: "Mon, Tue, Sat"
  },
  {
    id: 8,
    name: "Dr. Lisa Thomas",
    specialty: "Neurology",
    image: "https://img.freepik.com/free-photo/close-up-health-worker_23-2149112510.jpg?ga=GA1.1.653135042.1746913730&semt=ais_hybrid&w=740",
    rating: 4.9,
    reviews: 187,
    degrees: ["MBBS", "MD (Neurology)"],
    experience: "16+ years",
    schedule: "Tue, Fri, Sat"
  },
  {
    id: 9,
    name: "Dr. Lisa Thomas",
    specialty: "Pediatrics",
    image: "https://img.freepik.com/free-photo/doctor-with-lolly-pop-white-background_1368-5865.jpg?ga=GA1.1.653135042.1746913730&semt=ais_hybrid&w=740",
    rating: 4.9,
    reviews: 187,
    degrees: ["MBBS", "MD (Pediatrics)"],
    experience: "16+ years",
    schedule: "Tue, Fri, Sat"
  },
  {
    id: 10,
    name: "Dr. Lisa Thomas",
    specialty: "Orthopedics",
    image: "https://img.freepik.com/premium-photo/doctor-with-arms-crossed-smiling-camera_13339-122828.jpg?ga=GA1.1.653135042.1746913730&semt=ais_hybrid&w=740",
    rating: 4.9,
    reviews: 187,
    degrees: ["MBBS", "MS (Orthopedics)"],
    experience: "16+ years",
    schedule: "Tue, Fri, Sat"
  },
  {
    id: 11,
    name: "Dr. Lisa Thomas",
    specialty: "Gynecology",
    image: "https://img.freepik.com/free-photo/doctor-isolated-white-wall_1157-43224.jpg?ga=GA1.1.653135042.1746913730&semt=ais_hybrid&w=740",
    rating: 4.9,
    reviews: 187,
    degrees: ["MBBS", "MD (Obstetrics & Gynecology)"],
    experience: "16+ years",
    schedule: "Tue, Fri, Sat"
  },
  {
    id: 12,
    name: "Dr. Lisa Thomas",
    specialty: "Neurology",
    image: "https://img.freepik.com/premium-photo/young-handsome-man-doctor-wearing-eyeglasses-gray_251136-39212.jpg?ga=GA1.1.653135042.1746913730&semt=ais_hybrid&w=740",
    rating: 4.9,
    reviews: 187,
    degrees: ["MBBS", "MD (Neurology)", "DM (Neurosciences)"],
    experience: "16+ years",
    schedule: "Tue, Fri, Sat"
  }

];

const specialties = [
  "All Specialties",
  "Medicine",
  "Cardiology", 
  "Neurology", 
  "Pediatrics", 
  "Gastroenterology",
  "Surgery",
  "Orthopedics", 
  "Gynecology"
];

const ScheduleTag = ({ day }: { day: string }) => (
  <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-1 px-2 py-0.5 rounded">
    {day}
  </span>
);

const DoctorCard = ({ doctor, onBookAppointment }: { doctor: any, onBookAppointment: () => void }) => (
  <Card className="overflow-hidden hover:shadow-md transition-shadow rounded-2xl">
    <div className="h-80 overflow-hidden">
      <img 
        src={doctor.image} 
        alt={doctor.name}
        className="w-full h-68 object-cover transition-transform hover:scale-105 duration-500"
      />
    </div>
    <CardHeader className="pb-2">
      <div className="flex justify-between items-center">
        <CardTitle className="text-base">{doctor.name}</CardTitle>
        <div className="flex items-center text-yellow-500">
          <Star className="fill-yellow-500 h-4 w-4" />
          <span className="ml-1 text-sm">{doctor.rating}</span>
          <span className="ml-1 text-xs text-gray-400">({doctor.reviews})</span>
        </div>
      </div>
      <CardDescription className="text-primary-600 font-medium">
        {doctor.specialty}
      </CardDescription>
    </CardHeader>
    <CardContent className="text-sm space-y-2 pb-4">
      <div>
        <div className="font-medium mt-1 flex flex-wrap gap-1">
          {doctor.degrees.map((deg: string, index: number) => (
            <span key={index} className="bg-gray-100 px-1 py-0.5 rounded text-xs text-gray-800">
              {deg}
            </span>
          ))}
        </div>
      </div>
      
      <div>
        <span className="text-gray-500">Schedule:</span>
        <div className="mt-1">
          {doctor.schedule.split(', ').map((day: string, i: number) => (
            <ScheduleTag key={i} day={day} />
          ))}
        </div>
      </div>
    </CardContent>
    <CardFooter>
      <Button 
        className="w-full bg-primary-500 hover:bg-primary-600"
        onClick={onBookAppointment}
      >
        <Calendar className="mr-2 h-4 w-4" />
        Book Appointment
      </Button>
    </CardFooter>
  </Card>
);

const Doctors = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');
  const [appointmentDialogOpen, setAppointmentDialogOpen] = useState(false);

  // Get department from URL parameters and set initial filter
  useEffect(() => {
    const department = searchParams.get('department');
    if (department && specialties.includes(department)) {
      setSelectedSpecialty(department);
    }
  }, [searchParams]);

  const handleBookAppointment = () => {
    setAppointmentDialogOpen(true);
  };

  const filteredDoctors = doctorsData.filter(doctor => {
    const nameMatch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const specialtyMatch = selectedSpecialty === 'All Specialties' || doctor.specialty === selectedSpecialty;
    return nameMatch && specialtyMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation onAppointmentClick={handleBookAppointment} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Medical Experts</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Meet our team of experienced specialists dedicated to providing you with the best healthcare services.
          </p>
          {selectedSpecialty !== 'All Specialties' && (
            <p className="text-blue-200 mt-2">Showing doctors from {selectedSpecialty} department</p>
          )}
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-10 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-1/5">
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
                  className={selectedSpecialty === specialty ? "bg-primary-500 text-white" : ""}
                  onClick={() => setSelectedSpecialty(specialty)}
                >
                  {specialty}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
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

      {/* Appointment Dialog */}
      <AppointmentForm 
        open={appointmentDialogOpen} 
        onOpenChange={setAppointmentDialogOpen} 
      />
    </div>
  );
};

export default Doctors;