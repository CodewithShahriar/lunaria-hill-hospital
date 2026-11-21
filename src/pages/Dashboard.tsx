import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import AdminDashboard from '@/components/dashboard/admin/AdminDashboard';
import DoctorDashboard from '@/components/dashboard/doctor/DoctorDashboard';
import ReceptionistDashboard from '@/components/dashboard/receptionist/ReceptionistDashboard';
import PatientDashboardView from '@/components/dashboard/patient/PatientDashboardView';

const Dashboard = () => {
  const navigate = useNavigate();
  const { currentUser, currentRole, isLoading, loginDemo } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (!isLoading && !currentUser) {
      // Auto-initialize with admin demo if user lands on /dashboard directly
      loginDemo('admin');
    }
  }, [isLoading, currentUser]);

  // Adjust activeTab when role changes if not matching current role
  useEffect(() => {
    if (currentRole === 'doctor') {
      setActiveTab('appointments');
    } else if (currentRole === 'receptionist') {
      setActiveTab('queue');
    } else {
      setActiveTab('overview');
    }
  }, [currentRole]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-xs font-semibold text-slate-500">Loading Lunaria Clinical Portal...</p>
        </div>
      </div>
    );
  }

  return (
    <DashboardLayout activeTab={activeTab} onTabChange={setActiveTab}>
      {currentRole === 'admin' && <AdminDashboard activeTab={activeTab} />}
      {currentRole === 'doctor' && <DoctorDashboard activeTab={activeTab} />}
      {currentRole === 'receptionist' && <ReceptionistDashboard activeTab={activeTab} />}
      {currentRole === 'patient' && <PatientDashboardView activeTab={activeTab} />}
    </DashboardLayout>
  );
};

export default Dashboard;
