import {
  User,
  UserRole,
  HospitalStats,
  Department,
  Staff,
  Appointment,
  Patient,
  QueueItem,
  Prescription,
  Invoice,
  AuditLog
} from '@/types/dashboard';

// Seed Initial Data
const SEED_USERS: User[] = [
  {
    id: "usr-admin",
    email: "admin@lunariahill.com",
    name: "Dr. Eleanor Vance",
    role: "admin",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300",
    title: "Hospital Medical Director",
    department: "Administration",
    phone: "+1 (555) 019-2831"
  },
  {
    id: "usr-doctor",
    email: "doctor.sarah@lunariahill.com",
    name: "Dr. Sarah Jenkins",
    role: "doctor",
    avatar: "https://images.unsplash.com/photo-1594824813580-78a48b596d66?auto=format&fit=crop&q=80&w=300",
    title: "Senior Interventional Cardiologist",
    department: "Cardiology",
    phone: "+1 (555) 014-9922",
    room: "OPD Suite 304",
    consultationFee: 120
  },
  {
    id: "usr-patient",
    email: "patient@lunariahill.com",
    name: "Johnathan Doe",
    role: "patient",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
    title: "Registered Patient",
    phone: "+1 (555) 382-9901",
    bloodGroup: "O+",
    age: 34,
    gender: "Male",
    emergencyContact: "Jane Doe (+1 555-382-9902)"
  },
  {
    id: "usr-reception",
    email: "reception@lunariahill.com",
    name: "Marcus Sterling",
    role: "receptionist",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
    title: "Chief Front Desk & Patient Relations Officer",
    department: "Front Office & OPD Triage",
    phone: "+1 (555) 018-4455"
  }
];

const SEED_STATS: HospitalStats = {
  totalPatients: 3840,
  totalDoctors: 64,
  todayAppointments: 142,
  totalBeds: 450,
  occupiedBeds: 372,
  occupancyRate: 82.6,
  icuAvailable: 8,
  monthlyRevenue: 482500,
  revenueGrowth: "+14.8%"
};

const SEED_DEPARTMENTS: Department[] = [
  { id: "dept-1", name: "Cardiology & Vascular", head: "Dr. Sarah Jenkins", doctorsCount: 12, beds: 60, occupancy: 88, status: "Active" },
  { id: "dept-2", name: "Neurology & Brain Center", head: "Dr. Aris Thorne", doctorsCount: 8, beds: 45, occupancy: 76, status: "Active" },
  { id: "dept-3", name: "Pediatrics & Neonatal", head: "Dr. Maya Patel", doctorsCount: 10, beds: 50, occupancy: 82, status: "Active" },
  { id: "dept-4", name: "Orthopedics & Joint Clinic", head: "Dr. Marcus Brody", doctorsCount: 9, beds: 55, occupancy: 91, status: "Active" },
  { id: "dept-5", name: "Emergency & Trauma 24/7", head: "Dr. James Wilson", doctorsCount: 15, beds: 40, occupancy: 95, status: "Critical Demand" },
  { id: "dept-6", name: "Oncology & Chemotherapy", head: "Dr. Elena Rostova", doctorsCount: 7, beds: 35, occupancy: 71, status: "Active" }
];

const SEED_STAFF: Staff[] = [
  { id: "st-1", name: "Dr. Sarah Jenkins", role: "Doctor", department: "Cardiology", status: "On Duty", shift: "Morning (8 AM - 4 PM)", email: "doctor.sarah@lunariahill.com" },
  { id: "st-2", name: "Dr. Aris Thorne", role: "Doctor", department: "Neurology", status: "In Surgery", shift: "Day (10 AM - 6 PM)", email: "dr.thorne@lunariahill.com" },
  { id: "st-3", name: "Nurse Claire Bennett", role: "Head Nurse", department: "ICU", status: "On Duty", shift: "Night (8 PM - 8 AM)", email: "c.bennett@lunariahill.com" },
  { id: "st-4", name: "Marcus Sterling", role: "Receptionist", department: "Front Desk", status: "On Duty", shift: "Morning (7 AM - 3 PM)", email: "reception@lunariahill.com" },
  { id: "st-5", name: "Emily Watson", role: "Lab Technician", department: "Pathology", status: "On Duty", shift: "General (9 AM - 5 PM)", email: "e.watson@lunariahill.com" }
];

