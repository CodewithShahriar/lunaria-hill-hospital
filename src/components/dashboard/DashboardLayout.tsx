import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { UserRole } from '@/types/dashboard';
import {
  Stethoscope,
  LayoutDashboard,
  Users,
  Calendar,
  Building2,
  UserCheck,
  CreditCard,
  FileText,
  Activity,
  ClipboardList,
  Clock,
  ShieldCheck,
  Bell,
  Search,
  LogOut,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  activeTab,
  onTabChange
}) => {
  const { currentUser, currentRole, switchRole, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Role Configurations
  const roleConfig: Record<UserRole, { title: string; badge: string; color: string; bg: string }> = {
    admin: {
      title: 'Administrator',
      badge: 'Admin Control Center',
      color: 'text-[#02316B]',
      bg: 'bg-[#02316B]/10 border-[#02316B]/30'
    },
    doctor: {
      title: 'Attending Clinician',
      badge: 'Doctor Clinical Suite',
      color: 'text-[#005C72]',
      bg: 'bg-[#005C72]/10 border-[#005C72]/30'
    },
    patient: {
      title: 'Patient Member',
      badge: 'Patient Wellness Hub',
      color: 'text-sky-700',
      bg: 'bg-sky-50 border-sky-200'
    },
    receptionist: {
      title: 'Front Desk Officer',
      badge: 'OPD Reception & Triage',
      color: 'text-emerald-700',
      bg: 'bg-emerald-50 border-emerald-200'
    }
  };

  // Role Specific Nav Items
  const navItemsByRole: Record<UserRole, { id: string; label: string; icon: any }[]> = {
    admin: [
      { id: 'overview', label: 'Hospital Overview', icon: LayoutDashboard },
      { id: 'departments', label: 'Departments & Beds', icon: Building2 },
      { id: 'staff', label: 'Staff Management', icon: UserCheck },
      { id: 'revenue', label: 'Revenue & Finance', icon: CreditCard },
      { id: 'audit', label: 'Audit & System Logs', icon: ShieldCheck }
    ],
    doctor: [
      { id: 'appointments', label: "Today's Appointments", icon: Calendar },
      { id: 'patients', label: 'Patient EHR & History', icon: Users },
      { id: 'prescription', label: 'Write Prescription', icon: FileText },
      { id: 'availability', label: 'Availability & Slots', icon: Clock }
    ],
    patient: [
      { id: 'overview', label: 'Patient Dashboard', icon: LayoutDashboard },
      { id: 'book', label: 'Book Appointment', icon: Calendar },
      { id: 'records', label: 'Medical Records', icon: Activity },
      { id: 'prescriptions', label: 'My Prescriptions', icon: FileText },
      { id: 'billing', label: 'Bills & Payments', icon: CreditCard }
    ],
    receptionist: [
      { id: 'queue', label: 'Live Patient Queue', icon: ClipboardList },
      { id: 'register', label: 'Register New Patient', icon: Users },
      { id: 'appointments', label: 'Book / Reschedule', icon: Calendar },
      { id: 'invoices', label: 'Billing & Invoices', icon: CreditCard }
    ]
  };

  const navItems = navItemsByRole[currentRole] || navItemsByRole.patient;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* TOP HEADER */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Left Brand & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <button onClick={() => navigate('/')} className="flex items-center gap-2.5 text-left group">
              <div className="bg-[#02316B] group-hover:bg-[#005C72] p-2 rounded-xl text-white shadow-xs transition-colors">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-base font-bold text-slate-900 leading-none">Lunaria Hill</h1>
                <p className="text-[10px] text-slate-500 font-medium">Healthcare Ecosystem</p>
              </div>
            </button>

            <div className="hidden md:flex items-center ml-4 pl-4 border-l border-slate-200">
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${roleConfig[currentRole]?.bg} ${roleConfig[currentRole]?.color}`}>
                {roleConfig[currentRole]?.badge}
              </span>
            </div>
          </div>

          {/* Right User Bar */}
          <div className="flex items-center gap-3">
            {/* Notifications Button */}
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="relative p-2 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full ring-2 ring-white" />
              </button>

              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 z-50 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="font-bold text-slate-900">Hospital Notifications</span>
                    <span className="text-[10px] text-primary font-semibold">Mark read</span>
                  </div>
                  <div className="py-2 space-y-2">
                    <div className="p-2 bg-sky-50 rounded-lg text-slate-700">
                      <p className="font-semibold text-sky-900">ICU Bed Alert</p>
                      <p className="text-[11px] text-slate-600">Bed 12 occupied. 8 beds remaining in ICU.</p>
                    </div>
                    <div className="p-2 bg-slate-50 rounded-lg text-slate-700">
                      <p className="font-semibold text-slate-900">Lab Diagnostic Ready</p>
                      <p className="text-[11px] text-slate-600">Lipid test result for P-10023 published.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* User Profile Pill */}
            <div className="flex items-center gap-2.5 pl-2 border-l border-slate-200">
              <img
                src={currentUser?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'}
                alt={currentUser?.name || 'User'}
                className="w-9 h-9 rounded-xl object-cover border border-slate-200 shadow-xs"
              />
              <div className="hidden sm:block text-left">
                <p className="text-xs font-bold text-slate-900 leading-tight">{currentUser?.name || 'Logged User'}</p>
                <p className="text-[10px] font-semibold text-slate-500 capitalize">{currentRole}</p>
              </div>
            </div>

            {/* Logout */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="text-slate-500 hover:text-red-600 hover:bg-red-50 p-2 rounded-xl"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <div className="flex-1 flex overflow-hidden">
        {/* DESKTOP SIDEBAR */}
        <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-slate-200/80 p-5 justify-between">
          <div>
            {/* User Info Card in Sidebar */}
            <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={currentUser?.avatar}
                  alt={currentUser?.name}
                  className="w-10 h-10 rounded-xl object-cover ring-2 ring-white shadow-xs"
                />
                <div className="min-w-0">
                  <h3 className="text-xs font-bold text-slate-900 truncate">{currentUser?.name}</h3>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${roleConfig[currentRole]?.bg} ${roleConfig[currentRole]?.color}`}>
                    {currentRole}
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 truncate">{currentUser?.title}</p>
            </div>

            {/* Navigation links */}
            <nav className="space-y-1.5">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
                Main Menu
              </p>
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onTabChange(item.id)}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      active
                        ? 'bg-gradient-to-r from-[#02316B] to-[#005C72] text-white shadow-sm shadow-[#02316B]/20'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Professional Hospital System Footer */}
          <div className="pt-4 border-t border-slate-100 space-y-2">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-[11px] text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>HIPAA & NABH Accredited Enterprise System</span>
            </div>
            <button
              onClick={() => navigate('/')}
              className="w-full text-center text-xs font-semibold text-slate-500 hover:text-primary py-1.5 transition-colors block"
            >
              &larr; Back to Hospital Website
            </button>
          </div>
        </aside>

        {/* MOBILE DRAWER */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-xs lg:hidden" onClick={() => setMobileMenuOpen(false)}>
            <div
              className="w-72 max-w-[85vw] h-full bg-white p-5 flex flex-col justify-between shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-2">
                    <Stethoscope className="w-5 h-5 text-primary" />
                    <span className="font-bold text-slate-900 text-sm">Lunaria Hill</span>
                  </div>
                  <button onClick={() => setMobileMenuOpen(false)} className="p-1 rounded-lg hover:bg-slate-100">
                    <X className="w-4 h-4 text-slate-500" />
                  </button>
                </div>

                <nav className="space-y-1.5">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const active = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          onTabChange(item.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                          active
                            ? 'bg-primary text-white'
                            : 'text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <Button variant="outline" className="w-full text-xs" onClick={() => navigate('/')}>
                  Back to Website
                </Button>
                <Button variant="destructive" className="w-full text-xs" onClick={handleLogout}>
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* MAIN VIEW CONTENT AREA */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
export default DashboardLayout;
