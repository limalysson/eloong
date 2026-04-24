import React, { useState } from 'react';
import { MOCK_OPPORTUNITIES } from '../../utils/mockData';
import { Plus, Edit3, Trash2, Eye, MapPin, Users, ToggleLeft as Toggle, ToggleRight } from 'lucide-react';
import type { Opportunity } from '../../types/index';

const ManageOpportunities: React.FC = () => {
  const [opportunities, setOpportunities] = useState<Opportunity[]>(MOCK_OPPORTUNITIES);

  const toggleStatus = (id: string) => {
    setOpportunities(prev => prev.map(opt => {
      if (opt.id === id) {
        return { ...opt, status: opt.status === 'ativo' ? 'encerrado' : 'ativo' };
      }
      return opt;
    }));
  };

  return (
    <div className="space-y-8 animate-fade-in-up">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-white">Gerenciar Oportunidades</h1>
          <p className="text-text-secondary mt-1">Crie e gerencie as causas que sua ONG está apoiando.</p>
        </div>
        <button className="btn-primary gap-2 px-6 py-4 rounded-2xl">
          <Plus size={20} /> Nova Oportunidade
        </button>
      </header>

      {/* Summary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bento-card border-brand-accent/20 bg-brand-accent/5 !p-6 flex items-center justify-between">
          <div>
            <p className="text-text-secondary text-xs uppercase tracking-widest font-bold">Ativas</p>
            <p className="text-3xl font-black text-white">{opportunities.filter(o => o.status === 'ativo').length}</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-brand-accent/20 flex items-center justify-center text-brand-accent">
            <ToggleRight size={24} />
          </div>
        </div>
        <div className="bento-card border-brand-secondary/20 bg-brand-secondary/5 !p-6 flex items-center justify-between">
          <div>
            <p className="text-text-secondary text-xs uppercase tracking-widest font-bold">Total Candidatos</p>
            <p className="text-3xl font-black text-white">42</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-brand-secondary/20 flex items-center justify-center text-brand-secondary">
            <Users size={24} />
          </div>
        </div>
        <div className="bento-card bg-white/5 border-white/10 !p-6 flex items-center justify-between">
          <div>
            <p className="text-text-secondary text-xs uppercase tracking-widest font-bold">Impacto Estimado</p>
            <p className="text-3xl font-black text-white">High</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white">
            <Eye size={24} />
          </div>
        </div>
      </div>

      {/* Opportunities List */}
      <div className="bento-card !p-0 overflow-hidden border-white/5">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/5 text-text-secondary text-[10px] uppercase tracking-widest font-bold">
                <th className="px-8 py-4">Oportunidade</th>
                <th className="px-6 py-4">Causa</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Candidatos</th>
                <th className="px-8 py-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {opportunities.map((opt) => (
                <tr key={opt.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-8 py-6">
                    <div className="space-y-1">
                      <p className="text-white font-bold">{opt.title}</p>
                      <div className="flex items-center gap-1.5 text-text-secondary text-[10px]">
                        <MapPin size={10} className="text-brand-secondary" />
                        {opt.location} • {opt.type}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <span className="px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-[10px] font-bold uppercase tracking-widest text-brand-accent">
                      {opt.cause}
                    </span>
                  </td>
                  <td className="px-6 py-6">
                    <button 
                      onClick={() => toggleStatus(opt.id)}
                      className={`flex items-center gap-2 text-xs font-bold transition-colors ${opt.status === 'ativo' ? 'text-brand-accent' : 'text-rose-400'}`}
                    >
                      {opt.status === 'ativo' ? <ToggleRight size={20} /> : <Toggle size={20} />}
                      {opt.status === 'ativo' ? 'Ativa' : 'Encerrada'}
                    </button>
                  </td>
                  <td className="px-6 py-6 text-white font-bold text-sm">
                    {opt.candidates?.length || Math.floor(Math.random() * 15)}
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 rounded-lg bg-white/5 text-text-secondary hover:bg-white/10 hover:text-white transition-all">
                        <Edit3 size={16} />
                      </button>
                      <button className="p-2 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500 hover:text-white transition-all">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageOpportunities;
