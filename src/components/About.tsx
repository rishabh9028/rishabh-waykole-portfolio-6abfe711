
import StatsItem from "./StatsItem";
import { PieChart, Award, Clock } from "lucide-react";

const About = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto" id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 fade-in-left" style={{ '--delay': '1' } as React.CSSProperties}>
          <h2 className="section-title">About Me</h2>
          <h3 className="text-3xl font-semibold mt-4">I help brands reach their <span className="highlight">goals</span> through design.</h3>
          <p className="text-gray-600 mt-4">
            I'm a minimalist designer focused on creating meaningful digital experiences
            that connect with people. My work combines strategic thinking with visual design
            to deliver engaging and effective solutions.
          </p>
          <p className="text-gray-600">
            With over 8 years of experience in the design industry, I've worked with brands
            across various sectors, from startups to global corporations. My approach is
            collaborative, transparent, and focused on achieving measurable results.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-6 fade-in-right" style={{ '--delay': '2' } as React.CSSProperties}>
          <StatsItem 
            icon={<PieChart className="w-8 h-8 text-amber-400" />}
            value="98%"
            label="Client satisfaction rate"
            delay={1}
          />
          <StatsItem 
            icon={<Award className="w-8 h-8 text-amber-400" />}
            value="15+"
            label="Design awards"
            delay={2}
          />
          <StatsItem 
            icon={<Clock className="w-8 h-8 text-amber-400" />}
            value="8+"
            label="Years of experience"
            delay={3}
          />
          <StatsItem 
            value="120+"
            label="Projects completed"
            delay={4}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
