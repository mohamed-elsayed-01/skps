import { IService } from "@/features/exteneded-services/interfaces";
import frame1 from "@/public/Images/extends-services/frame1.png"
import frame1Icon from "@/public/Images/extends-services/frame1-icon.png"
import frame2 from "@/public/Images/extends-services/frame2.png"
import frame2Icon from "@/public/Images/extends-services/frame2-icon.png"
import frame3 from "@/public/Images/extends-services/frame3.png"
import frame3Icon from "@/public/Images/extends-services/frame3-icon.png"
import frame4 from "@/public/Images/extends-services/frame4.png"
import frame4Icon from "@/public/Images/extends-services/frame4-icon.png"
import frame5 from "@/public/Images/extends-services/frame5.png"
import frame5Icon from "@/public/Images/extends-services/frame5-icon.png"
import frame6 from "@/public/Images/extends-services/frame6.png"
import frame6Icon from "@/public/Images/extends-services/frame6-icon.png"
import frame7 from "@/public/Images/extends-services/frame7.png"
import frame7Icon from "@/public/Images/extends-services/frame7-icon.png"

const services: IService[] = [
    {
        image: frame1,
        icon: frame1Icon,
        title: "Special Coating Removal Services",
        description:
            "SKPS provides precise coating removal and hand tool manual surface preparation solutions that ensure optimal adhesion for new coating and corrosion protection systems. Our advanced methods restore substrate readiness and extend asset life in the harshest environments.",
        features: [
            { title: "Coating Removal" },
            { title: "Blasting" },
            { title: "Surface Preparation" },
        ],
        industries: ["Oil & Gas", "Marine & Offshore", "Infrastructure"],
    },
    {
        image: frame2,
        icon: frame2Icon,
        title: "Application & Installation Services",
        description:
            "Our certified SKPS technicians deliver expert application and installation of corrosion prevention systems, ensuring maximum durability and performance.",
        features: [
            { title: "Composite Repair" },
            { title: "VCI Applications Supervision" },
            { title: "Cathodic Protection" },
        ],
        industries: ["Oil & Gas", "Utilities", "Petrochemicals"],
    },
    {
        image: frame3,
        icon: frame3Icon,
        title: "Site Surveys & Inspection Support",
        description:
            "SKPS offers comprehensive site surveys and inspection support to assess asset conditions, identify corrosion risks, and verify coating integrity. Our diagnostic solutions safeguard your operations and reduce downtime through proactive maintenance.",
        features: [
            { title: "Site Visits" },
            { title: "Field Inspection" },
            { title: "Condition Assessment" },
        ],
        industries: ["Oil & Gas", "Infrastructure", "Marine & Offshore"],
    },
    {
        image: frame4,
        icon: frame4Icon,
        title: "Training & Certification",
        description:
            "At SKPS, we empower industry professionals through expert-led training and certification programs focused on corrosion prevention, preservation, and safety standards. Our tailored sessions enhance competency and operational reliability.",
        features: [
            { title: "On-site or Virtual Training" },
            { title: "Partner & Client Certification" },
        ],
        industries: ["All Industries"],
    },
    {
        image: frame5,
        icon: frame5Icon,
        title: "Corrosion Monitoring & Probe Analysis",
        description:
            "SKPS provides advanced corrosion monitoring and probe analysis systems for continuous asset health assessment. Our engineered solutions help predict corrosion trends, optimize inhibitor performance, and extend structural integrity.",
        features: [
            { title: "VCI Performance Tracking" },
            { title: "Corrosion Monitoring" },
            { title: "Data Analysis" },
        ],
        industries: ["Oil & Gas", "Utilities", "Petrochemicals"],
    },
    {
        image: frame6,
        icon: frame6Icon,
        title: "After-Sale Technical Support",
        description:
            "Long-term partnership and lifecycle support to ensure your systems continue to perform optimally. Our technical experts are available to assist with troubleshooting and maintenance.",
        features: [
            {
                title: "Troubleshooting",
                description:
                    "Direct access to technical specialists for resolving product or application issues.",
            },
            {
                title: "Maintenance",
                description:
                    "Periodic or emergency maintenance services to extend solution lifespan.",
            },
            {
                title: "Re-application",
                description:
                    "Support for repeat applications or additional coverage.",
            },
        ],
        industries: ["All Industries"],
    },
    {
        image: frame7,
        icon: frame7Icon,
        title: "Procurement Support Services",
        description:
            "Sourcing assistance for non-core industrial materials to streamline your supply chain. Our procurement experts help you source the right materials at competitive prices.",
        features: [
            {
                title: "Outsourced Industrial Items",
                description:
                    "Efficient procurement of valves, fittings, spare parts, and specialty hardware.",
            },
        ],
        industries: ["All Industries"],
    },
];


export {
    services
}