const SEED_APPOINTMENTS: Appointment[] = [
  {
    id: "apt-101",
    patientName: "Johnathan Doe",
    patientId: "P-10023",
    doctorName: "Dr. Sarah Jenkins",
    department: "Cardiology",
    date: "2026-11-21",
    time: "10:30 AM",
    room: "OPD-304",
    type: "Follow-up",
    status: "In Consultation",
    fee: 120,
    symptoms: "Mild chest tightness upon morning exertion"
  },
  {
    id: "apt-102",
    patientName: "Emma Thompson",
    patientId: "P-10045",
    doctorName: "Dr. Sarah Jenkins",
    department: "Cardiology",
    date: "2026-11-21",
    time: "11:15 AM",
    room: "OPD-304",
    type: "Consultation",
    status: "Waiting",
    fee: 120,
    symptoms: "Routine cardiovascular checkup post angioplasty"
  },
  {
    id: "apt-103",
    patientName: "Michael Chang",
    patientId: "P-10088",
    doctorName: "Dr. Sarah Jenkins",
    department: "Cardiology",
    date: "2026-11-21",
    time: "02:00 PM",
    room: "OPD-304",
    type: "Diagnostics",
    status: "Scheduled",
    fee: 150,
    symptoms: "Holter ECG monitoring evaluation"
  },
  {
    id: "apt-104",
    patientName: "Sophia Ramirez",
    patientId: "P-10102",
    doctorName: "Dr. Aris Thorne",
    department: "Neurology",
    date: "2026-11-21",
    time: "09:00 AM",
    room: "OPD-210",
    type: "Consultation",
    status: "Completed",
    fee: 140,
    symptoms: "Migraine aura with photophobia"
  },
  {
    id: "apt-105",
    patientName: "Liam Johnson",
    patientId: "P-10115",
    doctorName: "Dr. Maya Patel",
    department: "Pediatrics",
    date: "2026-11-21",
    time: "01:30 PM",
    room: "OPD-105",
    type: "Vaccination",
    status: "Scheduled",
    fee: 90,
    symptoms: "Yearly booster immunization"
  }
];

const SEED_PATIENTS: Patient[] = [
  {
    id: "P-10023",
    name: "Johnathan Doe",
    age: 34,
    gender: "Male",
    bloodGroup: "O+",
    phone: "+1 (555) 382-9901",
    email: "patient@lunariahill.com",
    allergies: ["Penicillin", "Dust Mites"],
    chronic: ["Mild Hypertension"],
    lastVisit: "2026-10-18",
    totalVisits: 6
  },
  {
    id: "P-10045",
    name: "Emma Thompson",
    age: 52,
    gender: "Female",
    bloodGroup: "A+",
    phone: "+1 (555) 492-1102",
    email: "e.thompson@gmail.com",
    allergies: ["None"],
    chronic: ["Coronary Artery Disease"],
    lastVisit: "2026-11-04",
    totalVisits: 14
  },
  {
    id: "P-10088",
    name: "Michael Chang",
    age: 41,
    gender: "Male",
    bloodGroup: "B+",
    phone: "+1 (555) 673-4019",
    email: "m.chang@yahoo.com",
    allergies: ["Sulfa Drugs"],
    chronic: ["Arrhythmia"],
    lastVisit: "2026-11-12",
    totalVisits: 4
  },
  {
    id: "P-10102",
    name: "Sophia Ramirez",
    age: 28,
    gender: "Female",
    bloodGroup: "AB-",
    phone: "+1 (555) 882-7714",
    email: "sophia.r@techcorp.io",
    allergies: ["Aspirin"],
    chronic: ["Chronic Migraine"],
    lastVisit: "2026-11-21",
    totalVisits: 8
  }
];

