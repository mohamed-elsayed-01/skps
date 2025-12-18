import { StaticImageData } from "next/image";

export interface CompanyOverviewCards {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface MissionCard {
  id: number;
  title: string;
  description: string;
  icon: StaticImageData;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: StaticImageData; 
}

export interface CertificationItem {
  id: number;
  title: string;
  subtitle: string;
  image: StaticImageData; 
}

export interface QualityProcessStep {
  id: number;
  title: string;
  description: string;
}

export interface InfrastructureItem {
  id: number;
  title: string;
  image: StaticImageData; 
  description: string;
  icon: StaticImageData; 
}

export interface SocialResponsibilityCard {
  id: number;
  icon: StaticImageData;
  title: string;
  description: string;
}