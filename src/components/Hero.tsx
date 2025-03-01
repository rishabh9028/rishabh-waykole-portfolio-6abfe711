
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 fade-in-up" style={{ '--delay': 0 } as React.CSSProperties}>
            <div className="inline-block bg-amber-100 px-3 py-1 rounded-full border border-amber-300 text-sm text-olive-800">
              Hello There! 👋
            </div>
            
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              I'm <span className="highlight">Olivia Smith</span>,<br />
              Product Designer<br />
              Based in USA.
            </h1>
            
            <p className="text-olive-700 max-w-lg">
              I'm an experienced Product Designer with 15+ years in the
              field, collaborating with various companies and startups.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">
                <span>View My Portfolio</span>
                <ArrowRight size={18} />
              </button>
              <button className="btn-secondary">
                <span>Hire Me</span>
              </button>
            </div>
          </div>
          
          <div className="relative lg:text-right fade-in-up order-first lg:order-last" style={{ '--delay': 2 } as React.CSSProperties}>
            <div className="relative">
              <div className="absolute -right-5 top-12 animate-float">
                <div className="bg-olive-600 text-white badge-secondary p-3 rounded-full">
                  Product Designer
                </div>
              </div>
              <div className="absolute right-36 top-6 animate-float" style={{ animationDelay: '1s' }}>
                <div className="badge-primary p-3 rounded-full">
                  UI/UX Designer
                </div>
              </div>
              
              <div className="bg-amber-400 rounded-full w-[360px] h-[360px] mx-auto lg:ml-auto lg:mr-0 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=360&h=400" 
                  alt="Olivia Smith" 
                  className="absolute bottom-0 right-0 w-[100%] h-auto object-cover"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
              
              <div className="absolute -right-4 md:right-8 -bottom-6 animate-pulse-soft">
                <div className="relative bg-olive-700 text-white rounded-full p-4 flex items-center justify-center w-16 h-16">
                  <ArrowRight size={24} className="absolute" />
                  <div className="animate-spin-slow w-full h-full rounded-full border-2 border-white border-dashed"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-amber-400 w-full py-6 mt-10 relative overflow-hidden">
        <div className="flex justify-around items-center whitespace-nowrap animate-slide">
          {['App Design', 'Website Design', 'Dashboard', 'Wireframing'].map((item, index) => (
            <div key={index} className="flex items-center px-10">
              <span className="text-olive-800 font-medium">{item}</span>
              <div className="w-2 h-2 bg-olive-800 rounded-full mx-8"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
