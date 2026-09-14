import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Encyclopedia from './components/Encyclopedia';
import Quiz from './components/Quiz';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setPage={setCurrentPage} />;
      case 'encyclopedia':
        return <Encyclopedia />;
      case 'quiz':
        return <Quiz setPage={setCurrentPage} />;
      default:
        return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <>
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
    </>
  );
}

export default App;
