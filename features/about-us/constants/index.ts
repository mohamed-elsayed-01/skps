import shield from "@/public/Images/company-overview/shield.svg";
import fix from "@/public/Images/company-overview/fix.svg";
import search from "@/public/Images/company-overview/search.svg";
import power from "@/public/Images/company-overview/power.svg";
import rocket from "@/public/Images/core-missions/rocket.svg";
import star from "@/public/Images/core-missions/star.svg";
import clean from "@/public/Images/core-missions/clean.svg";
import Ahmed from "@/public/Images/leaders-team/Ahmed.png";
import Khaldon from "@/public/Images/leaders-team/Khaldon.png";
import Harish from "@/public/Images/leaders-team/Harish.png";

import iso1 from "@/public/Images/certifications/iso9001.svg";
import iso2 from "@/public/Images/certifications/iso14001.svg";
import iso3 from "@/public/Images/certifications/iso4500.svg";

import warehouse from "@/public/Images/facilities/warehouses.png";
import teams from "@/public/Images/facilities/teams.png";
import offices from "@/public/Images/facilities/head-offices.png";
import building from "@/public/Images/facilities/building.svg";
import study from "@/public/Images/facilities/study.svg";

import global from "@/public/Images/social-responsibility/global.svg";
import hand from "@/public/Images/social-responsibility/hand.svg";
import { CertificationItem, CompanyOverviewCards, InfrastructureItem, MissionCard, QualityProcessStep, SocialResponsibilityCard, TeamMember } from "../interfaces";

export const company_overview_cards: CompanyOverviewCards[] = [
  {
    id: 1,
    title: "Corrosion Protection",
    description:
      "Advanced solutions for preventing and mitigating corrosion in assets.",
    image: shield,
  },
  {
    id: 2,
    title: "Composite Repairs",
    description:
      "Engineered composite solutions for structural reinforcement and leak sealing clamps.",
    image: fix,
  },
  {
    id: 3,
    title: "Inspection Technologies",
    description: "Non-destructive testing and advanced inspection methods.",
    image: search,
  },
  {
    id: 4,
    title: "Technical Support",
    description: "Expert consultation and on-site technical assistance.",
    image: power,
  },
];

export const milestones = [
  {
    year: '2007',
    title: 'Founded',
    description: 'SKPS was founded with a vision for advanced asset protection solutions.',
  },
  {
    year: '2010',
    title: 'First Regional Warehouse',
    description: 'Established first regional warehouse to better serve GCC clients.',
  },
  {
    year: '2013',
    title: 'ISO Certifications',
    description: 'Achieved ISO 9001, 14001, and 45001 certifications.',
  },
  {
    year: '2018',
    title: 'Expansion',
    description: 'Expanded services and training capabilities across UAE, Oman, Qatar, & MENA Region.',
  }
];


export const MISSION_CARDS: MissionCard[] = [
  {
    id: 1,
    title: "Integrity",
    description:
      "We operate with transparency and ethical standards in all our business practices",
    icon: shield, // placeholder — swap with your icon component
  },
  {
    id: 2,
    title: "Innovation",
    description:
      "Our R&D team continuously seek new technologies and methods to solve complex challenges",
    icon: rocket,
  },
  {
    id: 3,
    title: "Service Excellence",
    description:
      "We are committed to exceeding client expectations in every project",
    icon: star,
  },
  {
    id: 4,
    title: "Safety",
    description:
      "We prioritize the wellbeing of our team, clients, and the environment",
    icon: power,
  },
  {
    id: 5,
    title: "Sustainability",
    description:
      "We develop solutions with long-term environmental considerations",
    icon: clean,
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Khaldoon A. Alfi",
    position: "Founder and General Manager",
    image: Khaldon,
  },
  {
    id: 2,
    name: "Ahmed Abdul Razzak",
    position: "Projects Director",
    image: Ahmed,
  },
  {
    id: 3,
    name: "Harish Muraleedharan",
    position: "Business Development Director",
    image: Harish,
  },
];


export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 1,
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    image: iso1,
  },
  {
    id: 2,
    title: "ISO 14001:2015",
    subtitle: "Environmental Management System",
    image: iso2,
  },
  {
    id: 3,
    title: "ISO 45001:2018",
    subtitle: "Occupational Health and Safety",
    image: iso3,
  },
];

export const QUALITY_PROCESS_STEPS: QualityProcessStep[] = [
  {
    id: 1,
    title: "Material Selection",
    description:
      "Rigorous testing and verification of all raw materials",
  },
  {
    id: 2,
    title: "Process Control",
    description:
      "Standardized procedures with regular monitoring and audits",
  },
  {
    id: 3,
    title: "Performance Testing",
    description:
      "Comprehensive testing under simulated operational conditions",
  },
  {
    id: 4,
    title: "Documentation",
    description:
      "Detailed records and certificates for all products and services",
  },
];

export const INFRASTRUCTURE_ITEMS: InfrastructureItem[] = [
  {
    id: 1,
    title: "Regional Warehouses",
    image: warehouse,
    description:
      "Strategically located facilities with comprehensive inventory support across UAE & Oman",
    icon: building,
  },
  {
    id: 2,
    title: "Dedicated Teams",
    image: teams,
    description:
      "On-site mobile units for application, repair, and emergency response services",
    icon: power,
  },
  {
    id: 3,
    title: "Head Offices",
    image: offices,
    description:
      "Teams dedicated for clients’ streamlined communication, technical expertise, and end-to-end project support.",
    icon: study,
  },
];

export const SOCIAL_RESPONSIBILITY_CARDS: SocialResponsibilityCard[] = [
  {
    id: 1,
    icon: clean,
    title: "Environmental Commitments",
    description:
      "Promoting eco-friendly materials and reducing emissions",
  },
  {
    id: 2,
    icon: shield,
    title: "Health & Safety Culture",
    description:
      "Embedded safety-first approach in all service delivery",
  },
  {
    id: 3,
    icon: global,
    title: "Sustainability Vision",
    description:
      "Long-term alignment with green practices and circular economy goals",
  },
  {
    id: 4,
    icon: hand,
    title: "Regional Impact",
    description:
      "Empowering regional clients with long-lasting, locally-supported solutions",
  },
];