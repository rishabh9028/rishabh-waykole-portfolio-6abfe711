
import React from 'react';

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
        
        <div className="fade-in-right" style={{ '--delay': '2' } as React.CSSProperties}>
          <img 
            src="/lovable-uploads/11d75261-d3bb-4084-8601-3873d9133813.png" 
            alt="Web design showcase with multiple website layouts on a desktop screen" 
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
