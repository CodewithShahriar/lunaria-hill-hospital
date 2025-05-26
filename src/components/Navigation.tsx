
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Menu, X, Phone, Calendar, 
  Stethoscope, Mail, MapPin, 
  Clock, Facebook, Instagram, 
  Twitter, ArrowRight, LogIn 
} from 'lucide-react';
import LoginForm from './auth/LoginForm';
import RegisterForm from './auth/RegisterForm';
import PatientDashboard from './PatientDashboard';

interface NavigationProps {
  onAppointmentClick?: () => void;
}

const Navigation = ({ onAppointmentClick }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [patientData, setPatientData] = useState(null);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/departments', label: 'Departments' },
    { path: '/doctors', label: 'Doctors' },
    { path: '/services', label: 'Services' },
    { path: '/blog', label: 'Blog' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleAppointmentClick = () => {
    if (onAppointmentClick) {
      onAppointmentClick();
    }
    setIsOpen(false);
  };

    const handleLoginClick = () => {
    setAuthMode('login');
    setShowAuth(true);
    setIsOpen(false);
  };

  const handleLogin = (email: string, password: string) => {
    // Simulate successful login
    const mockPatientData = {
      firstName: 'John',
      lastName: 'Doe',
      email: email,
      phone: '+1 (555) 123-4567',
      dateOfBirth: '1990-05-15',
      gender: 'male',
      id: 'P12345',
      photo: null
    };
    
    setPatientData(mockPatientData);
    setIsLoggedIn(true);
    setShowAuth(false);
  };

  const handleRegister = (userData: any) => {
    // Simulate successful registration
    setPatientData(userData);
    setIsLoggedIn(true);
    setShowAuth(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPatientData(null);
  };

  const switchToRegister = () => {
    setAuthMode('register');
  };

  const switchToLogin = () => {
    setAuthMode('login');
  };

  // If logged in, show dashboard
  if (isLoggedIn && patientData) {
    return <PatientDashboard patientData={patientData} onLogout={handleLogout} />;
  }

  // If showing auth forms
  if (showAuth) {
    if (authMode === 'login') {
      return <LoginForm onLogin={handleLogin} onSwitchToRegister={switchToRegister} />;
    } else {
      return <RegisterForm onRegister={handleRegister} onSwitchToLogin={switchToLogin} />;
    }
  }
  return (
    <>
      {/* Top Bar - Blue background with white text */}
      <div className="bg-blue-600 text-white py-2.5 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          {/* Contact Info */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center text-sm">
              <Phone className="h-4 w-4 mr-2" />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center text-sm">
              <Mail className="h-4 w-4 mr-2" />
              <span>info@lunariahill.com</span>
            </div>
            <div className="flex items-center text-sm">
              <Clock className="h-4 w-4 mr-2" />
              <span>Mon-Fri: 8:00-20:00</span>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:text-blue-200 transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="text-white hover:text-blue-200 transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="text-white hover:text-blue-200 transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-full">
                <Stethoscope className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Lunaria Hill</h1>
                <p className="text-sm text-gray-600">Hospital</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-7">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                    isActive(item.path) ? 'text-blue-600 border-b-2 border-blue-600' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">

              <Button 
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 gap-2"
                onClick={handleLoginClick}
              >
                <LogIn className="h-4 w-4" />
                Log In
              </Button>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white gap-2 rounded-lg px-5 py-6"
                onClick={handleAppointmentClick}
              >
                <Calendar className="h-4 w-4" />
                Book Appointment
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden pb-4 animate-slide-in-left">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-2 text-gray-700 hover:text-blue-600 ${
                    isActive(item.path) ? 'text-blue-600 font-semibold' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 mt-4">

                <Button 
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                  onClick={handleLoginClick}
                >
                  Log In
                </Button>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={handleAppointmentClick}
                >
                  Book Appointment
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
