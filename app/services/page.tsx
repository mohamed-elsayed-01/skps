import Cta from "@/components/cta/cta";
import Breadcrumb from "@/features/services/components/breadcrumb";
import CaseStudies from "@/features/services/components/case-studies";
import EngineeringApproach from "@/features/services/components/engineering-approach";
import RequestForThisServiceForm from "@/features/services/components/request-for-this-service-form";
import ServiceOverview from "@/features/services/components/service-overview";
import ServicesHero from "@/features/services/components/services-hero";



const ServicePage = () => {
    return (
        <div className="bg-white">
            <ServicesHero />
            <Breadcrumb />
            <ServiceOverview />
            <EngineeringApproach />
            <CaseStudies />
            <RequestForThisServiceForm />
            <div className="mt-[137px]">
                <Cta showButton />
            </div>
        </div>
    );
};

export default ServicePage;