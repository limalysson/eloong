import React from 'react';
import { useLocation } from 'react-router-dom';
import { MOCK_VOLUNTEERS } from '../../utils/mockData';
import { Heart, Mail, ExternalLink } from 'lucide-react';

const NGOShowcase: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const ids = params.get('ids')?.split(',') || [];
  
  const selectedVolunteers = MOCK_VOLUNTEERS.filter(v => ids.includes(v.id));

  return (
    <div className="space-y-10 animate-fade-in-up py-10">
      {/* NGO Banner */}
      <header className="bento-card bg-gradient-to-br from-brand-secondary/20 to-brand-accent/5 border-brand-secondary/20 flex flex-col md:flex-row items-center gap-8">
        <div className="w-24 h-24 rounded-3xl bg-white flex items-center justify-center shadow-2xl p-4">
          <Heart className="text-brand-accent w-full h-full fill-current" />
        </div>
        <div className="text-center md:text-left space-y-2">
          <h1 className="text-4xl font-black text-white tracking-tight">Vitrine de Talentos</h1>
          <p className="text-text-secondary max-w-xl">
            Estes voluntários foram selecionados pela administração do Eloong com base nas necessidades da sua causa. Conecte-se com quem faz a diferença.
          </p>
        </div>
      </header>

      {/* Volunteers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {selectedVolunteers.length > 0 ? (
          selectedVolunteers.map(volunteer => (
            <article key={volunteer.id} className="bento-card group flex flex-col sm:flex-row gap-6 hover:border-brand-secondary/40">
              <div className="w-32 h-32 rounded-2xl overflow-hidden shrink-0 border-2 border-white/5 group-hover:border-brand-secondary/30 transition-colors">
                <img src={volunteer.photoUrl} alt="" className="w-full h-full object-cover" />
              </div>
              
              <div className="space-y-4 flex-1">
                <div>
                  <h3 className="text-xl font-bold text-white">{volunteer.name}</h3>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {volunteer.causes.map(c => (
                      <span key={c} className="text-[10px] font-bold uppercase tracking-widest text-brand-accent px-2 py-0.5 bg-brand-accent/10 rounded-full">{c}</span>
                    ))}
                  </div>
                </div>
                
                <p className="text-text-secondary text-sm line-clamp-2 italic">"{volunteer.bio}"</p>
                
                <div className="flex gap-4 pt-2">
                  <button className="flex-1 btn-primary gap-2 text-xs py-2 px-4 !bg-none bg-white/5 border border-white/10 hover:bg-white/10">
                    <Mail size={14} /> Contato
                  </button>
                  <button className="flex-1 btn-primary gap-2 text-xs py-2 px-4">
                    <ExternalLink size={14} /> Ver Currículo
                  </button>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="md:col-span-2 bento-card text-center py-20 text-text-secondary/50">
            Nenhum voluntário selecionado no momento. Solicite uma nova curadoria.
          </div>
        )}
      </div>
    </div>
  );
};

export default NGOShowcase;
