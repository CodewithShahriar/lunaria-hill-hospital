
import { useState } from 'react';
import DashboardSidebar from './dashboard/DashboardSidebar';
import DashboardHome from './dashboard/DashboardHome';
import MyProfile from './dashboard/MyProfile';
import AppointmentHistory from './dashboard/AppointmentHistory';
import Prescriptions from './dashboard/Prescriptions';
import BillingPayment from './dashboard/BillingPayment';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Bell, LogOut } from 'lucide-react';

interface PatientDashboardProps {
  patientData: any;
  onLogout: () => void;
}

const PatientDashboard = ({ patientData, onLogout }: PatientDashboardProps) => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleUpdateProfile = (updatedData: any) => {
    // Handle profile update
    console.log('Profile updated:', updatedData);
    alert('Profile updated successfully!');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardHome patientData={patientData} />;
      case 'profile':
        return <MyProfile patientData={patientData} onUpdateProfile={handleUpdateProfile} />;
      case 'appointments':
        return <AppointmentHistory />;
      case 'prescriptions':
        return <Prescriptions />;
      case 'billing':
        return <BillingPayment />;
      default:
        return <DashboardHome patientData={patientData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onLogout={onLogout}
        patientData={patientData}
      />
      
      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        {/* Top Bar */}
        <header className="bg-white shadow-sm border-b sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 lg:px-6 py-4">
            <div className="flex-1" />
            
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Button>

              {/* User Profile */}
              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={patientData?.photo} />
                  <AvatarFallback className="bg-blue-100 text-blue-600">
                    {patientData?.firstName?.[0]}{patientData?.lastName?.[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-800">
                    {patientData?.firstName} {patientData?.lastName}
                  </p>
                  <p className="text-xs text-gray-500">Patient</p>
                </div>
              </div>

              {/* Logout */}
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={onLogout}
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 lg:p-6">
          {renderCurrentPage()}
        </main>
      </div>
    </div>
  );
};

export default PatientDashboard;