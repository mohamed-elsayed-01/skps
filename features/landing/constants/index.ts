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
// case studies
import frame1 from "@/public/Images/case-study/frame-1.png"
import frame2 from "@/public/Images/case-study/frame-2.png"
// quick contact
import phone from "@/public/Images/quick-contact/phone.png"
import mail from "@/public/Images/quick-contact/mail.png"
import internet from "@/public/Images/quick-contact/internet.png"
import { FeatureItem } from "@/features/landing/interfaces";

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

export const case_studies = [
    {
        src: frame1,
        heading: "8” External Corrosion using Clock Spring  Composite Repair",
        description: "An external corrosion was found at several locations at on an 8” riser due to neoprene coating damage.",
        steps: [
            "Defect area",
            "Clock Spring ® composite sleeve application",
            "Top coat",
            "Design Criteria"
        ]
    },
    {
        src: frame2,
        heading: "48″ Sea Water Header with Revit in 20mm Hole",
        description: "48″ Sea Water header had a severe leak that needed to be sealed using a wooden rivet in 20mm hole.",
        steps: [
            "Defect area",
            "Clock Spring ® Contour Application",
            "Design Criteria"
        ]
    }
]

export const FAQ_DATA = [
    {
        question: "How do I submit a Request for Quotation (RFQ)?",
        answer:
            "You can easily submit an RFQ by visiting our website or Request for Quotation button. You can also email us directly at info@skps.com."
    },
    {
        question: "What types of pipeline repair solutions do you offer?",
        answer:
            "We offer composite wrap systems for corrosion and structural reinforcement."
    },
    {
        question: "What is the Protectolast WS VCI?",
        answer:
            "It is an advanced volatile corrosion inhibitor system exclusively provided by SKPS."
    },
    {
        question: "How does the RPR Heat Induction Disbonder work?",
        answer:
            "It removes coatings from steel surfaces quickly and safely using controlled induction heating. The system generates heat directly in the steel substrate, causing the coating to detach without burning or damaging the surface."
    },
    {
        question: "What industries does SKPS serve?",
        answer:
            "SKPS proudly serves a wide range of industries, including: Oil & Gas, Petrochemical and Refining, Water and Wastewater, and Marine and Infrastructure."
    }
];


export const CONTACT_INFO = [
    {
        type: "Phone",
        icon: phone,
        value: "+971 2 4474288",
        note: "Mon–Fri, 8:00 AM – 5:00 PM EST"
    },
    {
        type: "Email",
        icon: mail,
        value: "info@skps.com",
        note: "We'll respond within 24 hours"
    },
    {
        type: "Toll Free Number",
        icon: internet,
        value: "8007577",
        note: "For instant support"
    }
]