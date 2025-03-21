import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  features?: string[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="grid md:grid-cols-2 gap-6 mb-12">
      {/* Image Card */}
      <motion.a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative overflow-hidden rounded-lg cursor-pointer chalk-border block"
        whileHover={{ scale: 1.02 }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300"
          style={{ transform: isExpanded ? 'scale(1.1)' : 'scale(1)' }}
        />
        <div className="absolute inset-0 bg-blackboard/80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-chalk-white text-lg font-chalk">
            View Live Demo
          </span>
        </div>
      </motion.a>

      {/* Details Card */}
      <div className="chalk-card">
        <h3 className="text-2xl font-chalk mb-3 text-chalk-white">
          {project.title}
        </h3>
        <p className="text-chalk-white/80 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map(tech => (
            <span
              key={tech}
              className="px-3 py-1 bg-chalk-white/10 rounded-full text-sm text-chalk-white"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="chalk-button bg-chalk-blue/20 hover:bg-chalk-blue/30 text-chalk-blue"
          >
            <ExternalLink className="w-4 h-4 inline-block mr-2" />
            Live Demo
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="chalk-button"
            >
              <Github className="w-4 h-4 inline-block mr-2" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}