import React from 'react';

const ProjectCard = ({ project, onCardClick }) => {
  return (
    <div
      onClick={() => onCardClick(project)}
      className="bg-white rounded-lg shadow-sm p-4 mb-4 border border-gray-200 hover:shadow-md hover:border-blue-500 transition-all duration-200 cursor-pointer"
    >
      <h3 className="font-bold text-gray-900 truncate">{project.project_title}</h3>
      <p className="text-sm text-gray-600">{project.client_name}</p>
      <p className="text-xs text-gray-400 mt-3">
        Recebido em: {new Date(project.created_at).toLocaleDateString()}
      </p>
    </div>
  );
};

export default ProjectCard;


