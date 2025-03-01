
interface StatsItemProps {
  value: string;
  label: string;
  delay: number;
}

const StatsItem = ({ value, label, delay }: StatsItemProps) => {
  return (
    <div 
      className="fade-in-up" 
      style={{ '--delay': delay } as React.CSSProperties}
    >
      <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-1">{value}</div>
      <div className="text-sm text-olive-600">{label}</div>
    </div>
  );
};

export default StatsItem;
