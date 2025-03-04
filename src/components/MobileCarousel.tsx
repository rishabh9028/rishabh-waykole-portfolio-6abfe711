
import React from 'react';
import { cn } from '@/lib/utils';

interface MobileCarouselProps {
  items: React.ReactNode[];
  className?: string;
}

const MobileCarousel: React.FC<MobileCarouselProps> = ({ items, className }) => {
  return (
    <div className={cn("w-full overflow-hidden py-4", className)}>
      <div className="flex animate-slide overflow-hidden">
        {/* Double the items to create the infinite effect */}
        <div className="flex shrink-0 items-center space-x-8">
          {items.map((item, index) => (
            <div key={`item-original-${index}`} className="shrink-0">
              {item}
            </div>
          ))}
        </div>
        <div className="flex shrink-0 items-center space-x-8">
          {items.map((item, index) => (
            <div key={`item-duplicate-${index}`} className="shrink-0">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileCarousel;
