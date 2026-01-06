import Cta from "@/components/cta/cta";
import Applications from "@/features/services/components/applications";
import Breadcrumb from "@/features/services/components/breadcrumb";
import CaseStudies from "@/features/services/components/case-studies";
import EngineeringApproach from "@/features/services/components/engineering-approach";
import Overview from "@/features/services/components/overview";
import Products from "@/features/services/components/products";
import RequestForThisServiceForm from "@/features/services/components/request-for-this-service-form";
import ServiceOverview from "@/features/services/components/service-overview";
import ServicesHero from "@/features/services/components/services-hero";
import services from "@/features/services/constants/details";

type Props = {
    params: Promise<{ id: string }>;
};

const ServicePage = async ({ params }: Props) => {
    const { id } = await params;
    console.log(id);

    const service = services.find((s) => s.id === Number(id));

    if (!service) {
        return <div>Service not found</div>;
    }

    return (
        <div className="bg-white">
            <ServicesHero header={service.header} subHeader={service.subHeader} heroImg={service.heroImage.src} />
            <Breadcrumb title={service.header} />
            <ServiceOverview serviceOverview={service.serviceOverview} keyBenefits={service.keyBenefits} />
            <EngineeringApproach header2={service.ourEngineeringApproach.header2} certifications={service.ourEngineeringApproach.certifications} leftPart={service.ourEngineeringApproach} thumbnail={service.ourEngineeringApproach.thumbnail} />
            {service.caseStudies && <CaseStudies caseStudies={service.caseStudies} />}
            {service.overview && <Overview items={service.overview} />}
            {service.products && <Products items={service.products} />}
            {service.applications && <Applications items={service.applications} />}
            <RequestForThisServiceForm />
            <div className="mt-[137px]">
                <Cta showButton />
            </div>
        </div>
    );
};

export default ServicePage;



