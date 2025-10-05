import React from 'react';
import ProjectCard from './ProjectCard';

const Column = ({ column, projects, onCardClick }) => {
  return (
    <div className="bg-gray-50 rounded-xl p-4 flex-shrink-0 w-80 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-800">{column.title}</h2>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
          {projects.length}
        </span>
      </div>
      <div className="min-h-[600px] space-y-4 overflow-y-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onCardClick={onCardClick} />
        ))}
      </div>
    </div>
  );
};

export default Column;


