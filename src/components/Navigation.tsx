import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Menu, X, Phone, Calendar,
  Stethoscope, Mail, MapPin,
  Clock, Facebook, Instagram,
  Twitter, LogIn, ChevronRight, Activity, ShieldCheck
} from 'lucide-react';

interface NavigationProps {
  onAppointmentClick?: () => void;
}

const Navigation = ({ onAppointmentClick }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
    navigate('/login');
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar - Sleek Modern Dark Slate Header */}
      <div className="bg-slate-950 text-slate-300 py-2 px-4 border-b border-slate-800/80 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-xs">
          {/* Status & Quick Contact */}
          <div className="flex items-center space-x-6">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-medium text-[11px] ring-1 ring-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              24/7 Emergency & Trauma Active
            </span>
            <a href="tel:18001234560" className="flex items-center text-slate-300 hover:text-sky-400 transition-colors">
              <Phone className="h-3.5 w-3.5 mr-1.5 text-sky-400" />
              <span>(123) 456-7890</span>
            </a>
            <a href="mailto:info@lunariahill.com" className="flex items-center text-slate-300 hover:text-sky-400 transition-colors">
              <Mail className="h-3.5 w-3.5 mr-1.5 text-sky-400" />
              <span>info@lunariahill.com</span>
            </a>
            <div className="flex items-center text-slate-400">
              <Clock className="h-3.5 w-3.5 mr-1.5 text-sky-400" />
              <span>Mon-Fri: 8:00 AM – 8:00 PM</span>
            </div>
          </div>

          {/* Social Links & Trust badge */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center gap-1 text-[11px] text-slate-400 border-r border-slate-800 pr-4">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>JCI & NABH Accredited Hospital</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-400">
              <a href="#" aria-label="Facebook" className="hover:text-sky-400 transition-colors">
                <Facebook className="h-3.5 w-3.5" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-sky-400 transition-colors">
                <Instagram className="h-3.5 w-3.5" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-sky-400 transition-colors">
                <Twitter className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation with Glassmorphism */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] transition-all">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-gradient-to-tr from-sky-600 to-cyan-500 p-2.5 rounded-xl shadow-md shadow-sky-500/20 text-white group-hover:scale-105 transition-transform">
                <Stethoscope className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
                    Lunaria Hill
                  </span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                </div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                  Hospital & Healthcare
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${isActive(item.path)
                    ? 'text-sky-600 bg-sky-50 font-semibold'
                    : 'text-slate-600 hover:text-sky-600 hover:bg-slate-50'
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button
                variant="ghost"
                className="text-slate-700 hover:text-sky-600 hover:bg-slate-100 gap-2 font-medium rounded-full px-4 text-sm"
                onClick={handleLoginClick}
              >
                <LogIn className="h-4 w-4" />
                Portal Log In
              </Button>
              <Button
                className="bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white gap-2 rounded-full px-5 py-2.5 shadow-md shadow-sky-500/25 hover:shadow-lg hover:shadow-sky-500/35 transition-all text-sm font-semibold active:scale-[0.98]"
                onClick={handleAppointmentClick}
              >
                <Calendar className="h-4 w-4" />
                Book Appointment
              </Button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                size="sm"
                className="bg-sky-500 hover:bg-sky-600 text-white rounded-full text-xs px-3 py-1.5"
                onClick={handleAppointmentClick}
              >
                <Calendar className="h-3.5 w-3.5 mr-1" />
                Book
              </Button>
              <button
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="h-6 w-6 text-slate-800" /> : <Menu className="h-6 w-6 text-slate-800" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t border-slate-100 animate-fade-in bg-white/95 rounded-b-2xl shadow-xl px-2">
              <div className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-colors ${isActive(item.path)
                      ? 'text-sky-600 bg-sky-50 font-semibold'
                      : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="h-4 w-4 opacity-50" />
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-slate-100 px-2">
                <Button
                  variant="outline"
                  className="w-full justify-center border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl py-5"
                  onClick={handleLoginClick}
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Patient Portal Log In
                </Button>
                <Button
                  className="w-full justify-center bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-xl py-5 shadow-md shadow-sky-500/20"
                  onClick={handleAppointmentClick}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Book an Appointment
                </Button>
              </div>

              {/* Mobile Quick Contact Footer */}
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 px-4 flex justify-between items-center">
                <span>Emergency: (123) 456-7890</span>
                <span className="text-emerald-600 font-medium">● 24/7 Open</span>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
