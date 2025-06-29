import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import TimelineItem from '@/components/ui/timeline-item';
import { EXPERIENCE } from '@/lib/constants';

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey through various roles in data science and analytics.
          </p>
        </div>
        
        <div className="relative" ref={ref}>
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {EXPERIENCE.map((experience, index) => (
              <div
                key={experience.id}
                className={`transition-all duration-700 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <TimelineItem
                  experience={experience}
                  isLeft={index % 2 === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
