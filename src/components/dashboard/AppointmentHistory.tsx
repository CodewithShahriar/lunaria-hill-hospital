
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
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-0">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Appointment History</h1>
        <Button className="flex items-center space-x-2 text-sm">
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Export History</span>
          <span className="sm:hidden">Export</span>
        </Button>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="p-3 sm:p-4">
          <div className="space-y-3 sm:space-y-0 sm:flex sm:gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by doctor or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 text-sm"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="flex h-9 sm:h-10 rounded-md border border-input bg-background px-3 py-1 sm:py-2 text-sm w-full sm:w-auto"
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
      <div className="space-y-3 sm:space-y-4">
        {filteredAppointments.map((appointment) => (
          <Card key={appointment.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-4">
                {/* Header with doctor info and status */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-2 sm:p-3 rounded-full">
                      <User className="h-4 w-4 sm:h-6 sm:w-6 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 truncate">{appointment.doctor}</h3>
                        <Badge variant="outline" className="text-xs w-fit">{appointment.specialty}</Badge>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                        <span className="flex items-center">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          {appointment.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          {appointment.time}
                        </span>
                        <span className="font-medium">Serial: {appointment.serial}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Status and action buttons */}
                  <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2">
                    <Badge className={`${getStatusColor(appointment.status)} text-xs`}>
                      {appointment.status}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {appointment.type}
                    </Badge>
                    {appointment.status === 'Completed' && (
                      <Button variant="outline" size="sm" className="text-xs px-2 py-1 sm:mt-2">
                        View Report
                      </Button>
                    )}
                  </div>
                </div>

                {/* Notes section */}
                {appointment.notes && (
                  <div className="bg-gray-50 p-3 rounded text-xs sm:text-sm text-gray-600">
                    <strong>Notes:</strong> {appointment.notes}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredAppointments.length === 0 && (
        <Card>
          <CardContent className="p-6 sm:p-8 text-center">
            <Calendar className="h-8 w-8 sm:h-12 sm:w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-2">No appointments found</h3>
            <p className="text-sm sm:text-base text-gray-600">Try adjusting your search or filter criteria.</p>
          </CardContent>
        </Card>
      )}

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
        <Card>
          <CardContent className="p-3 sm:p-4 text-center">
            <div className="text-xl sm:text-2xl font-bold text-green-600">
              {appointments.filter(a => a.status === 'Completed').length}
            </div>
            <p className="text-xs sm:text-sm text-gray-600">Completed Appointments</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 sm:p-4 text-center">
            <div className="text-xl sm:text-2xl font-bold text-red-600">
              {appointments.filter(a => a.status === 'Cancelled').length}
            </div>
            <p className="text-xs sm:text-sm text-gray-600">Cancelled Appointments</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 sm:p-4 text-center">
            <div className="text-xl sm:text-2xl font-bold text-blue-600">
              {appointments.length}
            </div>
            <p className="text-xs sm:text-sm text-gray-600">Total Appointments</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AppointmentHistory;