import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { PERSONAL_INFO, STATS } from '@/lib/constants';

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center" ref={ref}>
          <div className={`transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern tech workspace with multiple monitors displaying data visualizations" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Passionate Data Scientist</h3>
            <p className="text-gray-600 text-lg mb-6">
              I'm a results-driven data scientist with a Master's degree in Data Science and 4+ years of hands-on experience 
              in machine learning, statistical analysis, and business intelligence. I specialize in transforming complex datasets 
              into actionable insights that drive business growth and innovation.
            </p>
            <p className="text-gray-600 text-lg mb-8">
              My expertise spans across various domains including predictive modeling, natural language processing, 
              computer vision, and time series analysis. I'm passionate about staying at the forefront of emerging 
              technologies and applying them to solve real-world challenges.
            </p>
            
            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">{STATS.experience}</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-500 mb-2">{STATS.projects}</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-500 mb-2">{STATS.certifications}</div>
                <div className="text-gray-600">Certifications</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-green-500 mb-2">{STATS.publications}</div>
                <div className="text-gray-600">Publications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
