import { StaticImageData } from "next/image";

export interface ServiceItem {
    title: string;
    description: string;
    src : StaticImageData
}

export interface ServiceSection {
    icon: StaticImageData;
    sectionTitle: string;
    sectionDescription: string;
    items: ServiceItem[];
}