
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { AppointmentForm } from '@/components/AppointmentForm';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Briefcase, MapPin, Clock, Calendar, 
  Upload, Search, ChevronDown, ChevronUp, 
  Building, Users, Heart, Trophy
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from '@/hooks/use-toast';

// Mock job listings
const jobListings = [
  {
    id: 1,
    title: "Cardiologist",
    department: "Cardiology",
    type: "Full-time",
    location: "Main Campus",
    experience: "5+ years",
    postedDate: "2 days ago",
    description: "We are seeking a board-certified Cardiologist to join our growing team. The ideal candidate will have expertise in advanced cardiac procedures and a patient-centered approach.",
    requirements: [
      "MD or DO degree with completion of Cardiology fellowship",
      "Board certification in Cardiology",
      "5+ years of clinical experience",
      "Excellent communication and patient care skills",
      "Experience with advanced cardiac imaging and procedures"
    ],
    benefits: [
      "Competitive salary and benefits package",
      "Research opportunities",
      "Advanced medical facilities",
      "Continuing education support",
      "Work-life balance programs"
    ]
  },
  {
    id: 2,
    title: "Emergency Room Nurse",
    department: "Emergency Medicine",
    type: "Full-time",
    location: "Main Campus",
    experience: "2+ years",
    postedDate: "1 week ago",
    description: "Join our dynamic ER team as a Registered Nurse. You'll work in a fast-paced environment providing critical care to patients in emergency situations.",
    requirements: [
      "BSN degree required",
      "Current RN license",
      "BLS and ACLS certification",
      "2+ years of emergency or critical care experience",
      "Excellent assessment and triage skills"
    ],
    benefits: [
      "Competitive salary with shift differentials",
      "Comprehensive health benefits",
      "Tuition reimbursement",
      "Flexible scheduling options",
      "Professional development opportunities"
    ]
  },
  {
    id: 3,
    title: "Pediatrician",
    department: "Pediatrics",
    type: "Full-time",
    location: "Children's Wing",
    experience: "3+ years",
    postedDate: "3 days ago",
    description: "We are looking for a compassionate Pediatrician to join our family-centered pediatric care team. The ideal candidate will have a strong focus on preventive care and child development.",
    requirements: [
      "MD or DO degree with completion of Pediatrics residency",
      "Board certification in Pediatrics",
      "3+ years of clinical experience",
      "Excellent communication skills with children and families",
      "Experience with newborn care and adolescent medicine"
    ],
    benefits: [
      "Competitive salary",
      "Sign-on bonus",
      "Loan forgiveness program",
      "Comprehensive benefits",
      "Balanced call schedule"
    ]
  },
  {
    id: 4,
    title: "Radiologic Technologist",
    department: "Radiology",
    type: "Part-time",
    location: "Imaging Center",
    experience: "1+ years",
    postedDate: "2 weeks ago",
    description: "We're seeking a skilled Radiologic Technologist to operate diagnostic imaging equipment and provide patient care during radiological procedures.",
    requirements: [
      "Associate's degree in Radiologic Technology",
      "ARRT certification",
      "State licensure",
      "1+ year experience in a clinical setting",
      "Knowledge of multiple imaging modalities"
    ],
    benefits: [
      "Competitive hourly rate",
      "Flexible scheduling",
      "Professional development opportunities",
      "Healthcare benefits for part-time employees",
      "Modern equipment and facilities"
    ]
  },
  {
    id: 5,
    title: "Hospital Administrator",
    department: "Administration",
    type: "Full-time",
    location: "Main Campus",
    experience: "7+ years",
    postedDate: "1 month ago",
    description: "We are looking for an experienced Hospital Administrator to oversee daily operations, manage staff, and ensure compliance with healthcare regulations.",
    requirements: [
      "Master's degree in Healthcare Administration or related field",
      "7+ years of healthcare management experience",
      "Strong leadership and organizational skills",
      "Knowledge of healthcare laws and regulations",
      "Experience with budget management and strategic planning"
    ],
    benefits: [
      "Executive compensation package",
      "Performance bonuses",
      "Executive healthcare plan",
      "Retirement benefits",
      "Leadership development opportunities"
    ]
  },
  {
    id: 6,
    title: "Physical Therapist",
    department: "Rehabilitation",
    type: "Full-time",
    location: "Rehab Center",
    experience: "2+ years",
    postedDate: "5 days ago",
    description: "Join our rehabilitation team as a Physical Therapist working with patients recovering from injuries, surgeries, and chronic conditions.",
    requirements: [
      "Doctorate of Physical Therapy (DPT)",
      "Current state license",
      "2+ years of clinical experience",
      "Experience with orthopedic and neurological conditions",
      "Strong patient education skills"
    ],
    benefits: [
      "Competitive salary",
      "Continuing education allowance",
      "Comprehensive benefits package",
      "Collaborative work environment",
      "Mentorship opportunities"
    ]
  }
];

// Department filters
const departments = [
  "All Departments",
  "Cardiology",
  "Emergency Medicine",
  "Pediatrics",
  "Radiology",
  "Administration",
  "Rehabilitation"
];

// Job type filters
const jobTypes = [
  "All Types",
  "Full-time",
  "Part-time",
  "Contract"
];

interface JobCardProps {
  job: any;
  onApply: (jobId: number) => void;
}

