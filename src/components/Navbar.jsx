import React from 'react';
import { Droplet, Home, BookOpen, BrainCircuit } from 'lucide-react';

const Navbar = ({ currentPage, setPage }) => {
  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={() => setPage('home')}>
        <Droplet size={24} strokeWidth={1.5} color="var(--color-primary)" /> <span>Riau O&G</span>
      </div>
      <div className="nav-links">
        <div 
          className={`nav-link flex items-center gap-2 ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => setPage('home')}
        >
          <Home size={18} strokeWidth={1.5} />
          Home
        </div>
        <div 
          className={`nav-link flex items-center gap-2 ${currentPage === 'encyclopedia' ? 'active' : ''}`}
          onClick={() => setPage('encyclopedia')}
        >
          <BookOpen size={18} strokeWidth={1.5} />
          Encyclopedia
        </div>
        <div 
          className={`nav-link flex items-center gap-2 ${currentPage === 'quiz' ? 'active' : ''}`}
          onClick={() => setPage('quiz')}
        >
          <BrainCircuit size={18} strokeWidth={1.5} />
          Quiz
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
