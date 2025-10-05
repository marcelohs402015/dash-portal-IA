import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const getProjects = () => {
  return apiClient.get('/projects');
};

// We will add more functions here later (updateProject, etc.)