const SEED_QUEUE: QueueItem[] = [
  { token: "T-101", patientName: "Johnathan Doe", patientId: "P-10023", doctorName: "Dr. Sarah Jenkins", room: "OPD-304", status: "With Doctor", checkInTime: "10:15 AM", priority: "Normal" },
  { token: "T-102", patientName: "Emma Thompson", patientId: "P-10045", doctorName: "Dr. Sarah Jenkins", room: "OPD-304", status: "Waiting", checkInTime: "10:48 AM", priority: "Normal" },
  { token: "T-103", patientName: "David Miller", patientId: "P-10140", doctorName: "Dr. James Wilson", room: "ER-Triage", status: "With Doctor", checkInTime: "10:55 AM", priority: "Emergency" },
  { token: "T-104", patientName: "Sophia Ramirez", patientId: "P-10102", doctorName: "Dr. Aris Thorne", room: "OPD-210", status: "Completed", checkInTime: "08:45 AM", priority: "Normal" },
  { token: "T-105", patientName: "Liam Johnson", patientId: "P-10115", doctorName: "Dr. Maya Patel", room: "OPD-105", status: "Waiting", checkInTime: "11:05 AM", priority: "Normal" }
];

const SEED_PRESCRIPTIONS: Prescription[] = [
  {
    id: "rx-801",
    patientName: "Johnathan Doe",
    doctorName: "Dr. Sarah Jenkins",
    department: "Cardiology",
    date: "2026-11-21",
    diagnosis: "Stage-1 Essential Hypertension, Sinus Tachycardia",
    medicines: [
      { name: "Amlodipine Besylate", dosage: "5 mg", frequency: "Once daily (Morning)", duration: "30 Days" },
      { name: "Atorvastatin Calcium", dosage: "10 mg", frequency: "Once daily (Night)", duration: "30 Days" },
      { name: "Coenzyme Q10", dosage: "100 mg", frequency: "Once daily after meals", duration: "60 Days" }
    ],
    advice: "Low sodium diet (<2.3g/day), 30 minutes brisk walking daily, follow up in 4 weeks with lipid profile report."
  },
  {
    id: "rx-789",
    patientName: "Sophia Ramirez",
    doctorName: "Dr. Aris Thorne",
    department: "Neurology",
    date: "2026-11-21",
    diagnosis: "Episodic Migraine without Aura",
    medicines: [
      { name: "Zolmitriptan", dosage: "2.5 mg", frequency: "At onset of headache attack", duration: "As needed (Max 2/day)" },
      { name: "Magnesium Glycinate", dosage: "400 mg", frequency: "Nightly before sleep", duration: "90 Days" }
    ],
    advice: "Maintain hydration, keep sleep wake cycle regular, avoid blue screen light after 10 PM."
  }
];

const SEED_INVOICES: Invoice[] = [
  {
    id: "INV-2026-091",
    patientName: "Johnathan Doe",
    patientId: "P-10023",
    date: "2026-11-21",
    services: "Specialist OPD Cardiology Consultation + ECG Trace",
    amount: 165,
    paid: 165,
    status: "Paid",
    method: "Credit Card"
  },
  {
    id: "INV-2026-088",
    patientName: "Emma Thompson",
    patientId: "P-10045",
    date: "2026-11-21",
    services: "Cardiac Ultrasound (Echocardiogram 2D)",
    amount: 320,
    paid: 0,
    status: "Pending",
    method: "Insurance TPA Claim"
  },
  {
    id: "INV-2026-074",
    patientName: "Michael Chang",
    patientId: "P-10088",
    date: "2026-11-19",
    services: "Comprehensive Lipid Panel & Blood Chemistry",
    amount: 140,
    paid: 140,
    status: "Paid",
    method: "Cash"
  }
];

const SEED_LOGS: AuditLog[] = [
  { id: "log-1", timestamp: "2026-11-21 10:15:32", user: "Marcus Sterling", role: "Receptionist", action: "Checked in patient Johnathan Doe (T-101) to OPD-304" },
  { id: "log-2", timestamp: "2026-11-21 10:02:14", user: "Dr. Sarah Jenkins", role: "Doctor", action: "Prescribed medication for patient Sophia Ramirez (rx-789)" },
  { id: "log-3", timestamp: "2026-11-21 09:40:55", user: "Dr. Eleanor Vance", role: "Admin", action: "Updated Emergency bed capacity to 40 units" },
  { id: "log-4", timestamp: "2026-11-21 09:12:10", user: "System Auto-Sync", role: "System", action: "Automated night database backup completed successfully" }
];

// --- PERSISTENT CLIENT-SIDE DATA STORE ---
interface LocalHospitalDB {
  stats: HospitalStats;
  departments: Department[];
  staff: Staff[];
  appointments: Appointment[];
  patients: Patient[];
  queue: QueueItem[];
  prescriptions: Prescription[];
  invoices: Invoice[];
  logs: AuditLog[];
}

