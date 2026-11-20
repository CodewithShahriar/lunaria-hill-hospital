import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, Stethoscope, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
  onSwitchToRegister: () => void;
}

const LoginForm = ({ onLogin, onSwitchToRegister }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    onLogin(email, password);
    setIsLoading(false);
  };

  const handleUseDemo = () => {
    setEmail('admin@lunariahill.com');
    setPassword('testuser123');
  };

  return (
    <div className="flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/95 backdrop-blur-md rounded-3xl border border-slate-150 shadow-2xl shadow-sky-500/10">
        <CardHeader className="text-center pb-2">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-tr from-sky-600 to-cyan-500 p-3 rounded-2xl shadow-lg shadow-sky-500/25 text-white">
              <Stethoscope className="h-8 w-8" />
            </div>
          </div>
          <CardTitle className="text-2xl font-extrabold text-slate-900 font-display">Patient Portal Login</CardTitle>
          <CardDescription className="text-slate-500 text-xs sm:text-sm">
            Access your medical history, test reports & upcoming appointments
          </CardDescription>

          {/* Quick Demo Credentials Pill for portfolio reviewers */}
          <div className="mt-3 bg-sky-50 border border-sky-100 rounded-2xl p-3 text-left">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold text-sky-800 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-sky-600" /> Demo Account (Portfolio Review)
              </span>
              <button
                type="button"
                onClick={handleUseDemo}
                className="text-[11px] font-bold text-sky-600 hover:text-sky-800 underline cursor-pointer"
              >
                Auto-Fill
              </button>
            </div>
            <p className="text-[10px] text-slate-500 font-mono">admin@lunariahill.com / testuser123</p>
          </div>
        </CardHeader>

        <CardContent className="pt-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-xs font-semibold text-slate-700">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@lunariahill.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-xl border-slate-200 h-11 text-sm bg-slate-50 focus-visible:bg-white"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password" className="text-xs font-semibold text-slate-700">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="testuser123"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="rounded-xl border-slate-200 h-11 text-sm bg-slate-50 focus-visible:bg-white pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 text-slate-400 hover:text-slate-600 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-xl py-5 h-auto text-sm font-semibold shadow-md shadow-sky-500/20"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in securely...' : 'Sign In to Portal'}
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </form>

          <div className="mt-6 text-center pt-4 border-t border-slate-100">
            <p className="text-xs text-slate-500">
              Don't have a patient account yet?{' '}
              <button
                type="button"
                onClick={onSwitchToRegister}
                className="text-sky-600 hover:text-sky-700 font-semibold underline ml-1"
              >
                Create Account
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
