
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem = ({ question, answer, isOpen, toggleOpen }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left font-medium text-lg text-olive-800 focus:outline-none"
        onClick={toggleOpen}
      >
        <span>{question}</span>
        {isOpen ? (
          <ChevronUp className="text-amber-400" size={20} />
        ) : (
          <ChevronDown className="text-olive-600" size={20} />
        )}
      </button>
      
      {isOpen && (
        <div className="mt-2 text-olive-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "What services do you offer?",
      answer: "I specialize in various design services including UI/UX design, web application design, website design, and mobile app UI design. I work closely with clients to understand their needs and deliver custom solutions."
    },
    {
      id: 2,
      question: "Do you work with clients remotely?",
      answer: "Yes! I've successfully collaborated with clients from around the world. Through clear communication and regular updates, I ensure the design process runs smoothly regardless of location."
    },
    {
      id: 3,
      question: "What tools do you use for designing?",
      answer: "I primarily use Figma for UI/UX designs, Photoshop, and Illustrator for web design, ensuring my work meets current industry standards."
    },
    {
      id: 4,
      question: "Can you also develop the designs into a live website?",
      answer: "Yes, I can develop the designs into fully functional websites using modern web technologies like React, Next.js, and Tailwind CSS."
    },
    {
      id: 5,
      question: "How long does a typical project take?",
      answer: "The timeline varies depending on the project's complexity. A simple website design might take 1-2 weeks, while a comprehensive website design + build can take 4-8 weeks."
    },
    {
      id: 6,
      question: "What is included in your services?",
      answer: "My services typically include research, wireframing, prototyping, visual design, user testing, and responsive designs for all devices. I also provide documentation explaining my design decisions."
    },
    {
      id: 7,
      question: "How can I get started?",
      answer: "Just send me an email through the contact form, and we'll discuss your project requirements and how I can help bring your vision to life."
    },
  ];

  const [openFAQs, setOpenFAQs] = useState<number[]>([1]);

  const toggleFAQ = (id: number) => {
    setOpenFAQs(prev => 
      prev.includes(id) 
        ? prev.filter(faqId => faqId !== id) 
        : [...prev, id]
    );
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-darkblue-600 text-white" id="faq">
      <div className="text-center mb-10">
        <h2 className="section-title">FAQs</h2>
        <h3 className="text-3xl md:text-4xl font-semibold mt-4">
          Questions? <span className="text-amber-400">Look here</span>
        </h3>
      </div>
      
      <div className="max-w-3xl mx-auto bg-white rounded-lg p-6 md:p-8 text-gray-800">
        {faqs.map((faq) => (
          <FAQItem 
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            isOpen={openFAQs.includes(faq.id)}
            toggleOpen={() => toggleFAQ(faq.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
