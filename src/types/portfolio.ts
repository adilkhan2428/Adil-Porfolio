export type SkillStatus = 'Currently Learning' | 'Practicing Through Projects' | 'Future Learning';

export type SkillCategory = 
  | 'Current Foundations'
  | 'Automation Technologies'
  | 'Agentic AI — Learning Roadmap'
  | 'Backend & Infrastructure — Future Development';

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  status: SkillStatus;
  description?: string;
  relevanceToEcommerce?: string;
}

export type ProjectCategory = 
  | 'Python Projects'
  | 'Business Automation'
  | 'Shopify Automation'
  | 'AI Agent Projects'
  | 'RAG & Knowledge Systems'
  | 'Multi-Agent Systems'
  | 'Production AI Systems';

export type ProjectStatus = 
  | 'Active Prototype'
  | 'In Development'
  | 'Architecture & Design'
  | 'Planned Prototype';

export interface ProjectItem {
  id: string;
  name: string;
  category: ProjectCategory;
  problem: string;
  solutionArchitecture: string;
  technologies: string[];
  status: ProjectStatus;
  statusNote: string;
  workflowDiagramDescription: string;
  workflowSteps: { step: number; title: string; detail: string }[];
  githubUrl?: string;
  liveDemoUrl?: string;
  isDemonstrationOnly: boolean;
  keyFeatures: string[];
}

export interface SolutionCategory {
  id: string;
  title: string;
  icon: string;
  tagline: string;
  overview: string;
  capabilities: string[];
  architecturalComponents: string[];
  realWorldScenario: string;
  futureProjectPlaceholder: string;
}

export type ModuleStatus = 'Not Started' | 'In Progress' | 'Completed';

export interface LearningTopic {
  title: string;
  completed?: boolean;
}

export interface LearningModule {
  id: string;
  moduleNumber: number;
  title: string;
  badge: string;
  status: ModuleStatus;
  statusDetails: string;
  topics: LearningTopic[];
  focusDescription: string;
  outcomeMilestone: string;
}

export interface EngineeringPrinciple {
  number: number;
  title: string;
  coreInsight: string;
  ecommerceContext: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  location: string;
  education: string;
  currentStage: string;
  currentProgram: string;
  duration: string;
  mainHeadline: string;
  supportingHeadline: string;
  shortIntroduction: string;
  professionalIdentity: string[];
  primaryFocusAreas: {
    title: string;
    description: string;
    tag: string;
  }[];
  contact: {
    githubUrl: string;
    linkedinUrl: string;
    phone: string;
    formattedPhone: string;
    email: string;
    locationDisplay: string;
  };
  values: {
    title: string;
    description: string;
    icon: string;
  }[];
}

