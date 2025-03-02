
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Crafting intuitive user interfaces and seamless experiences that engage and delight. I focus on user research, wireframing, prototyping, and usability testing to create designs that are both beautiful and functional.",
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
      description: "Building custom application interfaces that balance aesthetics with functionality. My approach includes information architecture, interaction design, and visual design to create cohesive and engaging experiences across all platforms.",
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
      description: "Designing responsive websites that represent your brand and connect with your audience. I deliver comprehensive solutions from concept to implementation, including responsive layouts, visual elements, and content strategy.",
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
    {
      title: "Web App Design",
      description: "Creating complex web applications with intuitive interfaces that scale with your business. My process includes component architecture, state management patterns, and performance optimization for a seamless user experience.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="#45533C" strokeWidth="2"/>
          <path d="M3 8H21" stroke="#45533C" strokeWidth="2" strokeLinecap="round"/>
          <path d="M10 12H18" stroke="#45533C" strokeWidth="2" strokeLinecap="round"/>
          <path d="M10 16H14" stroke="#45533C" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="6" cy="14" r="2" stroke="#45533C" strokeWidth="2"/>
        </svg>
      ),
      delay: 4,
    },
  ];

  return (
    <section className="pt-16 pb-12 md:pt-16 md:pb-16 bg-gray-50" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="section-title mb-3">Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">
            Services <span className="highlight">I Provide</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl">
            Comprehensive design solutions tailored to elevate your brand and digital presence. Each service is customized to meet your specific needs and goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
