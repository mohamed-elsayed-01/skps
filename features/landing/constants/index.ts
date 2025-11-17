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
