
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  delay: number;
  slug: string;
}

const ServiceCard = ({ title, description, icon, delay, slug }: ServiceCardProps) => {
  // Clone the icon element and add the amber color classes
  const coloredIcon = React.cloneElement(icon, {
    className: 'text-amber-400'
  });

  return (
    <div 
      className="service-card fade-in-up" 
      style={{ '--delay': delay } as React.CSSProperties}
    >
      <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-5">
        {coloredIcon}
      </div>
      <h3 className="text-xl font-medium mb-3 text-darkblue-800">{title}</h3>
      <p className="text-darkblue-600 mb-4">{description}</p>
      <Link 
        to={`/services/${slug}`} 
        className="inline-flex items-center text-darkblue-600 font-medium hover:text-darkblue-700 transition-colors group"
      >
        <span>Learn more</span>
        <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
