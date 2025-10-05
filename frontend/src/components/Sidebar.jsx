import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  ChartBarIcon,
  FolderIcon,
  CogIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  TagIcon,
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`bg-gray-800 text-white h-screen flex flex-col transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      {/* Logo e Toggle */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h1 className={`font-bold text-xl transition-opacity ${!isOpen && 'opacity-0'}`}>
          Portal
        </h1>
        <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-700">
          {isOpen ? <ChevronDoubleLeftIcon className="h-6 w-6" /> : <ChevronDoubleRightIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-grow mt-4">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center p-4 hover:bg-gray-700 ${isActive ? 'bg-gray-900' : ''}`
              }
            >
              <ChartBarIcon className="h-6 w-6" />
              <span className={`ml-4 transition-opacity ${!isOpen && 'opacity-0'}`}>
                Dashboard
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `flex items-center p-4 hover:bg-gray-700 ${isActive ? 'bg-gray-900' : ''}`
              }
            >
              <FolderIcon className="h-6 w-6" />
              <span className={`ml-4 transition-opacity ${!isOpen && 'opacity-0'}`}>
                Projetos
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/manage/categories"
              className={({ isActive }) =>
                `flex items-center p-4 hover:bg-gray-700 ${isActive ? 'bg-gray-900' : ''}`
              }
            >
              <TagIcon className="h-6 w-6" />
              <span className={`ml-4 transition-opacity ${!isOpen && 'opacity-0'}`}>
                Categorias
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Rodapé do Menu */}
      <div className="p-4 border-t border-gray-700">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center p-4 hover:bg-gray-700 ${isActive ? 'bg-gray-900' : ''}`
          }
        >
          <CogIcon className="h-6 w-6" />
          <span className={`ml-4 transition-opacity ${!isOpen && 'opacity-0'}`}>
            Configurações
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
