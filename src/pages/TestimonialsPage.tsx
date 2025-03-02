
import { Star } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReadyToGetStarted from "@/components/ReadyToGetStarted";

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jenny Mills",
      role: "Product Manager",
      avatar: "https://randomuser.me/api/portraits/women/11.jpg",
      content: "Incredibly talented designer who captured our vision perfectly. The website Rishabh created for us has significantly improved our conversion rates and user engagement.",
      rating: 5
    },
    {
      id: 2,
      name: "Brian Lee",
      role: "CEO, TechStart",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      content: "Working with Rishabh was a pleasure from start to finish. Responsive, creative, and detail-oriented - everything you want in a designer. Highly recommend!",
      rating: 5
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Marketing Director",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      content: "Rishabh's attention to detail and creative approach to UI/UX design transformed our digital presence. Our customers love the new website and app interface.",
      rating: 5
    },
    {
      id: 4,
      name: "Michael Chen",
      role: "Startup Founder",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      content: "As a startup with limited resources, we needed someone who could deliver high-quality design work efficiently. Rishabh exceeded our expectations and helped us launch on time.",
      rating: 5
    },
    {
      id: 5,
      name: "Emma Wilson",
      role: "E-commerce Manager",
      avatar: "https://randomuser.me/api/portraits/women/23.jpg",
      content: "The redesign of our e-commerce platform by Rishabh led to a 40% increase in conversion rates within the first month. His understanding of user psychology is remarkable.",
      rating: 5
    },
    {
      id: 6,
      name: "David Rodriguez",
      role: "UX Director",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      content: "I've worked with many designers over my career, but Rishabh stands out for his combination of creativity, technical knowledge, and collaboration skills.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={i < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"} 
        size={16} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto mt-20">
          <div className="text-center mb-12">
            <h2 className="section-title">Client Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-semibold mt-4">
              What My <span className="text-amber-400">Clients Say</span> About My Work
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              These testimonials reflect the experiences of clients I've collaborated with on various design and development projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white p-6 rounded-lg shadow-md fade-in-up"
                style={{ '--delay': testimonial.id % 3 } as React.CSSProperties}
              >
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-olive-800">{testimonial.name}</h4>
                    <p className="text-sm text-olive-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <ReadyToGetStarted />
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
