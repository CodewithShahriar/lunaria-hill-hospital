
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
                  Nestled in the heart of Lunaria Hill, our hospital was founded with a bold vision: to bring world-class healthcare to the very doorstep of our community. What began as a modest neighborhood clinic has now grown into one of the region’s most advanced and trusted multi-specialty medical centers. <br />

With each passing year, we have evolved—expanding our departments, recruiting highly skilled medical professionals, and embracing cutting-edge technologies. From diagnostic excellence to compassionate patient care, Lunaria Hill Hospital has become a symbol of trust, hope, and healing for thousands.


                </p>
                <p>
                  We are proud to have achieved numerous milestones, from national accreditations to patient satisfaction awards. Our dedicated staff works around the clock to uphold the highest standards of medical care while nurturing a welcoming, patient-first environment.
                </p>
                <p>
                  Whether you're here for a routine check-up or life-saving treatment, Lunaria Hill Hospital is committed to walking every step of your healthcare journey—with expertise, empathy, and integrity.
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
            src="https://st2.depositphotos.com/1054848/7169/i/950/depositphotos_71691653-stock-photo-smiling-doctor-on-white-background.jpg"
            alt="Medical Director"
            className="w-72 h-72 rounded-full object-cover shadow-lg"
          />

          <div className="flex-1 text-center lg:text-left">
            <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-6">
              "At Lunaria Hill Hospital, we believe that healthcare is not just about treating 
              illness, but about caring for the whole person. Our commitment to excellence, 
              innovation, and compassionate care drives everything we do. We are here to serve 
              our community with dedication and integrity."
            </blockquote>

            <div className="mb-2">
              <img
                src="https://signature.freefire-name.com/img.php?f=2&t=Anderson"
                alt="Signature of Dr. Michael Anderson"
                className="w-60 h-20 mb-0 mx-auto lg:mx-0"
              />
            </div>
            <div>
              <div className="font-bold text-xl text-gray-800">Dr. Michael Anderson</div>
              <div className="text-primary-500 font-semibold">Medical Director & CEO</div>
              <div className="text-gray-600">MD, FACS – 25+ years of experience</div>
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


      {/* Awards & Recognition Section */}
<section style={{ padding: '2rem 0', textAlign: 'center' }}>
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Awards & Recognition</h2>
      <p className="text-lg text-gray-600">
        Honored for our dedication to excellence, innovation, and patient-centered care.
      </p>
    </div>
    </div>
  <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
    <img
      src="https://www.casacolina.org/images/CMMS-logo_2305_v3_cmyk_6-inch-Height_300dpi.jpg"
      alt="Casa Colina Logo"
      style={{ maxHeight: '80px', maxWidth: '150px', objectFit: 'contain' }}
    />
    <img
      src="https://d11mkob3ld6ys.cloudfront.net/images/logos/SCH-016_5star-Overall-Quality-Badge_Navy.png"
      alt="5 Star Quality Badge"
      style={{ maxHeight: '90px', maxWidth: '150px', objectFit: 'contain' }}
    />
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLYokV7w7M_hRanF5giERDsqSehPOImQmLTQ&s"
      alt="Dignity Health Awards"
      style={{ maxHeight: '80px', maxWidth: '150px', objectFit: 'contain' }}
    />
    <img
      src="https://newsroom.spectrumhealth.org/wp-content/uploads/2018/02/HG_Americas_50_Best_Award_Image_2015-2018.jpg"
      alt="HG Americas 50 Best Award"
      style={{ maxHeight: '80px', maxWidth: '150px', objectFit: 'contain' }}
    />
    <img
      src="https://www.kauveryhospital.com/wp-content/uploads/2023/07/Newsweek-small.jpg"
      alt="Additional Logo"
      style={{ maxHeight: '80px', maxWidth: '150px', objectFit: 'contain' }}
    />
    <img
      src="https://www.stegh.on.ca/wp-content/uploads/2023/03/YHS-badge-png.png.pagespeed.ce.dSWT4x0Q3s.png"
      alt="Additional Logo"
      style={{ maxHeight: '90px', maxWidth: '150px', objectFit: 'contain' }}
    />
    <img
      src="https://ihf-fih.org/wp-content/uploads/2024/01/IHF-Awards-2024-logo-web.jpg"
      alt="Additional Logo"
      style={{ maxHeight: '96px', maxWidth: '150px', objectFit: 'contain' }}
    />
  </div>
</section>


      <Footer />
    </div>
  );
};

export default About;
