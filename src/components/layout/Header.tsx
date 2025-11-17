import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, LogOut } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';

export const Header: React.FC = () => {
  const { user, logout } = useApp();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="text-3xl">💜</div>
          <h1 className="text-2xl font-bold text-primary">EndoVitta</h1>
        </Link>

        {user && (
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-text font-semibold">
              Olá, {user.name}!
            </span>
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <Menu size={24} />
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/symptom-log"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    Registrar Sintomas
                  </Link>
                  <Link
                    to="/history"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    Histórico
                  </Link>
                  <Link
                    to="/education"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    Educação
                  </Link>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    Perfil
                  </Link>
                  <hr className="my-2" />
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-red-50 text-alert transition flex items-center gap-2"
                  >
                    <LogOut size={18} />
                    Sair
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
