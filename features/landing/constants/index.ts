import { StaticImageData } from "next/image";

// services images 
import compositeEngineeringServices from "@/public/Images/home-services/composite-engineering-services.png";
import corrosionPreventionCoatings from "@/public/Images/home-services/corrosion-prevention-coatings.png";
import ultrasonicThicknessGaugess from "@/public/Images/home-services/ultrasonic-thickness-gaugess.png";
import protectolastWsVci from "@/public/Images/home-services/protectolast-ws-vci.png";

// clients logos 
import adnoc from "@/public/Images/our-clients/ADNOC.png";
import daleel from "@/public/Images/our-clients/DALEEL.png";
import dewa from "@/public/Images/our-clients/DEWA.png";
import dolphin from "@/public/Images/our-clients/DOLPHIN ENERGY.png";
import dpe from "@/public/Images/our-clients/DPE.png";
import dugas from "@/public/Images/our-clients/DUGAS.png";
import emarat from "@/public/Images/our-clients/EMARAT.png";
import enoc from "@/public/Images/our-clients/ENOC.png";
import fot from "@/public/Images/our-clients/FOT.png";
import oq from "@/public/Images/our-clients/OQ.png";
import oxy from "@/public/Images/our-clients/OXY OMAN.png";
import pdo from "@/public/Images/our-clients/PDO.png";
import sewa from "@/public/Images/our-clients/SEWA.png";
import snoc from "@/public/Images/our-clients/SNOC.png";


export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  isActive?: boolean;
}

export const FEATURES: FeatureItem[] = [
  {
    id: 1,
    title: "Expert-Led Engineering",
    description:
      "Specialized expertise in repair, corrosion control, and protective coatings.",
  },
  {
    id: 2,
    title: "Tailored Applications",
    description:
      "Solutions designed for specific asset and site conditions.",
  },
  {
    id: 3,
    title: "End-to-End Support",
    description:
      "From the first site visit to long-term asset care, we support you at every stage to ensure lasting integrity.",
  },
];


export interface MiniFeatureItem {
  label: string;
}

export const MINI_FEATURES: MiniFeatureItem[] = [
  { label: "Seamless Operations" },
  { label: "Safety Excellence" },
  { label: "Sustainable Solutions" },
];


export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Composite Engineering Services",
    description:
      "Cost-effective composite designs to address the restoration of pipeline systems.",
    image: compositeEngineeringServices, 
   
  },
  {
    id: 2,
    title: "Corrosion Prevention Coatings",
    description:
      "The application of engineered corrosion-resistant & waterproof systems.",
    image: corrosionPreventionCoatings,
  
  },
  {
    id: 3,
    title: "Ultrasonic Thickness Gauges",
    description:
      "Material loss thickness for accurate non-intrusive metal inspection.",
    image: ultrasonicThicknessGaugess,
   
  },
  {
    id: 4,
    title: "Protectolast HV VI",
    description:
      "Water-based polymer designed specially to safeguard metal surfaces.",
    image: protectolastWsVci,
  },
];

export const CLIENT_LOGOS = [
  adnoc,
  daleel,
  dewa,
  dolphin,
  dpe,
  dugas,
  emarat,
  enoc,
  fot,
  oq,
  oxy,
  pdo,
  sewa,
  snoc,
];