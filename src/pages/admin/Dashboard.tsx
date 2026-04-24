import React from 'react';
import { MOCK_VOLUNTEERS, MOCK_OPPORTUNITIES } from '../../utils/mockData';
import { ShieldCheck, Users, HeartHandshake, CheckCircle2, XCircle, ExternalLink } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <header>
        <h1 className="text-3xl font-black text-white flex items-center gap-3">
          <ShieldCheck className="text-brand-accent" size={32} />
          Painel de Controle
        </h1>
        <p className="text-text-secondary mt-2">Gestão de impacto e moderação da plataforma Eloong.</p>
      </header>

      {/* Metrics Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bento-card border-brand-accent/20 bg-brand-accent/5">
          <Users className="text-brand-accent mb-2" size={24} />
          <p className="text-2xl font-black text-white">{MOCK_VOLUNTEERS.length}</p>
          <p className="text-[10px] uppercase tracking-widest text-text-secondary font-bold">Voluntários</p>
        </div>
        <div className="bento-card border-brand-secondary/20 bg-brand-secondary/5">
          <HeartHandshake className="text-brand-secondary mb-2" size={24} />
          <p className="text-2xl font-black text-white">{MOCK_OPPORTUNITIES.length}</p>
          <p className="text-[10px] uppercase tracking-widest text-text-secondary font-bold">Oportunidades</p>
        </div>
        <div className="bento-card border-brand-highlight/20 bg-brand-highlight/5">
          <CheckCircle2 className="text-brand-highlight mb-2" size={24} />
          <p className="text-2xl font-black text-white">128</p>
          <p className="text-[10px] uppercase tracking-widest text-text-secondary font-bold">Impactos Gerados</p>
        </div>
        <div className="bento-card bg-white/5 border-white/10">
          <p className="text-2xl font-black text-white">98%</p>
          <p className="text-[10px] uppercase tracking-widest text-text-secondary font-bold">Taxa de Match</p>
        </div>
      </div>

      {/* Management Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center px-2">
            <h2 className="text-xl font-bold text-white">Aprovações Pendentes</h2>
            <button className="text-xs text-brand-accent font-bold uppercase tracking-widest hover:underline">Ver Todos</button>
          </div>
          
          <div className="space-y-3">
            {MOCK_VOLUNTEERS.filter(v => v.status === 'pendente' || v.status === 'ativo').map(volunteer => (
              <div key={volunteer.id} className="bento-card !p-4 flex flex-col sm:flex-row justify-between items-center gap-4 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl overflow-hidden">
                    <img src={volunteer.photoUrl} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm">{volunteer.name}</h3>
                    <div className="flex gap-1 mt-1">
                      {volunteer.causes.map(c => (
                        <span key={c} className="text-[8px] bg-white/5 px-2 py-0.5 rounded text-text-secondary">{c}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all shadow-lg shadow-emerald-500/0 hover:shadow-emerald-500/20" title="Aprovar">
                    <CheckCircle2 size={18} />
                  </button>
                  <button className="p-2 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500 hover:text-white transition-all shadow-lg shadow-rose-500/0 hover:shadow-rose-500/20" title="Rejeitar">
                    <XCircle size={18} />
                  </button>
                  <button className="p-2 rounded-lg bg-white/5 text-text-secondary hover:bg-white/10" title="Ver Perfil">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-xl font-bold text-white px-2">Próximas Atividades</h2>
          <div className="bento-card space-y-6">
            <div className="flex gap-4 border-l-2 border-brand-accent pl-4">
              <div>
                <p className="text-xs text-brand-accent font-bold">SÁBADO, 14:00</p>
                <p className="text-white font-bold text-sm">Mutirão EcoVida</p>
                <p className="text-xs text-text-secondary mt-1">8 voluntários confirmados</p>
              </div>
            </div>
            <div className="flex gap-4 border-l-2 border-brand-secondary pl-4">
              <div>
                <p className="text-xs text-brand-secondary font-bold">SEGUNDA, 19:00</p>
                <p className="text-white font-bold text-sm">Monitoria Online</p>
                <p className="text-xs text-text-secondary mt-1">Treinamento de novos monitores</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
