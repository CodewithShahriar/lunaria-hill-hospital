
import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Clock,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-primary-500 p-2 rounded-full">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Lunaria Hill</h3>
                <p className="text-sm text-gray-400">Hospital</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Providing exceptional healthcare services with cutting-edge technology and compassionate care. 
              Your health is our priority.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/departments" className="text-gray-400 hover:text-white transition-colors">Departments</Link></li>
              <li><Link to="/doctors" className="text-gray-400 hover:text-white transition-colors">Our Doctors</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/patient-portal" className="text-gray-400 hover:text-white transition-colors">Patient Portal</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Emergency Care</li>
              <li className="text-gray-400">24/7 Ambulance</li>
              <li className="text-gray-400">Telemedicine</li>
              <li className="text-gray-400">Lab Tests</li>
              <li className="text-gray-400">Surgery</li>
              <li className="text-gray-400">Health Packages</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">123 Health Street</p>
                  <p className="text-gray-400">Medical District, MD 12345</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-500 flex-shrink-0" />
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-500 flex-shrink-0" />
                <p className="text-gray-400">info@lunariahill.com</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Mon-Fri: 8:00 AM - 8:00 PM</p>
                  <p className="text-gray-400">Emergency: 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-gray-400 mb-6">Get the latest health tips and hospital updates</p>
            <div className="flex gap-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="bg-primary-500 hover:bg-primary-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Lunaria Hill Hospital. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <div className="flex items-center gap-1 text-sm text-gray-400">
                Developed by - Abid Shahriar
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
