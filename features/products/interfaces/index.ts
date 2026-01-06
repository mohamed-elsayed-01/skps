import { StaticImageData } from "next/image";

export interface ServiceItem {
    id: number;
    title: string;
    description: string;
    src: StaticImageData
}

export interface ServiceSection {
    icon: StaticImageData;
    sectionTitle: string;
    sectionDescription: string;
    items: ServiceItem[];
}