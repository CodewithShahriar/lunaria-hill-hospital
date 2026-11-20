import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Menu, X, Phone, Calendar,
  Stethoscope, Search, ChevronDown, ChevronRight,
  LogIn, Activity, ShieldCheck
} from 'lucide-react';

interface NavigationProps {
  onAppointmentClick?: () => void;
}

const Navigation = ({ onAppointmentClick }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: '/', label: 'Home', hasDropdown: true },
    { path: '/about', label: 'About', hasDropdown: false },
    { path: '/services', label: 'Services', hasDropdown: true },
    { path: '/departments', label: 'Departments', hasDropdown: true },
    { path: '/doctors', label: 'Doctors', hasDropdown: false },
    { path: '/blog', label: 'Blog', hasDropdown: true },
    { path: '/contact', label: 'Contact', hasDropdown: false }
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
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] transition-all">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand Logo (Matching Reference Clean Style) */}
          <Link to="/" className="flex items-center space-x-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-500 text-white flex items-center justify-center shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
              <div className="relative">
                <Stethoscope className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400"></span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 font-display">
                  Lunaria<span className="text-blue-600">Hill</span>
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 -mt-0.5">
                Hospital & Care
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (with Reference Dropdown Chevrons) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`inline-flex items-center gap-1 px-3.5 py-2 rounded-md text-sm font-medium transition-all ${
                  isActive(item.path)
                    ? 'text-blue-600 font-bold bg-blue-50/70'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Action Icons & Buttons (Matching Reference Image Exact Layout) */}
          <div className="hidden lg:flex items-center space-x-3">
            
            {/* Search Icon */}
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center bg-slate-100 rounded-lg px-2.5 py-1.5 text-xs animate-fade-in border border-slate-200">
                  <Search className="w-3.5 h-3.5 text-slate-400 mr-1.5" />
                  <input
                    type="text"
                    placeholder="Search specialists..."
                    className="bg-transparent border-none outline-none text-slate-700 w-32 placeholder:text-slate-400 text-xs"
                    autoFocus
                    onBlur={() => setSearchOpen(false)}
                  />
                  <button onClick={() => setSearchOpen(false)} className="text-slate-400 hover:text-slate-600 ml-1">
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  aria-label="Search"
                  className="p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-full transition-colors"
                >
                  <Search className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Portal Quick Link */}
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-600 hover:text-blue-600 hover:bg-slate-50 text-xs font-semibold px-2.5 h-9"
              onClick={handleLoginClick}
            >
              <LogIn className="h-3.5 w-3.5 mr-1.5" />
              Portal
            </Button>

            {/* Emergency Button (Ref Design: Outline Red with Phone Icon) */}
            <a
              href="tel:18001234560"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-red-200/90 bg-red-50/40 hover:bg-red-50 text-red-600 text-sm font-semibold transition-all hover:scale-[1.02] shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span>Emergency</span>
            </a>

            {/* Appointment Button (Ref Design: Solid Blue with Calendar Icon) */}
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4 py-2 h-auto rounded-lg shadow-sm shadow-blue-500/20 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              onClick={handleAppointmentClick}
            >
              <Calendar className="h-4 w-4" />
              <span>Appointment</span>
            </Button>

          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:18001234560"
              className="p-2 text-red-600 bg-red-50 rounded-lg border border-red-200 text-xs font-semibold flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 animate-pulse" />
              <span className="hidden sm:inline">Emergency</span>
            </a>

            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs px-3 py-1.5"
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
          <div className="lg:hidden py-4 border-t border-slate-100 animate-fade-in bg-white rounded-b-2xl shadow-xl px-2">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-colors ${
                    isActive(item.path)
                      ? 'text-blue-600 bg-blue-50 font-bold'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
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
                className="w-full justify-center border-slate-200 text-slate-700 hover:bg-slate-50 rounded-lg py-4 text-sm"
                onClick={handleLoginClick}
              >
                <LogIn className="h-4 w-4 mr-2" />
                Patient Portal Log In
              </Button>
              <Button
                className="w-full justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-4 shadow-sm shadow-blue-500/20 text-sm font-semibold"
                onClick={handleAppointmentClick}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Make an Appointment
              </Button>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 px-4 flex justify-between items-center">
              <span>Emergency Hotline: 1-800-123-4560</span>
              <span className="text-emerald-600 font-semibold">● 24/7 Active</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
