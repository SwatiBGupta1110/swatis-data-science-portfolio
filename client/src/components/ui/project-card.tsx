import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
      <img 
        src={`${project.image}?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400`}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <Button variant="link" className="text-primary font-medium hover:underline p-0">
            View Details
          </Button>
          <div className="flex gap-2">
            {project.githubUrl && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(project.githubUrl, '_blank')}
              >
                <Github size={18} />
              </Button>
            )}
            {project.liveUrl && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(project.liveUrl, '_blank')}
              >
                <ExternalLink size={18} />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
