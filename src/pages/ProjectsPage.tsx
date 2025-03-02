
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import { useState } from "react";

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "UI/UX Design", "Web Development", "Mobile Apps", "Branding"];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 bg-darkblue-600 rounded-lg mt-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">My Projects</h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-200">
            Explore my portfolio of work across various design disciplines and projects.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm transition-all ${
                  activeCategory === category
                    ? "bg-amber-400 text-darkblue-800"
                    : "bg-darkblue-500 text-white hover:bg-darkblue-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <Portfolio />
        
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Interested in working together?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-amber-400 text-darkblue-800 hover:bg-amber-500 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
