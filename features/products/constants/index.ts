import frame from "@/public/Images/sectors/FRAME.svg"
import frame2 from "@/public/Images/sectors/FRAME2.svg"
import frame3 from "@/public/Images/sectors/FRAME3.svg"
import frame4 from "@/public/Images/sectors/FRAME4.svg"
import frame5 from "@/public/Images/sectors/FRAME5.svg"
import grid from "@/public/Images/services/grid.png"
import settings from "@/public/Images/services/settings.png"
import search from "@/public/Images/services/search.png"
import box from "@/public/Images/services/box.png"
import { ServiceSection } from "@/features/products/interfaces"
import cframe1 from "@/public/Images/services/cframe.png"
import cframe2 from "@/public/Images/services/cframe2.png"
import cframe3 from "@/public/Images/services/cframe3.png"
import cframe4 from "@/public/Images/services/cframe4.png"
import cframe5 from "@/public/Images/services/cframe5.png"
import cframe6 from "@/public/Images/services/cframe6.png"
import cframe7 from "@/public/Images/services/cframe7.png"
import cframe8 from "@/public/Images/services/cframe8.png"
import cframe9 from "@/public/Images/services/cframe9.png"
import cframe10 from "@/public/Images/services/cframe10.png"
import cframe11 from "@/public/Images/services/cframe11.png"
import cframe12 from "@/public/Images/services/cframe12.png"
import cframe13 from "@/public/Images/services/cframe13.png"
import cframe14 from "@/public/Images/services/cframe14.png"

export const sectors = [
    {
        id: 1,
        title: "Oil & Gas",
        src: frame,
    },
    {
        id: 2,
        title: "Utilities",
        src: frame2
    },
    {
        id: 3,
        title: "Infrastructure",
        src: frame3,
    },
    {
        id: 4,
        title: "Petrochemicals",
        src: frame4,
    },
    {
        id: 5,
        title: "Marine & Offshore",
        src: frame5,
    },
];

export const services: ServiceSection[] = [
    {
        icon: grid,
        sectionTitle: "Corrosion Prevention & Control",
        sectionDescription: "Comprehensive solutions to prevent and control corrosion",
        items: [
            {
                title: "VISCOTAQ™ - Viscous Elastic Corrosion Prevention Coatings",
                description: "Conformable and water-displacing coatings for long-term protection.",
                src: cframe1
            },
            {
                title: "Cathodic Protection",
                description:
                    "Supply of CP Materials for Pre-stressed concrete pipes Electrodes, Cables, Isolation and Surge Protection.",
                src: cframe2
            },
            {
                title: "PROTECTOLAST® Corrosion Inhibitors",
                description:
                    "Water-soluble powder designed specially to safeguard metal surfaces.",
                src: cframe3
            },
            {
                title: "DEVCON® - Cold Welding Polymeric Solutions",
                description:
                    "Metal-filled epoxy technology that allows for fast economical permanent repairs.",
                src: cframe4

            },
            {
                title: "HUMIDUR® - Anti Corrosion Epoxy Coating",
                description:
                    "Maintenance-free lifetime protection against corrosion.",
                src: cframe5
            }
        ]
    },
    {
        icon: settings,
        sectionTitle: "Engineered Composite Services & Maintenance",
        sectionDescription:
            "Advanced repair systems to restore integrity and extend service life",
        items: [
            {
                title: "Composite Engineering Services",
                description: "Industry-standard composite pipe repair system.",
                src: cframe6
            },
            {
                title: "RPR® - Efficient Coating Removal by Induction",
                description:
                    "The induction disbonder works by the principle of induction.",
                src: cframe7
            },
            {
                title: "SPITZE HP Clamp",
                description: "Quick-curing emergency leak repair solutions.",
                src: cframe8
            },
            {
                title: "Heat Shrinkable Wrap Around",
                description:
                    "Heat shrinkable wrap-around sleeve is designed for corrosion protection of girth weld joint buried steel.",
                src: cframe9
            }
        ]
    },
    {
        icon: search,
        sectionTitle: "Inspection & Safety Solutions",
        sectionDescription:
            "Tools to detect, assess, and monitor asset integrity",
        items: [
            {
                title:
                    "PROTECTOSEAL® - Vapor and Flame Control Equipment",
                description:
                    "Vents that are specifically designed to prevent storage tank damage.",
                src: cframe10
            },
            {
                title: "CYGNUS® - Ultrasonic Thickness Gauges",
                description:
                    "Designed for taking reliable thickness measurements in Zone 0 Atmospheres.",
                src: cframe14
            },
            {
                title: "PIPEOTECH®",
                description:
                    "Guaranteed leak-proof connection for the entire lifespan of your pipeline.",
                src: cframe11
            },
            {
                title: "Protectolast® - Corrosion Monitoring System",
                description:
                    "Monitoring System to assess the corrosion rate.",
                src: cframe12
            }
        ]
    },
    {
        icon: box,
        sectionTitle: "Packaging & Storage Products",
        sectionDescription:
            "Protect assets in transit or storage environments",
        items: [
            {
                title: "VCI Wrapping Materials",
                description:
                    "VCI wrapping material prevents metal corrosion by releasing protective vapor molecules.",
                src: cframe13
            }
        ]
    }
];
