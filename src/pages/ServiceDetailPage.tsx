
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReadyToGetStarted from "@/components/ReadyToGetStarted";

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // We'd normally fetch the service details based on the slug
  // For now, let's just use the slug to create a placeholder
  const serviceTitle = slug ? slug.replace(/-/g, ' ') : '';
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="mt-16"> {/* Added margin-top to prevent overlap with fixed header */}
        <div className="w-full bg-darkblue-600 pb-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white capitalize">
              {serviceTitle}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive solutions tailored to meet your unique needs and goals.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">How We Approach This Service</h2>
            <p className="text-gray-600 mb-8">
              Our process is collaborative and thorough, ensuring we deliver results that exceed expectations. We begin by understanding your goals, then create a tailored strategy that aligns with your vision.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
              <li>Customized solutions that address your specific challenges</li>
              <li>Expert guidance throughout the entire process</li>
              <li>Timely delivery with attention to detail</li>
              <li>Ongoing support to ensure long-term success</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
            <p className="text-gray-600">
              With years of experience and a passion for excellence, we bring creativity and technical expertise to every project. Our client-centered approach ensures that your needs remain the focus from start to finish.
            </p>
          </div>
        </div>
        
        <ReadyToGetStarted />
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
