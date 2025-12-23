import shield from "@/public/Images/service/key-benefits/shield.svg"
import treandLine from "@/public/Images/service/key-benefits/trend-line.svg"
import doc from "@/public/Images/service/key-benefits/doc.svg"
import pieChart from "@/public/Images/service/key-benefits/pie-chart.svg"
import caseStudyImg1 from "@/public/Images/service/case-study/case-study-1.png"
import caseStudyImg2 from "@/public/Images/service/case-study/case-study-2.png"
import caseStudyImg3 from "@/public/Images/service/case-study/case-study-3.png"
const keyBenefits = [
    {
        title: "Engineered Reliability",
        description:
            "Solutions designed to precise specifications ensuring optimal performance and longevity",
        icon: shield,
    },
    {
        title: "Advanced Analysis",
        description:
            "Comprehensive FEA and computational modeling for validated repair designs",
        icon: treandLine,
    },
    {
        title: "Compliance Assurance",
        description:
            "Designs that meet or exceed industry standards and regulatory requirements",
        icon: doc,
    },
    {
        title: "Minimized Downtime",
        description:
            "Optimized solutions that reduce installation time and operational disruption",
        icon: pieChart,
    },
];

const assessmentProcess = [
    "Detailed structural integrity analysis",
    "Advanced non-destructive testing",
    "Environmental condition assessment",
    "Operational load evaluation",
    "Regulatory compliance verification"
];

const certifications = [
    "ISO 9001:2015",
    "ASME PCC-2",
    "API 570",
    "ISO 24817",
    "NACE Certified Engineers"
];

const caseStudies = [
    {
        category: "Oil & Gas",
        title: "Offshore Platform Riser Repair",
        description:
            "Emergency composite repair solution for a critical riser with external corrosion, preventing production shutdown.",
        img: caseStudyImg1
    },
    {
        category: "Petrochemicals",
        title: "Pipeline Reinforcement Project",
        description:
            "Preventative reinforcement of aging pipeline infrastructure to extend service life by 20+ years.",
        img: caseStudyImg2
    },
    {
        category: "Utilities",
        title: "Water Treatment Facility Upgrade",
        description:
            "Structural strengthening of concrete supports using engineered composite systems.",
        img: caseStudyImg3
    }
];

export {
    keyBenefits,
    assessmentProcess,
    certifications,
    caseStudies
}