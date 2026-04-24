export type Role = "volunteer" | "admin" | "ngo";

export type Cause = 
  | "Meio Ambiente" 
  | "Educação" 
  | "Proteção Animal" 
  | "Saúde" 
  | "Assistência Social" 
  | "Cultura e Arte" 
  | "Esportes";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatarUrl?: string;
}

export interface VolunteerProfile {
  id: string;
  userId: string;
  name: string;
  bio: string;
  causes: Cause[];
  availability: string;
  skills: string[];
  photoUrl?: string;
  pdfUrl?: string;
  status: "ativo" | "pendente" | "inativo";
  createdAt: string;
  updatedAt: string;
}

export interface Opportunity {
  id: string;
  ngoId: string;
  ngoName: string;
  title: string;
  description: string;
  cause: Cause;
  requirements: string;
  location: string;
  type: "Remoto" | "Presencial" | "Híbrido";
  status: "ativo" | "encerrado";
  candidates: string[]; // Volunteer IDs
  createdAt: string;
}

export interface NGO {
  id: string;
  name: string;
  description: string;
  causes: Cause[];
  location: string;
  logoUrl?: string;
}
