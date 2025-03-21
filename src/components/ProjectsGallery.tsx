import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: '1',
    title: 'Personal Portfolio Website',
    description: 'Personal website using HTML, CSS, and JavaScript to showcase projects, blog and skills.',
    image: './Portfolio.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://saisrujan.netlify.app',
    githubUrl: 'https://github.com/yourusername/portfolio'
  },
  {
    id: '2',
    title: 'Task Manager System',
    description: 'Minimalist task management application with AI-powered task suggestions and interactive dashboard.',
    image: './TaskManager.png',
    technologies: ['Vite', 'TypeScript', 'React', 'Tailwind CSS', 'OpenAI API', 'Supabase', 'Vercel'],
    liveUrl: 'https://taskmanager-ai.netlify.app',
    githubUrl: 'https://github.com/yourusername/task-manager',
    features: [
      'AI-powered task suggestions using OpenAI API',
      'Modular frontend with backend integration',
      'Interactive dashboard',
      'Real-time database updates'
    ]
  },
  {
    id: '3',
    title: 'Chat Application',
    description: 'Real-time chat application with user authentication and online status tracking.',
    image: './VibeChat.png',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io', 'TailwindCSS', 'Daisy UI', 'Zustand', 'JWT'],
    liveUrl: 'https://mychat-x58s.onrender.com/login',
    githubUrl: 'https://github.com/yourusername/chat-app',
    features: [
      'Authentication & Authorization with JWT',
      'Real-time messaging with Socket.io',
      'Online user status indicators',
      'Global state management with Zustand'
    ]
  }
];

export default function ProjectsGallery() {
  return (
    <section className="py-20 bg-blackboard dark:bg-cream">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-center text-cream dark:text-blackboard">
          Projects
        </h2>
        <div className="max-w-6xl mx-auto">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}