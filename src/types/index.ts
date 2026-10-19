export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI / Research' | 'Healthcare AI' | 'Applied AI' | 'IoT / Hardware' | 'Mobile / Education';
  filterTag: 'all' | 'ai-ml' | 'iot' | 'fullstack';
  problemStatement: string;
  solutionOverview: string;
  role: string;
  grade?: string;
  technologies: string[];
  image: string;
  additionalImages?: string[];
  metrics?: { label: string; value: string }[];
  recognition?: string[];
  githubUrl?: string;
  liveUrl?: string;
  playStoreUrl?: string;
  paperUrl?: string;
  architectureDetails?: {
    components: { title: string; desc: string; icon?: string }[];
    pipelineSummary: string;
  };
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  type: 'internship' | 'fulltime';
}

export interface EducationItem {
  id: string;
  institution: string;
  faculty?: string;
  degree: string;
  period: string;
  status: 'Completed' | 'In Progress' | 'Concurrent';
  description: string;
  highlights: string[];
  badge?: string;
}

export interface Publication {
  id: string;
  title: string;
  conference: string;
  year: string;
  status: 'Presented / Accepted' | 'Conference Publication';
  abstract: string;
  tags: string[];
  relatedProjectId: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  category: string;
  image: string;
  relatedEntity: string;
  highlightText: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  image?: string;
  credentialBadge?: string;
  summary: string;
}
