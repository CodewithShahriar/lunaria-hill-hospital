
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Clock, 
  User, 
  Bell, 
  Activity,
  HeartPulse,
  Thermometer,
  Weight,
  FileText
} from 'lucide-react';

interface DashboardHomeProps {
  patientData: any;
}

const DashboardHome = ({ patientData }: DashboardHomeProps) => {
  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      date: '2024-01-15',
      time: '10:30 AM',
      serial: 'A-001',
      type: 'Follow-up'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'General Medicine',
      date: '2024-01-20',
      time: '2:00 PM',
      serial: 'B-005',
      type: 'Consultation'
    }
  ];

  const recentNotifications = [
    {
      id: 1,
      message: 'Your prescription for Lisinopril is ready for pickup',
      time: '2 hours ago',
      type: 'prescription'
    },
    {
      id: 2,
      message: 'Appointment reminder: Dr. Sarah Johnson tomorrow at 10:30 AM',
      time: '1 day ago',
      type: 'appointment'
    },
    {
      id: 3,
      message: 'Lab results are now available in your portal',
      time: '3 days ago',
      type: 'results'
    }
  ];

  const vitalSigns = [
    { label: 'Blood Pressure', value: '120/80', unit: 'mmHg', icon: HeartPulse, status: 'normal' },
    { label: 'Heart Rate', value: '72', unit: 'bpm', icon: Activity, status: 'normal' },
    { label: 'Temperature', value: '98.6', unit: '°F', icon: Thermometer, status: 'normal' },
    { label: 'Weight', value: '150', unit: 'lbs', icon: Weight, status: 'normal' }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-2">
          Welcome back, {patientData?.firstName}!
        </h1>
        <p className="text-blue-100">
          Here's your health summary for today. Stay on top of your appointments and health goals.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
  <Card className="w-full">
    <CardContent className="p-4">
      <div className="flex items-center space-x-3">
        <div className="bg-blue-100 p-2 rounded-lg">
          <Calendar className="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Next Appointment</p>
          <p className="font-semibold">Jan 15, 2024</p>
        </div>
      </div>
    </CardContent>
  </Card>

  <Card className="w-full">
    <CardContent className="p-4">
      <div className="flex items-center space-x-3">
        <div className="bg-green-100 p-2 rounded-lg">
          <FileText className="h-5 w-5 text-green-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Active Prescriptions</p>
          <p className="font-semibold">3</p>
        </div>
      </div>
    </CardContent>
  </Card>

  <Card className="w-full">
    <CardContent className="p-4">
      <div className="flex items-center space-x-3">
        <div className="bg-orange-100 p-2 rounded-lg">
          <Bell className="h-5 w-5 text-orange-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Notifications</p>
          <p className="font-semibold">5</p>
        </div>
      </div>
    </CardContent>
  </Card>

  <Card className="w-full">
    <CardContent className="p-4">
      <div className="flex items-center space-x-3">
        <div className="bg-purple-100 p-2 rounded-lg">
          <Activity className="h-5 w-5 text-purple-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Health Score</p>
          <p className="font-semibold">85/100</p>
        </div>
      </div>
    </CardContent>
  </Card>
</div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Appointments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              <span>Upcoming Appointments</span>
            </CardTitle>
            <CardDescription>Your scheduled medical appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <User className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{appointment.doctor}</p>
                      <p className="text-sm text-gray-600">{appointment.specialty}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-sm text-gray-500 flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {appointment.date}
                        </span>
                        <span className="text-sm text-gray-500 flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {appointment.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="mb-1">
                      {appointment.serial}
                    </Badge>
                    <p className="text-xs text-gray-500">{appointment.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="h-5 w-5 text-orange-600" />
              <span>Recent Notifications</span>
            </CardTitle>
            <CardDescription>Latest updates and reminders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentNotifications.map((notification) => (
                <div key={notification.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="bg-orange-100 p-1.5 rounded-full mt-0.5">
                    <Bell className="h-3 w-3 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">{notification.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Notifications
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Vital Signs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-5 w-5 text-red-600" />
            <span>Latest Vital Signs</span>
          </CardTitle>
          <CardDescription>Your most recent health measurements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {vitalSigns.map((vital, index) => {
              const Icon = vital.icon;
              return (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Icon className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{vital.label}</p>
                    <p className="font-semibold">{vital.value} <span className="text-sm font-normal text-gray-500">{vital.unit}</span></p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardHome;