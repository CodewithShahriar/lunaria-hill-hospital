import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, Stethoscope, Sparkles, ArrowRight, ShieldCheck, Activity, Users, ClipboardList } from 'lucide-react';
import { UserRole } from '@/types/dashboard';

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
  onDemoLogin: (role: UserRole) => void;
  onSwitchToRegister: () => void;
}

const DEMO_ROLES: {
  role: UserRole;
  title: string;
  subtitle: string;
  name: string;
  icon: any;
  color: string;
  bgLight: string;
  border: string;
  email: string;
}[] = [
  {
    role: 'admin',
    title: 'Hospital Admin',
    subtitle: 'Full Overview & Analytics',
    name: 'Dr. Eleanor Vance',
    icon: ShieldCheck,
    color: 'text-[#02316B]',
    bgLight: 'bg-[#02316B]/10 hover:bg-[#02316B]/15',
    border: 'border-[#02316B]/25 hover:border-[#02316B]',
    email: 'admin@lunariahill.com'
  },
  {
    role: 'doctor',
    title: 'Doctor Portal',
    subtitle: 'Appointments & EHR',
    name: 'Dr. Sarah Jenkins',
    icon: Activity,
    color: 'text-[#005C72]',
    bgLight: 'bg-[#005C72]/10 hover:bg-[#005C72]/15',
    border: 'border-[#005C72]/25 hover:border-[#005C72]',
    email: 'doctor.sarah@lunariahill.com'
  },
  {
    role: 'patient',
    title: 'Patient Portal',
    subtitle: 'Book, Records & Bills',
    name: 'Johnathan Doe',
    icon: Users,
    color: 'text-sky-600',
    bgLight: 'bg-sky-50 hover:bg-sky-100',
    border: 'border-sky-200 hover:border-sky-500',
    email: 'patient@lunariahill.com'
  },
  {
    role: 'receptionist',
    title: 'Reception Desk',
    subtitle: 'Queue, Check-in & Invoices',
    name: 'Marcus Sterling',
    icon: ClipboardList,
    color: 'text-emerald-700',
    bgLight: 'bg-emerald-50 hover:bg-emerald-100',
    border: 'border-emerald-200 hover:border-emerald-500',
    email: 'reception@lunariahill.com'
  }
];

const LoginForm = ({ onLogin, onDemoLogin, onSwitchToRegister }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeDemo, setActiveDemo] = useState<UserRole | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await onLogin(email, password);
    setIsLoading(false);
  };

  const handleRoleQuickDemo = async (role: UserRole) => {
    setActiveDemo(role);
    setIsLoading(true);
    await onDemoLogin(role);
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-xl mx-auto py-2">
      <Card className="bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-200 shadow-2xl shadow-slate-900/10 overflow-hidden">
        {/* Top Header */}
        <CardHeader className="text-center pb-4 pt-8 bg-gradient-to-b from-slate-50/80 to-white border-b border-slate-100">
          <div className="flex justify-center mb-3">
            <div className="bg-gradient-to-tr from-[#02316B] to-[#005C72] p-3 rounded-2xl shadow-lg shadow-[#02316B]/20 text-white">
              <Stethoscope className="h-7 w-7" />
            </div>
          </div>
          <CardTitle className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
            Lunaria Hill Portal
          </CardTitle>
          <CardDescription className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto">
            Choose a role below for instant 1-click demo access, or sign in with your email credentials.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-6 sm:p-8 space-y-6">
          {/* ONE-CLICK DEMO ACCESS CARDS */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                One-Click Demo Portals
              </span>
              <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                No password required
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DEMO_ROLES.map((d) => {
                const Icon = d.icon;
                const isSelected = activeDemo === d.role;
                return (
                  <button
                    key={d.role}
                    type="button"
                    disabled={isLoading}
                    onClick={() => handleRoleQuickDemo(d.role)}
                    className={`p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer relative group flex items-start gap-3 ${d.bgLight} ${d.border} ${
                      isSelected ? 'ring-2 ring-primary ring-offset-1' : ''
                    }`}
                  >
                    <div className={`p-2 rounded-xl bg-white shadow-xs ${d.color} mt-0.5 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-slate-900 group-hover:text-primary transition-colors">
                          {d.title}
                        </h4>
                        <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <p className="text-[11px] font-medium text-slate-600 truncate">{d.name}</p>
                      <p className="text-[10px] text-slate-500 truncate">{d.subtitle}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="border-t border-slate-200 w-full" />
            <span className="bg-white px-3 text-[11px] uppercase tracking-wider font-bold text-slate-400 absolute">
              Or sign in with email
            </span>
          </div>

          {/* STANDARD LOGIN FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-xs font-semibold text-slate-700">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@lunariahill.com"
                required
                className="h-10 text-xs sm:text-sm bg-slate-50/70 border-slate-200 focus:bg-white rounded-xl"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-xs font-semibold text-slate-700">Password</Label>
                <button
                  type="button"
                  onClick={() => {
                    setEmail('admin@lunariahill.com');
                    setPassword('admin123');
                  }}
                  className="text-[11px] text-primary hover:underline font-semibold"
                >
                  Fill Admin Demo
                </button>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  required
                  className="h-10 text-xs sm:text-sm bg-slate-50/70 border-slate-200 focus:bg-white rounded-xl pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-11 bg-gradient-to-r from-[#02316B] to-[#005C72] hover:opacity-95 text-white font-semibold rounded-xl text-xs sm:text-sm shadow-md shadow-[#02316B]/20 transition-all"
            >
              {isLoading ? 'Signing In...' : 'Sign In to Dashboard'}
            </Button>
          </form>

          <div className="text-center pt-2">
            <p className="text-xs text-slate-500">
              Don't have an account yet?{' '}
              <button
                type="button"
                onClick={onSwitchToRegister}
                className="text-primary hover:underline font-bold"
              >
                Register as Patient
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
