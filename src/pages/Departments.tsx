
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
} from 'lucide-react';

const Departments = () => {
  const navigate = useNavigate();

  const departments = [
  {
    icon: Stethoscope,
    name: 'Medicine',
    description: 'Comprehensive internal medicine for acute and chronic illnesses',
    services: ['Diabetes Management', 'Hypertension Treatment', 'Infectious Diseases', 'Preventive Care'],
    doctors: 11,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGEnKy-PhWWIHskO7yt-4m6Siq_p_qJ0vUlnRkbRYM0kFcx_vx95-KtUVAP-A1OPGP2BY&usqp=CAU'
  },
  {
    icon: Heart,
    name: 'Cardiology',
    description: 'Advanced heart care with state-of-the-art cardiac interventions and treatments',
    services: ['Cardiac Surgery', 'Angioplasty', 'Pacemaker Implantation', 'Heart Transplant'],
    doctors: 8,
    image: 'https://smclife.in/wp-content/uploads/2024/03/cardiology1.jpg'
  },
  {
    icon: Brain,
    name: 'Neurology',
    description: 'Comprehensive neurological care for brain and nervous system disorders',
    services: ['Brain Surgery', 'Stroke Treatment', 'Epilepsy Care', 'Neuroimaging'],
    doctors: 6,
    image: 'https://www.amnhealthcare.com/siteassets/candidate-blog/physician/perm/neurologist-salary-report-2024.jpg'
  },
  {
    icon:  Syringe, 
    name: 'Gastroenterology',
    description: 'Expert care for digestive system disorders and liver-related diseases',
    services: ['Endoscopy', 'Liver Disease Treatment', 'IBD Care', 'Colonoscopy'],
    doctors: 7,
    image: 'https://bighospitals.in/assets/img/service/medical-gastroenterology-img.jpg'
  },
  {
    icon: Baby,
    name: 'Pediatrics',
    description: 'Specialized medical care for infants, children, and adolescents',
    services: ['Newborn Care', 'Vaccination', 'Child Development', 'Pediatric Surgery'],
    doctors: 10,
    image: 'https://spcdn.shortpixel.ai/spio/ret_img,q_cdnize,to_webp,s_webp/cimgpeds.com/wp-content/uploads/2022/09/pediatrician-pediatric-clinic.jpg'
  },
  {
    icon: Bone,
    name: 'Orthopedics',
    description: 'Expert care for bone, joint, and musculoskeletal conditions',
    services: ['Joint Replacement', 'Sports Medicine', 'Spine Surgery', 'Fracture Care'],
    doctors: 9,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Hl-F8mK8gmlFuPRwKWQW_ATrVJKIzlBcgw&s'
  },
  {
    icon: Activity,
    name: 'Surgery',
    description: 'Advanced surgical procedures with minimally invasive techniques',
    services: ['General Surgery', 'Laparoscopic Surgery', 'Emergency Surgery', 'Day Surgery'],
    doctors: 12,
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    icon: Users,
    name: 'Gynaecology',
    description: "Women's health services including reproductive and maternal care",
    services: ['Maternity Care', 'Gynecological Surgery', 'Fertility Treatment', 'Prenatal Care'],
    doctors: 7,
    image: 'https://www.renaimedicity.org/wp-content/uploads/2021/03/obstetrics-gynaecology-inn.jpg'
  }
];

  const handleFindDoctors = (departmentName: string) => {
    // Map department names to match the specialty names in doctors data
    const specialtyMap: { [key: string]: string } = {
      'Gynaecology': 'Gynecology',
      // Add other mappings if needed
    };
    
    const specialty = specialtyMap[departmentName] || departmentName;
    navigate(`/doctors?department=${encodeURIComponent(specialty)}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-sky-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Our Departments</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Comprehensive medical care across specialized departments with expert healthcare professionals
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={dept.image}
                      alt={dept.name}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <dept.icon className="h-6 w-6 text-primary-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">{dept.name}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {dept.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Key Services:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {dept.services.map((service, idx) => (
                          <div key={idx} className="text-sm text-gray-600 flex items-center gap-1">
                            <div className="w-1 h-1 bg-primary-500 rounded-full"></div>
                            {service}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        <Stethoscope className="h-4 w-4 inline mr-1" />
                        {dept.doctors} Expert Doctors
                      </div>
                      <Button 
                        size="sm" 
                        className="bg-primary-500 hover:bg-primary-600"
                        onClick={() => handleFindDoctors(dept.name)}
                      >
                        Find Doctors
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Emergency Services */}
<section className="py-20">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <div className="bg-red-600 rounded-2xl shadow-xl p-8 animate-fade-in border-gray-500">
        {/* Emergency Icon */}
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlarmCheck className="h-8 w-8 text-red-500" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Emergency Department</h2>
        <p className="text-lg text-white mb-6 leading-relaxed">
          Our 24/7 Emergency Department is staffed with board-certified emergency physicians and 
          trauma specialists, equipped with state-of-the-art life-saving equipment.
        </p>
        <Button size="lg" className="bg-red-800 hover:bg-red-400 animate-pulse-slow">
          Emergency Contact: 911
        </Button>
      </div>
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
};

export default Departments;