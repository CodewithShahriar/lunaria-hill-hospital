import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AppointmentForm } from '@/components/AppointmentForm';
import { Search, Calendar, Star, Sparkles, CheckCircle2, Clock, Award, ArrowRight } from 'lucide-react';
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
    degrees: ["MBBS", "MD (Internal Med)", "FACC"],
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
    degrees: ["MBBS", "MD (Neurology)", "DM (Neuro)"],
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
    degrees: ["MBBS", "MD (Medicine)", "DM (Cardio)"],
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
    degrees: ["MBBS", "MD (Medicine)", "DM (Gastro)"],
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
    name: "Dr. Maria Martinez",
    specialty: "Pediatrics",
    image: "https://img.freepik.com/free-photo/doctor-with-lolly-pop-white-background_1368-5865.jpg?ga=GA1.1.653135042.1746913730&semt=ais_hybrid&w=740",
    rating: 4.9,
    reviews: 142,
    degrees: ["MBBS", "MD (Pediatrics)"],
    experience: "12+ years",
    schedule: "Mon, Wed, Fri"
  },
  {
    id: 10,
    name: "Dr. Thomas Hall",
    specialty: "Orthopedics",
    image: "https://img.freepik.com/premium-photo/doctor-with-arms-crossed-smiling-camera_13339-122828.jpg?ga=GA1.1.653135042.1746913730&semt=ais_hybrid&w=740",
    rating: 4.8,
    reviews: 165,
    degrees: ["MBBS", "MS (Orthopedics)"],
    experience: "14+ years",
    schedule: "Tue, Thu, Sat"
  },
  {
    id: 11,
    name: "Dr. Nancy Allen",
    specialty: "Gynecology",
    image: "https://img.freepik.com/free-photo/doctor-isolated-white-wall_1157-43224.jpg?ga=GA1.1.653135042.1746913730&semt=ais_hybrid&w=740",
    rating: 4.9,
    reviews: 198,
    degrees: ["MBBS", "MD (Obstetrics & Gyn)"],
    experience: "15+ years",
    schedule: "Mon, Tue, Fri"
  },
  {
    id: 12,
    name: "Dr. William Lee",
    specialty: "Surgery",
    image: "https://img.freepik.com/premium-photo/young-handsome-man-doctor-wearing-eyeglasses-gray_251136-39212.jpg?ga=GA1.1.653135042.1746913730&semt=ais_hybrid&w=740",
    rating: 4.9,
    reviews: 175,
    degrees: ["MBBS", "MS (Surgery)", "FRCS"],
    experience: "17+ years",
    schedule: "Wed, Thu, Sat"
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
  <span className="bg-sky-50 text-sky-700 border border-sky-100 text-[11px] font-semibold mr-1 px-2 py-0.5 rounded-md">
    {day}
  </span>
);

const DoctorCard = ({ doctor, onBookAppointment }: { doctor: any, onBookAppointment: (name: string) => void }) => (
  <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 group flex flex-col justify-between">
    <div>
      <div className="relative h-64 overflow-hidden">
        <img 
          src={doctor.image} 
          alt={doctor.name}
          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-75 group-hover:opacity-85 transition-opacity"></div>

        {/* Rating Pill */}
        <div className="absolute top-3 right-3 glass-card px-2.5 py-1 rounded-full text-xs font-bold text-slate-800 flex items-center gap-1 shadow-sm">
          <Star className="fill-amber-400 text-amber-400 h-3.5 w-3.5" />
          <span>{doctor.rating}</span>
          <span className="text-[10px] text-slate-400 font-normal">({doctor.reviews})</span>
        </div>

        {/* Specialty & Exp badge */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <span className="inline-block px-2.5 py-0.5 rounded-full bg-sky-500/90 text-white font-semibold text-[11px] mb-1">
            {doctor.specialty}
          </span>
          <h3 className="font-bold text-lg text-white font-display leading-tight">
            {doctor.name}
          </h3>
        </div>
      </div>

      <div className="p-5 space-y-3">
        {/* Degrees */}
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1">Qualifications</span>
          <div className="flex flex-wrap gap-1">
            {doctor.degrees.map((deg: string, index: number) => (
              <span key={index} className="bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md text-[11px] font-medium text-slate-700">
                {deg}
              </span>
            ))}
          </div>
        </div>
        
        {/* Weekly Schedule */}
        <div>
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Weekly Clinics</span>
            <span className="text-emerald-600 font-medium text-[11px] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              {doctor.experience}
            </span>
          </div>
          <div className="flex flex-wrap gap-1">
            {doctor.schedule.split(', ').map((day: string, i: number) => (
              <ScheduleTag key={i} day={day} />
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="p-5 pt-0">
      <Button 
        className="w-full bg-sky-50 hover:bg-sky-600 text-sky-700 hover:text-white rounded-xl text-xs font-semibold py-2.5 transition-colors flex items-center justify-center gap-1.5"
        onClick={() => onBookAppointment(doctor.name)}
      >
        <Calendar className="h-3.5 w-3.5" />
        Book Appointment
      </Button>
    </div>
  </div>
);

const Doctors = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');
  const [appointmentDialogOpen, setAppointmentDialogOpen] = useState(false);

  useEffect(() => {
    const department = searchParams.get('department');
    if (department && specialties.includes(department)) {
      setSelectedSpecialty(department);
    }
  }, [searchParams]);

  const handleBookAppointment = (doctorName?: string) => {
    setAppointmentDialogOpen(true);
  };

  const filteredDoctors = doctorsData.filter(doctor => {
    const nameMatch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const specialtyMatch = selectedSpecialty === 'All Specialties' || doctor.specialty === selectedSpecialty;
    return nameMatch && specialtyMatch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navigation onAppointmentClick={() => handleBookAppointment()} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-950 via-sky-950 to-slate-900 text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-6 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            Medical Faculty & Consultants
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display mb-6">
            Our Medical Specialists
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
            Meet our distinguished panel of board-certified physicians, surgeons, and specialists dedicated 
            to delivering world-class, empathetic medical care.
          </p>
          {selectedSpecialty !== 'All Specialties' && (
            <span className="inline-block px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-medium border border-sky-500/30">
              Filtered by: {selectedSpecialty} Department
            </span>
          )}
        </div>
      </section>

      {/* Search and Filter Controls */}
      <section className="py-8 bg-white border-b border-slate-150 sticky top-20 z-30 backdrop-blur-md bg-white/95 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
            
            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search specialist by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-full border-slate-200 bg-slate-50 focus-visible:bg-white text-sm h-11"
              />
            </div>

            {/* Specialty Filter Pills */}
            <div className="flex flex-wrap gap-1.5 justify-center">
              {specialties.map(specialty => (
                <button
                  key={specialty}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedSpecialty === specialty 
                      ? "bg-sky-600 text-white shadow-md shadow-sky-600/20" 
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                  onClick={() => setSelectedSpecialty(specialty)}
                >
                  {specialty}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDoctors.map(doctor => (
                <DoctorCard 
                  key={doctor.id} 
                  doctor={doctor} 
                  onBookAppointment={(name) => handleBookAppointment(name)} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-white rounded-3xl border border-slate-100 max-w-xl mx-auto p-8">
              <h3 className="text-xl font-bold text-slate-800 font-display">No specialists found</h3>
              <p className="text-slate-500 text-sm mt-2 mb-6">
                No doctors matched "{searchTerm}" under {selectedSpecialty}.
              </p>
              <Button 
                variant="outline"
                className="rounded-full"
                onClick={() => { setSearchTerm(''); setSelectedSpecialty('All Specialties'); }}
              >
                Reset Search Filters
              </Button>
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
