
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        scrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-3" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-olive-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-2">
            <span className="font-semibold">R</span>
          </div>
          <span className="font-medium text-olive-800">Rishabh.</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'Services', 'About', 'Projects', 'Blogs', 'Testimonials'].map((item, index) => (
            <a 
              key={index}
              href={`#${item.toLowerCase()}`}
              className={cn(
                "text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300",
                index === 0 ? "text-amber-400 after:bg-amber-400" : "text-olive-800 after:bg-olive-800"
              )}
            >
              {item}
            </a>
          ))}
        </nav>
        
        <button className="rounded-full bg-white px-5 py-2 text-sm font-medium text-olive-800 border border-olive-600 hover:bg-olive-50 transition-all duration-300">
          Contact Me
        </button>
      </div>
    </header>
  );
};

export default Header;
