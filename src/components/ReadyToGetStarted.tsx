
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ReadyToGetStarted = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-amber-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-darkblue-800 mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Let's bring your vision to life. Reach out today to discuss your project
          and how we can work together to achieve your goals.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-amber-400 text-darkblue-800 font-medium rounded-full hover:bg-amber-500 transition-colors group"
        >
          <span>Contact Me</span>
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

export default ReadyToGetStarted;
