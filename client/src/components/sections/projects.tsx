import { useState } from 'react';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import ProjectCard from '@/components/ui/project-card';
import { PROJECTS } from '@/lib/constants';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { ref, isVisible } = useScrollAnimation();

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'ml', label: 'Machine Learning' },
    { key: 'nlp', label: 'NLP' },
    { key: 'cv', label: 'Computer Vision' },
    { key: 'analytics', label: 'Analytics' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my data science projects across various domains, demonstrating practical applications of machine learning and analytics.
          </p>
        </div>
        
        {/* Project filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              variant={activeFilter === filter.key ? "default" : "secondary"}
              className="px-6 py-2 rounded-full font-medium"
            >
              {filter.label}
            </Button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-700 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            onClick={() => window.open('https://github.com/swati-sharma', '_blank')}
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
