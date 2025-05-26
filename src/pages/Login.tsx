
import LoginForm from '@/components/auth/LoginForm';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    // Demo credentials validation
    const validCredentials = {
      email: 'demo@hospital.com',
      password: 'demo123'
    };

    if (email === validCredentials.email && password === validCredentials.password) {
      // Store login state
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
      
      // Navigate to dashboard
      navigate('/dashboard');
    } else {
      alert('Invalid credentials. Please use:\nEmail: demo@hospital.com\nPassword: demo123');
    }
  };

  const handleSwitchToRegister = () => {
    navigate('/register');
  };

  return <LoginForm onLogin={handleLogin} onSwitchToRegister={handleSwitchToRegister} />;
};

export default Login;