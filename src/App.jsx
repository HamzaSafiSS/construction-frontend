import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ServiceDetail from './components/ServiceDetail';
import ProjectDetail from './components/ProjectDetail';
import QuoteModal from './components/QuoteModal';
import './App.css';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="app-layout">
      {/* 2. Global Navigation */}
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={<HomePage onOpenQuote={() => setIsQuoteOpen(true)} />}
          />
          <Route
            path="/services/:slug"
            element={
              <ServiceDetail onOpenQuote={() => setIsQuoteOpen(true)} />
            }
          />
          <Route
            path="/projects/:id"
            element={
              <ProjectDetail onOpenQuote={() => setIsQuoteOpen(true)} />
            }
          />
        </Routes>
      </main>

      {/* Interactive Project Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </div>
  );
}
