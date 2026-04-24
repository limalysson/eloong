import React from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Heart, User, LayoutDashboard, LogOut, Menu } from 'lucide-react';
import logo from '../../assets/logo.png';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isVolunteer = location.pathname.startsWith('/voluntario');
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-brand-primary-base/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <img src={logo} alt="Eloong" className="h-10 w-auto group-hover:scale-105 transition-transform" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {isVolunteer && (
                <>
                  <Link to="/voluntario/oportunidades" className="text-sm font-medium text-text-secondary hover:text-brand-accent transition-colors">Oportunidades</Link>
                  <Link to="/voluntario/perfil" className="text-sm font-medium text-text-secondary hover:text-brand-accent transition-colors">Meu Perfil</Link>
                </>
              )}
              
              {isAdmin && (
                <>
                  <Link to="/admin/dashboard" className="text-sm font-medium text-text-secondary hover:text-brand-accent transition-colors">Dashboard Admin</Link>
                  <Link to="/admin/oportunidades" className="text-sm font-medium text-text-secondary hover:text-brand-accent transition-colors">Gerenciar Causas</Link>
                </>
              )}
              
              <div className="h-8 w-px bg-white/10" />
              
              <button 
                onClick={() => navigate('/login')}
                className="flex items-center gap-2 text-rose-400 hover:text-rose-300 text-sm font-semibold transition-colors"
              >
                <LogOut size={18} />
                Sair
              </button>
            </div>

            {/* Mobile Toggle */}
            <button className="md:hidden p-2 text-text-secondary">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-text-secondary/50">
            © 2026 Eloong - Conectando corações a causas. Protótipo para Hackathon.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
