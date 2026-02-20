import { BarChart3, BookOpen, FileText, Home, Menu, Settings, X } from 'lucide-react';
import { useState } from 'react';
import logo from "../assets/logo.png";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Beranda', icon: Home },
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'reports', label: 'Laporan', icon: FileText },
    { id: 'education', label: 'Edukasi', icon: BookOpen },
    { id: 'admin', label: 'Admin Panel', icon: Settings },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10  rounded-lg flex items-center justify-center shadow-lg">
              <img src={logo} alt="SIAPSIAGA" className="h-10 w-auto" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">SiapSiaga</h1>
              <p className="text-xs text-blue-200">Disaster Preparedness System</p>
            </div>
          </div>

          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    currentPage === item.id
                      ? 'bg-white text-blue-700 shadow-lg'
                      : 'hover:bg-blue-700 text-blue-100'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-blue-700"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-700 border-t border-blue-600">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                    currentPage === item.id
                      ? 'bg-white text-blue-700 shadow-lg'
                      : 'text-blue-100 hover:bg-blue-600'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
