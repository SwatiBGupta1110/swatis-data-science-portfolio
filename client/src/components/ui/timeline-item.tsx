import { Badge } from '@/components/ui/badge';
import type { Experience } from '@/lib/types';

interface TimelineItemProps {
  experience: Experience;
  isLeft: boolean;
}

const TimelineItem = ({ experience, isLeft }: TimelineItemProps) => {
  return (
    <div className="relative flex items-center">
      {isLeft ? (
        <>
          <div className="flex-1 pr-8 text-right">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-sm text-gray-500 mb-2">
                {experience.startDate} - {experience.endDate}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{experience.title}</h3>
              <h4 className="text-lg text-primary font-semibold mb-3">{experience.company}</h4>
              <p className="text-gray-600 mb-4">{experience.description}</p>
              <div className="flex flex-wrap gap-2 justify-end">
                {experience.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white"></div>
          
          <div className="flex-1 pl-8"></div>
        </>
      ) : (
        <>
          <div className="flex-1 pr-8"></div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
          
          <div className="flex-1 pl-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-sm text-gray-500 mb-2">
                {experience.startDate} - {experience.endDate}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{experience.title}</h3>
              <h4 className="text-lg text-blue-500 font-semibold mb-3">{experience.company}</h4>
              <p className="text-gray-600 mb-4">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TimelineItem;