const JobCard = ({ job, onApply }: JobCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow border border-gray-300">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl text-primary-700">{job.title}</CardTitle>
            <CardDescription className="text-gray-600">{job.department}</CardDescription>
          </div>
          <Button 
            variant="outline" 
            size="sm"
            className="border-primary-500 text-primary-500 hover:bg-primary-50"
            onClick={() => onApply(job.id)}
          >
            Apply Now
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="pb-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm mb-4">
          <div className="flex items-center">
            <Briefcase className="h-4 w-4 mr-2 text-gray-500" />
            <span>{job.type}</span>
          </div>
          {/* <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-gray-500" />
            <span>{job.location}</span>
          </div> */}
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-gray-500" />
            <span>{job.experience}</span>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">{job.description}</p>
        
        {expanded && (
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                {job.requirements.map((req: string, index: number) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                {job.benefits.map((benefit: string, index: number) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between pt-2">
        <div className="text-xs text-gray-500 flex items-center">
          <Calendar className="h-3 w-3 mr-1" />
          Posted {job.postedDate}
        </div>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-gray-500"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <>
              <ChevronUp className="h-4 w-4 mr-1" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4 mr-1" />
              Show More
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [selectedJobType, setSelectedJobType] = useState('All Types');
  const [appointmentDialogOpen, setAppointmentDialogOpen] = useState(false);
  const [applicationDialogOpen, setApplicationDialogOpen] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);
  const { toast } = useToast();

  const handleBookAppointment = () => {
    setAppointmentDialogOpen(true);
  };

  const handleApplyJob = (jobId: number) => {
    setSelectedJobId(jobId);
    setApplicationDialogOpen(true);
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setApplicationDialogOpen(false);
      toast({
        title: "Application Submitted Successfully!",
        description: "We'll review your application and contact you shortly.",
      });
    }, 1000);
  };

  // Filter jobs based on search term and filters
  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All Departments' || job.department === selectedDepartment;
    const matchesJobType = selectedJobType === 'All Types' || job.type === selectedJobType;
    
    return matchesSearch && matchesDepartment && matchesJobType;
  });

  const selectedJob = selectedJobId ? jobListings.find(job => job.id === selectedJobId) : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation onAppointmentClick={handleBookAppointment} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-blue-600 text-white py-16">
  <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center ">
    <div className="max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Join Our Healthcare Team</h1>
      <p className="text-lg opacity-90 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        Discover rewarding career opportunities at Lunaria Hill Hospital, where we're dedicated to advancing healthcare and improving lives.
      </p>
      <Button
        size="lg"
        className="bg-white text-primary-700 hover:bg-gray-100 animate-fade-in"
        style={{ animationDelay: '0.4s' }}
      >
        View All Positions
      </Button>
    </div>
  </div>
</section>


      {/* Why Join Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Join Lunaria Hill Hospital</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Be part of a team that's committed to innovation, excellence in patient care, and professional growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Building className="h-12 w-12 text-primary-500 mx-auto mb-2" />
                <CardTitle>State-of-the-Art Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Work with cutting-edge medical technology in our modern facilities designed for optimal patient care.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary-500 mx-auto mb-2" />
                <CardTitle>Collaborative Environment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Join a supportive team of healthcare professionals dedicated to collaboration and excellence.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Trophy className="h-12 w-12 text-primary-500 mx-auto mb-2" />
                <CardTitle>Professional Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Access continuing education, specialized training, and career advancement opportunities.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary-500 mx-auto mb-2" />
                <CardTitle>Work-Life Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Enjoy comprehensive benefits, flexible scheduling options, and wellness programs.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Job Search Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Find Your Perfect Role</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search job title or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
              
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                value={selectedJobType}
                onChange={(e) => setSelectedJobType(e.target.value)}
              >
                {jobTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>
      
      {/* Job Listings */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Current Openings</h2>
            <p className="text-gray-600">Found {filteredJobs.length} positions matching your criteria</p>
          </div>
          
          {filteredJobs.length > 0 ? (
            <div className="space-y-6">
              {filteredJobs.map(job => (
                <JobCard key={job.id} job={job} onApply={handleApplyJob} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No positions found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or check back later for new openings</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
      
      {/* Appointment Dialog */}
      <AppointmentForm 
        open={appointmentDialogOpen} 
        onOpenChange={setAppointmentDialogOpen} 
      />
      
      {/* Job Application Dialog */}
      <Dialog open={applicationDialogOpen} onOpenChange={setApplicationDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary-700">
              Apply for {selectedJob?.title}
            </DialogTitle>
            <DialogDescription>
              Complete the form below to apply for this position at Lunaria Hill Hospital.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmitApplication} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <Input id="firstName" required />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <Input id="lastName" required />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input id="email" type="email" required />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <Input id="phone" required />
              </div>
            </div>
            
            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                Upload Resume (PDF)
              </label>
              <div className="border border-dashed border-gray-300 rounded-md p-6 text-center">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-400 mt-1">PDF up to 5MB</p>
                <Input id="resume" type="file" accept=".pdf" className="hidden" />
                <Button 
                  type="button" 
                  variant="outline" 
                  className="mt-4" 
                  onClick={() => document.getElementById('resume')?.click()}
                >
                  Select File
                </Button>
              </div>
            </div>
            
            <div>
              <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
                Cover Letter or Additional Information
              </label>
              <textarea 
                id="coverLetter"
                rows={4}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                placeholder="Briefly tell us why you're a good fit for this position..."
              ></textarea>
            </div>
            
            <DialogFooter>
              <Button 
                type="submit" 
                className="w-full md:w-auto bg-primary-500 hover:bg-primary-600"
              >
                Submit Application
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Careers;
