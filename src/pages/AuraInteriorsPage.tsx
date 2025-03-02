
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReadyToGetStarted from "@/components/ReadyToGetStarted";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AuraInteriorsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="mt-16"> {/* Added margin-top to prevent overlap with fixed header */}
        <div className="w-full bg-darkblue-600 pb-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Aura Interiors
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Portfolio Website for an interior design company
            </p>
          </div>
        </div>

        {/* Project Hero Image - Removed object-cover and max-height constraint */}
        <div className="w-full">
          <img 
            src="/lovable-uploads/a2a1de97-ec2e-49a0-b5ca-19350fe2de74.png" 
            alt="Aura Interiors Preview" 
            className="w-full h-auto"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="inline-block bg-amber-400 text-darkblue-800 text-xs px-3 py-1 rounded-full">UI/UX Design</span>
              <span className="inline-block bg-amber-400 text-darkblue-800 text-xs px-3 py-1 rounded-full">Web Development</span>
              <span className="inline-block bg-amber-400 text-darkblue-800 text-xs px-3 py-1 rounded-full">Strategy</span>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-gray-600 mb-8">
              Aura Interiors needed a portfolio website that showcased their elegant interior design projects while providing potential clients with an easy way to get in touch. The design had to reflect the company's sophisticated aesthetic and attention to detail.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
            <p className="text-gray-600 mb-8">
              The main challenge was to create a visually stunning website that highlighted the beauty of Aura's interior design work without overwhelming visitors. We needed to balance aesthetic appeal with functional user experience, ensuring that the site was both beautiful and easy to navigate.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
            <p className="text-gray-600 mb-8">
              We developed a clean, minimalist design that puts the focus on high-quality images of Aura's interior design projects. The website features a sophisticated color palette, elegant typography, and smooth animations that create a sense of luxury and refinement. The user interface is intuitive, making it easy for visitors to browse projects and contact the company.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
              <li>Responsive design that looks great on all devices</li>
              <li>Gallery showcasing interior design projects with filtering options</li>
              <li>Interactive elements that engage visitors</li>
              <li>Contact form with validation for potential client inquiries</li>
              <li>Integration with social media platforms</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4">Results</h2>
            <p className="text-gray-600 mb-8">
              Since launching the new website, Aura Interiors has seen a significant increase in online inquiries and project requests. The website has helped establish the company's online presence and showcase their portfolio to a wider audience.
            </p>
            
            <div className="mt-10">
              <Link 
                to="/projects" 
                className="inline-flex items-center px-4 py-2 rounded-full bg-darkblue-600 text-white hover:bg-darkblue-700 transition-all duration-300 group"
              >
                <span>Back to Projects</span>
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
        
        <ReadyToGetStarted />
      </main>
      <Footer />
    </div>
  );
};

export default AuraInteriorsPage;
