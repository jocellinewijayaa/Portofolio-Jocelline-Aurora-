export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
  description?: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

export interface PlannedProject {
  title: string;
  date: string;
  location: string;
  description: string;
}

export interface Mountain {
  name: string;
  location: string;
  type: "Gunung" | "Bukit";
}
