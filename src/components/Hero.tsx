
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 md:pt-32 pb-0 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-screen-xl xl:max-w-6xl 2xl:max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image - First on mobile, to the right on desktop */}
          <div className="relative text-center md:text-right fade-in-up order-1 md:order-2 h-full flex items-center justify-center md:justify-end" style={{ '--delay': 2 } as React.CSSProperties}>
            <div className="relative h-full">
              <img 
                src="/lovable-uploads/83e49f23-b7e7-48f3-8219-a2807a82b234.png" 
                alt="Rishabh Waykole" 
                className="w-[380px] object-contain sm:w-[450px] md:w-[520px] lg:w-[580px] rounded-lg"
              />
            </div>
          </div>
          
          {/* Text Content - Below image on mobile, to the left on desktop */}
          <div className="space-y-4 md:space-y-6 order-2 md:order-1 fade-in-up" style={{ '--delay': 0 } as React.CSSProperties}>
            <div className="text-darkblue-700 text-base md:text-lg">
              Hello There! 👋
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              I'm <span className="highlight">Rishabh Waykole</span>,<br />
              Creative UI/UX & Web Designer
            </h1>
            
            <p className="text-darkblue-700 max-w-lg">
              Transforming concepts into engaging digital experiences. I create websites and UI/UX designs that captivate and convert!
            </p>
            
            <div className="flex flex-wrap gap-3 md:gap-4">
              <button className="btn-primary text-sm md:text-base">
                <span>View My Portfolio</span>
                <ArrowRight size={16} className="md:size-18" />
              </button>
              <button className="btn-secondary text-sm md:text-base">
                <span>Hire Me</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modified to stick to the edge by removing container padding and adding negative margin */}
      <div className="bg-amber-400 w-full py-4 md:py-6 mt-8 md:mt-10 relative -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8">
        {/* Replace loop with static spaced items */}
        <div className="flex flex-wrap justify-center md:justify-between max-w-6xl mx-auto">
          {['App Design', 'Website Design', 'Dashboard', 'Wireframing'].map((item, index) => (
            <div key={index} className="px-3 py-1 md:px-0">
              <span className="text-darkblue-800 font-medium text-xs md:text-base whitespace-nowrap">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
