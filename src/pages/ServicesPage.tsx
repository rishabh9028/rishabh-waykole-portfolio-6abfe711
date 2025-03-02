
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import ReadyToGetStarted from "@/components/ReadyToGetStarted";

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 bg-darkblue-600 rounded-lg mt-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">Our Services</h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-300">
            Comprehensive design solutions tailored to elevate your brand and digital presence.
            Discover how our expertise can transform your ideas into engaging experiences.
          </p>
        </div>
        <Services />
        
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-6">How We Work</h2>
              <p className="text-lg text-gray-600 mb-12">
                Our collaborative process ensures your vision comes to life exactly as you imagined—or better.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 rounded-lg bg-gray-50">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-amber-500">1</span>
                  </div>
                  <h3 className="text-xl font-medium mb-3">Discovery</h3>
                  <p className="text-gray-600">Understanding your goals, audience, and requirements</p>
                </div>
                
                <div className="p-6 rounded-lg bg-gray-50">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-amber-500">2</span>
                  </div>
                  <h3 className="text-xl font-medium mb-3">Design</h3>
                  <p className="text-gray-600">Creating prototypes and iterating based on feedback</p>
                </div>
                
                <div className="p-6 rounded-lg bg-gray-50">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-amber-500">3</span>
                  </div>
                  <h3 className="text-xl font-medium mb-3">Delivery</h3>
                  <p className="text-gray-600">Implementing the final design with attention to detail</p>
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

export default ServicesPage;
