import LoginForm from '@/components/auth/LoginForm';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Stethoscope } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    // Check demo credentials first
    const validCredentials = {
      email: 'admin@lunariahill.com',
      password: 'testuser123'
    };

    if (email === validCredentials.email && password === validCredentials.password) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('patientData', JSON.stringify({
        firstName: 'John',
        lastName: 'Doe',
        email: email,
        phone: '+1 (555) 123-4567',
        dateOfBirth: '1990-05-15',
        gender: 'male',
        id: 'P12345',
        photo: null
      }));
      
      navigate('/dashboard');
      return;
    }

    // Check registered users in localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const user = registeredUsers.find((u: any) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('patientData', JSON.stringify({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        dateOfBirth: user.dateOfBirth,
        gender: user.gender,
        id: `P${Date.now().toString().slice(-5)}`,
        photo: null
      }));
      
      navigate('/dashboard');
    } else {
      alert('Invalid credentials. Please check your email and password');
    }
  };

  const handleSwitchToRegister = () => {
    navigate('/register');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50/70 via-slate-50 to-white flex flex-col font-sans relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="p-6 relative z-10 flex items-center justify-between container mx-auto">
        <Button
          variant="outline"
          onClick={handleBackToHome}
          className="rounded-full border-slate-200 bg-white/80 hover:bg-white text-slate-700 shadow-sm flex items-center gap-2 text-xs font-semibold px-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Homepage
        </Button>

        <div className="flex items-center gap-2">
          <div className="bg-sky-600 p-1.5 rounded-lg text-white">
            <Stethoscope className="h-4 w-4" />
          </div>
          <span className="font-bold text-slate-900 text-sm font-display">Lunaria Hill Hospital</span>
        </div>
      </div>

      {/* Login Form */}
      <div className="flex-1 flex items-center justify-center px-4 pb-12 relative z-10">
        <LoginForm onLogin={handleLogin} onSwitchToRegister={handleSwitchToRegister} />
      </div>
    </div>
  );
};

export default Login;
