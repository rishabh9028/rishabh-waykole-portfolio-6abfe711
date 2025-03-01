
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form submission logic would go here
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-gray-50" id="contact">
      <h2 className="section-title mb-2 text-center">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 fade-in-left" style={{ '--delay': '1' } as React.CSSProperties}>
          <h3 className="text-3xl font-semibold">
            Let's Talk for <span className="text-amber-400">Your Next Projects</span>
          </h3>
          <p className="text-gray-600 mb-8">
            Have a project in mind? Let's discuss how I can help bring your vision to life. Fill out the form, and I'll get back to you as soon as possible.
          </p>
          
          <div className="mt-8">
            <h4 className="text-xl font-semibold mb-4">Where to find me</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#45533C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="#45533C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h5 className="font-medium text-olive-800">Location</h5>
                  <p className="text-olive-600">San Francisco, CA</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#45533C"/>
                  </svg>
                </div>
                <div>
                  <h5 className="font-medium text-olive-800">Email</h5>
                  <p className="text-olive-600">hello@rishabhwaykole.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19.92C22 20.4704 21.7893 20.9996 21.4142 21.3747C21.0391 21.7498 20.5099 21.9605 19.96 21.96C17.4223 21.7383 14.9857 20.8907 12.86 19.5C10.8961 18.2025 9.2375 16.5439 7.94 14.58C6.54 12.4404 5.69153 9.99047 5.48 7.44C5.47956 6.89202 5.68942 6.36379 6.06373 5.98905C6.43803 5.61432 6.96573 5.40309 7.514 5.4H10.514C11.518 5.38751 12.374 6.12081 12.514 7.11C12.6228 8.05369 12.8742 8.97671 13.26 9.85C13.5088 10.3843 13.3839 11.0184 12.954 11.45L11.954 12.45C13.1574 14.4958 14.8963 16.2351 16.942 17.44L17.942 16.44C18.3736 16.0101 19.0077 15.8852 19.542 16.134C20.4153 16.5198 21.3383 16.7712 22.282 16.88C23.2851 17.0213 24.0168 17.896 24 18.91L22 16.92Z" stroke="#45533C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h5 className="font-medium text-olive-800">Phone</h5>
                  <p className="text-olive-600">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md fade-in-right" style={{ '--delay': '2' } as React.CSSProperties}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-olive-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-olive-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-olive-700 mb-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-olive-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-olive-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full py-3 bg-olive-600 text-white font-medium rounded-md hover:bg-olive-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-olive-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
