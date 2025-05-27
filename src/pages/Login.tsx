
import LoginForm from '@/components/auth/LoginForm';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    // Check demo credentials first
    const validCredentials = {
      email: 'admin@lunariahill.com',
      password: 'testuser123'
    };

    if (email === validCredentials.email && password === validCredentials.password) {
      // Store login state for demo user
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
      // Store login state for registered user
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col">
      {/* Back to Home Button */}
      <div className="p-4">
        <Button
          variant="outline"
          onClick={handleBackToHome}
          className="flex items-center gap-2 hover:bg-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>
      </div>

      {/* Login Form */}
      <div className="flex-1 flex items-center justify-center px-4">
        <LoginForm onLogin={handleLogin} onSwitchToRegister={handleSwitchToRegister} />
      </div>
    </div>
  );
};

export default Login;