const STORAGE_KEY = 'lunaria_hospital_live_db';

const getPersistentDB = (): LocalHospitalDB => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {}

  const initialDB: LocalHospitalDB = {
    stats: SEED_STATS,
    departments: SEED_DEPARTMENTS,
    staff: SEED_STAFF,
    appointments: SEED_APPOINTMENTS,
    patients: SEED_PATIENTS,
    queue: SEED_QUEUE,
    prescriptions: SEED_PRESCRIPTIONS,
    invoices: SEED_INVOICES,
    logs: SEED_LOGS,
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialDB));
  } catch (e) {}
  return initialDB;
};

const savePersistentDB = (db: LocalHospitalDB) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
  } catch (e) {}
};

// Helper to fetch with timeout and fallback
async function fetchWithFallback<T>(url: string, options?: RequestInit, fallbackData?: () => T): Promise<T> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);
    const res = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(timeoutId);
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {}
  return fallbackData ? fallbackData() : (undefined as unknown as T);
}

export const hospitalApi = {
  // Auth
  async login(email?: string, password?: string, roleDemo?: UserRole): Promise<{ success: boolean; user: User }> {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, roleDemo })
      });
      if (res.ok) {
        return await res.json();
      }
    } catch (err) {}

    // Fallback demo login
    if (roleDemo) {
      const user = SEED_USERS.find(u => u.role === roleDemo) || SEED_USERS[0];
      return { success: true, user };
    }
    const user = SEED_USERS.find(u => u.email === email) || SEED_USERS[0];
    return { success: true, user };
  },

  // Admin
  async getAdminOverview() {
    return fetchWithFallback('/api/admin/overview', undefined, () => {
      const db = getPersistentDB();
      return {
        stats: db.stats,
        departments: db.departments,
        recentAppointments: db.appointments.slice(0, 5),
        recentLogs: db.logs
      };
    });
  },

  async getDepartments(): Promise<Department[]> {
    return fetchWithFallback('/api/admin/departments', undefined, () => getPersistentDB().departments);
  },

  async addDepartment(dept: Partial<Department>): Promise<Department> {
    const newDept: Department = {
      id: `dept-${Date.now().toString().slice(-4)}`,
      name: dept.name || 'New Unit',
      head: dept.head || 'To be assigned',
      doctorsCount: dept.doctorsCount || 5,
      beds: dept.beds || 30,
      occupancy: dept.occupancy || 50,
      status: 'Active'
    };
    return fetchWithFallback('/api/admin/departments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newDept)
    }, () => {
      const db = getPersistentDB();
      db.departments.push(newDept);
      savePersistentDB(db);
      return newDept;
    });
  },

  async getStaff(): Promise<Staff[]> {
    return fetchWithFallback('/api/admin/staff', undefined, () => getPersistentDB().staff);
  },

  async addStaff(staff: Partial<Staff>): Promise<Staff> {
    const newStaff: Staff = {
      id: `st-${Date.now().toString().slice(-4)}`,
      name: staff.name || 'New Member',
      role: staff.role || 'Staff',
      department: staff.department || 'General',
      status: 'On Duty',
      shift: staff.shift || 'Day Shift',
      email: staff.email || 'staff@lunariahill.com'
    };
    return fetchWithFallback('/api/admin/staff', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newStaff)
    }, () => {
      const db = getPersistentDB();
      db.staff.push(newStaff);
      savePersistentDB(db);
      return newStaff;
    });
  },

  async getAuditLogs(): Promise<AuditLog[]> {
    return fetchWithFallback('/api/admin/audit-logs', undefined, () => getPersistentDB().logs);
  },

  // Doctor
  async getDoctorAppointments(): Promise<Appointment[]> {
    return fetchWithFallback('/api/doctor/appointments', undefined, () => getPersistentDB().appointments);
  },

  async updateAppointmentStatus(id: string, status: Appointment['status']) {
    return fetchWithFallback(`/api/doctor/appointments/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    }, () => {
      const db = getPersistentDB();
      const apt = db.appointments.find(a => a.id === id);
      if (apt) {
        apt.status = status;
        // Synchronize corresponding queue item if exists
        const qItem = db.queue.find(q => q.patientId === apt.patientId || q.patientName === apt.patientName);
        if (qItem) {
          if (status === 'In Consultation') qItem.status = 'With Doctor';
          if (status === 'Completed') qItem.status = 'Completed';
          if (status === 'Waiting') qItem.status = 'Waiting';
        }
        db.logs.unshift({
          id: `log-${Date.now()}`,
          timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19),
          user: 'Dr. Sarah Jenkins',
          role: 'Doctor',
          action: `Consultation status for ${apt.patientName} updated to ${status}`
        });
        savePersistentDB(db);
      }
      return { success: true, id, status };
    });
  },

  async getPatients(): Promise<Patient[]> {
    return fetchWithFallback('/api/doctor/patients', undefined, () => getPersistentDB().patients);
  },

  async createPrescription(prescription: Partial<Prescription>): Promise<Prescription> {
    const newRx: Prescription = {
      id: `rx-${Date.now().toString().slice(-4)}`,
      date: new Date().toISOString().slice(0, 10),
      patientName: prescription.patientName || 'Patient',
      doctorName: prescription.doctorName || 'Dr. Sarah Jenkins',
      department: prescription.department || 'Cardiology',
      diagnosis: prescription.diagnosis || 'Clinical Consultation',
      medicines: prescription.medicines || [],
      advice: prescription.advice || 'Follow medication schedule strictly.'
    };
    return fetchWithFallback('/api/doctor/prescriptions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRx)
    }, () => {
      const db = getPersistentDB();
      db.prescriptions.unshift(newRx);
      db.logs.unshift({
        id: `log-${Date.now()}`,
        timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19),
        user: newRx.doctorName,
        role: 'Doctor',
        action: `Issued digital Rx #${newRx.id} for ${newRx.patientName}`
      });
      savePersistentDB(db);
      return newRx;
    });
  },

  // Patient
  async getPatientAppointments(): Promise<Appointment[]> {
    return fetchWithFallback('/api/patient/appointments', undefined, () => {
      const db = getPersistentDB();
      return db.appointments.filter(a => a.patientName === 'Johnathan Doe');
    });
  },

  async bookAppointment(appointment: Partial<Appointment>): Promise<Appointment> {
    const newApt: Appointment = {
      id: `apt-${Date.now().toString().slice(-4)}`,
      patientName: appointment.patientName || 'Johnathan Doe',
      patientId: appointment.patientId || 'P-10023',
      doctorName: appointment.doctorName || 'Dr. Sarah Jenkins',
      department: appointment.department || 'Cardiology',
      date: appointment.date || new Date().toISOString().slice(0, 10),
      time: appointment.time || '10:00 AM',
      room: appointment.room || 'OPD-304',
      type: appointment.type || 'Consultation',
      status: 'Scheduled',
      fee: appointment.fee || 120,
      symptoms: appointment.symptoms || 'General clinical checkup'
    };
    return fetchWithFallback('/api/patient/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newApt)
    }, () => {
      const db = getPersistentDB();
      db.appointments.unshift(newApt);
      db.stats.todayAppointments += 1;
      savePersistentDB(db);
      return newApt;
    });
  },

  async getPrescriptions(): Promise<Prescription[]> {
    return fetchWithFallback('/api/patient/prescriptions', undefined, () => getPersistentDB().prescriptions);
  },

  async getInvoices(): Promise<Invoice[]> {
    return fetchWithFallback('/api/patient/bills', undefined, () => getPersistentDB().invoices);
  },

  async payInvoice(id: string, method: string) {
    return fetchWithFallback(`/api/patient/bills/${id}/pay`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ method })
    }, () => {
      const db = getPersistentDB();
      const inv = db.invoices.find(i => i.id === id);
      if (inv) {
        inv.status = 'Paid';
        inv.paid = inv.amount;
        inv.method = method || 'Online Payment';
        savePersistentDB(db);
      }
      return { success: true, id, status: 'Paid' };
    });
  },

  // Receptionist
  async getQueue(): Promise<QueueItem[]> {
    return fetchWithFallback('/api/reception/queue', undefined, () => getPersistentDB().queue);
  },

  async updateQueueStatus(token: string, status: QueueItem['status']) {
    return fetchWithFallback(`/api/reception/queue/${token}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    }, () => {
      const db = getPersistentDB();
      const item = db.queue.find(q => q.token === token);
      if (item) {
        item.status = status;
        // Synchronize corresponding appointment status
        const apt = db.appointments.find(a => a.patientId === item.patientId || a.patientName === item.patientName);
        if (apt) {
          if (status === 'With Doctor') apt.status = 'In Consultation';
          if (status === 'Completed') apt.status = 'Completed';
          if (status === 'Waiting') apt.status = 'Waiting';
        }
        db.logs.unshift({
          id: `log-${Date.now()}`,
          timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19),
          user: 'Marcus Sterling',
          role: 'Receptionist',
          action: `Queue Token ${token} (${item.patientName}) updated to ${status}`
        });
        savePersistentDB(db);
      }
      return { success: true, token, status };
    });
  },

  async registerPatient(data: any): Promise<{ patient: Patient; queue: QueueItem }> {
    const patientId = `P-${Date.now().toString().slice(-5)}`;
    const patient: Patient = {
      id: patientId,
      name: data.name,
      age: Number(data.age) || 30,
      gender: data.gender || 'Other',
      bloodGroup: data.bloodGroup || 'Unknown',
      phone: data.phone || '',
      email: data.email || '',
      allergies: data.allergies ? [data.allergies] : ['None documented'],
      chronic: data.chronic ? [data.chronic] : ['None'],
      lastVisit: new Date().toISOString().slice(0, 10),
      totalVisits: 1
    };

    const cleanDocName = (data.assignedDoctor || 'Dr. Sarah Jenkins').split(' (')[0];
    const cleanDept = (data.assignedDoctor || 'Cardiology').split('(')[1]?.replace(')', '') || 'Cardiology';

    const queue: QueueItem = {
      token: `T-${Math.floor(Math.random() * 800 + 100)}`,
      patientName: patient.name,
      patientId: patient.id,
      doctorName: cleanDocName,
      room: data.assignedRoom || (cleanDocName.includes('Sarah') ? 'OPD-304' : 'OPD-210'),
      status: 'Waiting',
      checkInTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      priority: data.priority || 'Normal'
    };

    // Also automatically create an appointment for the assigned Doctor!
    const newAppointment: Appointment = {
      id: `apt-${Date.now().toString().slice(-4)}`,
      patientName: patient.name,
      patientId: patient.id,
      doctorName: cleanDocName,
      department: cleanDept,
      date: new Date().toISOString().slice(0, 10),
      time: queue.checkInTime,
      room: queue.room,
      type: 'Walk-in Consultation',
      status: 'Waiting',
      fee: 120,
      symptoms: data.priority === 'Emergency' ? 'Emergency walk-in patient' : 'Walk-in OPD patient consultation'
    };

    return fetchWithFallback('/api/reception/register-patient', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }, () => {
      const db = getPersistentDB();
      db.patients.unshift(patient);
      db.queue.unshift(queue);
      db.appointments.unshift(newAppointment);
      db.stats.totalPatients += 1;
      db.stats.todayAppointments += 1;
      db.logs.unshift({
        id: `log-${Date.now()}`,
        timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19),
        user: 'Marcus Sterling',
        role: 'Receptionist',
        action: `Registered walk-in patient ${patient.name} (${queue.token}) assigned to ${cleanDocName}`
      });
      savePersistentDB(db);
      return { patient, queue };
    });
  },

  async createInvoice(invoice: Partial<Invoice>): Promise<Invoice> {
    const newInv: Invoice = {
      id: `INV-2026-${Date.now().toString().slice(-4)}`,
      date: new Date().toISOString().slice(0, 10),
      patientName: invoice.patientName || 'Walk-in Patient',
      patientId: invoice.patientId || 'P-WalkIn',
      services: invoice.services || 'Consultation & Diagnostics',
      amount: invoice.amount || 100,
      paid: invoice.paid || 100,
      status: invoice.status || 'Paid',
      method: invoice.method || 'Cash'
    };
    return fetchWithFallback('/api/reception/invoices', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newInv)
    }, () => {
      const db = getPersistentDB();
      db.invoices.unshift(newInv);
      savePersistentDB(db);
      return newInv;
    });
  }
};
