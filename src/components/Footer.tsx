import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/logo.png" alt="Company Logo" className="h-10 w-auto object-contain" referrerPolicy="no-referrer" />
          </Link>
          <p className="text-sm leading-relaxed">
            Pioneering land acquisition company specializing in the renewable energy sector. Dedicated to accelerating India's transition toward clean energy.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
          <ul className="flex flex-col gap-4 text-sm">
            <li><Link to="/about" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={14} /> About Us</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={14} /> Our Services</Link></li>
            <li><Link to="/projects" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={14} /> Projects</Link></li>
            <li><Link to="/why-us" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={14} /> Why Choose Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={14} /> Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="hover:text-primary transition-colors">Land Acquisition</li>
            <li className="hover:text-primary transition-colors">Feasibility Studies</li>
            <li className="hover:text-primary transition-colors">Regulatory Approvals</li>
            <li className="hover:text-primary transition-colors">Infrastructure Development</li>
            <li className="hover:text-primary transition-colors">Electrical Construction</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="text-primary shrink-0" size={18} />
              <span>Maharashtra, Karnataka & other rural areas in India</span>
            </li>
            <li className="flex gap-3">
              <Phone className="text-primary shrink-0" size={18} />
              <span>+91 9421335309 / 9730482525</span>
            </li>
            <li className="flex gap-3">
              <Mail className="text-primary shrink-0" size={18} />
              <span className="break-all">creativedevelopers555@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-content mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Igreen Creative Developers Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}
