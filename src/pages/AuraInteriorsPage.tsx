import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReadyToGetStarted from "@/components/ReadyToGetStarted";
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

const AuraInteriorsPage = () => {
  // Images for the gallery - updated with uploaded website screenshots
  const websiteImages = [
    {
      url: "/lovable-uploads/e028bb6d-f2c6-4581-afc3-16e612f8a44c.png",
      caption: "Homepage - Transform Your Space into a Work of Art"
    },
    {
      url: "/lovable-uploads/a33a1324-fcc3-4b1e-91b5-45e6d1888ec9.png",
      caption: "About Page - Who We Are"
    },
    {
      url: "/lovable-uploads/ed0b3e0a-106e-48f7-a1a4-b4d17a5d4c67.png",
      caption: "Project Detail - Haven Interior Design"
    },
    {
      url: "/lovable-uploads/6bef3c62-a60c-4f36-b064-7d8153896bc7.png",
      caption: "Testimonials from Our Clients"
    },
    {
      url: "/lovable-uploads/893c5c54-5747-4e5b-9046-83a5c11d75a6.png",
      caption: "How It Works - Our Design Process"
    },
    {
      url: "/lovable-uploads/a6ce8f6d-b69f-4958-a23b-280b64b314d1.png",
      caption: "Contact Form - Get in Touch"
    },
    {
      url: "/lovable-uploads/58e12dab-75f5-4746-8daa-e689232f2e66.png",
      caption: "Navigation Menu"
    },
    {
      url: "/lovable-uploads/800999af-1288-458a-a038-4126595a3fb4.png",
      caption: "Portfolio Page - Our Projects"
    },
    {
      url: "/lovable-uploads/d5148aa2-0f5c-4c33-9cee-66110d73c457.png",
      caption: "Project Gallery - Sanctuary"
    }
  ];
  
  // State for desktop slider
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // State for mobile slider
  const [mobileImageIndex, setMobileImageIndex] = useState(0);
  const [mobileSliderValue, setMobileSliderValue] = useState([0]);
  
  const goToNextImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex((prevIndex) => 
      prevIndex === websiteImages.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const goToPrevImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? websiteImages.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSpecificSlide = (index: number) => {
    if (isAnimating || index === currentImageIndex) return;
    setIsAnimating(true);
    setCurrentImageIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Handle mobile slider change
  const handleMobileSliderChange = (values: number[]) => {
    const newIndex = Math.round(values[0]);
    setMobileSliderValue([newIndex]);
    setMobileImageIndex(newIndex);
  };

  // Mobile slider auto-advance
  useEffect(() => {
    const mobileInterval = setInterval(() => {
      setMobileImageIndex(prev => {
        const nextIndex = prev === websiteImages.length - 1 ? 0 : prev + 1;
        setMobileSliderValue([nextIndex]);
        return nextIndex;
      });
    }, 3000);
    
    return () => clearInterval(mobileInterval);
  }, [websiteImages.length]);

  // Desktop slider auto-advance
  useEffect(() => {
    const desktopInterval = setInterval(goToNextImage, 5000);
    return () => clearInterval(desktopInterval);
  }, []);

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

        {/* Visit Live Website Button */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 text-center">
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
        
        {/* Website Images Gallery - Moved before ReadyToGetStarted */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-semibold mb-6 font-['DM_Sans',sans-serif] text-darkblue-800 text-center">
            Website Preview Gallery
          </h2>
          
          {/* Desktop Gallery */}
          <div className="hidden md:block">
            <div className="relative max-w-5xl mx-auto overflow-hidden rounded-lg shadow-lg">
              {/* Image Slider */}
              <div className="relative h-[600px] overflow-hidden bg-darkblue-50">
                {websiteImages.map((image, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "absolute inset-0 transition-all duration-500 flex items-center justify-center",
                      currentImageIndex === index 
                        ? "opacity-100 translate-x-0" 
                        : index < currentImageIndex 
                          ? "opacity-0 -translate-x-full" 
                          : "opacity-0 translate-x-full"
                    )}
                  >
                    <img 
                      src={image.url} 
                      alt={image.caption} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
                
                {/* Navigation Controls */}
                <button 
                  onClick={goToPrevImage} 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-darkblue-800 shadow-md transition-all duration-200 focus:outline-none"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button 
                  onClick={goToNextImage} 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-darkblue-800 shadow-md transition-all duration-200 focus:outline-none"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-darkblue-800/80 text-white p-3 text-center">
                  <p className="font-['DM_Sans',sans-serif]">{websiteImages[currentImageIndex].caption}</p>
                </div>
              </div>
              
              {/* Indicator Dots */}
              <div className="flex justify-center gap-2 py-4 bg-white">
                {websiteImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSpecificSlide(index)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      currentImageIndex === index ? "bg-amber-400 scale-110" : "bg-gray-300 hover:bg-gray-400"
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Mobile Gallery - Only visible on mobile devices */}
          <div className="md:hidden">
            <div className="relative mx-auto overflow-hidden rounded-lg shadow-md">
              {/* Mobile Image Slider */}
              <div className="relative h-[450px] bg-white">
                <div className="h-[400px] overflow-hidden">
                  {websiteImages.map((image, index) => (
                    <div 
                      key={index}
                      className={cn(
                        "absolute inset-0 transition-all duration-300 flex items-center justify-center",
                        mobileImageIndex === index 
                          ? "opacity-100 translate-x-0" 
                          : index < mobileImageIndex 
                            ? "opacity-0 -translate-x-full" 
                            : "opacity-0 translate-x-full"
                      )}
                    >
                      <img 
                        src={image.url} 
                        alt={image.caption} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Caption */}
                <div className="absolute bottom-12 left-0 right-0 bg-darkblue-800/80 text-white p-3 text-center">
                  <p className="text-sm font-['DM_Sans',sans-serif]">{websiteImages[mobileImageIndex].caption}</p>
                </div>
                
                {/* Mobile Slider Control */}
                <div className="absolute bottom-0 left-0 right-0 px-6 py-4">
                  <Slider
                    value={mobileSliderValue}
                    min={0}
                    max={websiteImages.length - 1}
                    step={1}
                    onValueChange={handleMobileSliderChange}
                    className="w-full"
                  />
                </div>
                
                {/* Navigation Controls for Mobile */}
                <div className="absolute bottom-1/2 left-0 right-0 flex justify-between px-2">
                  <button 
                    onClick={() => {
                      const newIndex = mobileImageIndex === 0 ? websiteImages.length - 1 : mobileImageIndex - 1;
                      setMobileImageIndex(newIndex);
                      setMobileSliderValue([newIndex]);
                    }}
                    className="bg-gray-800/40 rounded-full p-2 text-white"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  
                  <button 
                    onClick={() => {
                      const newIndex = mobileImageIndex === websiteImages.length - 1 ? 0 : mobileImageIndex + 1;
                      setMobileImageIndex(newIndex);
                      setMobileSliderValue([newIndex]);
                    }}
                    className="bg-gray-800/40 rounded-full p-2 text-white"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
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
