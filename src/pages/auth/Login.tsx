import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Mail, Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import logo from '../../assets/logo.png';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<'volunteer' | 'ngo'>('volunteer');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      if (role === 'volunteer') {
        navigate('/voluntario/oportunidades');
      } else {
        navigate('/admin/dashboard'); // For prototype, NGOs go to dashboard area
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-accent/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-secondary/10 rounded-full blur-[120px]" />

      <div className="w-full max-w-md space-y-8 animate-fade-in-up">
        {/* Logo Section */}
        <div className="text-center space-y-4">
          <img src={logo} alt="Eloong" className="h-16 w-auto mx-auto" />
          <p className="text-text-secondary text-sm font-medium">
            Conectando corações a causas transformadoras.
          </p>
        </div>

        {/* Login Card */}
        <div className="bento-card !p-8 shadow-2xl border-white/10 bg-brand-primary-base/40 backdrop-blur-2xl">
          {/* Role Selector */}
          <div className="flex bg-white/5 p-1 rounded-2xl border border-white/5 mb-8">
            <button 
              onClick={() => setRole('volunteer')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold transition-all ${
                role === 'volunteer' ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/20' : 'text-text-secondary hover:text-white'
              }`}
            >
              <Heart size={14} /> Voluntário
            </button>
            <button 
              onClick={() => setRole('ngo')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold transition-all ${
                role === 'ngo' ? 'bg-brand-secondary text-white shadow-lg shadow-brand-secondary/20' : 'text-text-secondary hover:text-white'
              }`}
            >
              <ShieldCheck size={14} /> Sou uma ONG
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-brand-accent transition-colors" size={18} />
                <input 
                  type="text" 
                  placeholder="Seu e-mail" 
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-brand-accent transition-all text-white text-sm"
                />
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-brand-accent transition-colors" size={18} />
                <input 
                  type="password" 
                  placeholder="Sua senha" 
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-brand-accent transition-all text-white text-sm"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full btn-primary py-4 rounded-2xl gap-2 font-bold group/btn"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Entrar na Eloong
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-text-secondary text-xs">
              Não tem uma conta? <a href="#" className="text-brand-accent font-bold hover:underline">Cadastre-se agora</a>
            </p>
          </div>
        </div>

        {/* Footer info */}
        <p className="text-center text-[10px] text-text-secondary/40 uppercase tracking-widest font-bold">
          Protótipo Seguro & Criptografado
        </p>
      </div>
    </div>
  );
};

export default Login;
