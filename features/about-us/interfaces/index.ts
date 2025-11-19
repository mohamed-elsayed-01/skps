import { StaticImageData } from "next/image";

export interface CompanyOverviewCards {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
}
