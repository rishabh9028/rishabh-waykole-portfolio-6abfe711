
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      title: "Aura Interiors",
      subtitle: "Portfolio Website for an interior company",
      image: "/lovable-uploads/a2a1de97-ec2e-49a0-b5ca-19350fe2de74.png",
      tags: ["UI/UX Design", "Web Development", "Strategy"],
      link: "/projects/aura-interiors"
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
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md fade-in-up flex flex-col" style={{ '--delay': index + 1 } as React.CSSProperties}>
            <div className="w-full">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-full p-6 flex flex-col justify-between">
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
                <Link to={project.link} className="inline-flex items-center px-4 py-2 rounded-full bg-darkblue-600 text-white hover:bg-darkblue-700 transition-all duration-300 group">
                  <span>View Details</span>
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
