
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import { ArrowRight, Check } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Me</h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-600">
            Learn more about my journey, skills, and approach to design.
          </p>
        </div>
        
        <About />
        
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold">My Design Philosophy</h2>
                <p className="text-gray-600">
                  I believe in creating designs that not only look beautiful but also solve real problems. 
                  My approach combines aesthetics with functionality to deliver exceptional user experiences.
                </p>
                
                <ul className="space-y-3">
                  {["User-centered design approach", "Focus on simplicity and clarity", "Attention to detail", "Accessibility-first mindset"].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-2 text-amber-400 mt-1" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <a href="#" className="inline-flex items-center px-5 py-3 rounded-full bg-darkblue-600 text-white hover:bg-darkblue-700 transition-all duration-300 group mt-4">
                  <span>Download Resume</span>
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-6">Education & Experience</h3>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-amber-400 pb-8">
                    <div className="absolute w-4 h-4 bg-amber-400 rounded-full -left-[9px] top-0"></div>
                    <h4 className="text-xl font-medium">Senior UX Designer</h4>
                    <p className="text-amber-500">2021 - Present</p>
                    <p className="mt-2 text-gray-600">Leading UX design for enterprise applications and mentoring junior designers.</p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-amber-400 pb-8">
                    <div className="absolute w-4 h-4 bg-amber-400 rounded-full -left-[9px] top-0"></div>
                    <h4 className="text-xl font-medium">UI/UX Designer</h4>
                    <p className="text-amber-500">2018 - 2021</p>
                    <p className="mt-2 text-gray-600">Designed user interfaces for mobile applications and websites.</p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-amber-400">
                    <div className="absolute w-4 h-4 bg-amber-400 rounded-full -left-[9px] top-0"></div>
                    <h4 className="text-xl font-medium">Bachelor of Design</h4>
                    <p className="text-amber-500">2014 - 2018</p>
                    <p className="mt-2 text-gray-600">Graduated with honors in Interactive Design.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
