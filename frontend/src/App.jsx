import React from 'react';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Esteira de Projetos
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-full mx-auto py-6 sm:px-6 lg:px-8">
          <Dashboard />
        </div>
      </main>
    </div>
  );
}

export default App;

