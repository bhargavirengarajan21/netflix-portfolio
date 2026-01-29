import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DataProvider } from './Context';
import Dashboard from './pages/browse';
import Home from './pages/home';
import Login from './pages/login';
import Resume from './pages/resume';

const App = () => {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </DataProvider>
  );
};

export default App;
