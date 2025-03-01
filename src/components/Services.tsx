
import { ArrowRight } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="#45533C" strokeWidth="2"/>
          <circle cx="9" cy="9" r="2" fill="#45533C"/>
          <circle cx="15" cy="15" r="2" fill="#45533C"/>
          <path d="M15 9H15.01" stroke="#45533C" strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 15H9.01" stroke="#45533C" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      delay: 1,
    },
    {
      title: "Application Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 18V6" stroke="#45533C" strokeWidth="2" strokeLinecap="round"/>
          <path d="M15 9L12 6L9 9" stroke="#45533C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 14H6C4.89543 14 4 13.1046 4 12V6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V12C20 13.1046 19.1046 14 18 14H16" stroke="#45533C" strokeWidth="2" strokeLinecap="round"/>
          <rect x="8" y="14" width="8" height="8" rx="2" stroke="#45533C" strokeWidth="2"/>
        </svg>
      ),
      delay: 2,
    },
    {
      title: "Website Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="#45533C" strokeWidth="2"/>
          <path d="M3 9H21" stroke="#45533C" strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 21V9" stroke="#45533C" strokeWidth="2" strokeLinecap="round"/>
          <path d="M7 7H7.01" stroke="#45533C" strokeWidth="2" strokeLinecap="round"/>
          <path d="M5 7H5.01" stroke="#45533C" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      delay: 3,
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="section-title mb-3">Services</h2>
            <h3 className="text-3xl md:text-4xl font-semibold">
              Services <span className="highlight">I Provide</span>
            </h3>
          </div>
          
          <a href="#" className="inline-flex items-center px-5 py-3 rounded-full bg-olive-600 text-white mt-4 md:mt-0 hover:bg-olive-700 transition-all duration-300 group">
            <span>View All Services</span>
            <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
