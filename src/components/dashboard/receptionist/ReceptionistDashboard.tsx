import React, { useState, useEffect } from 'react';
import {
  ClipboardList,
  Users,
  Calendar,
  CreditCard,
  Plus,
  Search,
  CheckCircle2,
  Clock,
  AlertCircle,
  UserPlus,
  Receipt,
  FileCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { hospitalApi } from '@/services/api';
import { QueueItem, Patient, Invoice } from '@/types/dashboard';

interface ReceptionistDashboardProps {
  activeTab: string;
}

export const ReceptionistDashboard: React.FC<ReceptionistDashboardProps> = ({ activeTab }) => {
  const [queue, setQueue] = useState<QueueItem[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);

  // New Patient Form State
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Male');
  const [phone, setPhone] = useState('');
  const [assignedDoctor, setAssignedDoctor] = useState('Dr. Sarah Jenkins');
  const [priority, setPriority] = useState<'Normal' | 'Urgent' | 'Emergency'>('Normal');

  // New Invoice Form State
  const [invPatientName, setInvPatientName] = useState('');
  const [invServices, setInvServices] = useState('OPD Consultation & Vital Check');
  const [invAmount, setInvAmount] = useState('120');
  const [invMethod, setInvMethod] = useState('Cash');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const q = await hospitalApi.getQueue();
    setQueue(q);
    const invs = await hospitalApi.getInvoices();
    setInvoices(invs);
  };

  const handleUpdateQueueStatus = async (token: string, status: QueueItem['status']) => {
    await hospitalApi.updateQueueStatus(token, status);
    setQueue(queue.map(q => q.token === token ? { ...q, status } : q));
  };

  const handleRegisterPatient = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    const res = await hospitalApi.registerPatient({
      name,
      age,
      gender,
      phone,
      assignedDoctor,
      assignedRoom: assignedDoctor.includes('Sarah') ? 'OPD-304' : 'OPD-210',
      priority
    });
    setQueue([...queue, res.queue]);
    setShowRegisterModal(false);
    setName('');
    setAge('');
    setPhone('');
  };

  const handleCreateInvoice = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!invPatientName || !invAmount) return;
    const added = await hospitalApi.createInvoice({
      patientName: invPatientName,
      services: invServices,
      amount: Number(invAmount),
      paid: Number(invAmount),
      status: 'Paid',
      method: invMethod
    });
    setInvoices([added, ...invoices]);
    setShowInvoiceModal(false);
    setInvPatientName('');
  };

  return (
    <div className="space-y-6">
      {/* HEADER BANNER */}
      <div className="bg-gradient-to-r from-emerald-800 via-[#02316B] to-emerald-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-emerald-900/15 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-semibold mb-3 border border-white/20">
              <ClipboardList className="w-3.5 h-3.5 text-emerald-300" />
              Front Desk Triage & Queue Dispatch
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display">
              Hospital Reception & Triage Desk
            </h1>
            <p className="text-slate-200 text-xs sm:text-sm mt-1 max-w-xl">
              Fast-track patient check-in, live waiting queue management, walk-in OPD registration, and instant billing receipt dispatch.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            <Button
              onClick={() => setShowRegisterModal(true)}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl text-xs px-4 py-2.5 shadow-md flex items-center gap-1.5"
            >
              <UserPlus className="w-4 h-4" /> Register Walk-In
            </Button>
            <Button
              onClick={() => setShowInvoiceModal(true)}
              variant="outline"
              className="bg-white/10 hover:bg-white/20 border-white/30 text-white font-bold rounded-xl text-xs px-4 py-2.5 flex items-center gap-1.5"
            >
              <Receipt className="w-4 h-4" /> Generate Bill
            </Button>
          </div>
        </div>
      </div>

      {/* 4 STAT WIDGETS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase">Current Queue</span>
            <div className="p-2 bg-emerald-50 text-emerald-700 rounded-xl">
              <ClipboardList className="w-4 h-4" />
            </div>
          </div>
          <h3 className="text-2xl font-black text-slate-900 font-display">{queue.length} Tokens</h3>
          <p className="text-[11px] text-slate-500 mt-1">Live active OPD line</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase">Waiting in Lobby</span>
            <div className="p-2 bg-amber-50 text-amber-700 rounded-xl">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <h3 className="text-2xl font-black text-amber-700 font-display">
            {queue.filter(q => q.status === 'Waiting').length} Patients
          </h3>
          <p className="text-[11px] text-slate-500 mt-1">Ready for triage call</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase">With Doctor</span>
            <div className="p-2 bg-blue-50 text-[#02316B] rounded-xl">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <h3 className="text-2xl font-black text-[#02316B] font-display">
            {queue.filter(q => q.status === 'With Doctor').length} In Consultation
          </h3>
          <p className="text-[11px] text-slate-500 mt-1">Active in consultation rooms</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase">Completed Today</span>
            <div className="p-2 bg-slate-100 text-slate-700 rounded-xl">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <h3 className="text-2xl font-black text-slate-900 font-display">
            {queue.filter(q => q.status === 'Completed').length} Checked Out
          </h3>
          <p className="text-[11px] text-slate-500 mt-1">Prescriptions & Invoices cleared</p>
        </div>
      </div>

      {/* LIVE QUEUE MANAGER TABLE */}
      {(activeTab === 'queue' || activeTab === 'overview') && (
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="p-5 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-slate-900">Live OPD Appointment & Token Queue</h3>
              <p className="text-xs text-slate-500">Track tokens, room assignments, priority levels, and advance patient check-ins</p>
            </div>
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search token / patient..."
                className="pl-8 h-9 text-xs rounded-xl w-48"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 uppercase tracking-wider font-bold border-b border-slate-200/70">
                <tr>
                  <th className="py-3 px-4">Token #</th>
                  <th className="py-3 px-4">Patient Name & ID</th>
                  <th className="py-3 px-4">Consulting Doctor</th>
                  <th className="py-3 px-4">Room</th>
                  <th className="py-3 px-4">Check-in Time</th>
                  <th className="py-3 px-4">Priority</th>
                  <th className="py-3 px-4">Queue Status</th>
                  <th className="py-3 px-4 text-right">Triage Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {queue
                  .filter(q => q.patientName.toLowerCase().includes(searchTerm.toLowerCase()) || q.token.toLowerCase().includes(searchTerm.toLowerCase()))
                  .map((item) => (
                    <tr key={item.token} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-slate-900">
                        <span className="px-2 py-1 rounded-md bg-slate-100 border border-slate-200 text-primary">
                          {item.token}
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <p className="font-bold text-slate-900">{item.patientName}</p>
                        <p className="text-[10px] text-slate-400 font-mono">{item.patientId}</p>
                      </td>
                      <td className="py-3.5 px-4 font-medium text-slate-800">{item.doctorName}</td>
                      <td className="py-3.5 px-4 font-semibold text-primary">{item.room}</td>
                      <td className="py-3.5 px-4 font-mono text-slate-500">{item.checkInTime}</td>
                      <td className="py-3.5 px-4">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            item.priority === 'Emergency'
                              ? 'bg-red-50 text-red-700 border border-red-200'
                              : item.priority === 'Urgent'
                              ? 'bg-amber-50 text-amber-700 border border-amber-200'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {item.priority}
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                            item.status === 'With Doctor'
                              ? 'bg-blue-50 text-[#02316B] border border-blue-200'
                              : item.status === 'Waiting'
                              ? 'bg-amber-50 text-amber-700 border border-amber-200'
                              : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right space-x-1.5">
                        {item.status === 'Waiting' && (
                          <Button
                            size="sm"
                            onClick={() => handleUpdateQueueStatus(item.token, 'With Doctor')}
                            className="bg-[#02316B] hover:bg-[#005C72] text-white text-[11px] h-7 px-2.5 rounded-lg"
                          >
                            Call In
                          </Button>
                        )}
                        {item.status === 'With Doctor' && (
                          <Button
                            size="sm"
                            onClick={() => handleUpdateQueueStatus(item.token, 'Completed')}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] h-7 px-2.5 rounded-lg"
                          >
                            Discharge
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

      {/* BILLING & INVOICES VIEW */}
      {(activeTab === 'invoices') && (
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">Front Desk Invoicing & Payments</h3>
              <p className="text-xs text-slate-500">Record cash, card, and insurance co-pay receipts</p>
            </div>
            <Button
              onClick={() => setShowInvoiceModal(true)}
              className="bg-primary text-white text-xs rounded-xl"
            >
              <Plus className="w-3.5 h-3.5 mr-1" /> New Bill
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 uppercase tracking-wider font-bold border-b border-slate-200/70">
                <tr>
                  <th className="py-3 px-4">Invoice ID</th>
                  <th className="py-3 px-4">Patient Name</th>
                  <th className="py-3 px-4">Services Rendered</th>
                  <th className="py-3 px-4">Total Amount</th>
                  <th className="py-3 px-4">Payment Method</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {invoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-slate-900">{inv.id}</td>
                    <td className="py-3.5 px-4 font-bold text-slate-800">{inv.patientName}</td>
                    <td className="py-3.5 px-4 text-slate-600">{inv.services}</td>
                    <td className="py-3.5 px-4 font-bold text-slate-900">${inv.amount}</td>
                    <td className="py-3.5 px-4 font-medium text-slate-600">{inv.method}</td>
                    <td className="py-3.5 px-4">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {inv.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* REGISTER WALK-IN MODAL */}
      {showRegisterModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-1">Register Walk-in Patient</h3>
            <p className="text-xs text-slate-500 mb-4">Patient will automatically receive a queue token and triage slot.</p>
            <form onSubmit={handleRegisterPatient} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Patient Full Name</label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., Robert Fox"
                  required
                  className="rounded-xl"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Age</label>
                  <Input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="45"
                    required
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Gender</label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 text-xs bg-white"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Phone Number</label>
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  required
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Assign Specialist Doctor</label>
                <select
                  value={assignedDoctor}
                  onChange={(e) => setAssignedDoctor(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 text-xs bg-white"
                >
                  <option>Dr. Sarah Jenkins (Cardiology)</option>
                  <option>Dr. Aris Thorne (Neurology)</option>
                  <option>Dr. Maya Patel (Pediatrics)</option>
                  <option>Dr. Marcus Brody (Orthopedics)</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Priority Status</label>
                <div className="grid grid-cols-3 gap-1.5">
                  {(['Normal', 'Urgent', 'Emergency'] as const).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPriority(p)}
                      className={`text-xs py-1.5 rounded-lg font-bold border transition-colors ${
                        priority === p ? 'bg-primary text-white border-primary' : 'bg-slate-50 text-slate-600 border-slate-200'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-end gap-2 pt-2">
                <Button type="button" variant="outline" onClick={() => setShowRegisterModal(false)} className="rounded-xl text-xs">
                  Cancel
                </Button>
                <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold">
                  Generate Token
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* GENERATE INVOICE MODAL */}
      {showInvoiceModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-1">Generate Patient Invoice</h3>
            <p className="text-xs text-slate-500 mb-4">Create clinical billing invoice and record collected payment.</p>
            <form onSubmit={handleCreateInvoice} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Patient Name</label>
                <Input
                  value={invPatientName}
                  onChange={(e) => setInvPatientName(e.target.value)}
                  placeholder="e.g., Robert Fox"
                  required
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Services Description</label>
                <Input
                  value={invServices}
                  onChange={(e) => setInvServices(e.target.value)}
                  placeholder="Consultation + Diagnostics"
                  required
                  className="rounded-xl"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Amount ($)</label>
                  <Input
                    type="number"
                    value={invAmount}
                    onChange={(e) => setInvAmount(e.target.value)}
                    required
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Payment Method</label>
                  <select
                    value={invMethod}
                    onChange={(e) => setInvMethod(e.target.value)}
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 text-xs bg-white"
                  >
                    <option>Cash</option>
                    <option>Credit / Debit Card</option>
                    <option>Insurance Co-Pay</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-end gap-2 pt-2">
                <Button type="button" variant="outline" onClick={() => setShowInvoiceModal(false)} className="rounded-xl text-xs">
                  Cancel
                </Button>
                <Button type="submit" className="bg-primary hover:bg-primary/90 text-white rounded-xl text-xs font-bold">
                  Print & Issue
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReceptionistDashboard;
