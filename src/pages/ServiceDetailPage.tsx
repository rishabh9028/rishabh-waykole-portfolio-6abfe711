
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const serviceData = {
  'ui-ux-design': {
    title: 'UI/UX Design Services',
    description: 'Creating intuitive and engaging user experiences that delight and convert',
    introduction: 'I help businesses transform their digital presence with thoughtful, research-driven UI/UX design. By focusing on user needs and behaviors, I create interfaces that are not only visually appealing but also functional and intuitive.',
    benefits: [
      'Improved user engagement and satisfaction',
      'Reduced bounce rates and increased conversions',
      'Consistent brand experience across all touchpoints',
      'Accessible designs that reach wider audiences',
      'Data-driven design decisions based on user testing'
    ],
    process: [
      { 
        title: 'User Research & Analysis', 
        description: 'I begin by understanding your users through interviews, surveys, and competitive analysis to identify pain points and opportunities.'
      },
      { 
        title: 'Information Architecture', 
        description: 'Creating logical site structures and user flows that make navigation intuitive and help users achieve their goals efficiently.'
      },
      { 
        title: 'Wireframing & Prototyping', 
        description: 'Developing low and high-fidelity prototypes to visualize interfaces and gather feedback before moving to final design.'
      },
      { 
        title: 'UI Design', 
        description: 'Crafting visually appealing interfaces with attention to typography, color theory, and visual hierarchy that align with your brand.'
      },
      { 
        title: 'Usability Testing', 
        description: 'Conducting tests with real users to validate designs and identify opportunities for improvement.'
      }
    ],
    color: 'bg-purple-100',
    textColor: 'text-purple-800',
    accentColor: 'bg-purple-500'
  },
  'application-design': {
    title: 'Application Design Services',
    description: 'Building custom application interfaces that balance form and function',
    introduction: 'I design application interfaces that look great and work even better. My application design services focus on creating interfaces that are not only visually appealing but also ensure excellent usability across all platforms and devices.',
    benefits: [
      'Intuitive interfaces that reduce learning curve',
      'Consistent design system for scalable growth',
      'Optimized for performance and responsiveness',
      'Cross-platform compatibility',
      'Accessible to users with disabilities'
    ],
    process: [
      { 
        title: 'Requirements Analysis', 
        description: 'Identifying key features, user types, and technical constraints to establish a solid foundation for design.'
      },
      { 
        title: 'UX Planning', 
        description: 'Creating user flows, wireframes, and information architecture to ensure logical and efficient navigation.'
      },
      { 
        title: 'UI Design System', 
        description: 'Developing a comprehensive design system with components, styles, and patterns for consistent implementation.'
      },
      { 
        title: 'Interactive Prototyping', 
        description: 'Building functional prototypes to test interaction patterns and gather feedback from stakeholders.'
      },
      { 
        title: 'Design-to-Development Handoff', 
        description: 'Providing detailed specifications and assets to ensure accurate implementation of designs.'
      }
    ],
    color: 'bg-blue-100',
    textColor: 'text-blue-800',
    accentColor: 'bg-blue-500'
  },
  'website-design': {
    title: 'Website Design Services',
    description: 'Creating responsive websites that elevate your brand and engage your audience',
    introduction: 'I design websites that not only look beautiful but also convert visitors into customers. My website design services focus on responsive layouts, engaging visuals, and strategic content placement to create an effective online presence for your business.',
    benefits: [
      'Mobile-responsive designs that work on all devices',
      'SEO-friendly architecture for better visibility',
      'Fast-loading pages that retain visitors',
      'Conversion-focused layouts that drive action',
      'Content management systems that are easy to update'
    ],
    process: [
      { 
        title: 'Discovery & Strategy', 
        description: 'Understanding your business goals, target audience, and competitive landscape to develop a strategic approach.'
      },
      { 
        title: 'Sitemap & Wireframing', 
        description: 'Planning the website structure and creating wireframes to establish content hierarchy and user flows.'
      },
      { 
        title: 'Visual Design', 
        description: 'Developing the visual identity, including typography, color schemes, and imagery that align with your brand.'
      },
      { 
        title: 'Responsive Development', 
        description: 'Building websites that adapt seamlessly to all screen sizes, from mobile phones to desktop monitors.'
      },
      { 
        title: 'Testing & Launch', 
        description: 'Comprehensive testing across browsers and devices, followed by a smooth launch process.'
      }
    ],
    color: 'bg-green-100',
    textColor: 'text-green-800',
    accentColor: 'bg-green-500'
  },
  'web-app-design': {
    title: 'Web App Design Services',
    description: 'Designing powerful web applications that scale with your business',
    introduction: 'I specialize in designing complex web applications that combine powerful functionality with intuitive user experiences. My approach focuses on creating scalable design systems that support growth while maintaining usability and performance.',
    benefits: [
      'Intuitive interfaces for complex functionality',
      'Performance-optimized design for fast loading',
      'Scalable systems that grow with your business',
      'Reduced development time with component-based design',
      'Consistent user experience across all features'
    ],
    process: [
      { 
        title: 'Functional Requirements', 
        description: 'Defining the core functionality, user roles, and system requirements that will guide the design process.'
      },
      { 
        title: 'UX Architecture', 
        description: 'Developing user flows, interaction patterns, and information architecture for complex application features.'
      },
      { 
        title: 'Component Design', 
        description: 'Creating reusable UI components that ensure consistency and facilitate easier implementation and updates.'
      },
      { 
        title: 'State Management', 
        description: 'Designing for different application states, including loading, error, empty, and success states for a complete user experience.'
      },
      { 
        title: 'Design System Documentation', 
        description: 'Providing comprehensive documentation of all components, patterns, and guidelines for development teams.'
      }
    ],
    color: 'bg-amber-100',
    textColor: 'text-amber-800',
    accentColor: 'bg-amber-500'
  }
};

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Get service data based on slug
  const service = serviceData[slug as keyof typeof serviceData];
  
  // Handle if service doesn't exist
  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 text-center">
            <h1 className="text-4xl font-bold mb-6">Service Not Found</h1>
            <p className="mb-8">The service you're looking for doesn't exist.</p>
            <button 
              onClick={() => navigate('/services')}
              className="inline-flex items-center px-6 py-3 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Services
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className={`${service.color} py-16 md:py-24`}>
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <button 
                onClick={() => navigate('/services')}
                className={`inline-flex items-center mb-8 ${service.textColor} hover:underline`}
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to Services
              </button>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">{service.title}</h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8">{service.description}</p>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <button className="px-6 py-3 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors">
                  Get a Quote
                </button>
                <button className="px-6 py-3 border border-gray-400 rounded-md hover:bg-white hover:border-gray-500 transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold mb-6">Overview</h2>
              <p className="text-lg text-gray-700 mb-8">{service.introduction}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div>
                  <h3 className="text-xl font-medium mb-4">What's Included</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle size={20} className="text-amber-500 mt-1 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${service.color} p-6 rounded-lg`}>
                  <h3 className="text-xl font-medium mb-4">Why Choose This Service</h3>
                  <p className="text-gray-700">
                    My approach combines strategic thinking with creative execution to deliver designs that not only look great but also achieve your business objectives. I work collaboratively with clients throughout the process to ensure your vision comes to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Process */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold mb-12 text-center">My Process</h2>
              
              <div className="space-y-8">
                {service.process.map((step, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-16 flex-shrink-0">
                      <div className={`w-12 h-12 ${service.accentColor} rounded-full flex items-center justify-center text-white font-bold`}>
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-grow bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-amber-500 text-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold mb-6">Ready to Get Started?</h2>
              <p className="text-lg mb-8">Let's discuss how I can help bring your vision to life with expert design services.</p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="px-8 py-3 bg-white text-amber-500 font-medium rounded-md hover:bg-gray-100 transition-colors">
                  Contact Me
                </button>
                <button className="px-8 py-3 border border-white rounded-md hover:bg-amber-600 transition-colors">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
