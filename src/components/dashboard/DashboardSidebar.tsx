
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Home, 
  User, 
  Calendar, 
  FileText, 
  CreditCard, 
  LogOut,
  Menu,
  X
} from 'lucide-react';

interface DashboardSidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onLogout: () => void;
  patientData: any;
  isOpen: boolean;
  onClose: () => void;
}

const DashboardSidebar = ({ currentPage, onPageChange, onLogout, patientData, isOpen, onClose }: DashboardSidebarProps) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard Home', icon: Home },
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'appointments', label: 'Appointment History', icon: Calendar },
    { id: 'prescriptions', label: 'Prescriptions', icon: FileText },
    { id: 'billing', label: 'Billing & Payment', icon: CreditCard },
    { id: 'logout', label: 'Logout', icon: LogOut, action: 'logout' },
  ];

  const handleMenuClick = (pageId: string) => {
    if (pageId === 'logout') {
      onLogout();
    } else {
      onPageChange(pageId);
    }
    onClose();
  };

  return (
    <>
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"/>
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-800">Patient Portal</h2>
            </div>
          </div>

          {/* Patient Info */}
          <div className="p-4 border-b">
            <div className="flex items-center space-x-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={patientData?.photo} />
                <AvatarFallback className="bg-blue-100 text-blue-600">
                  {patientData?.firstName?.[0]}{patientData?.lastName?.[0]}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-gray-800">{patientData?.firstName} {patientData?.lastName}</p>
                <p className="text-sm text-gray-500">Patient ID: {patientData?.id || 'P12345'}</p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                const isLogout = item.id === 'logout';
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleMenuClick(item.id)}
                      className={`
                        w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors
                        ${isActive && !isLogout
                          ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700' 
                          : isLogout
                          ? 'text-red-600 hover:bg-red-50 hover:text-red-700'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                        }
                      `}
                    >
                      <Icon className={`h-5 w-5 ${
                        isActive && !isLogout ? 'text-blue-700' : 
                        isLogout ? 'text-red-600' : 'text-gray-400'
                      }`} />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;