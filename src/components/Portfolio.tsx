
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
          <a href="#" className="inline-flex items-center px-4 py-2 rounded-full bg-olive-600 text-white hover:bg-olive-700 transition-all duration-300 group">
            <span>View All Projects</span>
            <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md fade-in-up" style={{ '--delay': index + 1 } as React.CSSProperties}>
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 right-4 space-x-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="inline-block bg-amber-400 text-darkblue-800 text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-semibold mb-2">{project.title}</h4>
              <p className="text-gray-600 mb-4">{project.subtitle}</p>
              <a href="#" className="inline-flex items-center px-4 py-2 rounded-full bg-olive-600 text-white hover:bg-olive-700 transition-all duration-300 group">
                <span>View Details</span>
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
