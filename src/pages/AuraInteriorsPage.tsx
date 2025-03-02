
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReadyToGetStarted from "@/components/ReadyToGetStarted";
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const AuraInteriorsPage = () => {
  // Images for the preview carousel - updated with real screenshots
  const previewImages = [
    {
      url: "/lovable-uploads/a2a1de97-ec2e-49a0-b5ca-19350fe2de74.png",
      caption: "Homepage - Hero Section with Elegant Living Room"
    },
    {
      url: "/lovable-uploads/8995d088-2006-48ec-8363-f2aa4de1a303.png",
      caption: "Portfolio Gallery with Project Showcases"
    },
    {
      url: "/lovable-uploads/83e49f23-b7e7-48f3-8219-a2807a82b234.png",
      caption: "Services Section with Interior Design Offerings"
    }
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === previewImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? previewImages.length - 1 : prevIndex - 1
    );
  };

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

        {/* Interactive Website Preview Section with Carousel */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 bg-gray-100 rounded-lg my-12">
          <h2 className="text-2xl font-semibold mb-8 text-center font-['DM_Sans',sans-serif] text-darkblue-800">
            Interactive Website Preview
          </h2>
          
          <div className="relative rounded-lg overflow-hidden border border-gray-200 shadow-lg mx-auto max-w-5xl">
            <div className="absolute top-0 left-0 right-0 bg-gray-800 py-2 px-4 flex items-center space-x-2 z-10">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 mx-2">
                <div className="bg-gray-700 rounded-full py-1 px-3 text-xs text-gray-300 text-center overflow-hidden whitespace-nowrap">
                  https://aura-interiors-61aaee.webflow.io/
                </div>
              </div>
            </div>
            
            {/* Carousel for Website Screenshots */}
            <div className="pt-10 pb-4 px-4 overflow-hidden relative">
              <div className="relative">
                <img 
                  src={previewImages[currentImageIndex].url} 
                  alt={`Aura Interiors - ${previewImages[currentImageIndex].caption}`} 
                  className="w-full h-auto rounded-md shadow-md transition-opacity duration-300"
                />
                
                {/* Caption */}
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <span className="bg-darkblue-800 bg-opacity-75 text-white px-4 py-2 rounded-full text-sm">
                    {previewImages[currentImageIndex].caption}
                  </span>
                </div>
                
                {/* Navigation Arrows */}
                <button 
                  onClick={goToPrevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="text-darkblue-800" size={24} />
                </button>
                
                <button 
                  onClick={goToNextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight className="text-darkblue-800" size={24} />
                </button>
              </div>
              
              {/* Carousel Indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                {previewImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentImageIndex === index ? "bg-darkblue-600 w-6" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <a 
              href="https://aura-interiors-61aaee.webflow.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-darkblue-600 text-white hover:bg-darkblue-700 transition-all duration-300"
            >
              <span>Visit Live Website</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Design Details Section */}
            <div className="mb-10 p-6 bg-[#F5F5F5] rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 font-['DM_Sans',sans-serif] text-darkblue-800">Design Details</h2>
              
              <h3 className="text-xl font-medium mb-3 font-['DM_Sans',sans-serif] text-darkblue-800">Color Palette</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#D08954] mb-2"></div>
                  <span className="text-sm font-['Inter',sans-serif] text-darkblue-800">Burnt Orange</span>
                  <span className="text-xs font-['Inter',sans-serif] text-gray-500">#D08954</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#1E1E1E] mb-2"></div>
                  <span className="text-sm font-['Inter',sans-serif] text-darkblue-800">Charcoal Black</span>
                  <span className="text-xs font-['Inter',sans-serif] text-gray-500">#1E1E1E</span>
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
