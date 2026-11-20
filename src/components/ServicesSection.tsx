import { Heart, Ambulance, Phone, Pill, TestTube, Calendar, Shield, Smartphone, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: 'Emergency Care',
      description: '24/7 emergency medical services with dedicated rapid trauma team and immediate triage.',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
      gradient: 'from-red-500 to-rose-600',
      badge: '24/7 Available'
    },
    {
      icon: Ambulance,
      title: '24/7 Ambulance',
      description: 'Advanced life support ambulance fleet with cardiac monitors and trained paramedics.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      gradient: 'from-blue-500 to-sky-600',
      badge: '< 8 min Dispatch'
    },
    {
      icon: Smartphone,
      title: 'Telemedicine',
      description: 'Instant HD video consultations with hospital specialists from the comfort of your home.',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50',
      gradient: 'from-emerald-500 to-teal-600',
      badge: 'Digital Care'
    },
    {
      icon: Pill,
      title: '24/7 Pharmacy',
      description: 'In-house certified dispensary stocking specialized and routine medications round the clock.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      gradient: 'from-purple-500 to-indigo-600',
      badge: 'Home Delivery'
    },
    {
      icon: TestTube,
      title: 'Precision Pathology',
      description: 'Fully automated diagnostic lab providing high-accuracy test reports in record time.',
      color: 'text-amber-500',
      bgColor: 'bg-amber-50',
      gradient: 'from-amber-500 to-orange-600',
      badge: 'Same-Day Reports'
    },
    {
      icon: Shield,
      title: 'Operation Theater',
      description: 'Ultra-clean laminar airflow modular theaters with robotic surgical capabilities.',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50',
      gradient: 'from-indigo-500 to-blue-600',
      badge: 'Robotic Surgery'
    },
    {
      icon: Calendar,
      title: 'Health Packages',
      description: 'Comprehensive preventive health checkup plans tailored for adults, seniors, and executives.',
      color: 'text-pink-500',
      bgColor: 'bg-pink-50',
      gradient: 'from-pink-500 to-rose-600',
      badge: 'Custom Plans'
    },
    {
      icon: Phone,
      title: 'Medical Counseling',
      description: 'Holistic rehabilitation, mental wellness support, nutrition, and post-op care counseling.',
      color: 'text-teal-500',
      bgColor: 'bg-teal-50',
      gradient: 'from-teal-500 to-cyan-600',
      badge: 'Personalized'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50 to-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            Clinical Capabilities
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            Our Comprehensive Medical Services
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            World-class healthcare services designed to meet every medical need with speed, accuracy, and compassion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 ${service.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner`}>
                    <service.icon className={`h-7 w-7 ${service.color}`} />
                  </div>
                  <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                    {service.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div>
                <Link to="/services">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-between border-slate-200 text-slate-700 hover:text-sky-600 hover:border-sky-300 hover:bg-sky-50 rounded-xl text-xs font-semibold py-2.5"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white rounded-full px-8 shadow-md shadow-sky-600/20">
              Explore All Clinical Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
