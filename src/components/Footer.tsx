
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-olive-600 text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Let's work together</h2>
            <p className="max-w-md">
              I'm currently available for freelance work. If you have a project that you want to get started, think you need my help with something or just fancy saying hello, then get in touch.
            </p>
            <Button className="bg-amber-400 hover:bg-amber-500 text-olive-800 px-6">
              Contact Me
            </Button>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="w-5 h-5 mt-1 text-amber-400" />
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-olive-100">San Francisco, CA</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mail className="w-5 h-5 mt-1 text-amber-400" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-olive-100">hello@oliviasmith.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="w-5 h-5 mt-1 text-amber-400" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-olive-100">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-olive-500 flex flex-col md:flex-row justify-between items-center">
          <p>© 2023 Olivia Smith. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-amber-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-amber-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Dribbble</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
