import { GraduationCap, University, Award } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { EDUCATION, CERTIFICATIONS } from '@/lib/constants';

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12" ref={ref}>
          {/* Education */}
          <div className={`transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Education</h3>
            <div className="space-y-6">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                      {edu.degree.includes('Master') ? (
                        <GraduationCap className="text-primary text-xl" size={24} />
                      ) : (
                        <University className="text-blue-500 text-xl" size={24} />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900">{edu.degree}</h4>
                      <p className={`font-semibold ${edu.degree.includes('Master') ? 'text-primary' : 'text-blue-500'}`}>
                        {edu.institution}
                      </p>
                      <p className="text-gray-500 text-sm mb-2">
                        {edu.startDate} - {edu.endDate} | GPA: {edu.gpa}
                      </p>
                      <p className="text-gray-600 text-sm">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Certifications</h3>
            <div className="grid gap-4">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="bg-gray-50 p-4 rounded-lg flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Award className="text-green-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                    <p className="text-gray-500 text-sm">{cert.issuer} • {cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
