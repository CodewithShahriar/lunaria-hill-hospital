import React, { useState, useEffect } from 'react';
import {
  Calendar,
  FileText,
  CreditCard,
  Activity,
  Clock,
  CheckCircle2,
  AlertCircle,
  Plus,
  Stethoscope,
  Download,
  Search,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { hospitalApi } from '@/services/api';
import { Appointment, Prescription, Invoice } from '@/types/dashboard';

interface PatientDashboardViewProps {
  activeTab: string;
}

export const PatientDashboardView: React.FC<PatientDashboardViewProps> = ({ activeTab }) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // New Booking State
  const [docName, setDocName] = useState('Dr. Sarah Jenkins (Cardiology)');
  const [aptDate, setAptDate] = useState('2026-11-25');
  const [aptTime, setAptTime] = useState('11:00 AM');
  const [symptoms, setSymptoms] = useState('');

  // Payment State
  const [payingInvoiceId, setPayingInvoiceId] = useState<string | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const apts = await hospitalApi.getPatientAppointments();
    setAppointments(apts);
    const rxs = await hospitalApi.getPrescriptions();
    setPrescriptions(rxs);
    const invs = await hospitalApi.getInvoices();
    setInvoices(invs);
  };

  const handleBookAppointment = async (e: React.FormEvent) => {
    e.preventDefault();
    const docCleanName = docName.split(' (')[0];
    const deptCleanName = docName.split('(')[1]?.replace(')', '') || 'Cardiology';

    const newApt = await hospitalApi.bookAppointment({
      patientName: 'Johnathan Doe',
      patientId: 'P-10023',
      doctorName: docCleanName,
      department: deptCleanName,
      date: aptDate,
      time: aptTime,
      room: 'OPD-304',
      type: 'General Consultation',
      symptoms: symptoms || 'Routine follow-up'
    });

    setAppointments([newApt, ...appointments]);
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setShowBookingModal(false);
      setSymptoms('');
    }, 1500);
  };

  const handlePayInvoice = async (id: string) => {
    setPayingInvoiceId(id);
    await hospitalApi.payInvoice(id, 'Instant Online Payment');
    setInvoices(invoices.map(i => i.id === id ? { ...i, status: 'Paid', paid: i.amount } : i));
    setPayingInvoiceId(null);
  };

  return (
    <div className="space-y-6">
      {/* HEADER BANNER */}
      <div className="bg-gradient-to-r from-[#02316B] via-sky-900 to-[#005C72] rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-sky-950/15 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-semibold mb-3 border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Patient Health & Wellness Portal
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display">
              Welcome Back, Johnathan Doe
            </h1>
            <p className="text-slate-200 text-xs sm:text-sm mt-1 max-w-xl">
              Patient ID: <span className="font-mono font-bold text-white">P-10023</span> • Blood Group: <span className="font-bold text-amber-300">O+</span> • Your next appointment is scheduled today at 10:30 AM.
            </p>
          </div>
          <Button
            onClick={() => setShowBookingModal(true)}
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl text-xs px-5 py-2.5 shadow-md flex items-center gap-1.5"
          >
            <Calendar className="w-4 h-4" /> Book New Appointment
          </Button>
        </div>
      </div>

      {/* 4 STAT WIDGETS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase">Upcoming Visit</span>
            <div className="p-2 bg-blue-50 text-[#02316B] rounded-xl">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-slate-900 font-display">Today @ 10:30 AM</h3>
          <p className="text-[11px] text-slate-500 mt-1">Dr. Sarah Jenkins (Cardiology)</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase">Active Prescriptions</span>
            <div className="p-2 bg-teal-50 text-[#005C72] rounded-xl">
              <FileText className="w-4 h-4" />
            </div>
          </div>
          <h3 className="text-2xl font-black text-slate-900 font-display">3 Medications</h3>
          <p className="text-[11px] text-slate-500 mt-1">Refill due in 18 days</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase">Pending Bills</span>
            <div className="p-2 bg-amber-50 text-amber-700 rounded-xl">
              <CreditCard className="w-4 h-4" />
            </div>
          </div>
          <h3 className="text-2xl font-black text-slate-900 font-display">
            ${invoices.filter(i => i.status === 'Pending').reduce((acc, c) => acc + c.amount, 0)}
          </h3>
          <p className="text-[11px] text-slate-500 mt-1">All other receipts cleared</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase">Diagnostic Reports</span>
            <div className="p-2 bg-emerald-50 text-emerald-700 rounded-xl">
              <Activity className="w-4 h-4" />
            </div>
          </div>
          <h3 className="text-2xl font-black text-emerald-700 font-display">2 Published</h3>
          <p className="text-[11px] text-slate-500 mt-1">ECG & Comprehensive Lipid Panel</p>
        </div>
      </div>

      {/* APPOINTMENT HISTORY / ACTIVE VISITS */}
      {(activeTab === 'overview' || activeTab === 'book') && (
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">My Consultation Schedule</h3>
              <p className="text-xs text-slate-500">Upcoming specialist consultations, room locations, and appointment statuses</p>
            </div>
            <Button
              size="sm"
              onClick={() => setShowBookingModal(true)}
              className="bg-primary text-white text-xs rounded-xl"
            >
              <Plus className="w-3.5 h-3.5 mr-1" /> New Booking
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 uppercase tracking-wider font-bold border-b border-slate-200/70">
                <tr>
                  <th className="py-3 px-4">Date & Time</th>
                  <th className="py-3 px-4">Specialist Doctor</th>
                  <th className="py-3 px-4">Department</th>
                  <th className="py-3 px-4">Room Location</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Consultation Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {appointments.map((apt) => (
                  <tr key={apt.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-slate-900">
                      {apt.date} • {apt.time}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-slate-800">{apt.doctorName}</td>
                    <td className="py-3.5 px-4 font-medium text-primary">{apt.department}</td>
                    <td className="py-3.5 px-4 font-semibold">{apt.room}</td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          apt.status === 'In Consultation'
                            ? 'bg-blue-50 text-[#02316B] border border-blue-200'
                            : apt.status === 'Scheduled'
                            ? 'bg-sky-50 text-sky-700 border border-sky-200'
                            : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        }`}
                      >
                        {apt.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-slate-900">${apt.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* PRESCRIPTIONS & MEDICATION SCHEDULE */}
      {(activeTab === 'overview' || activeTab === 'prescriptions') && (
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
            <div>
              <h3 className="text-base font-bold text-slate-900">Digital Prescriptions & Dosage Timetable</h3>
              <p className="text-xs text-slate-500">Official digital prescriptions issued by your attending specialist</p>
            </div>
          </div>

          <div className="space-y-4">
            {prescriptions.map((rx) => (
              <div key={rx.id} className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200/60 gap-2">
                  <div>
                    <span className="text-xs font-mono font-bold text-primary">Rx #{rx.id}</span>
                    <h4 className="text-sm font-bold text-slate-900 mt-0.5">{rx.diagnosis}</h4>
                    <p className="text-[11px] text-slate-500">Prescribed by {rx.doctorName} ({rx.department}) on {rx.date}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-xs rounded-xl flex items-center gap-1.5 self-start sm:self-center"
                    onClick={() => alert(`Downloading official PDF copy of Rx #${rx.id}`)}
                  >
                    <Download className="w-3.5 h-3.5" /> Download Rx PDF
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {rx.medicines.map((m, i) => (
                    <div key={i} className="p-3 bg-white rounded-xl border border-slate-200/60 shadow-2xs">
                      <p className="text-xs font-bold text-slate-900">{m.name} ({m.dosage})</p>
                      <p className="text-[11px] text-primary font-semibold mt-1">{m.frequency}</p>
                      <p className="text-[10px] text-slate-400">Duration: {m.duration}</p>
                    </div>
                  ))}
                </div>

                {rx.advice && (
                  <p className="text-xs text-slate-600 bg-sky-50/60 border border-sky-100 p-2.5 rounded-xl">
                    <span className="font-bold text-sky-900">Doctor's Clinical Advice:</span> {rx.advice}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* BILLS & PAYMENTS VIEW */}
      {(activeTab === 'billing') && (
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="p-5 sm:p-6 border-b border-slate-100">
            <h3 className="text-base font-bold text-slate-900">Invoices & Payment Receipts</h3>
            <p className="text-xs text-slate-500">Review outstanding bills and make secure 1-click online payments</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 uppercase tracking-wider font-bold border-b border-slate-200/70">
                <tr>
                  <th className="py-3 px-4">Invoice #</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Service Description</th>
                  <th className="py-3 px-4">Amount</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Payment Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {invoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-slate-900">{inv.id}</td>
                    <td className="py-3.5 px-4 font-mono text-slate-500">{inv.date}</td>
                    <td className="py-3.5 px-4 font-medium text-slate-800">{inv.services}</td>
                    <td className="py-3.5 px-4 font-bold text-slate-900">${inv.amount}</td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          inv.status === 'Paid'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-amber-50 text-amber-700 border border-amber-200'
                        }`}
                      >
                        {inv.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      {inv.status === 'Pending' ? (
                        <Button
                          size="sm"
                          disabled={payingInvoiceId === inv.id}
                          onClick={() => handlePayInvoice(inv.id)}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] h-7 px-3 rounded-lg shadow-xs"
                        >
                          {payingInvoiceId === inv.id ? 'Processing...' : 'Pay Now'}
                        </Button>
                      ) : (
                        <span className="text-[11px] font-semibold text-emerald-700">Receipt Cleared</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* MEDICAL RECORDS VIEW */}
      {(activeTab === 'records') && (
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">Verified Electronic Medical Records (EMR)</h3>
            <p className="text-xs text-slate-500">Certified laboratory assays, diagnostic imaging, and vital reports</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono text-primary font-bold">REPORT #LAB-8812</span>
                <h4 className="text-sm font-bold text-slate-900 mt-1">Comprehensive Lipid Profile</h4>
                <p className="text-xs text-slate-500 mt-1">Total Cholesterol: 182 mg/dL • Triglycerides: 135 mg/dL</p>
                <p className="text-[10px] text-emerald-600 font-semibold mt-1">Status: Normal Reference Range</p>
              </div>
              <Button size="sm" variant="outline" className="text-xs rounded-xl" onClick={() => alert('Downloading Lab Report #LAB-8812')}>
                <Download className="w-3.5 h-3.5" />
              </Button>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono text-primary font-bold">REPORT #RAD-4491</span>
                <h4 className="text-sm font-bold text-slate-900 mt-1">12-Lead Electrocardiogram (ECG)</h4>
                <p className="text-xs text-slate-500 mt-1">Sinus rhythm with regular PR interval, no acute ST elevation</p>
                <p className="text-[10px] text-emerald-600 font-semibold mt-1">Verified by Dr. Sarah Jenkins</p>
              </div>
              <Button size="sm" variant="outline" className="text-xs rounded-xl" onClick={() => alert('Downloading ECG Report #RAD-4491')}>
                <Download className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* BOOK APPOINTMENT MODAL */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-1">Book Specialist Consultation</h3>
            <p className="text-xs text-slate-500 mb-4">Select doctor, date, and preferred consultation time slot.</p>
            {bookingSuccess ? (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-emerald-900">Appointment Confirmed!</h4>
                <p className="text-xs text-emerald-700">Your consultation slot has been reserved.</p>
              </div>
            ) : (
              <form onSubmit={handleBookAppointment} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Choose Specialist & Department</label>
                  <select
                    value={docName}
                    onChange={(e) => setDocName(e.target.value)}
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 text-xs bg-white"
                  >
                    <option>Dr. Sarah Jenkins (Cardiology)</option>
                    <option>Dr. Aris Thorne (Neurology)</option>
                    <option>Dr. Maya Patel (Pediatrics)</option>
                    <option>Dr. Marcus Brody (Orthopedics)</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Preferred Date</label>
                    <Input
                      type="date"
                      value={aptDate}
                      onChange={(e) => setAptDate(e.target.value)}
                      required
                      className="rounded-xl text-xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Time Slot</label>
                    <select
                      value={aptTime}
                      onChange={(e) => setAptTime(e.target.value)}
                      className="w-full h-10 px-3 rounded-xl border border-slate-200 text-xs bg-white"
                    >
                      <option>09:30 AM</option>
                      <option>10:30 AM</option>
                      <option>11:00 AM</option>
                      <option>02:00 PM</option>
                      <option>04:30 PM</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Brief Symptoms or Notes</label>
                  <Input
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    placeholder="e.g., Routine blood pressure follow-up"
                    className="rounded-xl text-xs"
                  />
                </div>
                <div className="flex items-center justify-end gap-2 pt-2">
                  <Button type="button" variant="outline" onClick={() => setShowBookingModal(false)} className="rounded-xl text-xs">
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-primary hover:bg-primary/90 text-white rounded-xl text-xs font-bold">
                    Confirm Booking
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientDashboardView;
