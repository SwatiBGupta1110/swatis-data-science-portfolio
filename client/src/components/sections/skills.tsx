import { Code, Bolt, Users, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import SkillBar from '@/components/ui/skill-bar';
import { SKILLS } from '@/lib/constants';

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  const technicalSkills = SKILLS.filter(skill => skill.category === 'technical');
  const toolsSkills = SKILLS.filter(skill => skill.category === 'tools');
  
  const toolsAndFrameworks = [
    'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas',
    'NumPy', 'Matplotlib', 'Seaborn', 'Plotly',
    'Tableau', 'Power BI', 'AWS', 'Docker'
  ];

  const softSkills = [
    'Analytical Thinking', 'Problem Solving', 'Communication',
    'Team Collaboration', 'Project Management', 'Critical Thinking',
    'Business Acumen'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive set of technical and analytical skills honed through years of hands-on experience in data science and machine learning.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8" ref={ref}>
          {/* Technical Skills */}
          <div className={`bg-white p-8 rounded-xl shadow-lg card-hover transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-2xl text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Technical Skills</h3>
            </div>
            
            <div className="space-y-4">
              {technicalSkills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  isVisible={isVisible}
                  color="bg-primary"
                />
              ))}
            </div>
          </div>
          
          {/* Bolt & Frameworks */}
          <div className={`bg-white p-8 rounded-xl shadow-lg card-hover transition-all duration-700 delay-200 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bolt className="text-2xl text-blue-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Bolt & Frameworks</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {toolsAndFrameworks.map((tool) => (
                <span key={tool} className="px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 text-center">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className={`bg-white p-8 rounded-xl shadow-lg card-hover transition-all duration-700 delay-400 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-2xl text-purple-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Soft Skills</h3>
            </div>
            
            <div className="space-y-4">
              {softSkills.map((skill) => (
                <div key={skill} className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
