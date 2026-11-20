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
  Heart,
  ArrowRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden border-t border-slate-800">
      {/* Subtle ambient light */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-12 md:grid-cols-2 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-tr from-sky-500 to-cyan-400 p-2.5 rounded-xl text-white shadow-lg shadow-sky-500/20">
                <Stethoscope className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight font-display">Lunaria Hill</h3>
                <p className="text-xs uppercase tracking-wider text-sky-400 font-semibold">Hospital & Research Center</p>
              </div>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Providing exceptional healthcare services with cutting-edge medical technology, 
              internationally certified specialists, and 24/7 dedicated patient care.
            </p>

            <div className="flex items-center gap-3">
              <a 
                href="#" 
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-sky-600 hover:border-sky-500 transition-all duration-300"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-sky-600 hover:border-sky-500 transition-all duration-300"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-sky-600 hover:border-sky-500 transition-all duration-300"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-sky-600 hover:border-sky-500 transition-all duration-300"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5 font-display">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1.5"><ArrowRight className="h-3 w-3 opacity-50" />About Us</Link></li>
              <li><Link to="/departments" className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1.5"><ArrowRight className="h-3 w-3 opacity-50" />Departments</Link></li>
              <li><Link to="/doctors" className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1.5"><ArrowRight className="h-3 w-3 opacity-50" />Our Doctors</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1.5"><ArrowRight className="h-3 w-3 opacity-50" />Services</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1.5"><ArrowRight className="h-3 w-3 opacity-50" />Health Blog</Link></li>
              <li><Link to="/careers" className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1.5"><ArrowRight className="h-3 w-3 opacity-50" />Careers</Link></li>
            </ul>
          </div>

          {/* Clinical Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5 font-display">
              Clinical Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="text-slate-400 hover:text-sky-400 transition-colors cursor-pointer flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>24/7 Emergency & Trauma
              </li>
              <li className="text-slate-400 hover:text-sky-400 transition-colors cursor-pointer flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>Cardiology & Heart Center
              </li>
              <li className="text-slate-400 hover:text-sky-400 transition-colors cursor-pointer flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>Advanced Telemedicine
              </li>
              <li className="text-slate-400 hover:text-sky-400 transition-colors cursor-pointer flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>Robotic & Minimally Invasive Surgery
              </li>
              <li className="text-slate-400 hover:text-sky-400 transition-colors cursor-pointer flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>Precision Pathology & Lab Tests
              </li>
              <li className="text-slate-400 hover:text-sky-400 transition-colors cursor-pointer flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>Executive Health Checkups
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5 font-display">
              Contact & Emergency
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400 flex-shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-white font-medium">Lunaria Hill Medical Complex</p>
                  <p className="text-slate-400 text-xs mt-0.5">123 Health Boulevard, Medical District</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400 flex-shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Emergency 24/7 Hotline</p>
                  <a href="tel:18001234560" className="text-white font-semibold hover:text-sky-400 transition-colors">
                    1-800-123-4560
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400 flex-shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Official Inquiries</p>
                  <a href="mailto:info@lunariahill.com" className="text-slate-300 hover:text-sky-400 transition-colors">
                    info@lunariahill.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Outpatient Visiting Hours</p>
                  <p className="text-slate-300 text-xs">Mon – Fri: 8:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Newsletter Subscription Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-md">
              <h4 className="text-lg font-bold text-white font-display mb-1 flex items-center gap-2">
                <span>Stay Healthy with Our Newsletter</span>
              </h4>
              <p className="text-xs text-slate-400">
                Receive weekly doctor-reviewed wellness advice, health tips, and hospital updates directly in your inbox.
              </p>
            </div>
            
            <form onSubmit={(e) => e.preventDefault()} className="flex w-full md:w-auto max-w-md gap-2">
              <Input 
                type="email"
                placeholder="Enter your email address..." 
                className="bg-slate-950 border-slate-800 text-white placeholder-slate-500 rounded-full px-4 h-11 focus-visible:ring-sky-500"
              />
              <Button className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-full px-6 h-11 font-medium shadow-md shadow-sky-500/20 flex-shrink-0">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer with Developer Badge */}
      <div className="border-t border-slate-900 bg-slate-950/90 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <p>
              © {new Date().getFullYear()} Lunaria Hill Hospital. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <Link to="/about" className="hover:text-slate-200 transition-colors">Privacy Policy</Link>
              <Link to="/about" className="hover:text-slate-200 transition-colors">Terms of Service</Link>
              <Link to="/contact" className="hover:text-slate-200 transition-colors">Contact Support</Link>
            </div>

            {/* Developer Portfolio Highlight */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
              <span>Developed with</span>
              <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
              <span>by</span>
              <span className="font-semibold text-sky-400">Abid Shahriar</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
