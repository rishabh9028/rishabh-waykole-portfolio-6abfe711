
import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
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
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-gray-100" id="testimonials">
      <div className="text-center mb-12">
        <h2 className="section-title">Client Testimonials</h2>
        <h3 className="text-3xl md:text-4xl font-semibold mt-4">
          The Impact of My Work: <span className="text-amber-400">Client Testimonials</span>
        </h3>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="bg-white p-6 rounded-lg shadow-md fade-in-up"
            style={{ '--delay': testimonial.id } as React.CSSProperties}
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

      <div className="text-center mt-12">
        <Link 
          to="/testimonials" 
          className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-darkblue-800 px-6 py-3 rounded-md font-medium transition-colors"
        >
          View More Testimonials
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
};

export default Testimonials;
