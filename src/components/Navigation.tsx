import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, FolderKanban, FileText } from 'lucide-react';

export default function Navigation() {
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/projects', icon: FolderKanban, label: 'Projects' },
    { path: '/resume', icon: FileText, label: 'Resume' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-sm border-b border-accent-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink 
            to="/" 
            className="text-xl font-heading font-bold text-secondary hover:text-accent-gold transition-colors"
          >
            <Home className="w-6 h-6" />
          </NavLink>
          
          <div className="flex items-center space-x-8">
            {navItems.map(({ path, icon: Icon, label }) => (
              <NavLink 
                key={path}
                to={path}
                className={({ isActive }) => `
                  flex items-center space-x-2 text-sm font-medium
                  ${isActive ? 'text-accent-blue' : 'text-secondary'}
                  hover:text-accent-blue transition-colors
                `}
              >
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline">{label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}