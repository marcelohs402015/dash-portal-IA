import React, { useState, useEffect } from 'react';
import Column from './Column';
import ProjectModal from './ProjectModal'; // Import the modal
import { getProjects } from '../api/projects';

// The structure that defines our columns
const initialColumns = [
  { id: 'column-1', title: 'Caixa de Entrada' },
  { id: 'column-2', title: 'Cotação em Preparo' },
  { id: 'column-3', title: 'Aguardando Cliente' },
  { id: 'column-4', title: 'Aprovado (Agendar!)' },
  { id: 'column-5', title: 'Finalizado' },
];

const Dashboard = () => {
  const [projectsByStatus, setProjectsByStatus] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const fetchAndGroupProjects = async () => {
    // ... (existing code)
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
      <div className="flex space-x-6 overflow-x-auto p-6">
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

export default Dashboard;


