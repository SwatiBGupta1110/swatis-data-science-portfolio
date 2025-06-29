import { useEffect, useState } from 'react';

interface SkillBarProps {
  name: string;
  level: number;
  isVisible: boolean;
  color?: string;
}

const SkillBar = ({ name, level, isVisible, color = 'bg-primary' }: SkillBarProps) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedLevel(level);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, level]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 font-medium">{name}</span>
        <span className="text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className={`skill-bar ${color} h-2 rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${animatedLevel}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
