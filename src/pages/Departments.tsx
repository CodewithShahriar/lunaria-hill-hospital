import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { 
  Heart, 
  Brain, 
  Baby, 
  Users, 
  Bone, 
  Activity, 
  TestTube, 
  Eye,
  Pill,
  Stethoscope,
  Zap,
  Shield,
  AlarmCheck,
  Syringe,
  ArrowRight,
  Phone,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { AppointmentForm } from '@/components/AppointmentForm';

const Departments = () => {
  const navigate = useNavigate();
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  const departments = [
    {
      icon: Stethoscope,
      name: 'Medicine',
      description: 'Comprehensive internal medicine for acute and chronic conditions with personalized care plans.',
      services: ['Diabetes Management', 'Hypertension Treatment', 'Infectious Diseases', 'Preventive Care'],
      doctors: 11,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGEnKy-PhWWIHskO7yt-4m6Siq_p_qJ0vUlnRkbRYM0kFcx_vx95-KtUVAP-A1OPGP2BY&usqp=CAU'
    },
    {
      icon: Heart,
      name: 'Cardiology',
      description: 'Advanced heart care with state-of-the-art cardiac catheterization lab and interventional therapies.',
      services: ['Cardiac Surgery', 'Angioplasty & Stenting', 'Pacemaker Implantation', 'Heart Failure Program'],
      doctors: 8,
      image: 'https://smclife.in/wp-content/uploads/2024/03/cardiology1.jpg'
    },
    {
      icon: Brain,
      name: 'Neurology',
      description: 'Comprehensive neurological diagnostic and surgical care for complex brain and nervous system disorders.',
      services: ['Stroke Center', 'Epilepsy Monitoring', 'Spine & Neuro Surgery', 'Neuro-Rehab'],
      doctors: 6,
      image: 'https://www.amnhealthcare.com/siteassets/candidate-blog/physician/perm/neurologist-salary-report-2024.jpg'
    },
    {
      icon: Syringe, 
      name: 'Gastroenterology',
      description: 'Expert diagnostics and therapeutics for digestive tract, liver, pancreas, and biliary diseases.',
      services: ['Advanced Endoscopy', 'Liver Disease Clinic', 'IBD Comprehensive Care', 'Colonoscopy'],
      doctors: 7,
      image: 'https://bighospitals.in/assets/img/service/medical-gastroenterology-img.jpg'
    },
    {
      icon: Baby,
      name: 'Pediatrics',
      description: 'Compassionate medical, surgical, and developmental care for infants, children, and adolescents.',
      services: ['Neonatal ICU (NICU)', 'Immunization Clinic', 'Pediatric Surgery', 'Child Development'],
      doctors: 10,
      image: 'https://spcdn.shortpixel.ai/spio/ret_img,q_cdnize,to_webp,s_webp/cimgpeds.com/wp-content/uploads/2022/09/pediatrician-pediatric-clinic.jpg'
    },
    {
      icon: Bone,
      name: 'Orthopedics',
      description: 'Pioneering orthopedic care for joints, bones, sports injuries, and spine reconstruction.',
      services: ['Robotic Joint Replacement', 'Sports Medicine & Arthroscopy', 'Spine Center', 'Complex Trauma'],
      doctors: 9,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Hl-F8mK8gmlFuPRwKWQW_ATrVJKIzlBcgw&s'
    },
    {
      icon: Activity,
      name: 'Surgery',
      description: 'Advanced surgical suites performing minimally invasive laparoscopic and robotic-assisted surgeries.',
      services: ['Minimally Invasive Surgery', 'Oncological Surgery', 'Emergency Trauma Surgery', 'Day-Care Surgery'],
      doctors: 12,
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: Users,
      name: 'Gynaecology',
      description: "Dedicated women's health center spanning obstetrics, prenatal care, and gynecologic oncology.",
      services: ['Maternity & High-Risk Births', 'Laparoscopic Gyn-Surgery', 'Fertility Solutions', 'Prenatal Screening'],
      doctors: 7,
      image: 'https://www.renaimedicity.org/wp-content/uploads/2021/03/obstetrics-gynaecology-inn.jpg'
    }
  ];

  const handleFindDoctors = (departmentName: string) => {
    const specialtyMap: { [key: string]: string } = {
      'Gynaecology': 'Gynecology',
    };
    const specialty = specialtyMap[departmentName] || departmentName;
    navigate(`/doctors?department=${encodeURIComponent(specialty)}`);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <Navigation onAppointmentClick={() => setAppointmentOpen(true)} />
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-950 via-sky-950 to-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-6 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            Centers of Excellence
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display mb-6">
            Our Medical Departments
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
            Comprehensive clinical specialties driven by internationally trained department chairs, 
            cutting-edge diagnostic facilities, and multidisciplinary care models.
          </p>

          <Button 
            size="lg" 
            className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold rounded-full px-8 shadow-lg shadow-sky-500/25"
            onClick={() => setAppointmentOpen(true)}
          >
            Book Department Appointment
          </Button>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20 lg:py-24 bg-slate-50/70">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 overflow-hidden group flex flex-col md:flex-row"
              >
                {/* Department Image */}
                <div className="md:w-5/12 relative h-56 md:h-auto overflow-hidden">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-950/60 via-transparent to-transparent md:opacity-60"></div>
                  
                  {/* Doctor count badge over image */}
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm flex items-center gap-1.5">
                    <Stethoscope className="w-3.5 h-3.5 text-sky-600" />
                    <span>{dept.doctors} Specialists</span>
                  </div>
                </div>
                
                {/* Department Content */}
                <div className="md:w-7/12 p-6 sm:p-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-11 h-11 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-colors shadow-inner">
                        <dept.icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors font-display">
                        {dept.name}
                      </h3>
                    </div>
                    
                    <p className="text-slate-500 text-xs sm:text-sm mb-4 leading-relaxed">
                      {dept.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-2.5">
                        Key Clinical Services:
                      </h4>
                      <div className="grid grid-cols-2 gap-1.5">
                        {dept.services.map((service, idx) => (
                          <div key={idx} className="text-xs text-slate-700 flex items-center gap-1.5 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 flex-shrink-0" />
                            <span className="truncate">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Button 
                      size="sm" 
                      className="bg-sky-50 hover:bg-sky-500 text-sky-700 hover:text-white font-semibold rounded-xl text-xs py-2 px-4 transition-colors w-full justify-between"
                      onClick={() => handleFindDoctors(dept.name)}
                    >
                      <span>Consult {dept.name} Doctors</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Department Callout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-br from-red-600 via-rose-600 to-red-700 rounded-3xl shadow-xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
              <AlarmCheck className="h-8 w-8 text-white animate-pulse" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 font-display">
              24/7 Level 1 Trauma & Emergency Department
            </h2>
            <p className="text-sm sm:text-base text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Staffed around the clock with board-certified trauma surgeons, cardiac arrest specialists, 
              and immediate response diagnostic CT and Cath Labs.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="tel:18001234560"
                className="inline-flex items-center gap-2 bg-white text-red-600 hover:bg-red-50 font-bold px-8 py-4 rounded-full text-base shadow-lg transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Call Emergency: 1-800-123-4560</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Appointment Dialog */}
      <AppointmentForm 
        open={appointmentOpen} 
        onOpenChange={setAppointmentOpen} 
      />
    </div>
  );
};

export default Departments;
