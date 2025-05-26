
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Edit, Save, X, Camera, Phone, Mail, Calendar, User as UserIcon } from 'lucide-react';

interface MyProfileProps {
  patientData: any;
  onUpdateProfile: (data: any) => void;
}

const MyProfile = ({ patientData, onUpdateProfile }: MyProfileProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: patientData?.firstName || 'John',
    lastName: patientData?.lastName || 'Doe',
    email: patientData?.email || 'john.doe@example.com',
    phone: patientData?.phone || '+1 (555) 123-4567',
    dateOfBirth: patientData?.dateOfBirth || '1990-05-15',
    gender: patientData?.gender || 'male',
    address: patientData?.address || '123 Main St, City, State 12345',
    emergencyContact: patientData?.emergencyContact || 'Jane Doe - +1 (555) 987-6543',
    bloodType: patientData?.bloodType || 'O+',
    allergies: patientData?.allergies || 'None',
    medicalConditions: patientData?.medicalConditions || 'Hypertension'
  });

  const handleSave = () => {
    onUpdateProfile(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      firstName: patientData?.firstName || 'John',
      lastName: patientData?.lastName || 'Doe',
      email: patientData?.email || 'john.doe@example.com',
      phone: patientData?.phone || '+1 (555) 123-4567',
      dateOfBirth: patientData?.dateOfBirth || '1990-05-15',
      gender: patientData?.gender || 'male',
      address: patientData?.address || '123 Main St, City, State 12345',
      emergencyContact: patientData?.emergencyContact || 'Jane Doe - +1 (555) 987-6543',
      bloodType: patientData?.bloodType || 'O+',
      allergies: patientData?.allergies || 'None',
      medicalConditions: patientData?.medicalConditions || 'Hypertension'
    });
    setIsEditing(false);
  };

  const calculateAge = (birthDate: string) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
        {!isEditing ? (
          <Button onClick={() => setIsEditing(true)} className="flex items-center space-x-2">
            <Edit className="h-4 w-4" />
            <span>Edit Profile</span>
          </Button>
        ) : (
          <div className="flex space-x-2">
            <Button onClick={handleSave} className="flex items-center space-x-2">
              <Save className="h-4 w-4" />
              <span>Save</span>
            </Button>
            <Button variant="outline" onClick={handleCancel} className="flex items-center space-x-2">
              <X className="h-4 w-4" />
              <span>Cancel</span>
            </Button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Photo & Basic Info */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Profile Photo</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="relative inline-block">
              <Avatar className="h-32 w-32 mx-auto">
                <AvatarImage src={patientData?.photo} />
                <AvatarFallback className="bg-blue-100 text-blue-600 text-2xl">
                  {formData.firstName[0]}{formData.lastName[0]}
                </AvatarFallback>
              </Avatar>
              {isEditing && (
                <Button
                  size="sm"
                  variant="outline"
                  className="absolute bottom-0 right-0 rounded-full p-2"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              )}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {formData.firstName} {formData.lastName}
              </h3>
              <p className="text-gray-600">Patient ID: P12345</p>
              <Badge variant="outline" className="mt-2">
                {calculateAge(formData.dateOfBirth)} years old
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <UserIcon className="h-5 w-5 text-blue-600" />
              <span>Personal Information</span>
            </CardTitle>
            <CardDescription>Your basic personal and contact details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                {isEditing ? (
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                ) : (
                  <p className="p-2 bg-gray-50 rounded-md">{formData.firstName}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                {isEditing ? (
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                ) : (
                  <p className="p-2 bg-gray-50 rounded-md">{formData.lastName}</p>
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Email Address</span>
              </Label>
              {isEditing ? (
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              ) : (
                <p className="p-2 bg-gray-50 rounded-md">{formData.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Phone Number</span>
              </Label>
              {isEditing ? (
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              ) : (
                <p className="p-2 bg-gray-50 rounded-md">{formData.phone}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth" className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Date of Birth</span>
                </Label>
                {isEditing ? (
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
                  />
                ) : (
                  <p className="p-2 bg-gray-50 rounded-md">{formData.dateOfBirth}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                {isEditing ? (
                  <select
                    id="gender"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    value={formData.gender}
                    onChange={(e) => setFormData({...formData, gender: e.target.value})}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                ) : (
                  <p className="p-2 bg-gray-50 rounded-md capitalize">{formData.gender}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              {isEditing ? (
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              ) : (
                <p className="p-2 bg-gray-50 rounded-md">{formData.address}</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Medical Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <UserIcon className="h-5 w-5 text-red-600" />
            <span>Medical Information</span>
          </CardTitle>
          <CardDescription>Important medical details and emergency contacts</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="bloodType">Blood Type</Label>
              {isEditing ? (
                <select
                  id="bloodType"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={formData.bloodType}
                  onChange={(e) => setFormData({...formData, bloodType: e.target.value})}
                >
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              ) : (
                <p className="p-2 bg-gray-50 rounded-md">{formData.bloodType}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="allergies">Allergies</Label>
              {isEditing ? (
                <Input
                  id="allergies"
                  value={formData.allergies}
                  onChange={(e) => setFormData({...formData, allergies: e.target.value})}
                  placeholder="e.g., Penicillin, Nuts"
                />
              ) : (
                <p className="p-2 bg-gray-50 rounded-md">{formData.allergies}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="medicalConditions">Medical Conditions</Label>
              {isEditing ? (
                <Input
                  id="medicalConditions"
                  value={formData.medicalConditions}
                  onChange={(e) => setFormData({...formData, medicalConditions: e.target.value})}
                  placeholder="e.g., Diabetes, Hypertension"
                />
              ) : (
                <p className="p-2 bg-gray-50 rounded-md">{formData.medicalConditions}</p>
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="emergencyContact">Emergency Contact</Label>
            {isEditing ? (
              <Input
                id="emergencyContact"
                value={formData.emergencyContact}
                onChange={(e) => setFormData({...formData, emergencyContact: e.target.value})}
                placeholder="Name - Phone Number"
              />
            ) : (
              <p className="p-2 bg-gray-50 rounded-md">{formData.emergencyContact}</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyProfile;