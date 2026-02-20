import { useState } from 'react';
import Navigation from './components/Navigation';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Education from './pages/Education';
import Admin from './pages/Admin';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'dashboard':
        return <Dashboard />;
      case 'reports':
        return <Reports />;
      case 'education':
        return <Education />;
      case 'admin':
        return <Admin />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <Chatbot />
    </div>
  );
}

export default App;
