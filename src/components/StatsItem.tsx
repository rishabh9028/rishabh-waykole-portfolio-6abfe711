
import React from 'react';

interface StatsItemProps {
  value: string;
  label: string;
  delay: number;
  icon?: React.ReactNode;
}

const StatsItem = ({ value, label, delay, icon }: StatsItemProps) => {
  return (
    <div 
      className="fade-in-up bg-white p-6 rounded-lg shadow-sm" 
      style={{ '--delay': delay } as React.CSSProperties}
    >
      {icon && <div className="mb-3">{icon}</div>}
      <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-1">{value}</div>
      <div className="text-sm text-olive-600">{label}</div>
    </div>
  );
};

export default StatsItem;
