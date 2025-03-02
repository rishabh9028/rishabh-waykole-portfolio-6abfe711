
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-darkblue-800 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Rishabh Waykole</h3>
            <p className="text-gray-600 max-w-md">
              Creative designer specializing in UI/UX and web design with a passion for creating beautiful, functional, and user-centered digital experiences.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-amber-400 transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-amber-400 transition-colors">About</Link></li>
              <li><Link to="/projects" className="text-gray-600 hover:text-amber-400 transition-colors">Projects</Link></li>
              <li><Link to="/testimonials" className="text-gray-600 hover:text-amber-400 transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-amber-400" />
                <span className="text-gray-600">rishabhwaykole2806@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-amber-400" />
                <span className="text-gray-600">+91 9175170415</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Subscribe to newsletter</h4>
              <div className="flex mt-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 w-full max-w-xs rounded-l-md focus:outline-none text-gray-800 border border-gray-300"
                />
                <button className="bg-amber-400 hover:bg-amber-500 text-darkblue-800 px-4 rounded-r-md transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">© 2025 Rishabh Waykole. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-600 hover:text-amber-400 transition-colors">Terms and Conditions</Link>
            <Link to="#" className="text-gray-600 hover:text-amber-400 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
