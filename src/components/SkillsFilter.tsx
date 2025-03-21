import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Database' },
  { id: 'language', label: 'Languages' },
  { id: 'tool', label: 'Tools' },
  { id: 'cloud', label: 'Cloud' }
];

interface SkillsFilterProps {
  selectedFilters: string[];
  onFilterChange: (filters: string[]) => void;
}

export default function SkillsFilter({ selectedFilters, onFilterChange }: SkillsFilterProps) {
  const toggleFilter = (categoryId: string) => {
    if (selectedFilters.includes(categoryId)) {
      onFilterChange(selectedFilters.filter(id => id !== categoryId));
    } else {
      onFilterChange([...selectedFilters, categoryId]);
    }
  };

  return (
    <div className="mb-8">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => toggleFilter(category.id)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              selectedFilters.includes(category.id)
                ? 'bg-accent-blue text-primary'
                : 'bg-primary-light text-secondary hover:bg-primary-light/80'
            } accent-border`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
}