
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
      degree: 'MD, FACC, Fellowship in Interventional Cardiology',
      lastConsultation: '2024-01-10',
      prescriptionId: 'RX-2024-001',
      patientId: 'P12345',
      nextCheckupDays: 30,
      nextCheckupDate: '2024-02-10',
      status: 'Active',
      instructions: 'Take with food. Monitor blood pressure regularly.',
      type: 'PDF'
    },
    {
      id: 2,
      medication: 'Metformin 500mg',
      doctor: 'Dr. Michael Chen',
      specialty: 'Endocrinologist',
      degree: 'MD, PhD, Board Certified in Endocrinology',
      lastConsultation: '2024-01-05',
      prescriptionId: 'RX-2024-002',
      patientId: 'P12345',
      nextCheckupDays: 90,
      nextCheckupDate: '2024-04-05',
      status: 'Active',
      instructions: 'Take with meals. Check blood sugar levels as directed.',
      type: 'PDF'
    },
    {
      id: 3,
      medication: 'Ibuprofen 400mg',
      doctor: 'Dr. Emily Davis',
      specialty: 'General Medicine',
      degree: 'MD, MBBS, Fellowship in Family Medicine',
      lastConsultation: '2023-12-20',
      prescriptionId: 'RX-2023-045',
      patientId: 'P12345',
      nextCheckupDays: 14,
      nextCheckupDate: '2024-01-03',
      status: 'Expired',
      instructions: 'Take for pain relief. Do not exceed 3 tablets per day.',
      type: 'Image'
    },
    {
      id: 4,
      medication: 'Omeprazole 20mg',
      doctor: 'Dr. Robert Wilson',
      specialty: 'Gastroenterologist',
      degree: 'MD, MS, Board Certified in Gastroenterology',
      lastConsultation: '2023-12-15',
      prescriptionId: 'RX-2023-040',
      patientId: 'P12345',
      nextCheckupDays: 60,
      nextCheckupDate: '2024-02-15',
      status: 'Active',
      instructions: 'Take before breakfast on empty stomach.',
      type: 'PDF'
    },
    {
      id: 5,
      medication: 'Vitamin D3 1000IU',
      doctor: 'Dr. Lisa Anderson',
      specialty: 'Family Medicine',
      degree: 'MD, MPH, Board Certified in Family Medicine',
      lastConsultation: '2023-11-28',
      prescriptionId: 'RX-2023-035',
      patientId: 'P12345',
      nextCheckupDays: 90,
      nextCheckupDate: '2024-02-28',
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
      {/* <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4">
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
</div> */}


      {/* Prescription List */}
      <div className="space-y-4">
        {filteredPrescriptions.map((prescription) => (
          <Card key={prescription.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-4 lg:space-y-0">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="bg-blue-100 p-1 rounded-full">
                    <User className="h-6 w-6 text-blue-600 hidden lg:block" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                        {/* <User className="h-4 w-4 mr-2" /> */}
                        {prescription.doctor}
                      </h3>
                      <Badge className={getStatusColor(prescription.status)}>
                        {prescription.status}
                      </Badge>
                    </div>
                    
                     <div className="space-y-2 mb-3">
                      <p className="text-sm text-gray-600">{prescription.specialty}</p>
                      <p className="text-xs text-gray-500">{prescription.degree}</p>
                      <p className="text-sm text-gray-600 flex items-center">
                        <span className="font-medium text-blue-600 mr-1">Prescribed:</span>
                        {prescription.lastConsultation}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Prescription ID:</strong> {prescription.prescriptionId}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Patient ID:</strong> {prescription.patientId}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Next Check-up:</strong> After {prescription.nextCheckupDays} days ({prescription.nextCheckupDate})
                      </p>
                    </div>

                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Instructions:</strong> {prescription.instructions}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 lg:ml-4 min-w-fit">
                  <Badge variant="outline" className="self-start">
                    
                  </Badge>

                  <Button 
                    // onClick={() => handleDownload(prescription)}
                    // className="flex items-center space-x-2"
                    // size="sm"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download PDF</span>
                  </Button>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="flex items-center space-x-2 border-black">
                        <Eye className="h-4 w-4" />
                        <span>View Full Prescription</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                      <DialogHeader>
                        <DialogTitle>Full Prescription - {prescription.prescriptionId}</DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <img 
                          src="https://i.postimg.cc/5t0Pwkz9/Whats-App-Image-2025-05-27-at-12-25-56-11c2e744.jpg" 
                          alt="Prescription" 
                          className="w-full h-auto rounded-lg shadow-lg"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="flex items-center space-x-2 border-black">
                        <FileText className="h-4 w-4" />
                        <span>View Test Report</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                      <DialogHeader>
                        <DialogTitle>Test Report - {prescription.prescriptionId}</DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <img 
                          src="https://i.postimg.cc/XvzsxcKf/Whats-App-Image-2025-05-27-at-12-25-57-94f0471a.jpg" 
                          alt="Test Report" 
                          className="w-full h-auto rounded-lg shadow-lg"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
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