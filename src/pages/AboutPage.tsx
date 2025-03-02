
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import ReadyToGetStarted from "@/components/ReadyToGetStarted";
import { Check } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 bg-darkblue-600 rounded-lg mt-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">About Me</h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-200">
            Learn more about my journey, skills, and approach to design.
          </p>
        </div>
        
        <About />
        
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="container mx-auto">
            <div className="space-y-8">
              <div className="space-y-6 max-w-3xl">
                <h2 className="text-3xl font-semibold">My Design Philosophy</h2>
                <p className="text-gray-600">
                  I believe in creating designs that not only look beautiful but also solve real problems. 
                  My approach combines aesthetics with functionality to deliver exceptional user experiences.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex">
                    <div className="mr-4 bg-amber-400 rounded-full p-2 h-fit">
                      <Check className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">User-centered design</h4>
                      <p className="text-gray-600 mt-1">I place users at the heart of every design decision, conducting thorough research to understand their needs, pain points, and aspirations.</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex">
                    <div className="mr-4 bg-amber-400 rounded-full p-2 h-fit">
                      <Check className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Simplicity and clarity</h4>
                      <p className="text-gray-600 mt-1">I believe that great design removes complexity rather than adding to it, creating intuitive experiences with minimal learning curves.</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex">
                    <div className="mr-4 bg-amber-400 rounded-full p-2 h-fit">
                      <Check className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Attention to detail</h4>
                      <p className="text-gray-600 mt-1">The small details often make the biggest difference. I meticulously refine every element to ensure a polished and professional end result.</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex">
                    <div className="mr-4 bg-amber-400 rounded-full p-2 h-fit">
                      <Check className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Accessibility-first mindset</h4>
                      <p className="text-gray-600 mt-1">I firmly believe that great design should be inclusive and accessible to everyone, considering diverse user needs from the start.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <ReadyToGetStarted />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
