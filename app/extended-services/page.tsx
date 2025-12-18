import Cta from "@/components/cta/cta";
import ExtendedServicesHero from "@/features/exteneded-services/components/extended-services-hero";
import ServicesList from "@/features/exteneded-services/components/services/services-list";

const ExtendedServicesPage = () => {
    return (
        <div>
            <ExtendedServicesHero />
            <ServicesList />
            <Cta showButton />
        </div>
    );
};

export default ExtendedServicesPage;
