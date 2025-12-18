import { StaticImageData } from "next/image";

export interface IFeature {
    title: string;
    description?: string;
};

export interface IService {
    image: StaticImageData;
    icon: StaticImageData;
    title: string;
    description: string;
    features: IFeature[];
    industries: string[];
};

