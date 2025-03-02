
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-20 md:pt-32 pb-0 relative overflow-hidden w-full">
      <div className="container mx-auto px-4 md:px-6 max-w-screen-xl xl:max-w-7xl 2xl:max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Column - On left for desktop */}
          <div className="space-y-6 order-1 md:order-1 fade-in-up flex flex-col justify-center items-center md:items-start" style={{ '--delay': 0 } as React.CSSProperties}>
            {/* Intro Section */}
            <div className="text-darkblue-700 text-base md:text-lg text-center md:text-left w-full">
              Hello There! 👋
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-center md:text-left">
              I'm <span className="highlight">Rishabh Waykole</span>,<br />
              Creative UI/UX & Web Designer
            </h1>
            
            {/* Description Section (moves below image on mobile) */}
            <div className="hidden md:block">
              <p className="text-darkblue-700 max-w-lg text-center md:text-left">
                Transforming concepts into engaging digital experiences. I create websites and UI/UX designs that captivate and convert!
              </p>
              
              <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start w-full mt-6">
                <Link to="/projects" className="btn-primary text-sm md:text-base">
                  <span>View My Portfolio</span>
                  <ArrowRight size={16} className="md:size-18" />
                </Link>
                <Link to="/contact" className="btn-secondary text-sm md:text-base">
                  <span>Hire Me</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Image - Center on mobile, right on desktop */}
          <div className="relative text-center md:text-right fade-in-up order-2 md:order-2 h-full flex items-center justify-center md:justify-end" style={{ '--delay': 2 } as React.CSSProperties}>
            <div className="relative h-full w-full">
              <img 
                src="/lovable-uploads/83e49f23-b7e7-48f3-8219-a2807a82b234.png" 
                alt="Rishabh Waykole" 
                className="w-auto h-auto max-w-full max-h-[600px] object-contain mx-auto md:mx-0"
              />
            </div>
          </div>
          
          {/* Mobile-only description section that appears after the image */}
          <div className="md:hidden space-y-4 order-3 fade-in-up flex flex-col justify-center items-center mt-4" style={{ '--delay': 3 } as React.CSSProperties}>
            <p className="text-darkblue-700 max-w-lg text-center">
              Transforming concepts into engaging digital experiences. I create websites and UI/UX designs that captivate and convert!
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center w-full">
              <Link to="/projects" className="btn-primary text-sm">
                <span>View My Portfolio</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-secondary text-sm">
                <span>Hire Me</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Full-width skills bar with centered content */}
      <div className="bg-amber-400 w-full py-4 md:py-6 mt-8 md:mt-10">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {['App Design', 'Website Design', 'Dashboard', 'Wireframing'].map((item, index) => (
              <div key={index} className="py-1">
                <span className="text-darkblue-700 font-medium text-xs md:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
