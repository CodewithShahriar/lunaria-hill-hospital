
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PatientDashboard from '@/components/PatientDashboard';

const Dashboard = () => {
  const navigate = useNavigate();
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const storedPatientData = localStorage.getItem('patientData');

    if (!isLoggedIn || !storedPatientData) {
      navigate('/login');
      return;
    }

    setPatientData(JSON.parse(storedPatientData));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('patientData');
    navigate('/');
  };

  if (!patientData) {
    return <div>Loading...</div>;
  }

  return <PatientDashboard patientData={patientData} onLogout={handleLogout} />;
};

export default Dashboard;