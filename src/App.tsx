import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page components
import HomePage from './pages/HomePage';
import HostingPlansPage from './pages/HostingPlansPage';
import DomainsPage from './pages/DomainsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import MenuPage from './pages/MenuPage';

// Layout components
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="hosting" element={<HostingPlansPage />} />
          <Route path="domains" element={<DomainsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="menu" element={<MenuPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;