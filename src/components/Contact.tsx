
import { useState } from 'react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Prepare mailto URL with form data
    const mailtoUrl = `mailto:rishabhwaykole2806@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.countryCode} ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open email client
    window.location.href = mailtoUrl;
    
    // Show success message
    toast.success('Form submitted successfully!');
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      countryCode: '+91',
      phone: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  // Common country codes
  const countryCodes = [
    { code: '+1', name: 'United States/Canada (+1)' },
    { code: '+44', name: 'United Kingdom (+44)' },
    { code: '+91', name: 'India (+91)' },
    { code: '+61', name: 'Australia (+61)' },
    { code: '+49', name: 'Germany (+49)' },
    { code: '+33', name: 'France (+33)' },
    { code: '+86', name: 'China (+86)' },
    { code: '+81', name: 'Japan (+81)' },
    { code: '+7', name: 'Russia (+7)' },
    { code: '+971', name: 'UAE (+971)' },
    { code: '+65', name: 'Singapore (+65)' },
    { code: '+27', name: 'South Africa (+27)' },
  ];

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
                    <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#45533C"/>
                  </svg>
                </div>
                <div>
                  <h5 className="font-medium text-darkblue-800">Email</h5>
                  <p className="text-darkblue-600">rishabhwaykole2806@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19.92C22 20.4704 21.7893 20.9996 21.4142 21.3747C21.0391 21.7498 20.5099 21.9605 19.96 21.96C17.4223 21.7383 14.9857 20.8907 12.86 19.5C10.8961 18.2025 9.2375 16.5439 7.94 14.58C6.54 12.4404 5.69153 9.99047 5.48 7.44C5.47956 6.89202 5.68942 6.36379 6.06373 5.98905C6.43803 5.61432 6.96573 5.40309 7.514 5.4H10.514C11.518 5.38751 12.374 6.12081 12.514 7.11C12.6228 8.05369 12.8742 8.97671 13.26 9.85C13.5088 10.3843 13.3839 11.0184 12.954 11.45L11.954 12.45C13.1574 14.4958 14.8963 16.2351 16.942 17.44L17.942 16.44C18.3736 16.0101 19.0077 15.8852 19.542 16.134C20.4153 16.5198 21.3383 16.7712 22.282 16.88C23.2851 17.0213 24.0168 17.896 24 18.91L22 16.92Z" stroke="#45533C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h5 className="font-medium text-darkblue-800">Phone</h5>
                  <p className="text-darkblue-600">+91 9175170415</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md fade-in-right" style={{ '--delay': '2' } as React.CSSProperties}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-darkblue-700 mb-1">Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400`}
                  required
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-darkblue-700 mb-1">Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400`}
                  required
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-darkblue-700 mb-1">Phone <span className="text-red-500">*</span></label>
                <div className="flex">
                  <select
                    id="countryCode"
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="w-24 sm:w-32 px-2 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                    required
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`flex-1 px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} border-l-0 rounded-r-md focus:outline-none focus:ring-2 focus:ring-amber-400`}
                    required
                  />
                </div>
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-darkblue-700 mb-1">Subject <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400`}
                  required
                />
                {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-darkblue-700 mb-1">Message <span className="text-red-500">*</span></label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none`}
                required
              ></textarea>
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-darkblue-600 text-white font-medium rounded-md hover:bg-darkblue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkblue-500 disabled:opacity-75"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
