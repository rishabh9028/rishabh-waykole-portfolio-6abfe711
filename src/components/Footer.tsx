
import { Mail, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const [email, setEmail] = useState('');
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };
  
  return (
    <footer className={cn(
      "py-16 px-4 md:px-8 lg:px-16",
      isHomePage ? "bg-white text-darkblue-800" : "bg-darkblue-600 text-white"
    )}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Rishabh Waykole</h3>
            <p className={cn("max-w-md", isHomePage ? "text-gray-600" : "text-gray-300")}>
              Creative designer specializing in UI/UX and web design with a passion for creating beautiful, functional, and user-centered digital experiences.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className={cn("hover:text-amber-400 transition-colors", isHomePage ? "text-gray-600" : "text-gray-300")}>Home</Link></li>
              <li><Link to="/services" className={cn("hover:text-amber-400 transition-colors", isHomePage ? "text-gray-600" : "text-gray-300")}>Services</Link></li>
              <li><Link to="/about" className={cn("hover:text-amber-400 transition-colors", isHomePage ? "text-gray-600" : "text-gray-300")}>About</Link></li>
              <li><Link to="/projects" className={cn("hover:text-amber-400 transition-colors", isHomePage ? "text-gray-600" : "text-gray-300")}>Projects</Link></li>
              <li><Link to="/testimonials" className={cn("hover:text-amber-400 transition-colors", isHomePage ? "text-gray-600" : "text-gray-300")}>Testimonials</Link></li>
              <li><Link to="/contact" className={cn("hover:text-amber-400 transition-colors", isHomePage ? "text-gray-600" : "text-gray-300")}>Contact</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-amber-400" />
                <span className={isHomePage ? "text-gray-600" : "text-gray-300"}>rishabhwaykole2806@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-amber-400" />
                <span className={isHomePage ? "text-gray-600" : "text-gray-300"}>+91 9175170415</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Subscribe to newsletter</h4>
              <form onSubmit={handleSubscribe} className="mt-2">
                <div className="flex flex-col gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-2 w-full rounded-md focus:outline-none text-gray-800 border border-gray-300"
                    required
                  />
                  <button 
                    type="submit" 
                    className="bg-amber-400 hover:bg-amber-500 text-darkblue-800 px-4 py-2 rounded-md transition-colors"
                  >
                    Join
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div className={cn(
          "pt-8 flex flex-col md:flex-row justify-between items-center",
          isHomePage ? "border-t border-gray-200" : "border-t border-darkblue-500"
        )}>
          <p className={isHomePage ? "text-gray-600" : "text-gray-300"}>© 2025 Rishabh Waykole. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className={cn("hover:text-amber-400 transition-colors", isHomePage ? "text-gray-600" : "text-gray-300")}>Terms and Conditions</Link>
            <Link to="#" className={cn("hover:text-amber-400 transition-colors", isHomePage ? "text-gray-600" : "text-gray-300")}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
