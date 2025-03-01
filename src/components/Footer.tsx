
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-olive-800 text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Rishabh Waykole</h3>
            <p className="text-gray-300 max-w-md">
              Creative designer specializing in UI/UX and web design with a passion for creating beautiful, functional, and user-centered digital experiences.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Sitemap</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-amber-400 transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-amber-400 transition-colors">About</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-amber-400 transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-amber-400" />
                <span className="text-gray-300">hello@rishabhwaykole.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-amber-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-amber-400" />
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Subscribe to newsletter</h4>
              <div className="flex mt-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 w-full max-w-xs rounded-l-md focus:outline-none text-gray-800"
                />
                <button className="bg-amber-400 hover:bg-amber-500 text-olive-800 px-4 rounded-r-md transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2023 Rishabh Waykole. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Dribbble</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
