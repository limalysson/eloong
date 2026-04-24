import type { VolunteerProfile, Opportunity, NGO, Cause } from "../types/index";

export const MOCK_CAUSES: Cause[] = [
  "Meio Ambiente",
  "Educação",
  "Proteção Animal",
  "Saúde",
  "Assistência Social",
  "Cultura e Arte",
  "Esportes"
];

export const MOCK_VOLUNTEERS: VolunteerProfile[] = [
  {
    id: "v1",
    userId: "u1",
    name: "Alice Oliveira",
    bio: "Especialista em fauna silvestre.",
    causes: ["Meio Ambiente", "Proteção Animal"],
    availability: "Fins de semana",
    skills: ["Resgate", "Biologia"],
    status: "ativo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    photoUrl: "https://i.pravatar.cc/150?u=alice",
  },
  {
    id: "v2",
    userId: "u2",
    name: "Bruno Santos",
    bio: "Engenheiro voluntário.",
    causes: ["Educação"],
    availability: "Noite",
    skills: ["Matemática"],
    status: "ativo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    photoUrl: "https://i.pravatar.cc/150?u=bruno",
  }
];

export const MOCK_NGOS: NGO[] = [
  {
    id: "n1",
    name: "EcoVida",
    description: "Preservação da Mata Atlântica.",
    causes: ["Meio Ambiente"],
    location: "São Paulo, SP",
  },
  {
    id: "n2",
    name: "EducaMais",
    description: "Educação para jovens carentes.",
    causes: ["Educação"],
    location: "Rio de Janeiro, RJ",
  }
];

export const MOCK_OPPORTUNITIES: Opportunity[] = [
  {
    id: "o1",
    ngoId: "n1",
    ngoName: "EcoVida",
    title: "Plantio de Mudas",
    description: "Mutirão para reflorestamento.",
    cause: "Meio Ambiente",
    requirements: "Disposição física.",
    location: "Parque Estadual",
    type: "Presencial",
    status: "ativo",
    candidates: [],
    createdAt: new Date().toISOString(),
  },
  {
    id: "o2",
    ngoId: "n2",
    ngoName: "EducaMais",
    title: "Monitoria de Matemática",
    description: "Ajudar alunos no contraturno escolar.",
    cause: "Educação",
    requirements: "Saber álgebra básica.",
    location: "Remoto",
    type: "Remoto",
    status: "ativo",
    candidates: [],
    createdAt: new Date().toISOString(),
  }
];
