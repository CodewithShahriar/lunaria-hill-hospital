export type UserRole = 'admin' | 'doctor' | 'patient' | 'receptionist';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar: string;
  title: string;
  department?: string;
  phone?: string;
  room?: string;
  consultationFee?: number;
  bloodGroup?: string;
  age?: number;
  gender?: string;
  emergencyContact?: string;
}

export interface HospitalStats {
  totalPatients: number;
  totalDoctors: number;
  todayAppointments: number;
  totalBeds: number;
  occupiedBeds: number;
  occupancyRate: number;
  icuAvailable: number;
  monthlyRevenue: number;
  revenueGrowth: string;
}

export interface Department {
  id: string;
  name: string;
  head: string;
  doctorsCount: number;
  beds: number;
  occupancy: number;
  status: string;
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  department: string;
  status: 'On Duty' | 'In Surgery' | 'On Leave' | 'Off Duty';
  shift: string;
  email: string;
}

export interface Appointment {
  id: string;
  patientName: string;
  patientId: string;
  doctorName: string;
  department: string;
  date: string;
  time: string;
  room: string;
  type: string;
  status: 'Scheduled' | 'Waiting' | 'In Consultation' | 'Completed' | 'Cancelled';
  fee: number;
  symptoms: string;
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  bloodGroup: string;
  phone: string;
  email: string;
  allergies: string[];
  chronic: string[];
  lastVisit: string;
  totalVisits: number;
}

export interface QueueItem {
  token: string;
  patientName: string;
  patientId: string;
  doctorName: string;
  room: string;
  status: 'Waiting' | 'With Doctor' | 'Completed';
  checkInTime: string;
  priority: 'Normal' | 'Urgent' | 'Emergency';
}

export interface MedicineItem {
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
}

export interface Prescription {
  id: string;
  patientName: string;
  doctorName: string;
  department: string;
  date: string;
  diagnosis: string;
  medicines: MedicineItem[];
  advice: string;
}

export interface Invoice {
  id: string;
  patientName: string;
  patientId: string;
  date: string;
  services: string;
  amount: number;
  paid: number;
  status: 'Paid' | 'Pending' | 'Overdue';
  method: string;
}

export interface AuditLog {
  id: string;
  timestamp: string;
  user: string;
  role: string;
  action: string;
}
