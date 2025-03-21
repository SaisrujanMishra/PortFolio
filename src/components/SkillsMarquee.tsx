import React, { useEffect, useRef, useState } from 'react';
import * as SimpleIcons from 'simple-icons';

interface Skill {
  name: string;
  icon: string;
  color: string;
  category: 'frontend' | 'backend' | 'database' | 'language' | 'tool' | 'cloud';
}

interface SkillsMarqueeProps {
  selectedCategories?: string[];
}

const skills: Skill[] = [
  { name: 'Express', icon: 'siExpress', color: '#000000', category: 'backend' },
  { name: 'Node.js', icon: 'siNodedotjs', color: '#339933', category: 'backend' },
  
  { name: 'React', icon: 'siReact', color: '#61DAFB', category: 'frontend' },  
  { name: 'HTML', icon: 'siHtml5', color: '#E34F26', category: 'frontend' },
  { name: 'CSS', icon: 'siCss3', color: '#1572B6', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'siTailwindcss', color: '#06B6D4', category: 'frontend' },
  
  { name: 'Git', icon: 'siGit', color: '#F05032', category: 'tool' },
  { name: 'GitHub', icon: 'siGithub', color: '#181717', category: 'tool' },
 

  { name: 'C++', icon: 'siCplusplus', color: '#00599C', category: 'language' },
  { name: 'JavaScript', icon: 'siJavascript', color: '#F7DF1E', category: 'language' },
  { name: 'TypeScript', icon: 'siTypescript', color: '#3178C6', category: 'language' },
  { name: 'Go', icon: 'siGo', color: '#00ADD8', category: 'language' },
  { name: 'Solidity', icon: 'siSolidity', color: '#363636', category: 'language' },

  { name: 'MySQL', icon: 'siMysql', color: '#4479A1', category: 'database' },
  { name: 'MongoDB', icon: 'siMongodb', color: '#47A248', category: 'database' },
  { name: 'PostgreSQL', icon: 'siPostgresql', color: '#4169E1', category: 'database' },

  { name: 'AWS', icon: 'siAmazonaws', color: '#232F3E', category: 'cloud' },
  { name: 'Azure', icon: 'siMicrosoftazure', color: '#0078D4', category: 'cloud' }
];

const SCROLL_SPEED = 30; // pixels per second
const DUPLICATE_COUNT = 2; // number of times to duplicate the list for smooth scrolling

export default function SkillsMarquee({ selectedCategories = [] }: SkillsMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const filteredSkills = selectedCategories.length > 0
    ? skills.filter(skill => selectedCategories.includes(skill.category))
    : skills;

  useEffect(() => {
    if (!containerRef.current || isPaused) return;

    let animationFrameId: number;
    let lastTimestamp: number;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      setScrollPosition(prev => {
        const newPosition = prev + (SCROLL_SPEED * delta) / 1000;
        if (containerRef.current) {
          const containerWidth = containerRef.current.scrollWidth / DUPLICATE_COUNT;
          return newPosition >= containerWidth ? 0 : newPosition;
        }
        return prev;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const getCategoryColor = (category: Skill['category']) => {
    switch (category) {
      case 'frontend': return 'from-accent-blue/20 to-accent-blue/10';
      case 'backend': return 'from-accent-red/20 to-accent-red/10';
      case 'database': return 'from-accent-gold/20 to-accent-gold/10';
      case 'language': return 'from-accent-bronze/20 to-accent-bronze/10';
      case 'tool': return 'from-secondary/20 to-secondary/10';
      case 'cloud': return 'from-accent-blue/20 to-accent-red/10';
      default: return 'from-secondary/20 to-secondary/10';
    }
  };

  const renderSkillIcon = (skill: Skill) => {
    const iconKey = skill.icon.replace('si', '').toLowerCase();
    const IconComponent = (SimpleIcons as any)[skill.icon];
    if (!IconComponent) return null;

    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        className="w-8 h-8"
        fill={`#${IconComponent.hex}`}
      >
        <path d={IconComponent.path} />
      </svg>
    );
  };

  const duplicatedSkills = Array(DUPLICATE_COUNT).fill(filteredSkills).flat();

  return (
    <div className="py-12 overflow-hidden accent-border border-x-0">
      <div
        className="relative w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={containerRef}
          className="flex gap-8 whitespace-nowrap"
          style={{
            transform: `translateX(-${scrollPosition}px)`,
            transition: isPaused ? 'transform 0.1s' : 'none'
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className={`
                flex flex-col items-center justify-center p-4 rounded-xl
                bg-gradient-to-br ${getCategoryColor(skill.category)}
                hover:scale-110 transition-transform duration-300
                backdrop-blur-sm accent-border
              `}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-primary/50 rounded-lg p-2 mb-2 accent-border">
                {renderSkillIcon(skill)}
              </div>
              <span className="text-sm font-medium text-secondary">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}