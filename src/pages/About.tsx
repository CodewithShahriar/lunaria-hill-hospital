
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Heart, Eye, Target, Award, Users, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy, respect, and dignity'
    },
    {
      icon: CheckCircle,
      title: 'Excellence',
      description: 'We strive for the highest standards in medical care and service'
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Our collaborative approach ensures the best patient outcomes'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We embrace cutting-edge technology and medical advances'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-sky-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">About Lunaria Hill Hospital</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Dedicated to providing exceptional healthcare services with cutting-edge technology and compassionate care
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <Target className="h-12 w-12 text-primary-500" />
                <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide comprehensive, patient-centered healthcare services that promote healing, 
                wellness, and quality of life for our community. We are committed to delivering 
                exceptional medical care through innovative treatments, advanced technology, and 
                compassionate service.
              </p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-4 mb-6">
                <Eye className="h-12 w-12 text-primary-500" />
                <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the leading healthcare provider in the region, recognized for our excellence 
                in patient care, medical innovation, and community service. We envision a healthier 
                future where advanced medical care is accessible to all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital History */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our History</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A legacy of healing and innovation spanning over two decades
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Hospital History"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Established in 2000</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Lunaria Hill Hospital was founded with a vision to provide world-class healthcare 
                  services to our community. Starting as a small medical center, we have grown into 
                  a comprehensive healthcare facility.
                </p>
                <p>
                  Over the years, we have continuously expanded our services, upgraded our facilities, 
                  and invested in the latest medical technology. Today, we stand as a beacon of hope 
                  and healing for thousands of patients.
                </p>
                <p>
                  Our journey has been marked by numerous milestones, awards, and recognition for 
                  excellence in healthcare delivery, patient satisfaction, and community service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Director's Message</h2>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                  alt="Medical Director"
                  className="w-48 h-48 rounded-full object-cover shadow-lg"
                />
                
                <div className="flex-1">
                  <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-6">
                    "At Lunaria Hill Hospital, we believe that healthcare is not just about treating 
                    illness, but about caring for the whole person. Our commitment to excellence, 
                    innovation, and compassionate care drives everything we do. We are here to serve 
                    our community with dedication and integrity."
                  </blockquote>
                  
                  <div>
                    <div className="font-bold text-xl text-gray-800">Dr. Michael Anderson</div>
                    <div className="text-primary-500 font-semibold">Medical Director & CEO</div>
                    <div className="text-gray-600">MD, FACS - 25+ years of experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our mission and define our commitment to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
