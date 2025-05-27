import { Button } from '@/components/ui/button';
import { Calendar, Phone, Award, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const HeroSection = () => {
  const { toast } = useToast();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-50 via-primary-100 to-sky-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-24 h-24 bg-primary-200 rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute top-40 right-20 w-28 h-28 bg-sky-300 rounded-full opacity-30 animate-float"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-20 h-20 bg-primary-300 rounded-full opacity-25 animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute top-60 left-1/3 w-16 h-16 bg-blue-100 rounded-full opacity-20 animate-float"
          style={{ animationDelay: '1.5s' }}
        ></div>
        <div
          className="absolute bottom-40 right-1/4 w-24 h-24 bg-sky-200 rounded-full opacity-20 animate-float"
          style={{ animationDelay: '2.5s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-16 sm:py-20 relative z-10">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

          {/* Content */}
          <div className="animate-fade-in">
            <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6 animate-pulse-soft">
              24/7 Emergency Care Available
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
              Advanced Healthcare for
              <span className="text-primary-500 block mt-2">Healthier Tomorrow</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-xl">
              Experience world-class medical care with cutting-edge technology and compassionate service. 
              Your health is our priority, available 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10 sm:mb-12">
              <Button 
                size="lg" 
                className="bg-primary-600 hover:bg-primary-500 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto shadow-lg"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-500 text-primary-600 hover:bg-primary-50 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto"
              >
                <Phone className="mr-2 h-5 w-5" />
                Emergency: 911
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://img.freepik.com/premium-photo/doctors-nurses-arms-crossed-portrait-diversity-hospital-about-us-leadership-people-trust-community-support-smile-happy-confident-healthcare-workers-teamwork-collaboration_590464-143114.jpg?semt=ais_hybrid&w=740"
                alt="Modern Hospital"
                className="rounded-2xl w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent rounded-2xl"></div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-xl animate-float hidden lg:block ">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-sm sm:text-base">24/7 Care</div>
                  <div className="text-xs sm:text-sm text-gray-600">Always Available</div>
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl animate-float  hidden lg:block"
              style={{ animationDelay: '1s' }}
            >
              <div className="flex items-center gap-3 ">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center ">
                  <Award className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-sm sm:text-base">Certified</div>
                  <div className="text-xs sm:text-sm text-gray-600">Excellence</div>
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
