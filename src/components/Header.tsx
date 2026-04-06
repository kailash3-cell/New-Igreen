import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Why Choose Us', path: '/why-us' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 shadow-md py-2' : 'bg-gray-900/80 backdrop-blur-sm py-4'}`}>
      <div className="max-content flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Company Logo" className="h-12 w-auto object-contain" referrerPolicy="no-referrer" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition-colors duration-200 ${location.pathname === link.path ? 'text-primary' : 'text-gray-200 hover:text-primary'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary py-2 px-4 text-sm">
            Get Quote
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-200" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 absolute top-full left-0 w-full shadow-xl py-6 px-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-lg font-medium ${location.pathname === link.path ? 'text-primary' : 'text-gray-200'}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-primary text-center mt-2"
            onClick={() => setIsOpen(false)}
          >
            Get Quote
          </Link>
        </div>
      )}
    </header>
  );
}
