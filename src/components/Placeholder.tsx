
import React from 'react';

interface PlaceholderProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

const Placeholder: React.FC<PlaceholderProps> = ({ 
  className,
  width = "100%",
  height = "100%"
}) => {
  return (
    <img 
      src="/r-logo.png" 
      alt="Rishabh Waykole"
      className={className}
      style={{ 
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        objectFit: 'contain'
      }}
    />
  );
};

export default Placeholder;
