
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isServiceDetailPage = location.pathname.startsWith('/services/');
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isHomePage || isServiceDetailPage
          ? scrolled 
            ? "bg-white shadow-sm py-3" 
            : "bg-white py-4"
          : scrolled 
            ? "bg-white/95 backdrop-blur-sm shadow-sm py-3" 
            : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="bg-darkblue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-2">
              <span className="font-semibold">R</span>
            </div>
            <span className="font-medium text-darkblue-800">Rishabh.</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/"
            className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 text-darkblue-800 after:bg-darkblue-800"
          >
            Home
          </Link>
          <Link 
            to="/services"
            className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 text-darkblue-800 after:bg-darkblue-800"
          >
            Services
          </Link>
          <Link 
            to="/about"
            className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 text-darkblue-800 after:bg-darkblue-800"
          >
            About
          </Link>
          <Link 
            to="/projects"
            className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 text-darkblue-800 after:bg-darkblue-800"
          >
            Projects
          </Link>
          <Link 
            to="/testimonials"
            className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 text-darkblue-800 after:bg-darkblue-800"
          >
            Testimonials
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-darkblue-800 p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Contact Button */}
        <Link to="/contact" className="hidden md:block rounded-full bg-white px-5 py-2 text-sm font-medium text-darkblue-800 border border-darkblue-600 hover:bg-darkblue-50 transition-all duration-300">
          Contact Me
        </Link>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 p-4">
            <Link 
              to="/"
              className="text-sm font-medium py-2 px-4 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services"
              className="text-sm font-medium py-2 px-4 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about"
              className="text-sm font-medium py-2 px-4 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/projects"
              className="text-sm font-medium py-2 px-4 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/testimonials"
              className="text-sm font-medium py-2 px-4 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              to="/contact"
              className="text-sm font-medium py-2 px-4 bg-amber-400 text-darkblue-800 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Me
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
