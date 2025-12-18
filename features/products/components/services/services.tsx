import ServiceSection from "@/features/products/components/services/service-section";
import { services } from "../../constants";

const Services = () => {

    const RENDER_SERVICES = services.map((s) => (
        <ServiceSection service={s} key={s.sectionTitle} />
    ))

    return (
        <div className="bg-white">
            {RENDER_SERVICES}
        </div>
    )
};

export default Services;