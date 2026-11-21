import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Users,
  Clock,
  FileText,
  Activity,
  CheckCircle2,
  AlertCircle,
  Plus,
  Search,
  Sparkles,
  Stethoscope,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { hospitalApi } from '@/services/api';
import { Appointment, Patient, Prescription } from '@/types/dashboard';

interface DoctorDashboardProps {
  activeTab: string;
}

export const DoctorDashboard: React.FC<DoctorDashboardProps> = ({ activeTab }) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatientForEHR, setSelectedPatientForEHR] = useState<Patient | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Prescription Builder State
  const [rxPatientName, setRxPatientName] = useState('Johnathan Doe');
  const [rxDiagnosis, setRxDiagnosis] = useState('');
  const [rxMedicines, setRxMedicines] = useState([
    { name: '', dosage: '', frequency: 'Once daily', duration: '14 Days' }
  ]);
  const [rxAdvice, setRxAdvice] = useState('');
  const [rxSuccess, setRxSuccess] = useState(false);

  // Availability state
  const [dutyStatus, setDutyStatus] = useState<'Active On-Duty' | 'In Emergency Surgery' | 'Break'>('Active On-Duty');
  const [slotDuration, setSlotDuration] = useState('15 Minutes');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const apts = await hospitalApi.getDoctorAppointments();
    setAppointments(apts);
    const pts = await hospitalApi.getPatients();
    setPatients(pts);
  };

  const handleUpdateStatus = async (id: string, status: Appointment['status']) => {
    await hospitalApi.updateAppointmentStatus(id, status);
    setAppointments(appointments.map(a => a.id === id ? { ...a, status } : a));
  };

  const handleAddMedicineRow = () => {
    setRxMedicines([...rxMedicines, { name: '', dosage: '', frequency: 'Once daily', duration: '14 Days' }]);
  };

  const handleMedicineChange = (index: number, field: string, value: string) => {
    const updated = [...rxMedicines];
    updated[index] = { ...updated[index], [field]: value };
    setRxMedicines(updated);
  };

  const handleSavePrescription = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rxDiagnosis) return;
    await hospitalApi.createPrescription({
      patientName: rxPatientName,
      doctorName: 'Dr. Sarah Jenkins',
      department: 'Cardiology',
      diagnosis: rxDiagnosis,
      medicines: rxMedicines.filter(m => m.name.trim() !== ''),
      advice: rxAdvice
    });
    setRxSuccess(true);
    setTimeout(() => {
      setRxSuccess(false);
      setRxDiagnosis('');
      setRxAdvice('');
      setRxMedicines([{ name: '', dosage: '', frequency: 'Once daily', duration: '14 Days' }]);
    }, 2500);
  };

  return (
    <div className="space-y-6">
      {/* HEADER BANNER */}
      <div className="bg-gradient-to-r from-[#005C72] via-[#02316B] to-[#005C72] rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-[#005C72]/15 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-semibold mb-3 border border-white/20">
              <Stethoscope className="w-3.5 h-3.5 text-cyan-300" />
              Clinical Consultation Suite & EHR
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display">
              Doctor Clinical Workspace
            </h1>
            <p className="text-slate-200 text-xs sm:text-sm mt-1 max-w-xl">
              Welcome, Dr. Sarah Jenkins. Review today's outpatient queues, inspect clinical health records, and dispatch digital prescriptions.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              {dutyStatus}
            </span>
          </div>
        </div>
      </div>

      {/* 3 STAT WIDGETS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase">Today's Consultations</span>
            <div className="p-2 bg-blue-50 text-[#02316B] rounded-xl">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <h3 className="text-2xl font-black text-slate-900 font-display">{appointments.length} Patients</h3>
          <p className="text-[11px] text-slate-500 mt-1">Room: OPD Suite 304</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase">Waiting in Queue</span>
            <div className="p-2 bg-amber-50 text-amber-700 rounded-xl">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <h3 className="text-2xl font-black text-amber-700 font-display">
            {appointments.filter(a => a.status === 'Waiting').length} Pending
          </h3>
          <p className="text-[11px] text-slate-500 mt-1">Average wait time: 12 minutes</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase">Completed Consultations</span>
            <div className="p-2 bg-emerald-50 text-emerald-700 rounded-xl">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <h3 className="text-2xl font-black text-emerald-700 font-display">
            {appointments.filter(a => a.status === 'Completed').length} Done
          </h3>
          <p className="text-[11px] text-slate-500 mt-1">Digital prescriptions dispatched</p>
        </div>
      </div>

      {/* TODAY'S APPOINTMENTS TABLE */}
      {(activeTab === 'appointments' || activeTab === 'overview') && (
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="p-5 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-slate-900">Today's Appointment Schedule</h3>
              <p className="text-xs text-slate-500">Live patient stream with real-time consultation status updater</p>
            </div>
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search patient..."
                className="pl-8 h-9 text-xs rounded-xl w-48"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 uppercase tracking-wider font-bold border-b border-slate-200/70">
                <tr>
                  <th className="py-3 px-4">Time</th>
                  <th className="py-3 px-4">Patient Name & ID</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Presenting Symptoms</th>
                  <th className="py-3 px-4">Current Status</th>
                  <th className="py-3 px-4 text-right">Consultation Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {appointments
                  .filter(a => a.patientName.toLowerCase().includes(searchTerm.toLowerCase()))
                  .map((apt) => (
                    <tr key={apt.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-slate-900 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        {apt.time}
                      </td>
                      <td className="py-3.5 px-4">
                        <p className="font-bold text-slate-900">{apt.patientName}</p>
                        <p className="text-[10px] text-slate-500 font-mono">{apt.patientId}</p>
                      </td>
                      <td className="py-3.5 px-4 font-medium text-slate-600">{apt.type}</td>
                      <td className="py-3.5 px-4 max-w-xs text-slate-600 truncate">{apt.symptoms}</td>
                      <td className="py-3.5 px-4">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                            apt.status === 'In Consultation'
                              ? 'bg-blue-50 text-[#02316B] border border-blue-200'
                              : apt.status === 'Waiting'
                              ? 'bg-amber-50 text-amber-700 border border-amber-200'
                              : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          }`}
                        >
                          {apt.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right space-x-1.5">
                        {apt.status !== 'In Consultation' && apt.status !== 'Completed' && (
                          <Button
                            size="sm"
                            onClick={() => handleUpdateStatus(apt.id, 'In Consultation')}
                            className="bg-[#02316B] hover:bg-[#005C72] text-white text-[11px] h-7 px-2.5 rounded-lg"
                          >
                            Call Inside
                          </Button>
                        )}
                        {apt.status === 'In Consultation' && (
                          <Button
                            size="sm"
                            onClick={() => handleUpdateStatus(apt.id, 'Completed')}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] h-7 px-2.5 rounded-lg"
                          >
                            Finish Consult
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* PATIENT LIST & EHR VIEW */}
      {(activeTab === 'patients') && (
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">Assigned Patient Cohort & EHR</h3>
              <p className="text-xs text-slate-500">Access electronic health records, allergy warnings, and visit logs</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 uppercase tracking-wider font-bold border-b border-slate-200/70">
                <tr>
                  <th className="py-3 px-4">Patient Name</th>
                  <th className="py-3 px-4">Age / Gender</th>
                  <th className="py-3 px-4">Blood Group</th>
                  <th className="py-3 px-4">Documented Allergies</th>
                  <th className="py-3 px-4">Chronic History</th>
                  <th className="py-3 px-4 text-right">EHR Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {patients.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      {p.name}
                      <span className="block text-[10px] text-slate-400 font-mono">{p.id}</span>
                    </td>
                    <td className="py-3.5 px-4">{p.age} yrs • {p.gender}</td>
                    <td className="py-3.5 px-4 font-bold text-primary">{p.bloodGroup}</td>
                    <td className="py-3.5 px-4">
                      {p.allergies.map((a, i) => (
                        <span key={i} className="inline-block bg-red-50 text-red-700 border border-red-200 text-[10px] font-semibold px-2 py-0.5 rounded mr-1">
                          {a}
                        </span>
                      ))}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600">{p.chronic.join(', ')}</td>
                    <td className="py-3.5 px-4 text-right">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setSelectedPatientForEHR(p)}
                        className="text-[11px] h-7 px-2.5 rounded-lg border-slate-200"
                      >
                        Inspect Record
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* PRESCRIPTION BUILDER VIEW */}
      {(activeTab === 'prescription') && (
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Interactive Digital Rx Prescription Builder</h3>
              <p className="text-xs text-slate-500">Draft compliant digital prescriptions with automated dosages and instructions</p>
            </div>
            {rxSuccess && (
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Prescription Dispatched!
              </span>
            )}
          </div>

          <form onSubmit={handleSavePrescription} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Patient Full Name</label>
                <Input
                  value={rxPatientName}
                  onChange={(e) => setRxPatientName(e.target.value)}
                  placeholder="e.g., Johnathan Doe"
                  required
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Clinical Diagnosis</label>
                <Input
                  value={rxDiagnosis}
                  onChange={(e) => setRxDiagnosis(e.target.value)}
                  placeholder="e.g., Stage-1 Hypertension with Sinus Rhythm"
                  required
                  className="rounded-xl"
                />
              </div>
            </div>

            {/* MEDICINES ROWS */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Medication Formulation & Dosing
                </label>
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={handleAddMedicineRow}
                  className="text-xs h-7 rounded-lg flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Drug
                </Button>
              </div>

              <div className="space-y-3">
                {rxMedicines.map((med, idx) => (
                  <div key={idx} className="grid grid-cols-1 sm:grid-cols-4 gap-2 bg-slate-50/70 p-3 rounded-xl border border-slate-200/60">
                    <Input
                      placeholder="Drug / Generic Name (e.g. Amlodipine)"
                      value={med.name}
                      onChange={(e) => handleMedicineChange(idx, 'name', e.target.value)}
                      className="rounded-lg text-xs bg-white"
                      required
                    />
                    <Input
                      placeholder="Dosage (e.g. 5 mg)"
                      value={med.dosage}
                      onChange={(e) => handleMedicineChange(idx, 'dosage', e.target.value)}
                      className="rounded-lg text-xs bg-white"
                    />
                    <Input
                      placeholder="Frequency (e.g. Once Daily - Morning)"
                      value={med.frequency}
                      onChange={(e) => handleMedicineChange(idx, 'frequency', e.target.value)}
                      className="rounded-lg text-xs bg-white"
                    />
                    <Input
                      placeholder="Duration (e.g. 30 Days)"
                      value={med.duration}
                      onChange={(e) => handleMedicineChange(idx, 'duration', e.target.value)}
                      className="rounded-lg text-xs bg-white"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Special Clinical Advice / Dietary Warnings</label>
              <textarea
                value={rxAdvice}
                onChange={(e) => setRxAdvice(e.target.value)}
                placeholder="e.g., Low sodium intake (<2g/day), avoid strenuous lifting, repeat lipid panel in 4 weeks."
                rows={3}
                className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-slate-50/50"
              />
            </div>

            <div className="flex justify-end pt-2">
              <Button type="submit" className="bg-gradient-to-r from-[#02316B] to-[#005C72] text-white font-bold px-6 py-2 rounded-xl text-xs shadow-md">
                Generate & Save Prescription
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* AVAILABILITY & SLOTS VIEW */}
      {(activeTab === 'availability') && (
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Physician Availability & Schedule Config</h3>
            <p className="text-xs text-slate-500">Configure clinic hours, emergency on-call status, and slot intervals</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-xs font-bold text-slate-700 uppercase">Current Shift Status</span>
              <div className="space-y-2">
                {(['Active On-Duty', 'In Emergency Surgery', 'Break'] as const).map((status) => (
                  <button
                    key={status}
                    type="button"
                    onClick={() => setDutyStatus(status)}
                    className={`w-full p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                      dutyStatus === status
                        ? 'bg-primary text-white border-primary shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-xs font-bold text-slate-700 uppercase">Consultation Duration Slot</span>
              <div className="space-y-2">
                {['15 Minutes (Standard)', '30 Minutes (Deep Diagnostic)', '45 Minutes (Specialist Review)'].map((dur) => (
                  <button
                    key={dur}
                    type="button"
                    onClick={() => setSlotDuration(dur)}
                    className={`w-full p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                      slotDuration.startsWith(dur.slice(0, 2))
                        ? 'bg-[#005C72] text-white border-[#005C72] shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {dur}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* EHR MODAL */}
      {selectedPatientForEHR && (
        <div className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-bold text-slate-900">{selectedPatientForEHR.name}</h3>
                <p className="text-xs text-slate-500 font-mono">Patient File #{selectedPatientForEHR.id}</p>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                Blood: {selectedPatientForEHR.bloodGroup}
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50 rounded-xl">
                <div>
                  <span className="text-slate-400 block text-[10px]">Age / Sex</span>
                  <span className="font-bold text-slate-800">{selectedPatientForEHR.age} yrs • {selectedPatientForEHR.gender}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Total Recorded Visits</span>
                  <span className="font-bold text-slate-800">{selectedPatientForEHR.totalVisits} visits</span>
                </div>
              </div>

              <div>
                <span className="font-bold text-slate-700 block mb-1">Documented Drug Allergies</span>
                <div className="flex flex-wrap gap-1">
                  {selectedPatientForEHR.allergies.map((a, i) => (
                    <span key={i} className="bg-red-50 text-red-700 border border-red-200 px-2 py-0.5 rounded text-[11px] font-semibold">
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-bold text-slate-700 block mb-1">Chronic Conditions & Comorbidities</span>
                <p className="text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
                  {selectedPatientForEHR.chronic.join(', ')}
                </p>
              </div>
            </div>

            <div className="flex justify-end pt-3">
              <Button onClick={() => setSelectedPatientForEHR(null)} className="rounded-xl text-xs font-bold">
                Close Record
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorDashboard;
