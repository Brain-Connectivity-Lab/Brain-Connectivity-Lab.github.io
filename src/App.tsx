import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LabBotModal from './components/LabBotModal';
import Home from './pages/Home';
import People from './pages/People';
import Research from './pages/Research';
import Publications from './pages/Publications';
import Resources from './pages/Resources';
import News from './pages/News';
import Contact from './pages/Contact';
import { Bot } from 'lucide-react';

function App() {
  const [isLabBotOpen, setIsLabBotOpen] = useState(false);

  return (
    <Router basename="/brain-connectivity-lab">
      <div className="min-h-screen bg-gray-950 text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people" element={<People />} />
            <Route path="/research" element={<Research />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Floating LabBot Button */}
        <button
          onClick={() => setIsLabBotOpen(true)}
          className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 group"
          aria-label="Open LabBot Assistant"
        >
          <Bot size={24} />
          <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Ask LabBot about our research!
          </span>
        </button>

        <LabBotModal isOpen={isLabBotOpen} onClose={() => setIsLabBotOpen(false)} />
      </div>
    </Router>
  );
}

export default App;