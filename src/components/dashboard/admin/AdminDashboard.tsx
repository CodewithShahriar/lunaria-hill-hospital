import React, { useState, useEffect } from 'react';
import {
  Users,
  Stethoscope,
  Activity,
  CreditCard,
  Building2,
  TrendingUp,
  ShieldCheck,
  Plus,
  Search,
  Filter,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { hospitalApi } from '@/services/api';
import { HospitalStats, Department, Staff, AuditLog } from '@/types/dashboard';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

interface AdminDashboardProps {
  activeTab: string;
}

const revenueChartData = [
  { month: 'Jun', revenue: 380, admissions: 290 },
  { month: 'Jul', revenue: 410, admissions: 310 },
  { month: 'Aug', revenue: 395, admissions: 305 },
  { month: 'Sep', revenue: 440, admissions: 340 },
  { month: 'Oct', revenue: 465, admissions: 360 },
  { month: 'Nov', revenue: 482, admissions: 372 }
];

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ activeTab }) => {
  const [stats, setStats] = useState<HospitalStats | null>(null);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [staff, setStaff] = useState<Staff[]>([]);
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddDeptModal, setShowAddDeptModal] = useState(false);
  const [newDeptName, setNewDeptName] = useState('');
  const [newDeptHead, setNewDeptHead] = useState('');
  const [newDeptBeds, setNewDeptBeds] = useState(30);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const overview = await hospitalApi.getAdminOverview();
    if (overview) {
      setStats(overview.stats);
      setDepartments(overview.departments);
      setLogs(overview.recentLogs);
    }
    const staffList = await hospitalApi.getStaff();
    setStaff(staffList);
  };

  const handleAddDepartment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDeptName) return;
    const added = await hospitalApi.addDepartment({
      name: newDeptName,
      head: newDeptHead || 'Dr. Specialist',
      beds: Number(newDeptBeds),
      occupancy: 45,
      doctorsCount: 4
    });
    setDepartments([...departments, added]);
    setShowAddDeptModal(false);
    setNewDeptName('');
    setNewDeptHead('');
  };

  return (
    <div className="space-y-6">
      {/* HEADER BANNER */}
      <div className="bg-gradient-to-r from-[#02316B] via-[#005C72] to-[#02316B] rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-[#02316B]/15 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-white/10 to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-semibold mb-3 border border-white/20">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Executive Hospital Command Center
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display">
              Hospital Administration & Analytics
            </h1>
            <p className="text-slate-200 text-xs sm:text-sm mt-1 max-w-xl">
              Real-time monitoring of campus occupancy, super-specialty departments, clinician rosters, and revenue growth.
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <Button
              onClick={() => setShowAddDeptModal(true)}
              className="bg-white text-[#02316B] hover:bg-slate-100 font-bold rounded-xl text-xs px-4 py-2.5 shadow-md flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Add Department
            </Button>
          </div>
        </div>
      </div>

      {/* 4 TOP KPI STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Stat 1: Total Patients */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Patients</span>
            <div className="p-2.5 rounded-xl bg-blue-50 text-[#02316B]">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <h3 className="text-2xl font-black text-slate-900 font-display">
              {stats?.totalPatients.toLocaleString() || '3,840'}
            </h3>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md flex items-center gap-0.5">
              <TrendingUp className="w-3 h-3" /> +8.4%
            </span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">Across 18 specialized units</p>
        </div>

        {/* Stat 2: Active Clinicians */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Medical Faculty</span>
            <div className="p-2.5 rounded-xl bg-teal-50 text-[#005C72]">
              <Stethoscope className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <h3 className="text-2xl font-black text-slate-900 font-display">
              {stats?.totalDoctors || '64'} Doctors
            </h3>
            <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
              98% On-Roster
            </span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">52 Super-specialists, 12 Fellows</p>
        </div>

        {/* Stat 3: Bed Occupancy */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Bed Occupancy</span>
            <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700">
              <Building2 className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <h3 className="text-2xl font-black text-slate-900 font-display">
              {stats?.occupancyRate || '82.6'}%
            </h3>
            <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">
              {stats?.occupiedBeds || 372}/{stats?.totalBeds || 450} Beds
            </span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">8 ICU beds currently available</p>
        </div>

        {/* Stat 4: Monthly Revenue */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Monthly Revenue</span>
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700">
              <CreditCard className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <h3 className="text-2xl font-black text-slate-900 font-display">
              ${stats?.monthlyRevenue?.toLocaleString() || '482,500'}
            </h3>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md flex items-center gap-0.5">
              <TrendingUp className="w-3 h-3" /> {stats?.revenueGrowth || '+14.8%'}
            </span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">Cash, Card & Insurance TPA claims</p>
        </div>
      </div>

      {/* CONDITIONAL TAB VIEWS */}
      {(activeTab === 'overview' || activeTab === 'revenue') && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue & Admission Trend Chart (2 cols) */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">Hospital Financial & Admissions Trend</h3>
                <p className="text-xs text-slate-500">Monthly patient inpatient admission volumes and net revenue ($k)</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold">
                <span className="flex items-center gap-1.5 text-[#02316B]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#02316B]" /> Revenue ($k)
                </span>
                <span className="flex items-center gap-1.5 text-[#005C72]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#005C72]" /> Admissions
                </span>
              </div>
            </div>
            <div className="h-64 sm:h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#02316B" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#02316B" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorAdm" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#005C72" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#005C72" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#64748b' }} />
                  <YAxis tick={{ fontSize: 11, fill: '#64748b' }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#ffffff',
                      borderRadius: '12px',
                      border: '1px solid #e2e8f0',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                      fontSize: '12px'
                    }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#02316B" strokeWidth={2.5} fillOpacity={1} fill="url(#colorRev)" />
                  <Area type="monotone" dataKey="admissions" stroke="#005C72" strokeWidth={2} fillOpacity={1} fill="url(#colorAdm)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Department Bed Occupancy Bar (1 col) */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Department Bed Occupancy</h3>
              <p className="text-xs text-slate-500 mb-4">Capacity status across core clinical units</p>
              <div className="space-y-3">
                {departments.slice(0, 5).map((d) => (
                  <div key={d.id} className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-800">{d.name.split('&')[0]}</span>
                      <span className={`${d.occupancy > 90 ? 'text-red-600' : 'text-slate-600'}`}>
                        {d.occupancy}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          d.occupancy > 90 ? 'bg-red-500' : d.occupancy > 80 ? 'bg-amber-500' : 'bg-primary'
                        }`}
                        style={{ width: `${d.occupancy}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-xs text-slate-600 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Emergency & Trauma has reached 95% bed capacity today.</span>
            </div>
          </div>
        </div>
      )}

      {/* DEPARTMENT MANAGEMENT VIEW */}
      {(activeTab === 'overview' || activeTab === 'departments') && (
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="p-5 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-slate-900">Clinical Department Management</h3>
              <p className="text-xs text-slate-500">Supervise bed allotments, assigned heads, and clinical capacity</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <Input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Filter departments..."
                  className="pl-8 h-9 text-xs rounded-xl w-48"
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 uppercase tracking-wider font-bold border-b border-slate-200/70">
                <tr>
                  <th className="py-3 px-4">Department Unit</th>
                  <th className="py-3 px-4">Department Head</th>
                  <th className="py-3 px-4">Clinicians</th>
                  <th className="py-3 px-4">Total Beds</th>
                  <th className="py-3 px-4">Current Occupancy</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {departments
                  .filter((d) => d.name.toLowerCase().includes(searchTerm.toLowerCase()))
                  .map((dept) => (
                    <tr key={dept.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900 flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-primary" />
                        {dept.name}
                      </td>
                      <td className="py-3.5 px-4 font-medium">{dept.head}</td>
                      <td className="py-3.5 px-4">{dept.doctorsCount} Specialists</td>
                      <td className="py-3.5 px-4">{dept.beds} Beds</td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{dept.occupancy}%</span>
                          <div className="w-16 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-primary h-full rounded-full" style={{ width: `${dept.occupancy}%` }} />
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                            dept.status === 'Active'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : 'bg-red-50 text-red-700 border border-red-200'
                          }`}
                        >
                          {dept.status}
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* STAFF MANAGEMENT VIEW */}
      {(activeTab === 'staff') && (
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">Hospital Staff Roster & Shifts</h3>
              <p className="text-xs text-slate-500">Track on-duty surgeons, physicians, nursing supervisors, and technicians</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 uppercase tracking-wider font-bold border-b border-slate-200/70">
                <tr>
                  <th className="py-3 px-4">Staff Member</th>
                  <th className="py-3 px-4">Clinical Role</th>
                  <th className="py-3 px-4">Department</th>
                  <th className="py-3 px-4">Assigned Shift</th>
                  <th className="py-3 px-4">Contact</th>
                  <th className="py-3 px-4">Duty Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {staff.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{s.name}</td>
                    <td className="py-3.5 px-4 font-medium text-primary">{s.role}</td>
                    <td className="py-3.5 px-4">{s.department}</td>
                    <td className="py-3.5 px-4 text-slate-500">{s.shift}</td>
                    <td className="py-3.5 px-4 font-mono text-[11px]">{s.email}</td>
                    <td className="py-3.5 px-4">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {s.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* AUDIT LOGS VIEW */}
      {(activeTab === 'overview' || activeTab === 'audit') && (
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Live System Audit & Security Logs
              </h3>
              <p className="text-xs text-slate-500">Immutable record of logins, triage changes, and prescription issues</p>
            </div>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              HIPAA & NABH Compliant
            </span>
          </div>

          <div className="space-y-2.5">
            {logs.map((log) => (
              <div
                key={log.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-slate-50/80 border border-slate-200/60 text-xs gap-2"
              >
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-200 text-slate-700">
                    {log.role}
                  </span>
                  <span className="font-bold text-slate-900">{log.user}</span>
                  <span className="text-slate-600">{log.action}</span>
                </div>
                <span className="font-mono text-[11px] text-slate-400 shrink-0">{log.timestamp}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ADD DEPARTMENT MODAL */}
      {showAddDeptModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-1">Create Clinical Department</h3>
            <p className="text-xs text-slate-500 mb-4">Add a new medical wing and allocate initial inpatient beds.</p>
            <form onSubmit={handleAddDepartment} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Department Name</label>
                <Input
                  value={newDeptName}
                  onChange={(e) => setNewDeptName(e.target.value)}
                  placeholder="e.g., Pulmonary & Critical Care"
                  required
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Department Head</label>
                <Input
                  value={newDeptHead}
                  onChange={(e) => setNewDeptHead(e.target.value)}
                  placeholder="e.g., Dr. Nathan Cole"
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Total Bed Allotment</label>
                <Input
                  type="number"
                  value={newDeptBeds}
                  onChange={(e) => setNewDeptBeds(Number(e.target.value))}
                  className="rounded-xl"
                />
              </div>
              <div className="flex items-center justify-end gap-2 pt-2">
                <Button type="button" variant="outline" onClick={() => setShowAddDeptModal(false)} className="rounded-xl text-xs">
                  Cancel
                </Button>
                <Button type="submit" className="bg-primary hover:bg-primary/90 text-white rounded-xl text-xs font-bold">
                  Create Wing
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
