import React, { useState } from 'react';
import { MOCK_OPPORTUNITIES, MOCK_CAUSES } from '../../utils/mockData';
import { MapPin, Clock, Filter, Search, ArrowUpRight } from 'lucide-react';
import type { Cause } from '../../types/index';
import logo from '../../assets/logo.png';

const OpportunityList: React.FC = () => {
  const [selectedCause, setSelectedCause] = useState<Cause | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredOpportunities = MOCK_OPPORTUNITIES.filter(opt => {
    const matchesCause = selectedCause === 'all' || opt.cause === selectedCause;
    const matchesSearch = opt.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         opt.ngoName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCause && matchesSearch;
  });

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Hero / Header Section */}
      <header className="bento-card bg-gradient-to-br from-brand-primary-lighter/40 to-transparent border-brand-accent/20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4">
            <img src={logo} alt="Eloong" className="h-12 w-auto mb-2" />
            <p className="text-text-secondary max-w-lg">
              Explore oportunidades de voluntariado que combinam com suas habilidades e o impacto que você quer causar no mundo.
            </p>
          </div>
          <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10">
            <div className="px-6 py-3 text-center border-r border-white/10">
              <p className="text-2xl font-bold text-brand-accent">{MOCK_OPPORTUNITIES.length}</p>
              <p className="text-[10px] uppercase tracking-widest text-text-secondary/60">Abertas</p>
            </div>
            <div className="px-6 py-3 text-center">
              <p className="text-2xl font-bold text-brand-secondary">1.2k</p>
              <p className="text-[10px] uppercase tracking-widest text-text-secondary/60">Voluntários</p>
            </div>
          </div>
        </div>
      </header>

      {/* Filters Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 group w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-brand-accent transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Buscar por título ou ONG..." 
            className="w-full pl-12 pr-4 py-4 bg-brand-primary-lighter/30 border border-white/10 rounded-2xl focus:outline-none focus:border-brand-accent transition-all text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
          <Filter size={18} className="text-text-secondary shrink-0" />
          <button 
            onClick={() => setSelectedCause('all')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${selectedCause === 'all' ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/20' : 'bg-white/5 text-text-secondary hover:bg-white/10'}`}
          >
            Todas
          </button>
          {MOCK_CAUSES.map(cause => (
            <button 
              key={cause}
              onClick={() => setSelectedCause(cause)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${selectedCause === cause ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/20' : 'bg-white/5 text-text-secondary hover:bg-white/10'}`}
            >
              {cause}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid of Opportunities */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOpportunities.map((opt) => (
          <article key={opt.id} className="bento-card group flex flex-col justify-between h-full hover:scale-[1.02]">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-[10px] font-bold uppercase tracking-widest text-brand-accent">
                  {opt.cause}
                </span>
                <span className="text-text-secondary text-xs flex items-center gap-1">
                  <Clock size={12} />
                  Postado hoje
                </span>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-brand-highlight transition-colors line-clamp-1">{opt.title}</h3>
                <p className="text-brand-accent text-sm font-medium mt-1">{opt.ngoName}</p>
              </div>

              <p className="text-text-secondary text-sm line-clamp-3 leading-relaxed">
                {opt.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 text-xs text-text-secondary">
                  <MapPin size={14} className="text-brand-secondary" />
                  {opt.location}
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 text-xs text-text-secondary">
                  <span className={`w-1.5 h-1.5 rounded-full ${opt.type === 'Remoto' ? 'bg-cyan-400' : 'bg-amber-400'}`} />
                  {opt.type}
                </div>
              </div>
            </div>

            <button className="mt-8 w-full btn-primary gap-2 text-sm group/btn">
              Quero me Voluntariar
              <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default OpportunityList;
