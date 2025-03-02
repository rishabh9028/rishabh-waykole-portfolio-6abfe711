
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#F5F5F5] font-['DM_Sans',sans-serif]">
              Aura Interiors
            </h1>
            <p className="text-xl text-[#E3E3E3] max-w-3xl mx-auto font-['DM_Sans',sans-serif]">
              Portfolio Website for an interior design company
            </p>
          </div>
        </div>

        {/* Project Hero Image - Further cropped from the top */}
        <div className="w-full overflow-hidden">
          <img 
            src="/lovable-uploads/a2a1de97-ec2e-49a0-b5ca-19350fe2de74.png" 
            alt="Aura Interiors Preview" 
            className="w-full h-auto mt-[-80px]" // Increased the negative margin to crop more from the top
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Design Details Section */}
            <div className="mb-10 p-6 bg-[#F5F5F5] rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 font-['DM_Sans',sans-serif] text-darkblue-800">Design Details</h2>
              
              <h3 className="text-xl font-medium mb-3 font-['DM_Sans',sans-serif] text-darkblue-800">Color Palette</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-darkblue-600 mb-2"></div>
                  <span className="text-sm font-['Inter',sans-serif] text-darkblue-800">Primary Blue</span>
                  <span className="text-xs font-['Inter',sans-serif] text-gray-500">#455174</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-amber-400 mb-2"></div>
                  <span className="text-sm font-['Inter',sans-serif] text-darkblue-800">Primary Yellow</span>
                  <span className="text-xs font-['Inter',sans-serif] text-gray-500">#F5A623</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#F5F5F5] border border-gray-200 mb-2"></div>
                  <span className="text-sm font-['Inter',sans-serif] text-darkblue-800">Soft White</span>
                  <span className="text-xs font-['Inter',sans-serif] text-gray-500">#F5F5F5</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#E3E3E3] mb-2"></div>
                  <span className="text-sm font-['Inter',sans-serif] text-darkblue-800">Light Gray</span>
                  <span className="text-xs font-['Inter',sans-serif] text-gray-500">#E3E3E3</span>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-3 font-['DM_Sans',sans-serif] text-darkblue-800">Typography</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded border border-[#E3E3E3]">
                  <h4 className="font-['DM_Sans',sans-serif] font-medium text-darkblue-800">Primary Font</h4>
                  <p className="text-lg font-['DM_Sans',sans-serif] text-darkblue-800">DM Sans</p>
                  <p className="text-sm text-gray-500 font-['DM_Sans',sans-serif]">Used for headings & body text</p>
                </div>
                <div className="p-4 bg-white rounded border border-[#E3E3E3]">
                  <h4 className="font-['Inter',sans-serif] font-medium text-darkblue-800">Secondary Font</h4>
                  <p className="text-lg font-['Inter',sans-serif] text-darkblue-800">Inter</p>
                  <p className="text-sm text-gray-500 font-['Inter',sans-serif]">Used for UI elements & buttons</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="inline-block bg-amber-400 text-darkblue-800 text-xs px-3 py-1 rounded-full font-['Inter',sans-serif]">UI/UX Design</span>
              <span className="inline-block bg-amber-400 text-darkblue-800 text-xs px-3 py-1 rounded-full font-['Inter',sans-serif]">Web Development</span>
              <span className="inline-block bg-amber-400 text-darkblue-800 text-xs px-3 py-1 rounded-full font-['Inter',sans-serif]">Strategy</span>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4 font-['DM_Sans',sans-serif] text-darkblue-800">Project Overview</h2>
            <p className="text-gray-600 mb-8 font-['DM_Sans',sans-serif]">
              Aura Interiors needed a portfolio website that showcased their elegant interior design projects while providing potential clients with an easy way to get in touch. The design had to reflect the company's sophisticated aesthetic and attention to detail.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 font-['DM_Sans',sans-serif] text-darkblue-800">The Challenge</h2>
            <p className="text-gray-600 mb-8 font-['DM_Sans',sans-serif]">
              The main challenge was to create a visually stunning website that highlighted the beauty of Aura's interior design work without overwhelming visitors. We needed to balance aesthetic appeal with functional user experience, ensuring that the site was both beautiful and easy to navigate.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 font-['DM_Sans',sans-serif] text-darkblue-800">The Solution</h2>
            <p className="text-gray-600 mb-8 font-['DM_Sans',sans-serif]">
              We developed a clean, minimalist design that puts the focus on high-quality images of Aura's interior design projects. The website features a sophisticated color palette, elegant typography, and smooth animations that create a sense of luxury and refinement. The user interface is intuitive, making it easy for visitors to browse projects and contact the company.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 font-['DM_Sans',sans-serif] text-darkblue-800">Key Features</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8 font-['DM_Sans',sans-serif]">
              <li>Responsive design that looks great on all devices</li>
              <li>Gallery showcasing interior design projects with filtering options</li>
              <li>Interactive elements that engage visitors</li>
              <li>Contact form with validation for potential client inquiries</li>
              <li>Integration with social media platforms</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4 font-['DM_Sans',sans-serif] text-darkblue-800">Results</h2>
            <p className="text-gray-600 mb-8 font-['DM_Sans',sans-serif]">
              Since launching the new website, Aura Interiors has seen a significant increase in online inquiries and project requests. The website has helped establish the company's online presence and showcase their portfolio to a wider audience.
            </p>
            
            <div className="mt-10">
              <Link 
                to="/projects" 
                className="inline-flex items-center px-4 py-2 rounded-full bg-amber-400 text-darkblue-800 hover:bg-amber-500 transition-all duration-300 group font-['Inter',sans-serif]"
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
