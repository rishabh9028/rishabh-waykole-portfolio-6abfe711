
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Services</h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-600">
            Comprehensive design solutions tailored to elevate your brand and digital presence.
          </p>
        </div>
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
