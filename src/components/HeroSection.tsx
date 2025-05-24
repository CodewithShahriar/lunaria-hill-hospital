
import { Button } from '@/components/ui/button';
import { Calendar, Phone, Award, Users, Heart, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const HeroSection = () => {
  const { toast } = useToast();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-50 via-primary-100 to-sky-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-24 h-24 bg-primary-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-28 h-28 bg-sky-300 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-primary-300 rounded-full opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 left-1/3 w-16 h-16 bg-blue-100 rounded-full opacity-20 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-40 right-1/4 w-24 h-24 bg-sky-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="animate-fade-in">
            <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6 animate-pulse-soft">
              24/7 Emergency Care Available
            </span>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Advanced Healthcare for a
              <span className="text-primary-500 block mt-2">Healthier Tomorrow</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              Experience world-class medical care with cutting-edge technology and compassionate service. 
              Your health is our priority, available 24/7.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-primary-500 hover:bg-primary-600 text-lg px-8 py-6 h-auto shadow-lg"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-500 text-primary-500 hover:bg-primary-50 text-lg px-8 py-6 h-auto"
              >
                <Phone className="mr-2 h-5 w-5" />
                Emergency: 911
              </Button>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary-500">
                  <Users className="h-8 w-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">50+</div>
                  <div className="text-sm text-gray-600">Expert Doctors</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary-500">
                  <Heart className="h-8 w-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">10K+</div>
                  <div className="text-sm text-gray-600">Happy Patients</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary-500">
                  <Award className="h-8 w-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary-500">
                  <Clock className="h-8 w-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Care</div>
                </div>
              </div>
            </div> */}
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Modern Hospital"
                className="rounded-2xl w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">24/7 Care</div>
                  <div className="text-sm text-gray-600">Always Available</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Certified</div>
                  <div className="text-sm text-gray-600">Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;