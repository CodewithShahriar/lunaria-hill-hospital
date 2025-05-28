
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  CreditCard, 
  Download, 
  Search, 
  Calendar, 
  DollarSign,
  FileText,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { useState } from 'react';

const BillingPayment = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const billingRecords = [
    {
      id: 1,
      serviceType: 'Cardiology Consultation',
      doctor: 'Dr. Sarah Johnson',
      date: '2024-01-10',
      amount: 250.00,
      status: 'Paid',
      paymentDate: '2024-01-12',
      invoiceId: 'INV-2024-001',
      description: 'Initial consultation and ECG',
      insuranceCovered: 180.00,
      patientResponsibility: 70.00
    },
    {
      id: 2,
      serviceType: 'Blood Tests',
      doctor: 'Dr. Michael Chen',
      date: '2024-01-05',
      amount: 150.00,
      status: 'Paid',
      paymentDate: '2024-01-07',
      invoiceId: 'INV-2024-002',
      description: 'Complete Blood Count, Lipid Panel',
      insuranceCovered: 120.00,
      patientResponsibility: 30.00
    },
    {
      id: 3,
      serviceType: 'Dermatology Treatment',
      doctor: 'Dr. Emily Davis',
      date: '2023-12-20',
      amount: 180.00,
      status: 'Unpaid',
      paymentDate: null,
      invoiceId: 'INV-2023-045',
      description: 'Skin lesion removal',
      insuranceCovered: 144.00,
      patientResponsibility: 36.00
    },
    {
      id: 4,
      serviceType: 'X-Ray Imaging',
      doctor: 'Dr. Robert Wilson',
      date: '2023-12-15',
      amount: 200.00,
      status: 'Paid',
      paymentDate: '2023-12-18',
      invoiceId: 'INV-2023-040',
      description: 'Chest X-Ray',
      insuranceCovered: 160.00,
      patientResponsibility: 40.00
    },
    {
      id: 5,
      serviceType: 'Physical Therapy Session',
      doctor: 'Dr. Lisa Anderson',
      date: '2023-11-28',
      amount: 120.00,
      status: 'Pending',
      paymentDate: null,
      invoiceId: 'INV-2023-035',
      description: 'Physical therapy evaluation',
      insuranceCovered: 96.00,
      patientResponsibility: 24.00
    },
    {
      id: 6,
      serviceType: 'Annual Check-up',
      doctor: 'Dr. James Brown',
      date: '2023-11-15',
      amount: 300.00,
      status: 'Paid',
      paymentDate: '2023-11-16',
      invoiceId: 'INV-2023-030',
      description: 'Comprehensive annual physical',
      insuranceCovered: 240.00,
      patientResponsibility: 60.00
    }
  ];

  const filteredRecords = billingRecords.filter(record => {
    const matchesSearch = record.serviceType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.doctor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || record.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'paid':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'unpaid':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'paid':
        return <CheckCircle className="h-4 w-4" />;
      case 'unpaid':
        return <AlertCircle className="h-4 w-4" />;
      case 'pending':
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const handlePayNow = (record: any) => {
    alert(`Redirecting to payment portal for ${record.invoiceId}`);
  };

  const handleDownloadInvoice = (record: any) => {
    alert(`Downloading invoice ${record.invoiceId}`);
  };

  const totalUnpaid = billingRecords
    .filter(record => record.status === 'Unpaid')
    .reduce((sum, record) => sum + record.patientResponsibility, 0);

  const totalPending = billingRecords
    .filter(record => record.status === 'Pending')
    .reduce((sum, record) => sum + record.patientResponsibility, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Billing & Payment</h1>
        <Button className="flex items-center space-x-2">
          <Download className="h-4 w-4" />
          <span>Download Statements</span>
        </Button>
      </div>

      {/* Payment Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
  <Card className="w-full">
    <CardContent className="p-4">
      <div className="flex items-center space-x-3">
        <div className="bg-red-100 p-2 rounded-lg">
          <AlertCircle className="h-5 w-5 text-red-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Outstanding Balance</p>
          <p className="text-2xl font-bold text-red-600">
            ${totalUnpaid.toFixed(2)}
          </p>
        </div>
      </div>
    </CardContent>
  </Card>

  <Card className="w-full">
    <CardContent className="p-4">
      <div className="flex items-center space-x-3">
        <div className="bg-yellow-100 p-2 rounded-lg">
          <AlertCircle className="h-5 w-5 text-yellow-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Pending Payments</p>
          <p className="text-2xl font-bold text-yellow-600">
            ${totalPending.toFixed(2)}
          </p>
        </div>
      </div>
    </CardContent>
  </Card>

  <Card className="w-full">
    <CardContent className="p-4">
      <div className="flex items-center space-x-3">
        <div className="bg-green-100 p-2 rounded-lg">
          <CheckCircle className="h-5 w-5 text-green-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Paid This Year</p>
          <p className="text-2xl font-bold text-green-600">
            ${billingRecords
              .filter(r => r.status === 'Paid')
              .reduce((sum, r) => sum + r.patientResponsibility, 0)
              .toFixed(2)}
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
</div>


      {/* Search and Filter */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by service or doctor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="all">All Status</option>
              <option value="paid">Paid</option>
              <option value="unpaid">Unpaid</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Billing Records */}
      <div className="space-y-4">
        {filteredRecords.map((record) => (
          <Card key={record.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-4 lg:space-y-0">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <DollarSign className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{record.serviceType}</h3>
                      <Badge className={`${getStatusColor(record.status)} flex items-center space-x-1`}>
                        {getStatusIcon(record.status)}
                        <span>{record.status}</span>
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">
                          <strong>Doctor:</strong> {record.doctor}
                        </p>
                        <p className="text-sm text-gray-600 flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          Service Date: {record.date}
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>Invoice ID:</strong> {record.invoiceId}
                        </p>
                        {record.paymentDate && (
                          <p className="text-sm text-gray-600">
                            <strong>Paid Date:</strong> {record.paymentDate}
                          </p>
                        )}
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">
                          <strong>Total Amount:</strong> ${record.amount.toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>Insurance Covered:</strong> ${record.insuranceCovered.toFixed(2)}
                        </p>
                        <p className="text-sm font-medium text-gray-800">
                          <strong>Your Responsibility:</strong> ${record.patientResponsibility.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Description:</strong> {record.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 lg:ml-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleDownloadInvoice(record)}
                    className="flex items-center space-x-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Invoice</span>
                  </Button>
                  
                  {(record.status === 'Unpaid' || record.status === 'Pending') && (
                    <Button 
                      onClick={() => handlePayNow(record)}
                      className="flex items-center space-x-2 bg-green-600 hover:bg-green-700"
                    >
                      <CreditCard className="h-4 w-4" />
                      <span>Pay Now</span>
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredRecords.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-800 mb-2">No billing records found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BillingPayment;