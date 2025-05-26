
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, User, Search, Filter, Download } from 'lucide-react';
import { useState } from 'react';

const AppointmentHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const appointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      date: '2024-01-10',
      time: '10:30 AM',
      serial: 'A-001',
      status: 'Completed',
      type: 'Follow-up',
      notes: 'Regular checkup - Blood pressure normal'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'General Medicine',
      date: '2024-01-05',
      time: '2:00 PM',
      serial: 'B-005',
      status: 'Completed',
      type: 'Consultation',
      notes: 'Annual physical examination'
    },
    {
      id: 3,
      doctor: 'Dr. Emily Davis',
      specialty: 'Dermatologist',
      date: '2023-12-20',
      time: '11:15 AM',
      serial: 'C-012',
      status: 'Completed',
      type: 'Treatment',
      notes: 'Skin examination and treatment'
    },
    {
      id: 4,
      doctor: 'Dr. Robert Wilson',
      specialty: 'Orthopedist',
      date: '2023-12-15',
      time: '3:45 PM',
      serial: 'D-008',
      status: 'Cancelled',
      type: 'Consultation',
      notes: 'Patient cancelled due to emergency'
    },
    {
      id: 5,
      doctor: 'Dr. Lisa Anderson',
      specialty: 'Neurologist',
      date: '2023-11-28',
      time: '9:00 AM',
      serial: 'E-003',
      status: 'Completed',
      type: 'Consultation',
      notes: 'Headache evaluation - MRI scheduled'
    },
    {
      id: 6,
      doctor: 'Dr. James Brown',
      specialty: 'Ophthalmologist',
      date: '2023-11-15',
      time: '1:30 PM',
      serial: 'F-015',
      status: 'Completed',
      type: 'Check-up',
      notes: 'Eye examination - Prescription updated'
    }
  ];

  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = appointment.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || appointment.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'scheduled':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Appointment History</h1>
        <Button className="flex items-center space-x-2">
          <Download className="h-4 w-4" />
          <span>Export History</span>
        </Button>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by doctor or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="all">All Status</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
                <option value="scheduled">Scheduled</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Appointment List */}
      <div className="space-y-4">
        {filteredAppointments.map((appointment) => (
          <Card key={appointment.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <User className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{appointment.doctor}</h3>
                      <Badge variant="outline">{appointment.specialty}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-2">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {appointment.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {appointment.time}
                      </span>
                      <span className="font-medium">Serial: {appointment.serial}</span>
                    </div>
                    {appointment.notes && (
                      <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded mt-2">
                        <strong>Notes:</strong> {appointment.notes}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <Badge className={getStatusColor(appointment.status)}>
                    {appointment.status}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {appointment.type}
                  </Badge>
                  {appointment.status === 'Completed' && (
                    <Button variant="outline" size="sm" className="mt-2">
                      View Report
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredAppointments.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-800 mb-2">No appointments found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </CardContent>
        </Card>
      )}

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">
              {appointments.filter(a => a.status === 'Completed').length}
            </div>
            <p className="text-sm text-gray-600">Completed Appointments</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-600">
              {appointments.filter(a => a.status === 'Cancelled').length}
            </div>
            <p className="text-sm text-gray-600">Cancelled Appointments</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">
              {appointments.length}
            </div>
            <p className="text-sm text-gray-600">Total Appointments</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AppointmentHistory;