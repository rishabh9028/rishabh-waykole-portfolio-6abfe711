
import StatsItem from "./StatsItem";
import { PieChart } from "lucide-react";

const About = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto" id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 fade-in-left" style={{ '--delay': '1' } as React.CSSProperties}>
          <h2 className="section-title">About Me</h2>
          <h3 className="text-3xl font-semibold mt-4">I help brands reach their <span className="highlight">goals</span> through design.</h3>
          <p className="text-gray-600 mt-4">
            I'm a minimalist designer focused on creating meaningful digital experiences that connect with people. By blending strategic thinking with strong visual design, I aim to craft engaging and effective solutions.
          </p>
          <p className="text-gray-600">
            With a collaborative approach, I work closely with clients to deliver designs that are not only visually compelling but also drive measurable results. My goal is to ensure every project reflects both creativity and purpose, making a lasting impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 fade-in-right" style={{ '--delay': '2' } as React.CSSProperties}>
          <StatsItem 
            icon={<PieChart className="w-8 h-8 text-amber-400" />}
            value="98%"
            label="Client satisfaction rate"
            delay={1}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
