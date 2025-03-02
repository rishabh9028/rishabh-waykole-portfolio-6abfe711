
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

const ContactPage = () => {
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
  
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919175170415', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 pb-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-darkblue-800 mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a collaboration? I'd love to hear from you!
          </p>
        </div>

        {/* Changed from md:grid-cols-4 to md:grid-cols-2 for a 2x2 layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-4">
              <Mail className="text-amber-400 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-darkblue-800 mb-2">Email</h3>
            <p className="text-gray-600">rishabhwaykole2806@gmail.com</p>
            <a href="mailto:rishabhwaykole2806@gmail.com" className="text-amber-400 mt-2 hover:underline">
              Send an email
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-4">
              <Phone className="text-amber-400 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-darkblue-800 mb-2">Phone</h3>
            <p className="text-gray-600">+91 9175170415</p>
            <a href="tel:+919175170415" className="text-amber-400 mt-2 hover:underline">
              Call me
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-4">
              <MapPin className="text-amber-400 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-darkblue-800 mb-2">Location</h3>
            <p className="text-gray-600">Bengaluru, India</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-4">
              <MessageCircle className="text-amber-400 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-darkblue-800 mb-2">WhatsApp</h3>
            <p className="text-gray-600">+91 9175170415</p>
            <button 
              onClick={handleWhatsAppClick}
              className="text-amber-400 mt-2 hover:underline flex items-center justify-center"
            >
              Chat on WhatsApp
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-darkblue-600 text-white p-8 lg:p-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">Let's Talk About Your Project</h2>
              <p className="mb-6 text-gray-200">
                Fill out the form and I'll get back to you as soon as possible. I'm here to help with any questions you might have.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-center">
                  <Mail className="mr-3 h-5 w-5 text-amber-400" />
                  <span>rishabhwaykole2806@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-3 h-5 w-5 text-amber-400" />
                  <span>+91 9175170415</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="mr-3 h-5 w-5 text-amber-400" />
                  <button 
                    onClick={handleWhatsAppClick}
                    className="text-white hover:text-amber-400 transition-colors"
                  >
                    Chat on WhatsApp
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-darkblue-700 mb-1">Your Name <span className="text-red-500">*</span></label>
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
                    <label htmlFor="email" className="block text-sm font-medium text-darkblue-700 mb-1">Your Email <span className="text-red-500">*</span></label>
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
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-darkblue-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
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
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-darkblue-700 mb-1">Your Message <span className="text-red-500">*</span></label>
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
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-amber-400 text-darkblue-800 font-medium rounded-md hover:bg-amber-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 disabled:opacity-75"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
