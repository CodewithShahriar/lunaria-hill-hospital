import LoginForm from '@/components/auth/LoginForm';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Stethoscope, ShieldCheck } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { UserRole } from '@/types/dashboard';

const Login = () => {
  const navigate = useNavigate();
  const { login, loginDemo } = useAuth();

  const handleLogin = async (email: string, password: string) => {
    const success = await login(email, password);
    if (success) {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials. You can use the One-Click Demo buttons above to enter instantly!');
    }
  };

  const handleDemoLogin = async (role: UserRole) => {
    await loginDemo(role);
    navigate('/dashboard');
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
          <div className="bg-[#02316B] p-2 rounded-xl text-white shadow-sm">
            <Stethoscope className="h-4 w-4" />
          </div>
          <span className="font-bold text-slate-900 text-sm font-display tracking-tight">Lunaria Hill Hospital</span>
        </div>
      </div>

      {/* Login Form */}
      <div className="flex-1 flex items-center justify-center px-4 pb-12 relative z-10">
        <LoginForm
          onLogin={handleLogin}
          onDemoLogin={handleDemoLogin}
          onSwitchToRegister={handleSwitchToRegister}
        />
      </div>
    </div>
  );
};

export default Login;
