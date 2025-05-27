
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { FileText, Download, Search, Calendar, User, Pill, Eye } from 'lucide-react';
import { useState } from 'react';

const Prescriptions = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const prescriptions = [
    {
      id: 1,
      medication: 'Lisinopril 10mg',
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      date: '2024-01-10',
      prescriptionId: 'RX-2024-001',
      dosage: '1 tablet daily',
      duration: '30 days',
      refills: 2,
      status: 'Active',
      instructions: 'Take with food. Monitor blood pressure regularly.',
      type: 'PDF'
    },
    {
      id: 2,
      medication: 'Metformin 500mg',
      doctor: 'Dr. Michael Chen',
      specialty: 'Endocrinologist',
      date: '2024-01-05',
      prescriptionId: 'RX-2024-002',
      dosage: '2 tablets twice daily',
      duration: '90 days',
      refills: 5,
      status: 'Active',
      instructions: 'Take with meals. Check blood sugar levels as directed.',
      type: 'PDF'
    },
    {
      id: 3,
      medication: 'Ibuprofen 400mg',
      doctor: 'Dr. Emily Davis',
      specialty: 'General Medicine',
      date: '2023-12-20',
      prescriptionId: 'RX-2023-045',
      dosage: '1 tablet as needed',
      duration: '14 days',
      refills: 0,
      status: 'Expired',
      instructions: 'Take for pain relief. Do not exceed 3 tablets per day.',
      type: 'Image'
    },
    {
      id: 4,
      medication: 'Omeprazole 20mg',
      doctor: 'Dr. Robert Wilson',
      specialty: 'Gastroenterologist',
      date: '2023-12-15',
      prescriptionId: 'RX-2023-040',
      dosage: '1 capsule daily',
      duration: '60 days',
      refills: 3,
      status: 'Active',
      instructions: 'Take before breakfast on empty stomach.',
      type: 'PDF'
    },
    {
      id: 5,
      medication: 'Vitamin D3 1000IU',
      doctor: 'Dr. Lisa Anderson',
      specialty: 'Family Medicine',
      date: '2023-11-28',
      prescriptionId: 'RX-2023-035',
      dosage: '1 tablet daily',
      duration: '90 days',
      refills: 6,
      status: 'Active',
      instructions: 'Take with a meal for better absorption.',
      type: 'PDF'
    }
  ];

  const filteredPrescriptions = prescriptions.filter(prescription => 
    prescription.medication.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prescription.doctor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'expired':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handleDownload = (prescription: any) => {
    // Simulate download
    console.log(`Downloading prescription: ${prescription.prescriptionId}`);
    alert(`Downloading ${prescription.medication} prescription`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">My Prescriptions</h1>
        <Button className="flex items-center space-x-2">
          <Download className="h-4 w-4" />
          <span>Download All</span>
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search by medication or doctor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Active Prescriptions Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <Pill className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Active Prescriptions</p>
                <p className="text-2xl font-bold text-green-600">
                  {prescriptions.filter(p => p.status === 'Active').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="bg-red-100 p-2 rounded-lg">
                <FileText className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Expired</p>
                <p className="text-2xl font-bold text-red-600">
                  {prescriptions.filter(p => p.status === 'Expired').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Download className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Prescriptions</p>
                <p className="text-2xl font-bold text-blue-600">{prescriptions.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Prescription List */}
      <div className="space-y-4">
        {filteredPrescriptions.map((prescription) => (
          <Card key={prescription.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-4 lg:space-y-0">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <User className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{prescription.medication}</h3>
                      <Badge className={getStatusColor(prescription.status)}>
                        {prescription.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600 flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {prescription.doctor} - {prescription.specialty}
                        </p>
                        <p className="text-sm text-gray-600 flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          Prescribed: {prescription.date}
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>Prescription ID:</strong> {prescription.prescriptionId}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">
                          <strong>Dosage:</strong> {prescription.dosage}
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>Duration:</strong> {prescription.duration}
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>Refills Remaining:</strong> {prescription.refills}
                        </p>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Instructions:</strong> {prescription.instructions}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 lg:ml-4">
                  <Badge variant="outline" className="self-start">
                    {prescription.type}
                  </Badge>
                  <Button 
                    onClick={() => handleDownload(prescription)}
                    className="flex items-center space-x-2"
                    size="sm"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </Button>
                  {prescription.status === 'Active' && prescription.refills > 0 && (
                    <Button variant="outline" size="sm" className="flex items-center space-x-2">
                      <Pill className="h-4 w-4" />
                      <span>Refill</span>
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPrescriptions.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-800 mb-2">No prescriptions found</h3>
            <p className="text-gray-600">Try adjusting your search criteria.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Prescriptions;