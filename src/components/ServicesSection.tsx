
import { Heart, Ambulance, Phone, Pill, TestTube, Calendar, Shield, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: 'Emergency Care',
      description: '24/7 emergency medical services with rapid response team',
      color: 'text-red-500',
      bgColor: 'bg-red-50'
    },
    {
      icon: Ambulance,
      title: '24/7 Ambulance',
      description: 'Advanced life support ambulance services available round the clock',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Smartphone,
      title: 'Telemedicine',
      description: 'Virtual consultations with our expert doctors from home',
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: Pill,
      title: 'Pharmacy',
      description: 'In-house pharmacy with all essential medications available',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: TestTube,
      title: 'Lab Tests',
      description: 'Comprehensive diagnostic laboratory with latest equipment',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Shield,
      title: 'Operation Theater',
      description: 'State-of-the-art surgical facilities with experienced surgeons',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: Calendar,
      title: 'Health Packages',
      description: 'Comprehensive health checkup packages for all age groups',
      color: 'text-pink-500',
      bgColor: 'bg-pink-50'
    },
    {
      icon: Phone,
      title: 'Consultation',
      description: 'Expert medical consultation with personalized treatment plans',
      color: 'text-teal-500',
      bgColor: 'bg-teal-50'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Medical Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare services designed to meet all your medical needs with excellence and care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className={`h-8 w-8 ${service.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Button variant="outline" size="sm" className="w-full">
                Learn More
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button size="lg" className="bg-primary-500 hover:bg-primary-600">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
