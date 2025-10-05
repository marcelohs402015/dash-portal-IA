import React, { useState, useEffect } from 'react';
import Column from '../components/Column';
import ProjectModal from '../components/ProjectModal';
import { getProjects } from '../api/projects';

// The structure that defines our columns
const initialColumns = [
  { id: 'column-1', title: 'Caixa de Entrada' },
  { id: 'column-2', title: 'Cotação em Preparo' },
  { id: 'column-3', title: 'Aguardando Cliente' },
  { id: 'column-4', title: 'Aprovado (Agendar!)' },
  { id: 'column-5', title: 'Finalizado' },
];

const ProjectsPage = () => {
  const [projectsByStatus, setProjectsByStatus] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const fetchAndGroupProjects = async () => {
    try {
      const response = await getProjects();
      const grouped = response.data.reduce((acc, project) => {
        const { status } = project;
        if (!acc[status]) {
          acc[status] = [];
        }
        acc[status].push(project);
        return acc;
      }, {});
      setProjectsByStatus(grouped);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAndGroupProjects(); // Fetch immediately on component mount

    const intervalId = setInterval(() => {
      fetchAndGroupProjects(); // And then fetch every 15 seconds
    }, 15000); // 15000 ms = 15 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  if (isLoading) {
    return <div className="text-center p-10">Carregando projetos...</div>;
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Fluxo de Projetos (Kanban)</h1>
      <div className="flex space-x-6 overflow-x-auto">
        {initialColumns.map(column => {
          const columnProjects = projectsByStatus[column.title] || [];
          return (
            <Column
              key={column.id}
              column={column}
              projects={columnProjects}
              onCardClick={handleOpenModal}
            />
          );
        })}
      </div>
      <ProjectModal
        isOpen={isModalOpen}
        closeModal={handleCloseModal}
        project={selectedProject}
      />
    </>
  );
};

export default ProjectsPage;
