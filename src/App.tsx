import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import MainPage from './pages/MainPage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary text-secondary">
        <Navigation />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;