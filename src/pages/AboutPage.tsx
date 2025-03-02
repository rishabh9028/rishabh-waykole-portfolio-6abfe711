
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
                
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <Check className="mr-3 text-amber-400 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium text-lg">User-centered design approach</h4>
                      <p className="text-gray-600 mt-1">I place users at the heart of every design decision, conducting thorough research to understand their needs, pain points, and aspirations. This empathetic approach ensures solutions that truly resonate with the target audience.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 text-amber-400 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium text-lg">Focus on simplicity and clarity</h4>
                      <p className="text-gray-600 mt-1">I believe that great design removes complexity rather than adding to it. By striving for simplicity in both visual elements and interactions, I create intuitive experiences that require minimal learning curves and cognitive load.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 text-amber-400 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium text-lg">Attention to detail</h4>
                      <p className="text-gray-600 mt-1">The small details often make the biggest difference. I meticulously refine every element of my designs, from pixel-perfect alignment to thoughtful micro-interactions, ensuring a polished and professional end result that stands out from the crowd.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 text-amber-400 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium text-lg">Accessibility-first mindset</h4>
                      <p className="text-gray-600 mt-1">I firmly believe that great design should be inclusive and accessible to everyone. By considering diverse user needs and abilities from the start, I create solutions that can be enjoyed by the widest possible audience without compromising on aesthetics or functionality.</p>
                    </div>
                  </li>
                </ul>
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
