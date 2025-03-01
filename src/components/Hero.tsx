
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 md:pt-32 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content - Always on top for mobile */}
          <div className="space-y-4 md:space-y-6 order-1 fade-in-up" style={{ '--delay': 0 } as React.CSSProperties}>
            <div className="text-darkblue-700 text-sm">
              Hello There! 👋
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              I'm <span className="highlight">Olivia Smith</span>,<br />
              Product Designer<br />
              Based in USA.
            </h1>
            
            <p className="text-darkblue-700 max-w-lg">
              I'm an experienced Product Designer with 15+ years in the
              field, collaborating with various companies and startups.
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
          
          {/* Image - Always below text on mobile, to the right on desktop */}
          <div className="relative text-center md:text-right fade-in-up order-2 mt-8 md:mt-0" style={{ '--delay': 2 } as React.CSSProperties}>
            <div className="relative inline-block">
              <div className="absolute -right-5 top-12 animate-float hidden sm:block">
                <div className="bg-darkblue-600 text-white badge-secondary p-2 md:p-3 rounded-full text-xs md:text-sm">
                  Product Designer
                </div>
              </div>
              <div className="absolute right-24 md:right-36 top-6 animate-float hidden sm:block" style={{ animationDelay: '1s' }}>
                <div className="badge-primary p-2 md:p-3 rounded-full text-xs md:text-sm">
                  UI/UX Designer
                </div>
              </div>
              
              <div className="bg-amber-400 rounded-full w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=360&h=400" 
                  alt="Olivia Smith" 
                  className="absolute bottom-0 right-0 w-[100%] h-auto object-cover"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
              
              <div className="absolute -right-4 md:right-8 -bottom-6 animate-pulse-soft hidden sm:block">
                <div className="relative bg-darkblue-700 text-white rounded-full p-3 md:p-4 flex items-center justify-center w-12 h-12 md:w-16 md:h-16">
                  <ArrowRight size={20} className="absolute md:size-24" />
                  <div className="animate-spin-slow w-full h-full rounded-full border-2 border-white border-dashed"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-amber-400 w-full py-4 md:py-6 mt-8 md:mt-10 relative overflow-hidden">
        <div className="flex justify-around items-center whitespace-nowrap animate-slide">
          {['App Design', 'Website Design', 'Dashboard', 'Wireframing'].map((item, index) => (
            <div key={index} className="flex items-center px-4 md:px-10">
              <span className="text-darkblue-800 font-medium text-xs md:text-base">{item}</span>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-darkblue-800 rounded-full mx-4 md:mx-8"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
