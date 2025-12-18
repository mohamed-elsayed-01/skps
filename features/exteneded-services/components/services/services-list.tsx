import ServicesListHeader from "@/features/exteneded-services/components/services/services-list-header";
import { services } from "@/features/exteneded-services/constants";
import ServiceCard from "./service-card";

const ServicesList = () => {

    const RENDER_SERVICES = services.map((s) => {
        return (
            <ServiceCard key={s.title} service={s} />
        )
    })

    return (
        <div className="max-w-7xl mx-auto w-full py-10">
            <ServicesListHeader />
            <div className="mt-[33.67px] space-y-[33.67px]">
                {RENDER_SERVICES}
            </div>
        </div>
    );
};

export default ServicesList;