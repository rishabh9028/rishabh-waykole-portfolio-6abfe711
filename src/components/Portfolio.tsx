
import { ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Aura Interiors",
      subtitle: "Portfolio Website for an interior company",
      image: "/lovable-uploads/8995d088-2006-48ec-8363-f2aa4de1a303.png",
      tags: ["UI/UX Design", "Web Development", "Strategy"],
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto" id="portfolio">
      <div className="mb-12">
        <h2 className="section-title mb-2">My Portfolio</h2>
        <div className="flex items-center justify-between">
          <h3 className="text-3xl md:text-4xl font-semibold">
            My Latest <span className="text-amber-400">Projects</span>
          </h3>
          <a href="#" className="inline-flex items-center px-4 py-2 rounded-full bg-darkblue-600 text-white hover:bg-darkblue-700 transition-all duration-300 group">
            <span>View All Projects</span>
            <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md fade-in-up flex flex-col md:flex-row" style={{ '--delay': index + 1 } as React.CSSProperties}>
            <div className="w-full md:w-1/2">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <div className="mb-4 space-y-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="inline-block bg-amber-400 text-darkblue-800 text-xs px-3 py-1 rounded-full mr-2">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-semibold mb-2">{project.title}</h4>
                <p className="text-gray-600 mb-4">{project.subtitle}</p>
              </div>
              <div className="mt-auto">
                <a href="#" className="inline-flex items-center px-4 py-2 rounded-full bg-darkblue-600 text-white hover:bg-darkblue-700 transition-all duration-300 group">
                  <span>View Details</span>
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
