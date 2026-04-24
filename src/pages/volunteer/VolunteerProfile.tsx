import React, { useState } from 'react';
import { MOCK_VOLUNTEERS, MOCK_CAUSES } from '../../utils/mockData';
import { Save, User, MapPin, Calendar, Heart, Award } from 'lucide-react';
import type { VolunteerProfile, Cause } from '../../types/index';

const VolunteerProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<VolunteerProfile>(MOCK_VOLUNTEERS[0]);
  const [isSaving, setIsSaving] = useState(false);

  const toggleCause = (cause: Cause) => {
    setProfile(prev => {
      const causes = prev.causes.includes(cause)
        ? prev.causes.filter(c => c !== cause)
        : [...prev.causes, cause];
      return { ...prev, causes };
    });
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("Perfil salvo com sucesso!");
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-black text-white">Meu Perfil de Impacto</h1>
        <button 
          onClick={handleSave}
          disabled={isSaving}
          className="btn-primary gap-2"
        >
          {isSaving ? 'Salvando...' : <><Save size={18} /> Salvar Alterações</>}
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Col: Info */}
        <div className="md:col-span-1 space-y-6">
          <div className="bento-card flex flex-col items-center text-center space-y-4">
            <div className="w-32 h-32 rounded-3xl overflow-hidden border-4 border-brand-accent/20 shadow-2xl">
              <img src={profile.photoUrl} alt={profile.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{profile.name}</h2>
              <p className="text-text-secondary text-sm">Voluntário Eloong</p>
            </div>
          </div>

          <div className="bento-card space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-highlight flex items-center gap-2">
              <Calendar size={16} /> Disponibilidade
            </h3>
            <select 
              value={profile.availability}
              onChange={(e) => setProfile(p => ({ ...p, availability: e.target.value }))}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-accent"
            >
              <option value="Fins de semana">Fins de semana</option>
              <option value="Noite">Noite</option>
              <option value="Manhã">Manhã</option>
              <option value="Flexível">Flexível</option>
            </select>
          </div>
        </div>

        {/* Right Col: Details */}
        <div className="md:col-span-2 space-y-6">
          <div className="bento-card space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-highlight flex items-center gap-2">
              <User size={16} /> Sobre Mim
            </h3>
            <textarea 
              value={profile.bio}
              onChange={(e) => setProfile(p => ({ ...p, bio: e.target.value }))}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-4 text-sm text-white focus:outline-none focus:border-brand-accent h-32 resize-none"
              placeholder="Conte um pouco sobre sua trajetória..."
            />
          </div>

          <div className="bento-card space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-highlight flex items-center gap-2">
              <Heart size={16} /> Causas que Apoio
            </h3>
            <div className="flex flex-wrap gap-2">
              {MOCK_CAUSES.map(cause => (
                <button
                  key={cause}
                  onClick={() => toggleCause(cause)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                    profile.causes.includes(cause)
                      ? 'bg-brand-accent/20 border-brand-accent text-brand-accent shadow-lg shadow-brand-accent/10'
                      : 'bg-white/5 border-white/10 text-text-secondary hover:bg-white/10'
                  }`}
                >
                  {cause}
                </button>
              ))}
            </div>
          </div>

          <div className="bento-card space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-highlight flex items-center gap-2">
              <Award size={16} /> Habilidades
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {profile.skills.map((skill, i) => (
                <div key={i} className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white flex justify-between items-center group">
                  {skill}
                  <button className="text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity">×</button>
                </div>
              ))}
              <button className="px-4 py-3 border border-dashed border-white/20 rounded-xl text-xs text-text-secondary hover:border-brand-accent hover:text-brand-accent transition-all">
                + Adicionar Habilidade
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerProfilePage;
